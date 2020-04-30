import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper"
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import CreateIcon from '@material-ui/icons/Create';
import FavoriteIcon from '@material-ui/icons/Favorite';



const useStyles = makeStyles(theme => ({
    container: {
        width: "100wh",
        display: "flex",
        alignItems: "center",
        marginBottom: "1rem"
    },
    column: {
        display: "flex",
        flexDirection: "column"
    },
    row: {
        display: "flex",
        color: theme.palette.primary.main,
    },
    icon: {
        color: theme.palette.secondary.main
    },
    emoji: {
       padding: "1rem"
    },
    date: {
        color: "gray"
    }

}));

/*"id": 0,
    "name": "Putzen",
    "date": "2019-03-08",
    "lat": "45",
    "lon": "13",
    "employed": 1*/

export function ListItemComponent({service, employee}) {
    const classes = useStyles();

    return <Paper className={classes.container}>
        <div className={classes.emoji}>😉</div>
        <div className={classes.column} style={{flex: 1}}>
            <div>{service.name}</div>
            <div className={classes.date}>{employee}, {service.date}</div>
        </div>
        <div className={classes.row} style={{flex: 1, textAlign: "center"}}>
            <div style={{marginLeft: "1rem"}}>100</div>
            <FavoriteIcon/>
            <div style={{marginLeft: "2rem"}}>250€/h</div>
        </div>
        <CreateIcon className={classes.icon} style={{marginRight: "1rem"}}/>
        <DeleteForeverIcon className={classes.icon} style={{marginRight: "1rem"}}/>
    </Paper>
}