import React, { Component } from 'react';
import { Loader } from 'semantic-ui-react'

class PageLoading extends Component {
    constructor() {
        super();

        this.state = {

        }
    }


    componentWillMount(){
        setTimeout(()=>{
            if(this.props.user){
            return  window.history.back();
            } else {
                console.log("NOPE")}
                return window.location.href ='http://27projectmanagement.com/#/'
        }, 3000)
    }
  


    render() {

        return(
            <div>
<Loader active inline='centered' />
            </div>
        )
    }
}

export default PageLoading;