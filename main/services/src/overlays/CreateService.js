import React from "react";
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
    value : "Max Muster"
}];

export default function CreateEditDialog({open, service}){
    const classes = useStyles();
    const theme = useTheme();
    return <Dialog open={open} classes={{paper: classes.root}} fullWidth>
        <DialogTitle id="simple-dialog-title">{service ? <Typography variant={"h1"}>Edit Rasenmähen</Typography>:  <Typography variant={"h1"}>Neuen Service erstellen<span style={{color: theme.palette.primary.main}}>.</span></Typography>}</DialogTitle>
        <DialogContent>
            <TextField select label={"Icon"} className={classes.textField}  fullWidth>
                {emojis.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </TextField>
            <TextField label={"Name"} className={classes.textField} fullWidth/>
            <TextField select label={"Employee"} className={classes.textField} fullWidth>
                {employees.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </TextField>
            <TextField InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                        <CalendarTodayRounded color={"primary"}/>
                    </InputAdornment>
                ),
            }} type={"date"} className={classes.textField} fullWidth/>
            <TextField InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                       <Typography variant={"h2" } style={{color: theme.palette.primary.main}}>€</Typography>
                    </InputAdornment>
                ),
            }} label={"Hourrate"} fullWidth/>

        </DialogContent>
        <DialogActions>
            <Button  className={classes.button2}>Abbrechen</Button>
            <Button className={classes.button1}>Speichern</Button>
        </DialogActions>
    </Dialog>
}