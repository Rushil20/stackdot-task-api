import http from 'http';
import { config} from 'dotenv';
import app from './src/app.js';
config();
const port = process.env.PORT || 3250;

const server = http.createServer(app);

server.listen(port, () => {
    console.log('Server running on port : ', port);
});