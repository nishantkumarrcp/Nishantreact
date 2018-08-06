import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import RestaurantScreen from '../restaurants';
import SurveyScreen from '../survey';
import StudentScreen from '../student/list';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }

class MenuAppBar extends React.Component {
  state = {
    tabIndex: 0,
    auth: true,
    anchorEl: null,
    menuItems: [ 'Profile', 'Settings', 'Log Out'],
    disableTab: false
  };

  handleChange = (event, checked) => {
    this.setState({ auth: checked, disableTab: !checked });
  };

  handleTabChange = (event, value) => {
    this.setState({ tabIndex: value });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch checked={auth} onChange={this.handleChange} aria-label="LoginSwitch" />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Photos
            </Typography>
            {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                {this.state.menuItems.map(item => <MenuItem onClick={this.handleClose}>{item}</MenuItem>)}
                </Menu>
              </div>
            )}
          </Toolbar>
        </AppBar>
        <Tabs value={this.state.tabIndex} onChange={this.handleTabChange}>
            <Tab label="Restaurants" disabled={this.state.disableTab}/>
            <Tab label="Survey" disabled={this.state.disableTab}/>
            <Tab label="Students" href="#basic-tabs" disabled={this.state.disableTab}/>
          </Tabs>
          {this.state.tabIndex === 0 && <TabContainer><RestaurantScreen /></TabContainer>}
        {this.state.tabIndex === 1 && <TabContainer><SurveyScreen /></TabContainer>}
        {this.state.tabIndex === 2 && <TabContainer><StudentScreen/></TabContainer>}
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MenuAppBar);
