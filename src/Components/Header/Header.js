import * as React from "react";
import app from "../../base";
import { withRouter } from "react-router";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Button from '@mui/material/Button';
import AccountCircle from "@mui/icons-material/AccountCircle";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Header = ({ history }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const currentUser = app.auth().currentUser.email;
  const pages = ['Store', 'About', 'Dashboard'];

  const handleNav = (page) => {
    switch(page) {
        case 'Store':
            history.push('/');
            break;
        case 'About':
            history.push('/about');
            break;
        case 'Dashboard':
          history.push('/dashboard');
          break;
        default:
            break;
    }
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    handleClose()
    app.auth().signOut()
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Legend Lighting
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={() => {handleNav(page)}}
                sx={{ my: 2, color: 'white', display: 'block' }}
                disabled={page === "Dashboard"}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Typography>
            {currentUser}
          </Typography>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default withRouter(Header);
