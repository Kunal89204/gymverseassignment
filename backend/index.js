const app = require("./app")
const PORT = 8000
const connectDB = require("./src/db/connectDB")
const userRoutes = require("./src/routes/user.routes")
connectDB();


app.use('/', userRoutes)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})