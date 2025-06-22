import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import { v4 as uuidv4 } from 'uuid';

const TEMP_DIR = '/shared-volume';
if (!fs.existsSync(TEMP_DIR)) fs.mkdirSync(TEMP_DIR);

export const executePython = async (req: Request, res: Response) => {
    const userCode = req.body.code;
    if (!userCode) {
        res.status(400).json({ error: 'No code provided.' });
        return;
    }

    try {
        const result = await runPythonCode(userCode);
        if (result.success) {
            res.status(200).json(result.output);
        } else {
            res.status(400).json(result.output);
        }
    } catch (err: any) {
        res.status(500).json({ error: 'Internal server error.', details: err.message });
    }
};

export const runPythonCode = (code: string): Promise<{ success: boolean; output: any }> => {
    return new Promise((resolve) => {
        const fileId = uuidv4();
        const tempPath = path.join(TEMP_DIR, `${fileId}.py`);
        const containerFile = path.join(TEMP_DIR, 'user_script.py');

        try {
            fs.writeFileSync(tempPath, code);
            fs.copyFileSync(tempPath, path.join(TEMP_DIR, 'user_script.py'));

            const dockerCmd = `docker run --rm -v "code-storage:/app/code" python-sandbox`;
            
            exec(dockerCmd, (error, stdout, stderr) => {
                // Clean up both files after execution
                fs.unlink(containerFile, () => {});
                fs.unlink(tempPath, () => {});

                if (error) {
                    resolve({
                        success: false,
                        output: {
                            stdout,
                            stderr: error.killed ? 'Execution timed out.' : stderr,
                            error: error.message
                        }
                    });
                } else {
                    resolve({
                        success: true,
                        output: { stdout, stderr }
                    });
                }
            });
        } catch (err: any) {
            // Clean up temp files in case of exception too
            fs.unlink(containerFile, () => {});
            fs.unlink(tempPath, () => {});

            resolve({
                success: false,
                output: { stdout: null, stderr: 'Internal server error.', details: err.message }
            });
        }
    });
};
