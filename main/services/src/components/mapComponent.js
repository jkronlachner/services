import React, {useEffect, useRef, useState} from "react";
import ReactMapboxGl, {Layer, Feature, Popup, Marker, RotationControl, ScaleControl, ZoomControl} from 'react-mapbox-gl';
import {useTheme} from "@material-ui/core";
import marker from "../assets/Icon awesome-map-marker.png"
import {serverService} from "../helpers/serverService";

export function MapComponent() {
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1Ijoiamtyb25sYWNobmVyIiwiYSI6ImNrNnYwZHh5aTBlanYzZXA3MXNkbzNtcHkifQ.zllgA50ypjzf2bLxIkRbDQ"
    });


    const [services, setServices] = useState([[48.21105785, 13.9583785494079]]);

    useEffect(() => {
        serverService.getAllServices().then(value => {
            let maped = value.map(val => {
                return [parseFloat(val.lon), parseFloat(val.lat)];
            });
            setServices(maped);

            console.log("VALs", value, maped);
        });
    },[]);

    return <div>
        <Map
            style={"mapbox://styles/jkronlachner/ck8kjq1330lye1ip0vgssufql"}
            containerStyle={{
                height: "105vh",
                width: "50vw"
            }}
            center={services[0]}
        >

            {services.map(value => {
                console.log("VALsA", value);
                return <Marker coordinates={value}>
                    <img src={marker}/>
                </Marker>
            })}


        </Map>
    </div>
}
