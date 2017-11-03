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
        // this.props.getUserInfo();
    }

    handleChange(event) {
        this.setState({ value: event});
    }

    sendMessage() {
        // e.preventDefault();
        if (this.value !== '') {
            this.state.messages.push(this.state.value)
        }
        else {
            return('No message to send')
        }
        this.setState({
            value: ''
        })
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
                <form >
                    <input type="text" value={this.state.value}
                      onChange={(e) => this.handleChange(e.target.value)} autoFocus='true' placeholder='Message'></input>
                      <button type="submit" onSubmit={() => this.sendMessage()}>Submit</button>
                      </form>
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
