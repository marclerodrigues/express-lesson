const express = require("express");
const router = express.Router();

router.get("/", (request, response) => {
  response.render("projects/index", {
    projects: [{ name: "Carrinho de Compras" }, { name: "Shopping Cart" }],
  });
});

module.exports = router;