import mongoose from "mongoose";
const connection_string = process.env.CONNECTION_STRING || 
"mongodb+srv://rushilrp2009:mYXVyCdHybI8J7Vt@cluster0.axrdoi7.mongodb.net/stackdot-task?retryWrites=true&w=majority&appName=Cluster0";


async function connectDB() {
    await mongoose.connect(connection_string, {
        timeoutMS: 10000
    }).then((connection) => {
        console.log('Connected to db successfully');
    }).catch((err) => {
        console.log('Error connecting to db : ', err);
    });
}


export default connectDB;
