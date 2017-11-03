import React, { Component } from 'react';
import {connect} from 'react-redux'
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
// import RaisedButton from 'material-ui/RaisedButton';
// import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import './dropdown.css';

class CompanyDrop extends Component {
    constructor() {
        super();

        this.state = {
            open: false
        }

        this.handleOpen = this.handleOpen.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }

    handleOpen( e ) {
        e.preventDefault();

        this.setState({
            open: true,
            anchorEl: e.currentTarget
        })
    }

    handleClose() {
        this.setState({
            open: false
        })
    }

    render() {
        // let compName = this.props.company.company_name
        return(
            <div>
                <button onClick={this.handleOpen} className='header-link-buttons' page-is-scrolled={this.props.scroll} >Company</button>
                <Popover open={this.state.open}
                         onRequestClose={this.handleClose} 
                         anchorEl={this.state.anchorEl}
                         anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                         targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                >
                    <Menu>
                        {/* <div>{compName}</div> */}
                        
                    </Menu>
                </Popover>
            </div>
        )
    }
}
function mapStateToProps( state ) {  
    return state
  }


export default connect( mapStateToProps, {} )(CompanyDrop)