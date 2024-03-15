const movieService = require('../services/moviesService')


const createMovie = async (req, res) => {

    const { title, director, genre, releaseYear, description } = req.body
    const userId = req.user.id
    try {
        const movie = await movieService.createMovie({
            title,
            director,
            genre,
            releaseYear,
            description,
            userId
        })

        res.status(201).json({
            movie,
            message: "New Movie Added Successfully"
        })

    } catch (error) {

        res.status(500).json({ message: error.message })
    }
}

const updateMovie = async (req, res) => {
    let { id } = req.params
    const userId = req.user.id
    const updateData = req.body

    try {
        const movie = await movieService.updateMovie(id, userId, updateData)

        res.status(200).json(movie)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

let deleteMovie = async (req, res) => {
    let { id } = req.params
    const userId = req.user.id

    try {
        const movie = await movieService.updateDelete(id, userId)

        res.status(204).json({
            movie,
            message: "Deleted Successfully"

        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


let movieDetails = async (req, res) => {
    let { id } = req.params


    try {
        const details = await movieService.movieDetails(id)

        res.status(200).json({
            details
        })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

const listMovies = async (req, res) => {
    try {
        const filters = req.query;
        const movies = await movieService.listMovies(filters);
        res.status(200).json({ movies });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}



module.exports = { createMovie, updateMovie, deleteMovie, movieDetails, listMovies }