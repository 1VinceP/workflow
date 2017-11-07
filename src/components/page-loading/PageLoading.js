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
                return window.location.href ='http://104.131.104.218:3005/#/'
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