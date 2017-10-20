import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import '../header.css';

class TeamDrop extends Component {
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
        return(
            <div>
                <button onClick={this.handleOpen} className='header-link-buttons' page-is-scrolled={this.props.scroll} >Teams</button>
                <Popover open={this.state.open}
                         onRequestClose={this.handleClose} 
                         anchorEl={this.state.anchorEl}
                         anchorOrigin={{horizontal: 'middle', vertical: 'bottom'}}
                         targetOrigin={{horizontal: 'middle', vertical: 'top'}}
                >
                    <Menu>
                        <Link to='/display-teams' className='header-link'><MenuItem primaryText='Teams' onClick={this.handleClose} /></Link>
                        <Link to='/display-users' className='header-link'><MenuItem primaryText='Users' onClick={this.handleClose} /></Link>
                    </Menu>
                </Popover>
            </div>
        )
    }
}

export default TeamDrop;