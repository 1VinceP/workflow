import React, { Component } from 'react';

class PageLoading extends Component {
    constructor() {
        super();

        this.state = {

        }
    }

    goBack() {
        window.history.back();
    }


    render() {
        return(
            <div>
                        <button onClick={()=>{this.goBack()}}>Go Back</button>
            </div>
        )
    }
}

export default PageLoading;