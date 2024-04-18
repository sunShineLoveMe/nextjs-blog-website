import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

interface ConnectionProps {
    isConnected: number;
}

const connection: ConnectionProps = {
    isConnected: 0
}

export const connectToDb = async () => {
    try {
        if(connection.isConnected) {
            console.log('Using existing connection');
            return;
        }
        const db = await mongoose.connect(process.env.MONGO || '')
        connection.isConnected = db.connections[0].readyState;
    } catch (error) {
        console.log('Error connecting to db', error);
        throw new Error('Error connecting to db');
    }
}