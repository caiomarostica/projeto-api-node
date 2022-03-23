const express = require("express");
const response = require("express/lib/response")
const router = express.Router();

const controller = require("../controllers/moviesController");

router.get("/", controller.home);

// DEMANDA: visualizar todas as notas cadastradas
router.get("/all", controller.getAll);

// DEMANDA: cadastrar nota
router.post("/create", controller.createMoovie);

// DEMANDA: atualizar uma nota
router.patch("/update/:id", controller.updateMoovieById);

// DEMANDA: excluir uma nota
router.delete("/delete/:id", controller.deleteMoovieById);

module.exports = router;
module.exports = controller;
