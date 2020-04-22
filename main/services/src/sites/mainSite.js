import React from "react";
import {MapComponent} from "../components/mapComponent";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "row",
        height: "100vh",
        width: "100vw"
    },
    map: {
        width: "50vw",
        height: "100vh",
        display: "flex",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "0 50px 50px 0",
        overflow: "hidden",
    }

}));

export default function MainSite() {
    const classes = useStyles();
    return <div className={classes.root}>
        <div className={classes.map}>
            <MapComponent/>
        </div>
        <div className={classes.services}>
            <Typography variant={"h1"}>services.</Typography>
        </div>
    </div>
}