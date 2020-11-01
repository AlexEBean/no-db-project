const express = require("express")

const  app = express()
const  ctrl = require("./controller.js")
const  port = 4304;

app.use(express.json());

app.get("/api/list", ctrl.getList)

app.get("/api/wishlist", ctrl.getWishlist)
app.post("/api/wishlist/:index", ctrl.addToWishlist)
app.delete("/api/wishlist/:index", ctrl.removeFromWishlist)

app.get("/api/log", ctrl.getLog)
app.post("/api/log/:index", ctrl.addToLog)
app.put("/api/log/:index", ctrl.updateTimesVisited)
app.delete("/api/log/:index", ctrl.removeFromLog)


app.listen(port, () => console.log(`Listening on port ${port}`))