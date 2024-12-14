import dotenv from 'dotenv';

dotenv.config()

const PORT = process.env.PORT;
const SERVER_URL = process.env.SERVER_URL;
const CLIENT_URL = process.env.CLIENT_URL;
const SECRET = process.env.SECRET;

export {
    PORT, SERVER_URL, CLIENT_URL, SECRET
}