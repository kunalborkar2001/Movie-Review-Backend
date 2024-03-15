const express = require("express")
const router = express.Router()
const authenticateToken  = require("../middleware/authenticateToken")
const moviesController = require("../controllers/moviesController")



//CREATE
router.post("/" , authenticateToken, moviesController.createMovie)


//UPDATE
router.put("/:id" , authenticateToken, moviesController.updateMovie)


//DELETE
router.delete("/:id", authenticateToken, moviesController.deleteMovie)


// List movies by genre
router.get("/", authenticateToken, moviesController.listMovies);


//Details
router.get("/:id", authenticateToken, moviesController.movieDetails)




module.exports = router