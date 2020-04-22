import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import AddCircle from '@material-ui/icons/AddCircle';
import Search from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';


const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: "0 2rem 0 2rem",
        height: "20vh"

    },
    header: {
        display: "flex",
        height: "15vh",
    },
    headerDot: {
        color: theme.palette.primary.main,
        display: "inline-block",
    },
}));

export function SearchComponent() {
    const classes = useStyles();

    return <div className={classes.root}>


        <div className={classes.header}>
            <h1 style={{flexGrow: 9, margin: "auto"}}>
                services
                <p className={classes.headerDot}>.</p>
            </h1>
            <div style={{flexGrow: 1, margin: "auto"}}>
                <IconButton style={{float: "right"}}>
                    <AddCircle fontSize={"large"} color={"primary"}/>
                </IconButton>
            </div>
        </div>
        <TextField style={{height: "15vh"}}
                   placeholder={"search services..."}
                   InputProps={{
                       startAdornment: (
                           <InputAdornment position="start">
                               <Search/>
                           </InputAdornment>
                       ),
                   }}

        ></TextField>
    </div>
}












