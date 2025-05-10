import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
    return ( 
        <AppBar>
            <Toolbar>
                <Typography variant="h6" sx={{flexGrow: 1}}> Aerosight </Typography>
                <Button color="inherit" component={Link} to='/'>Dashboard</Button>
                <Button color="inherit" component={Link} to='/history'>History</Button>
                <Button color="inherit" component={Link} to='/education'>Education</Button>
            </Toolbar>
        </AppBar>
     );
}
 
export default Header;