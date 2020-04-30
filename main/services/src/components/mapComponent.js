import React, {useEffect, useRef, useState} from "react";
import ReactMapboxGl, {Layer, Feature, Popup, Marker, RotationControl, ScaleControl, ZoomControl} from 'react-mapbox-gl';
import {useTheme} from "@material-ui/core";
import marker from "../assets/Icon awesome-map-marker.png"

export function MapComponent() {
    const Map = ReactMapboxGl({
        accessToken: "pk.eyJ1Ijoiamtyb25sYWNobmVyIiwiYSI6ImNrNnYwZHh5aTBlanYzZXA3MXNkbzNtcHkifQ.zllgA50ypjzf2bLxIkRbDQ"
    });

    return <div>
        <Map
            style={"mapbox://styles/jkronlachner/ck8kjq1330lye1ip0vgssufql"}
            containerStyle={{
                height: "105vh",
                width: "50vw"
            }}
        >
           <Marker coordinates={[-0.24, 51.52]}>
                <img src={marker}/>
            </Marker>

        </Map>
    </div>
}