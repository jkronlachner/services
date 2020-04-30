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

export default function CreateEditDialog({open, service, updateFunction}){
    const classes = useStyles();
    const theme = useTheme();

    const [openState, setOpenState] = open;
    const [serviceState, setServiceState] = useState(service ? service : {address: "Muckenhuberweg 17 4631 Krenglbach"});

    function handleChange(e, name) {
        const value = e.target.value;
        const serv = {...serviceState};
        if(name === "name") serv.name = value;
        else if(name === "date") serv.date = value;
        else if(name === "employee") serv.employeeId = employees.find(value1 => value1.value === value).id;
        //else if(name === "hourRate") serv.hourRate = value;
        setServiceState(serv);

        console.log(serv);
    }

    function handleSave() {
        if(serviceState.id){
            serverService.changeService(serviceState.id, serviceState).then(updateFunction());
        }
        serverService.addService(serviceState).then(updateFunction());
        handleClose();
    }

    function handleClose() {
        setOpenState(false);

    }

    return <Dialog open={openState} classes={{paper: classes.root}} fullWidth>
        <DialogTitle id="simple-dialog-title">{service ? <Typography variant={"h1"}>Edit {service.name}</Typography>:  <Typography variant={"h1"}>Neuen Service erstellen<span style={{color: theme.palette.primary.main}}>.</span></Typography>}</DialogTitle>
        <DialogContent>
            <TextField select label={"Icon"} className={classes.textField}  fullWidth>
                {emojis.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.value}
                    </MenuItem>
                ))}
            </TextField>
            <TextField label={"Name"}
                       onChange={e => handleChange(e, "name")}
                       value={serviceState.name}
                       className={classes.textField} fullWidth/>
            <TextField select label={"Employee"}
                       onChange={e => handleChange(e, "employee")}
                       className={classes.textField} fullWidth>
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
            }}
                       onChange={e => handleChange(e, "date")}
                       value={serviceState.date}
                       className={classes.textField} fullWidth/>
            <TextField InputProps={{
                endAdornment: (
                    <InputAdornment position="end">
                       <Typography variant={"h2" } style={{color: theme.palette.primary.main}}>€</Typography>
                    </InputAdornment>
                ),
            }} label={"Hourrate"}
                       onChange={e => handleChange(e, "hourRate")}
                       value={serviceState.hourRate}
                       fullWidth/>

        </DialogContent>
        <DialogActions>
            <Button  className={classes.button2} onClick={event => handleClose()}>Abbrechen</Button>
            <Button className={classes.button1} onClick={event => handleSave()}>Speichern</Button>
        </DialogActions>
    </Dialog>
}
