import React, { Component } from 'react';
import './chat.css';
// import EmbeddedSlackReact from 'embedded-slack-react'; 

class Chat extends Component {
    constructor() {
        super();

        this.state = {
            value: '',
            username: '',
            messages: [],
            message: ''
        }
        this.sendMessage = this.sendMessage.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        this.setState({ username: this.props.user_display_name })
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    sendMessage(mess) {
        // event.preventDefault();
        if (this.state.value !== '') {
            // axios.post('/message/send',
            this.setState ({
                username: this.state.username,
            })
            this.messages.push(mess)
                // .then(response => {
                //     console.log(response)
                // })
                // .catch(error => {
                //     console.log(error)
                // })
            this.setState({ value: '' })
        }
        else {
            // console.log('enter message')
        }
    }

    render() {

        const messages = this.state.messages;
        const message = messages.map(i => {
            return (
                <div className="messagebox">
                    <div className="singlemessage">
                        {message}
                    </div>
                    <div className="infoholder" key={i.id}>
                    <div className="username">
                        {i.username}
                    </div>
                    <div className="message">
                        {i.message}
                    </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="messagingcontainer">
                <div className="previous-messages">{message}</div>
                <div className="textarea">
                <div className="intro">Welcome, {this.state.username}</div>
                <div className="subintro">Begin chatting here.</div>
                </div>
                <div className="formbox">
                    <input type="text" value={this.state.value}
                      onChange={this.handleChange} autoFocus='true'></input><button  onSubmit={e => this.sendMessage(e.target.value)}>Submit</button>
                </div>
                {/* <EmbeddedSlackReact channel="https://dndevmtn.slack.com/messages/C7EG6DVEV" token="https://dndevmtn.slack.com/messages/C7EG6DVEV" /> */}
            </div>
        )
    }
}

export default Chat;