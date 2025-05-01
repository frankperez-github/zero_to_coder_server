    import 'dotenv/config';
    import mysql from 'mysql2/promise';
    import { Sequelize } from 'sequelize';
import { seedQuestions } from '../controllers/Questions';
import User from '../models/User';

    const MYSQL_URI = `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`;

    export const sequelize = new Sequelize(MYSQL_URI, {
    dialect: 'mysql',
    protocol: 'mysql',
    logging: false,
    });

    export const connection = {
    isConnected: 0,
    sequelize: null as Sequelize | null,
    };

    const databaseName = process.env.DB_NAME;

    export const createDatabaseIfNotExists = async () => {
    const mysqlConfig = {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    };

    try {
        const connection = await mysql.createConnection(mysqlConfig);
        await connection.query(`CREATE DATABASE IF NOT EXISTS \`${databaseName}\`;`);
        console.log(`Database "${databaseName}" verified/created.`);
        await connection.end();
    } catch (error) {
        console.error("Error creating/verifying the database:", error);
        throw error;
    }
    };

    export const connect = async () => {
        if (connection.isConnected) {
            return connection.sequelize;
        }

        if (!MYSQL_URI || !databaseName) {
            throw new Error(
            'Please define the DB_HOST and DB_NAME environment variables inside .env'
            );
        }

        await createDatabaseIfNotExists();

        try {
            await sequelize.authenticate();
            console.log('Connected to MySQL');

            await sequelize.sync({ alter: true });

            console.log('Models synchronized');
            connection.isConnected = 1;
            connection.sequelize = sequelize;
            return sequelize;
        } catch (error) {
            console.error('Error connecting to MySQL:', error);
            throw new Error('Failed to connect to the MySQL database');
        }
        };

        export const disconnect = async () => {
        if (connection.isConnected === 0 || !connection.sequelize) return;

        try {
            await sequelize.close();
            console.log('Disconnected from MySQL');
        } catch (error) {
            console.error('Error disconnecting from MySQL:', error);
        }

        connection.isConnected = 0;
        connection.sequelize = null;
    };