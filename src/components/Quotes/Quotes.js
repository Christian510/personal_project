import React, { Component } from 'react'
import axios from 'axios'

class Quotes extends Component {
    constructor() {
        super()

        this.state = {
            chuckfact: ''

        }
    }
    componentDidMount() {
       this.getJoke()
    }
    getJoke(){
        axios.get('https://api.chucknorris.io/jokes/random')
        .then(res => {
            console.log(res.data)
            this.setState({ chuckfact: res.data })
        })
    }
    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={()=> this.getJoke()}>Get A New Joke</button>
                <p>
                    {this.state.chuckfact.value}
                </p>
            </div>
        )
    }

}

export default Quotes



