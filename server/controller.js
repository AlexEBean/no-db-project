const list = require("./list.json")
let wishlist = []
let log = []
let listId = 15
let wishlistId = 1
let logId = 1

module.exports = {

    getList: (req, res) => {
        res.status(200).send(list)
    },

    addToList: (req, res) => {
        const {name} = req.body
        const newListItem = {
            id: listId
        }
        newListItem.name = name
        listId++

        list.push(newListItem)
        res.status(200).send(list)
    },

    removeFromList: (req, res) => {
        const {index} = req.params

        list.splice(index, 1)
        res.status(200).send(list)
    },

    getWishlist: (req, res) => {
        res.status(200).send(wishlist)
    },

    addToWishlist: (req, res) => {
        const {index} = req.params
        const newWishlistItem = {
            id: wishlistId
        }
        
        newWishlistItem.name = list[index].name

        wishlistId++
        list.splice(index, 1)
        wishlist.push(newWishlistItem)
        res.status(200).send(wishlist)
    },

    removeFromWishlist: (req, res) => {
        const {index} = req.params

        list.push(wishlist[index])
        wishlist.splice(index, 1)
        res.status(200).send(wishlist)
    },

    getLog: (req, res) => {
        res.status(200).send(log)
    },

    addToLog: (req, res) => {
        const {index} = req.params
        const newLogEntry = {
            id: logId
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
        wishlist.push(log[index])  
        log.splice(index, 1)
        res.status(200).send(log)
    }
}