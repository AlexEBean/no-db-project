import React, { Component } from 'react'
import Edit from "./Edit"
import axios from "axios"


class Log extends Component {
    constructor(){
        super()
        this.state = {
            displayLog: []
        }
    }

    componentDidMount() {
        axios.get("/api/log")
        .then((res) => {
          this.setState({
            displayLog: res.data
          })
        })
        .catch((err) => console.log(err))
      }

    updateTimesVisited(index, visited){
        axios.put(`/api/log/${index}`, {visited})
        .then((res) => {
          this.setState({
            displayLog: res.data
          })
        })
        .catch((err) => console.log(err))
    }    

    removeFromLog(index){
        axios.delete(`/api/log/${index}`)
        .then((res) => {
          this.setState({
            displayLog: res.data
          })
        })
        .catch((err) => console.log(err))
    }    
      
    render() {
        let mappedLog = []
        mappedLog = this.state.displayLog.map((log) => 
            <Edit
            key = {log.id}
            log = {log}
            updateTimesVisited = {this.updateTimesVisited}
            removeFromLog = {this.removeFromLog}
            />
        )
        
        return (
                <ul className = "list"
                >
                    {mappedLog}
                </ul>    
        )
    }
}

export default Log
