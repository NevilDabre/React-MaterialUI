import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@Material-ui/core/Toolbar';
import Typography from '@Material-ui/core/Typography';

const NavBar = () => {
    return (
        <div>
            <AppBar position="static">
                <ToolBar>
                    <Typography variant="title" color="inherit">
                        React & Material-UI Application
                    </Typography>
                </ToolBar>
            </AppBar>
        </div>
    )
}

export default NavBar;