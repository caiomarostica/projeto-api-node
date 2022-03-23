const response = require("express/lib/response");

// importar os dados através do arquivo json
const movies = require("../model/movies.json");
const axios = request("axios");

// configurar uma rota padrão de apresentação da API (opcional)
const home = (request, response) => {
    res.status(200).send(
        {
            "message": "Olá pessoa, seja bem vinda ao Teraflix!"
        }
    )
};

// retornar todos os filmes
const getAll = (req, res) => {
    response.status(200).send(movies);
};

const getGhiblimovies

const createMoovie = async (request, response) => {
    // acessar os dados enviados na requisição
    let requestedTitle = request.body.title;
    let requestedGenre = request.body.genre;

    if (requestedTitle && requestedGenre) {
        let newMovie = {
            "id": Math.random().toString(32).substr(2, 6),
            "addedAt": new Date(),
            "title": requestedTitle,
            "genre": requestedGenre
        };


        console.log('NOVO FILME', newMovie)

        movies.push(newMovie);

        // enviar uma resposta
        response.status(200).send({
            "mensagem": "Filme adicionado com sucesso",
            movies
        });
    } else {
        response.status(404).send({ "message": "Não foi possível cadastrar um novo filme. Por favor, insira todas as informações necessárias" })
    }

};

// deletar um filme
const deleteMoovieById = async (req, res) => {
    const requestedId = req.params.id;
    const filteredMovie = movies.find(movie => movie.id == requestedId);

    const index = movies.indexOf(filteredMovie);

    movies.splice(index, 1);

    res.status(200).json([{
        "mensagem": "Filmes deletado com sucesso",
        movies
    }]);
};

module.exports = {
    home,
    getAll,
    createMoovie,
};

