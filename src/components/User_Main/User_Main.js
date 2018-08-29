import React, { Component } from 'react';
import { updateUser } from "./../../ducks/users";
import { connect } from "react-redux";
import axios from 'axios'

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
                <h1>You have landed</h1>
                <hr /><hr /><hr />
                {
                    user.user_name ? (
                        <div>
                            
                        </div>
                    )
                        : (<p>Please Log In</p>)
                }
                <div>
                    <button>Feeling Blue</button>
                    <button>The Clouds Are Rolling In</button>
                    <button>Crisis!</button>
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