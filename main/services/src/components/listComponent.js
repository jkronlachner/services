import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import List from '@material-ui/core/List';
import {ListItemComponent} from "./listItemComponent";
import {serverService} from "../helpers/serverService";

let marginIndicator = 25;
const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        flexDirection: "column",
        margin: "0 2rem 0 2rem",
        height: "80vh",
    },
    tab: {
        minWidth: 0,
    },
    indicator: {
        minWidth: 0,
        height: 5,
        maxWidth: 5,
        borderRadius: 10,
        marginLeft: 25
    },
    indicator1: {
        minWidth: 0,
        height: 5,
        maxWidth: 5,
        borderRadius: 10,
        marginLeft: 45
    },
    indicator2: {
        minWidth: 0,
        height: 5,
        maxWidth: 5,
        borderRadius: 10,
        marginLeft: 30
    }
}));

export function ListComponent({search}) {
    const classes = useStyles();




    const [value, setValue] = useState(0);
    const [searchState, setSearch] = search;
    const [services, setServices] = useState([{
        "id": 0,
        "name": "Putzen",
        "date": "2019-03-08",
        "lat": "45",
        "lon": "13",
        "employed": 1
    }]);

    useEffect(() => {

        console.log("NEWW UPDATE");
        serverService.getAllServices().then(value => {

            console.log('SEARCH STATE', searchState);
            if(searchState === ''){
                setServices(value);
            }else{
                setServices(value.filter(object => object.name.includes(searchState)));
            }

        });
    },[search]);


    function update() {
        serverService.getAllServices().then(value => {
            setServices(value);
        });
    }

    console.log("RERENDER", searchState);

    const handleChange = (event, newValue) => {
        console.log(newValue)
        switch (newValue) {
            case 0:
                marginIndicator = 25;
                break;
            case 1:
                marginIndicator = 45;
                break;
            case 2:
                marginIndicator = 30;
                break;
        }

        console.log(marginIndicator);
        setValue(newValue);
    };

    return <div className={classes.root}>
        <h1 style={{flexGrow: 1}}>Discover</h1>
        {
            value === 0 ?
                <Tabs
                    style={{flexGrow: 1, marginBottom: "2rem"}}
                    classes={{indicator: classes.indicator}}
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example">
                    <Tab variant={"h1"} classes={{root: classes.tab}} style={{textTransform: "lowercase", fontSize: 20}}
                         label="best"/>
                    <Tab classes={{root: classes.tab}} style={{textTransform: "lowercase", fontSize: 20}}
                         label="cheapest"/>
                    <Tab classes={{root: classes.tab}} style={{textTransform: "lowercase", fontSize: 20}}
                         label="rarest"/>
                </Tabs> : value === 1 ? <Tabs
                    style={{flexGrow: 1, marginBottom: "2rem"}}
                    classes={{indicator: classes.indicator1}}
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example">
                    <Tab variant={"h1"} classes={{root: classes.tab}} style={{textTransform: "lowercase", fontSize: 20}}
                         label="best"/>
                    <Tab classes={{root: classes.tab}} style={{textTransform: "lowercase", fontSize: 20}} label="cheapest"/>
                    <Tab classes={{root: classes.tab}} style={{textTransform: "lowercase", fontSize: 20}} label="rarest"/>
                </Tabs> : <Tabs
                    style={{flexGrow: 1, marginBottom: "2rem"}}
                    classes={{indicator: classes.indicator2}}
                    value={value}
                    indicatorColor="primary"
                    textColor="primary"
                    onChange={handleChange}
                    aria-label="disabled tabs example">
                    <Tab variant={"h1"} classes={{root: classes.tab}} style={{textTransform: "lowercase", fontSize: 20}}
                         label="best"/>
                    <Tab classes={{root: classes.tab}} style={{textTransform: "lowercase", fontSize: 20}} label="cheapest"/>
                    <Tab classes={{root: classes.tab}} style={{textTransform: "lowercase", fontSize: 20}} label="rarest"/>
                </Tabs>
        }
        <List style={{flexGrow: 1000000000}}>
            {
                services.map(x => {
                    console.log("!!!!");
                    return <ListItemComponent service={x} employee={"Paul Wiesinger"} updateFunction={update}/>
                })
            }
        </List>
    </div>
}

