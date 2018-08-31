import React, { Component } from 'react';
import { updateUser } from "./../../ducks/users";
import { connect } from "react-redux";
import axios from 'axios'
import {Link} from 'react-router-dom'

class User_Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {}
        }
    }
    async componentDidMount() {
        let userData = await axios.get('/api/user-data');
        this.props.updateUser(userData.data)
    }

    render() {
        let { user } = this.props
        console.log(this.props)
        return (
            <div>
                <h1>Hey You Have Made It Here! Welcome!</h1>
                <hr /><hr /><hr />
                
                <div>
                  <Link to={'./Blue'}><button>Feeling Blue</button></Link>
                    <Link to={'./Clouds'}><button>The Clouds Are Rolling In</button></Link>
                    <Link to={'./Crisis'}><button>Crisis</button></Link>
                </div>
                <a href='http://localhost:3005/logout'>
                    <button>Logout</button>
                </a>

            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        user: state.user
    }
}


export default connect(mapStateToProps, { updateUser })(User_Main);