const Movies = require("../models/Movies")


const createMovie = async (movie) => {

    try {
        const newMovie = await Movies.create(movie)

        return newMovie
    } catch (error) {
        throw error
    }

}


const updateMovie = async (movieId, userId, updateData) => {
    try {
        const update = await Movies.findOneAndUpdate(
            { _id: movieId, userId: userId },
            { $set: updateData },
            { new: true }
        )

        if (!update) {
            throw new Error("Data not updated")
        }
        return update

    } catch (error) {
        throw error
    }
}


const updateDelete = async (movieId, userId) => {
    try {
        let success = await Movies.findByIdAndDelete(
            { _id: movieId, userId: userId },
        )

        if (!success) throw new Error("Unable to delete")

        return success

    } catch (error) {
        throw error
    }
}

const movieDetails = async (id) => {
    try {
        let details = await Movies.findById(id)

        if (!details) throw new Error("Movie not found")

        return details
    } catch (error) {
        throw error
    }
}


const listMovies = async (filters) => {
    try {
        const movies = await Movies.find(filters);
        return movies;
    } catch (error) {
        throw error;
    }
}



module.exports = { createMovie, updateMovie, updateDelete, movieDetails, listMovies }