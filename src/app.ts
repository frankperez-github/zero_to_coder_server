import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import https from 'https';
import fs from 'fs';
import { connect } from './database';
import userRoutes from './routes/Users';
import testRoutes from './routes/Tests';
import graphRoutes from './routes/Graph';
import questionRoutes from './routes/Questions';
import { seedQuestions } from './controllers/Questions';

dotenv.config();
const app = express();
app.use(express.json());

app.use(cors({
    origin: ['http://localhost:3000', 'https://zero-to-coder-three.vercel.app'],
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

// Routes
app.use('/api/users', userRoutes);
app.use('/api/tests', testRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/graph', graphRoutes);


// Sync Database & Start Server
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === "production")
{
    (async () => {
    await connect();
    
    seedQuestions()

    const httpsServer = https.createServer({
        key: fs.readFileSync(process.env.SSL_KEY_PATH!),
        cert: fs.readFileSync(process.env.SSL_CERT_PATH!),
    }, app);

    httpsServer.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    }).on('error', (err:any) => {
        console.error('Error starting the server:', err);
    })})();
}
else
{
    (async () => {
        await connect();
        seedQuestions()
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })();
}
