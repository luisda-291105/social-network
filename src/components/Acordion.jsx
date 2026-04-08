import { useState } from "react";

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

export function MyEvents() {
    return (
        <div id="Demo2" className=" w3-container">
            <p>Some other text..</p>
        </div>
    );
}

export  function Photos() {
    return (
        <div id="Demo3" className=" w3-container">
            <div className="w3-row-padding">
                <br />
                <div className="w3-half">
                    <img
                        src="https://www.w3schools.com/w3images/lights.jpg"
                        style={{ width: "100%" }}
                        className="w3-margin-bottom"
                    />
                </div>
                <div className="w3-half">
                    <img
                        src="https://www.w3schools.com/w3images/nature.jpg"
                        style={{ width: "100%" }}
                        className="w3-margin-bottom"
                    />
                </div>
                <div className="w3-half">
                    <img
                        src="https://www.w3schools.com/w3images/mountains.jpg"
                        style={{ width: "100%" }}
                        className="w3-margin-bottom"
                    />
                </div>
                <div className="w3-half">
                    <img
                        src="https://www.w3schools.com/w3images/forest.jpg"
                        style={{ width: "100%" }}
                        className="w3-margin-bottom"
                    />
                </div>
                <div className="w3-half">
                    <img
                        src="https://www.w3schools.com/w3images/nature.jpg"
                        style={{ width: "100%" }}
                        className="w3-margin-bottom"
                    />
                </div>
                <div className="w3-half">
                    <img
                        src="https://www.w3schools.com/w3images/snow.jpg"
                        style={{ width: "100%" }}
                        className="w3-margin-bottom"
                    />
                </div>
            </div>
        </div>
    );
}

export  function MyGroups() {
    return (
        <div id="Demo1" className=" w3-container">
            <p>Some text..</p>
        </div>
    );
}
