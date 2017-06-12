import * as path from "path";
import * as express from "express";

const app = express();

app.use(express.static(path.join(__dirname, "..")));

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(8080, function() {
    console.log("Server is running");
});
