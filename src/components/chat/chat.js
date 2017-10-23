import React, { Component } from 'react';
import './chat.css';
import {connect} from 'react-redux';
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
        // this.setState({ username: this.props.user.user_firstname })
    }

    handleChange(event) {
        this.setState({ value: event});
    }

    sendMessage() {
        if (this.value !== '') {
            console.log(this.state.value)
            this.state.messages.push(this.state.value)
            console.log(this.state.messages)
            this.setState({
                value: ''
            })
        }
        else {
            // console.log('enter message')
        }
    }

    render() {

        const messages = this.state.messages;
        const messageList = this.state.messages.map((e,i) => {
            return (
                <div className="messagebox" key={i}>
                    <div className="username">
                        {this.props.user.user_firstname}:
                    </div>
                    <div className="singlemessage" >
                        {messages[i]}
                    </div>
                    <div className="infoholder" >
                    </div>
                </div>
            )
        })

        return (
            <div className="messagingcontainer">
                <div className="textarea">
                {<div className="intro">Welcome, {this.props.user.user_firstname}</div>}
                </div>
                <div className="previous-messages">{messageList}</div>
                <div className="formbox">
                <div className="subintro">Begin chatting here.</div>
                    <input type="text" value={this.value}
                      onChange={(e) => this.handleChange(e.target.value)} autoFocus='true'></input>
                      <button  onClick={() => this.sendMessage()}>Submit</button>
                </div>
                {/* <EmbeddedSlackReact channel="https://dndevmtn.slack.com/messages/C7EG6DVEV" token="https://dndevmtn.slack.com/messages/C7EG6DVEV" /> */}
            </div>
        )
    }
}


function mapStateToProps(state) {
    return state;
}

export default connect(mapStateToProps)(Chat)
