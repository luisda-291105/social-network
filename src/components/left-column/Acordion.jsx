import { useState } from "react";
import MyGroups from "./acordionMenssage/myGroups";
import MyEvents from "./acordionMenssage/MyEvents";
import Photos from "./acordionMenssage/Photos";

export default function Acordion() {
    const [Groups, setGroups] = useState(true);
    const [Events, setEvents] = useState(true);
    const [photos, setPhotos] = useState(true);

    function toogleGroup() {
        setGroups(!Groups)
    }

    function toogleEvents() {
        setEvents(!Events)
    }

    function tooglePhotos() {
        setPhotos(!photos)
    }

    return (
        <div className="w3-card w3-round">
            <div className="w3-white">
                <button
                    onClick={toogleGroup}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                    <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i>{" "}
                    My Groups
                </button>
                {!Groups && <MyGroups />}
                <button
                    onClick={toogleEvents}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                    <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>{" "}
                    My Events
                </button>
                {!Events && <MyEvents />}
                <button
                    onClick={tooglePhotos}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                    <i className="fa fa-users fa-fw w3-margin-right"></i> My
                    Photos
                </button>
                {!photos && <Photos />}
            </div>
        </div>
    );
}
