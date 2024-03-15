require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const app = express()

const authRoute = require("./routes/authRoutes")
const moviesRoute = require("./routes/moviesRoute")

app.use(cors())
app.use(express.json())

app.use("/api", authRoute)
app.use("/api/movies", moviesRoute)


const PORT = process.env.PORT || 5000
const MONGODB_URI = process.env.MONGODB_URI


app.get("/", (req, res) => {
    res.send("AAPN AAYA")
})

mongoose
    .connect(MONGODB_URI)
    .then(() => {
        console.log("Connected To MongoDB");
    })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
