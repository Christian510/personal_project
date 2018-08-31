import React from 'react'
import { Link } from 'react-router-dom'

class Blue extends React.Component {
    render() {
        return (
            <div>
                <header><h1>Feeling Blue</h1></header>
                <Link to={'./User_Main'}><button><h1>Home</h1></button></Link>
            </div>
        )
    }
}
export default Blue