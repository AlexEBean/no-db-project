import React, { Component } from 'react'
import Add from "./Add"
import axios from "axios"


class List extends Component {
    constructor(){
        super()
        this.state = {
            displayList: [],
            wishlist: [],
            input: "",
            toggleEdit: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.toggleEdit = this.toggleEdit.bind(this)
    }

    handleChange (event) {
      this.setState({ input: event.target.value })
    }
  
    toggleEdit () {
      this.setState({ toggleEdit: !this.state.toggleEdit });
    }

    componentDidMount() {
        axios.get("/api/list")
        .then((res) => { 
          this.setState({
            displayList: res.data
          })
        })
        .catch((err) => console.log(err))
      }

    addToList(name) {
      axios.post(`/api/list/`, {name})
      .then((res) => {
        this.setState({
          displayList: res.data
        })
      })
      .catch((err) => console.log(err))
    }

    removeFromList(index){
      axios.delete(`/api/list/${index}`)
      .then((res) => {
        this.setState({
          displayList: res.data
        })
      })
      .catch((err) => console.log(err))
  }

    addToWishlist(index) {
        axios.post(`/api/wishlist/${index}`)
        .then((res) => {
          this.setState({
            wishlist: res.data
          })
        })
        .catch((err) => console.log(err))
    }

    render() {
        let mappedList = []
        const {input} = this.state
        mappedList = this.state.displayList.map((placeList, index) => 
            <Add
            key = {placeList.id}
            placeList = {placeList}
            removeFromList = {this.removeFromList}
            addToWishlist = {this.addToWishlist}
            index = {index}
            />
        )

        return (
                
          <div className = "column">
            {this.state.toggleEdit ? (
              <input
                className = "listInputBar" 
                value = {input}
                placeholder = "Add a place!"
                onChange = {this.handleChange}
              />
              ) : null
            }

            {this.state.toggleEdit ? (
              <button 
                className ="buttons"
                id = "saveButton"
                onClick = { () => {
                  this.addToList(input)
                  this.toggleEdit()
                }}
              >
                Save
              </button>)
            : (<button
                className ="buttons"
                id = "addButton"
                onClick = { () => {
                  this.toggleEdit()
                }}
                >
                Add to Where You Can Go
            </button>
            )}
            <h1 className = "title"
            > 
              Where You Can Go </h1>
            <ul className = "list"
                >
                  {mappedList}
                </ul>
          </div>
        )
    }
}

export default List
