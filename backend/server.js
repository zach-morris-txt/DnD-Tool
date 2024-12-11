import {app} from './src/index.js';


app.get("/", (req, res) => {
    res.send("Hello World")
});