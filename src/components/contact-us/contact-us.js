import React, { Component } from 'react';
import './contact-us.css';


export default class ContactUs extends Component {
    
    render() {
        return(
            <div className="contact-us">
                <div className="title">CONTACT US</div>
                <div className="info">
                    <span>Questions? Comments? Get in touch at:</span>
                    <span>Email: thisisfake@gmail.com</span>
                    <span>Phone: 555-555-5555</span>
                    <span>In Person: We don't have an address</span>
                </div>
            </div>
        )
    }
}

