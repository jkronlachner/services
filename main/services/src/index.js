import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/fonts/stylesheet.css"
import './index.css';
import * as serviceWorker from './serviceWorker';
import {MapComponent} from "./components/mapComponent";
import {createMuiTheme, responsiveFontSizes} from '@material-ui/core/styles';
import {ThemeProvider} from "@material-ui/styles";
import MainSite from "./sites/mainSite";



let theme = createMuiTheme({
    palette: {
        primary: {
            main: "#F75D38",
        },
        secondary: {main: "#05AB74"},
        background: {default: "#ECF0F1"},
        error: {main: "#E74C3C"}

    },
    typography: {
        fontFamily: "MADE Tommy Soft",
        p: {
            fontWeight: "normal",
            fontSize: 15,
            lineHeight: 1.6,
            color: "#2b2b2b"
        },
        h1: {
            fontWeight: "bold",
            fontSize: 40
        },
        h2: {
            fontWeight: "bold",
            fontSize: 30
        },
        h3: {
            fontWeight: "bold",
            fontSize: 25,
            color: "#0F42FF",
            marginBottom: 10
        },
        h4:{
            fontWeight: "normal",
            fontSize: 20,
        },
        caption: {
            color: "#0F42FF",
            fontWeight: "bold",
            textTransform: "uppercase",
            marginBottom: 5,
        },
    }
});
theme = responsiveFontSizes(theme);



ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <MainSite/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
