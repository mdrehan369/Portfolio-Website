import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
import router from './web.js';

const app = express();
const port = process.env.PORT || 3000;
const __dirname = dirname(fileURLToPath(import.meta.url));


app.use(express.json());
app.use(express.static(path.join(__dirname, "./public")));


app.set("views", "templates");
app.set("view engine", "ejs");

app.use(router);

app.listen(3000, () => {
    console.log(`Running on port http://localhost:${port}`);
});
