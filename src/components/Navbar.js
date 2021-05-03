import React, {useState} from 'react'
import {Link} from "react-router-dom"
import { makeStyles } from "@material-ui/core/styles"
import MobilRightMenuSlider from "@material-ui/core/Drawer"
import {
    AppBar,
    Toolbar,
    ListItem,
    ListItemIcon,
    IconButton,
    ListItemText,
    Avatar,
    Divider,
    List,
    Typography,
    Box
} from "@material-ui/core"
import {
    ArrowBack,
    Home,
    Apps
} from "@material-ui/icons"
import avatar from "../ian.jpg"

//CSS STYLES
const useStyles = makeStyles( theme => ({
    menuSliderContainer: {
        width: 250,
        background: "#511",
        height: "100%"
    },
    avatar: {
        display: "block",
        margin: "0.5rem auto", 
        width: theme.spacing(13),
        height: theme.spacing(13)

    },
    listItem:{
        color: "#1c62ab"
    }
}));

const menuItems = [
    {
        listIcon: <Home />,
        listText: "Home",
        listPath: "/home"
    },
    {
        listIcon: <Apps />,
        listText: "Air Quality",
        listPath: "/amazon"
    }
]

const Navbar = () => {
    const [state, setState] = useState({
        right: false
    });

    const toggleSlider = (slider, open) => () => {
        setState({...state, [slider]: open})
    };

    const classes = useStyles();

    const sideList = slider => (
        <Box 
            style={{background: "#fff"}}
            className={classes.menuSliderContainer} 
            component="div"
            onClick={toggleSlider(slider, false)}
        >
            <Avatar 
                className={classes.avatar}
                src={avatar} 
                alt="Ian"
            />
            <Divider />
            <List>
                {menuItems.map((lsItem, key) => (
                    <ListItem button key={key} component={Link} to={lsItem.listPath}>
                        <ListItemIcon className={classes.listItem}>
                            {lsItem.listIcon}
                        </ListItemIcon>
                        <ListItemText 
                            className={classes.listItem} 
                            primary={lsItem.listText} />
                    </ListItem>
                ))}
            </List>
        </Box>
    )

    return (
        <>
        <Box component="nav">
            <AppBar position="static" style={{background: "#222"}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider("right", true)}>
                        <ArrowBack style={{color: "#1c62ab"}}/>
                    </IconButton>
                    <Typography variant="h5" style={{color: "#ac8362"}}>Air quality</Typography>
                    <MobilRightMenuSlider 
                        anchor="right"
                        open={state.right}
                        onClose={toggleSlider("right", false)}
                    >
                        {sideList("right")}
                    </MobilRightMenuSlider>
                </Toolbar>
            </AppBar>
        </Box>
        </>
        
    )
}

export default Navbar
