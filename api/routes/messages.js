const controllers = require("../controllers");
const router = require("express").Router();
const { auth } = require("../utils");

router.get("/", controllers.messages.get.getall);

// router.get('/OneArticle/:id', auth(), controllers.articles.get.getone);
router.get("/:id", auth(), controllers.messages.get.getone);

router.post("/", auth(), controllers.messages.post);

router.put("/:id", auth(), controllers.messages.put);

router.delete("/:id", auth(), controllers.messages.delete);

module.exports = router;
