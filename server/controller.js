const placeList = require("./list.json")
let wishlist = []
let log = []
let wishlistId = 1
let logId = 1

module.exports = {

    getList: (req, res) => {
        res.status(200).send(placeList)
    },

    getWishlist: (req, res) => {
        res.status(200).send(wishlist)
    },

    addToWishlist: (req, res) => {
        const {index} = req.params
        const newWishlistItem = {
            id: wishlistId,
        }
        newWishlistItem.name = placeList[index].name

        wishlistId++
        // placeList.splice(index, 1)
        wishlist.push(newWishlistItem)
        res.status(200).send(wishlist)
    },

    removeFromWishlist: (req, res) => {
        const {index} = req.params

        // placeList.push(wishlist[index])
        wishlist.splice(index, 1)
        res.status(200).send(wishlist)
    },

    getLog: (req, res) => {
        res.status(200).send(log)
    },

    addToLog: (req, res) => {
        const {index} = req.params
        const newLogEntry = {
            id: logId,
        }
        newLogEntry.name = wishlist[index].name
        newLogEntry.visited = 1

        logId++
        wishlist.splice(index, 1)
        log.push(newLogEntry)
        res.status(200).send(log)
    },

    updateTimesVisited: (req, res) => {
        const {index} = req.params
        const {visited} = req.body
        log[index].visited = visited
        
        res.status(200).send(log)
    },

    removeFromLog: (req, res) => {
        const {index} = req.params
        // wishlist.push(log[index])  
        // This doesn't work like in removeFromWishlist. Might be the added visited property
        log.splice(index, 1)
        res.status(200).send(log)
    }
}