import express from "express";

const app = express();

const port = 3000

app.set('view engine', "pug");
app.set('views', __dirname + "/views");
app.use('/public', express.static(__dirname + "/public"));

app.get('/', (req,res) => res.render("home"));

const handleListen = () => console.log(`Listening on port ${port}`)

app.listen(port, handleListen);