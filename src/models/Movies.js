const mongoose = require("mongoose")

const MoviesSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique : true
        },
        director: {
            type: String,
            required: true
        },
        genre: {
            type: String,
            required: true
        },
        releaseYear: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            required : true,
            ref : "User"
        }

    },
    {
        timestamps : true
    }
)

const Movies = mongoose.model("Movies" , MoviesSchema)

module.exports = Movies

