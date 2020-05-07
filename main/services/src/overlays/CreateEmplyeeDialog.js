import React, {useState} from "react";
import {makeStyles} from "@material-ui/styles";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import DialogContent from "@material-ui/core/DialogContent";
import {CalendarTodayRounded} from "@material-ui/icons";
import InputAdornment from "@material-ui/core/InputAdornment";
import {useTheme} from "@material-ui/core";
import {AccountCircle} from "@material-ui/icons";
import MenuItem from "@material-ui/core/MenuItem";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import {serverService} from "../helpers/serverService";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: "white",
        borderRadius: "20px",
        padding: "20px"
    },
    textField: {
        margin: "20px 0px"
    },
    button1: {
        backgroundColor: theme.palette.primary.main,
        height: "50px",
        fontWeight: "bold",
        borderRadius: "25px",
        width: "200px",
        color: "white"
    },
    button2: {
        backgroundColor: "gray",
        height: "50px",
        fontWeight: "regular",
        borderRadius: "25px",
        width: "200px",
        color: "white"
    }
}));

const emojis = [
    {
        value: "🌲"
    },
    {
        value: "👩🏻‍🍳"
    },
    {
        value: "🧑🏼‍🌾"
    },
    {
        value: "🌿"
    },
    {
        value: "🌹"
    },
    {
        value: "🍔"
    },
    {
        value: "♻️"
    }
];

const employees = [{
    value : "Max Muster",
    id: 0
}];

export default function CreateEmployeeDialog({open, updateFunction}){
    const classes = useStyles();
    const theme = useTheme();

    const [openState, setOpenState] = open;

    function handleChange(e, name) {
        const value = e.target.value;

    }

    function handleSave() {

        handleClose();
    }

    function handleClose() {
        setOpenState(false);
    }

    return <Dialog open={openState} classes={{paper: classes.root}} fullWidth>
        <DialogTitle id="simple-dialog-title"> <Typography variant={"h1"}>Neuen Employee erstellen<span style={{color: theme.palette.primary.main}}>.</span></Typography></DialogTitle>
        <DialogContent>
            <TextField label={"Vorname"} className={classes.textField}  fullWidth/>
            <TextField label={"Nachname"} className={classes.textField}  fullWidth/>
        </DialogContent>
        <DialogActions>
            <Button  className={classes.button2} onClick={event => handleClose()}>Abbrechen</Button>
            <Button className={classes.button1} onClick={event => handleSave()}>Speichern</Button>
        </DialogActions>
    </Dialog>
}
