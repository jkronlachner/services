import React from "react";
import {SearchComponent} from "../components/searchComponent";
import {ListComponent} from "../components/listComponent";
import {makeStyles} from "@material-ui/core";
import CreateEditDialog from "../overlays/CreateService";
import {MapComponent} from "../components/mapComponent";

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
    },
    services: {
        width: "50vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
    },
    search: {
        height: "20vh",
    },
    list:{
        height: "80vh",
    }
}));

export default function MainSite() {
    const classes = useStyles();
    return <div className={classes.root}>
        <CreateEditDialog open={true}/>
        <div className={classes.map}>
            <MapComponent/>
        </div>
        <div className={classes.services}>
            <div className={classes.search}>
                <SearchComponent/>
            </div>
            <div className={classes.list}>
                <ListComponent/>
            </div>
        </div>
    </div>
}