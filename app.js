import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));


app.set("views", "templates");
app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/about", (req, res) => {
    res.render("about");
})

app.get("/skills", (req, res) => {
    res.render("skills");
})

app.get("/projects", (req, res) => {
    res.render("projects");
})

app.get("/contact", (req, res) => {
    res.render("contact");
})

app.listen(3000, () => {
    console.log(`Running on port http://localhost:${port}`);
})
