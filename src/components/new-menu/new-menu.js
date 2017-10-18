import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
import './new-menu.css';


export default class NewMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <RaisedButton
          primary={true}
          onClick={this.handleTouchTap}
          label="+ New"
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            <Link to="/create-company" className="link" ><MenuItem  primaryText="Company" /></Link>
            <Link to="/create-project" className="link"><MenuItem primaryText="Project" /></Link>
            <Link to="/create-team" className="link"><MenuItem primaryText="Team" /></Link>
            <Link to="/create-user" className="link"><MenuItem primaryText="User" /></Link>
          </Menu>
        </Popover>
      </div>
    );
  }
}