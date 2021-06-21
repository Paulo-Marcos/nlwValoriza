import express from "express"

const app = express()

app.get("/teste", (request, response) => {
  response.send("Olá Paulo Marcos")
})

app.listen(3000, () => console.log("Server is running"))