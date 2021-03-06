import React, { Component } from 'react';
import './Info_Entry.css'
import axios from 'axios'

class Info_Entry extends Component {
    constructor() {
        super();
        this.state = {
            newData: {
                friend1: '',
                email1: '',
                phone1: '',
                friend2: '',
                email2: '',
                phone2: '',
                friend3: '',
                email3: '',
                phone3: '',
                friend4: '',
                email4: '',
                phone4: '',
                doctor: '',
                doctor_email: '',
                doctor_phone: '',
                therapist: '',
                therapist_email: '',
                therapist_phone: ''
            },
            contacts: {
                userFriend: [],
                userDoctor: [],
            },
            returned: false
        }

    }

    delete(id) {
        axios.delete(`/api/delete/${id}`)
    }

    deleteFriend(id) {
        axios.delete(`/api/deleteFriend/${id}`)
    }

    componentDidMount() {
        axios.get('/api/userSession')
            .then(res => {
                console.log(res.data)
            })
        this.getContact()
    }

    saveInfo() {
        axios.post('/api/saveInfo', this.state.newData)
            .then(() => this.props.history.push('/User_Main'))
    }

    getContact() {
        axios.get('/api/getContact')
            .then(res => {
                console.log(res.data)
                this.setState({
                    contacts: res.data,
                    returned: true
                })
            })
    }

    //////////////// FRIEND1 STUFF
    handleFriendName(event) {
        this.setState({
            friend1: event.target.value
        })
    }
    handleFriendEmail(event) {
        this.setState({
            email1: event.target.value
        })
    }

    handleFriendPhone(event) {
        this.setState({
            phone1: event.target.value
        })
    }
    //////////////FRIEND2 STUFF
    handleFriendName2(event) {
        this.setState({
            friend2: event.target.value
        })
    }

    handleFriendEmail2(event) {
        this.setState({
            email2: event.target.value
        })
    }

    handleFriendPhone2(event) {
        this.setState({
            phone2: event.target.value
        })
    }
    //////////////FRIEND3 STUFF
    handleFriendName3(event) {
        this.setState({
            friend3: event.target.value
        })
    }

    handleFriendEmail3(event) {
        this.setState({
            email3: event.target.value
        })
    }

    handleFriendPhone3(event) {
        this.setState({
            phone3: event.target.value
        })
    }
    ///////////////FRIEND4 STUFF   
    handleFriendName4(event) {
        this.setState({
            friend4: event.target.value
        })
    }

    handleFriendEmail4(event) {
        this.setState({
            email4: event.target.value
        })
    }

    handleFriendPhone4(event) {
        this.setState({
            phone4: event.target.value
        })
    }
    //////////////// DOCTOR STUFF    
    handleDoctorName(event) {
        this.setState({
            doctor: event.target.value
        })
    }

    handleDoctorEmail(event) {
        this.setState({
            doctor_email: event.target.value
        })
    }

    handleDoctorPhone(event) {
        this.setState({
            doctor_phone: event.target.value
        })
    }
    ///////////////// THERAPIST STUFF    
    handleTherapistName(event) {
        this.setState({
            therapist: event.target.value
        })
    }

    handleTherapistEmail(event) {
        this.setState({
            therapist_email: event.target.value
        })
    }

