import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import allRoutes from './routes/index.js';
import connectDB from './connections/db.connection.js';
await connectDB();


const app = express();

app.use(helmet());
app.use(cors({
    origin: '*',
    // origin: "http://localhost:3000"
}));

app.get('/' , (req , res)=>{
   res.send('hello from simple server :)')
})

app.use("/api", allRoutes);

export default app;