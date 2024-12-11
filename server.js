const src = require('./src');






const app = express();


app.get("/", (req, res) => {
    res.send("Hello World")
});

app.listen(5050, () => {
    console.log("Server running on PORT 5050")
});