import express from 'express';
import dotenv from 'dotenv';
import {apiRoute} from './src/routes/api.js';
import {authRoute} from './src/routes/auth.js';
import {migrateRoute} from './src/routes/migrate.js';
import {loggedIn} from './src/middleware/auth-middleware.js';

const app = express();
dotenv.config();
const port = process.env.PORT;


// Middleware to parse JSON bodies
app.use(express.json());

// Use routes
app.use('/api', loggedIn, apiRoute);
app.use('/auth', authRoute);
app.use('/migrate', migrateRoute);

//App Endpoint Handling
app.get("/", (req, res) => {
    res.status(200).json({
        "status": 200,
        "message": "All ok"
    });
})

app.use((req, res, next) => {
    res.status(404).json({
        "statusCode": 404,
        "message": "Endpoint not found"
    });
})

app.use((err, req, res, next) => {
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    res.status(statusCode);
    res.json({
        message: err.message,
        stack: err.stack,
    });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});