    handleTherapistPhone(event) {
        this.setState({
            therapist_phone: event.target.value
        })
    }
    /////////////////
    render() {
        console.log(this.state)
        const {
            returned,
            contacts
        } = this.state

        return (

            <div>
                <h1> Lets Set Up Your Support System</h1>

                <h2>Your Friend</h2>   <button>Edit</button>
                <button onClick={() => this.deleteFriend(contacts.userFriend[0].friend_id)}>Delete</button>
                <input
                    placeholder={contacts.userFriend[0] ? contacts.userFriend[0].friend_name : ''}
                    onChange={(event) => this.handleFriendName(event)}
                />
                <h4>Their Email</h4>
                <input
                    placeholder={contacts.userFriend[0] ? contacts.userFriend[0].email : ''}
                    onChange={(event) => this.handleFriendEmail(event)}
                />
                <h4>Their Phone Number</h4>
                <input
                    placeholder={contacts.userFriend[0] ? contacts.userFriend[0].phone : ''}
                    onChange={(event) => this.handleFriendPhone(event)}
                />


                <h2>Another Friend</h2> <button>Edit</button>
                <button onClick={() => this.deleteFriend(contacts.userFriend[1].friend_id)}>Delete</button>
                <input
                    placeholder={contacts.userFriend[1] ? contacts.userFriend[1].friend_name : ''}
                    onChange={(event) => this.handleFriendName2(event)}
                />
                <h4>Their Email</h4>
                <input
                    placeholder={contacts.userFriend[1] ? contacts.userFriend[1].email : ''}
                    onChange={(event) => this.handleFriendEmail2(event)}
                />
                <h4>Their Phone Number</h4>
                <input
                    placeholder={contacts.userFriend[1] ? contacts.userFriend[1].phone : ''}
                    onChange={(event) => this.handleFriendPhone2(event)}
                />


                <h2>Another Friend</h2> <button>Edit</button>
                <button onClick={() => this.deleteFriend(contacts.userFriend[2].friend_id)}>Delete</button>
                <input
                    placeholder={contacts.userFriend[2] ? contacts.userFriend[2].friend_name : ''}
                    onChange={(event) => this.handleFriendName3(event)}
                />
                <h4>Their Email</h4>
                <input
                    placeholder={contacts.userFriend[2] ? contacts.userFriend[2].email : ''}
                    onChange={(event) => this.handleFriendEmail3(event)}
                />
                <h4>Their Phone Number</h4>
                <input
                    placeholder={contacts.userFriend[2] ? contacts.userFriend[2].phone : ''}
                    onChange={(event) => this.handleFriendPhone3(event)}
                />


                <h2>Another Friend</h2> <button>Edit</button>
                <button onClick={() => this.deleteFriend(contacts.userFriend[3].friend_id)}>Delete</button>
                <input
                    placeholder={contacts.userFriend[3] ? contacts.userFriend[3].friend_name : ''}
                    onChange={(event) => this.handleFriendName4(event)}
                />
                <h4>Their Email</h4>
                <input
                    placeholder={contacts.userFriend[3] ? contacts.userFriend[3].email : ''}
                    onChange={(event) => this.handleFriendEmail4(event)}
                />
                <h4>Their Phone Number</h4>
                <input
                    placeholder={contacts.userFriend[3] ? contacts.userFriend[3].phone : ''}
                    onChange={(event) => this.handleFriendPhone4(event)}
                />


                <h2>Your Doctor</h2> <button>Edit</button>
                <button onClick={() => this.delete(contacts.userDoctor[0].doctor_id)} >Delete</button>
                <input
                    placeholder={contacts.userDoctor[0] ? contacts.userDoctor[0].doctor_name : ''}
                    onChange={(event) => this.handleDoctorName(event)}
                />
                <h4>Their Email</h4>
                <input
                    placeholder={contacts.userDoctor[0] ? contacts.userDoctor[0].email : ''}
                    onChange={(event) => this.handleDoctorEmail(event)}
                />
                <h4>Their Phone Number</h4>
                <input
                    placeholder={contacts.userDoctor[0] ? contacts.userDoctor[0].phone : ''}
                    onChange={(event) => this.handleDoctorPhone(event)}
                />


                <h2>Your Therapist</h2> <button>Edit</button>
                <button onClick={() => this.delete(contacts.userDoctor[1].doctor_id)}>Delete</button>
                <input
                    placeholder={contacts.userDoctor[1] ? contacts.userDoctor[1].doctor_name : ''}
                    onChange={(event) => this.handleTherapistName(event)}
                />
                <h4>Their Email</h4>
                <input
                    placeholder={contacts.userDoctor[1] ? contacts.userDoctor[1].email : ''}
                    onChange={(event) => this.handleTherapistEmail(event)}
                />
                <h4>Their Phone Number</h4>
                <input
                    placeholder={contacts.userDoctor[1] ? contacts.userDoctor[1].phone : ''}
                    onChange={(event) => this.handleTherapistPhone(event)}
                />

                <button onClick={() => this.saveInfo()}>Save</button>

            </div>

        )
    }
}

export default Info_Entry

