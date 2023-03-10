import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ful from "../svgtopng/asset 9.png"
import { Home as HomeIcon } from '@mui/icons-material';
import { textAlign } from '@mui/system';
const pages = ['Home','Features','Pricing','Blog'];
const settings = ["Technology Search","Category Search","Email Verification","Professional Domain Data","Technology Compare","Keyword Search"];

function ResponsiveAppBar() {

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
    };

  
    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
  
  return (
    <div className="Navbar" style={{padding:"0 90px 0 90px"}}>

    <AppBar position="static"  style={{ background: 'transparent', boxShadow: 'none'}}>
      <Container maxWidth="xl" >
        <Toolbar disableGutters >
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
            }}
          >
          <img src={ful} alt="" style={{width:"120px"}} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} style={{ display:"flex", flexWrap:"wrap", justifyContent:"center",gap:"40px"}}>
            {pages.map((page) => (
                
              <Button
              className='hover-text'
                key={page}
                sx={{ my: 2, color: 'black',display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',}}
                onClick={page === "Features" ? handleOpenUserMenu : null}
                // onMouseEnter={page === "home" ? handleOpenUserMenu : null}
              >
                 <h3> {page}</h3>
                 {page === "Features" &&<ExpandMoreIcon sx={{ mr: 1 }} />}
              
              </Button>
              
            ))}
            
            <Menu
              sx={{ mt: '55px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography  textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <div className="buttons" >

          <button   style={{margin:'10px',fontSize:"1.3rem", background: 'transparent',border:"0px"}} ><h4>login</h4></button>
          <button style={{margin:'10px',fontSize:"1.3rem",color:"#4f46e5", background: 'white',border:"0px",padding:"5px", borderRadius:"10px"}} ><h4>Sign up</h4></button>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;