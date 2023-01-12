import express from "express"
import postRoutes from "./routes/posts.js"

const app = express()

app.use(express.json())
app.use("/api/posts", postRoutes)

// http://localhost:8800/test
// 網址有出現代表有在運作
// app.get('/test', (req, res) => {
//   res.json('It works')
// })

app.listen(8800, () => {
  console.log("Connected!")
})