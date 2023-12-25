import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("home");
});

router.get("/about", (req, res) => {
    res.render("about");
})

router.get("/skills", (req, res) => {
    res.render("skills");
})

router.get("/projects", (req, res) => {
    res.render("projects");
})

router.get("/contact", (req, res) => {
    res.render("contact");
})

export default router;