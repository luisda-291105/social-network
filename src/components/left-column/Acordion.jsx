import { useState } from "react";
import MyGroups from "./acordionMenssage/myGroups";
import MyEvents from "./acordionMenssage/MyEvents";
import Photos from "./acordionMenssage/Photos";

export default function Acordion() {
    const [show, setShow] = useState(false);

    let handleShow = () => {
        setShow(!show);
    };

    return (
        <div className="w3-card w3-round">
            <div className="w3-white">
                <button
                    onClick={handleShow}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                    <i className="fa fa-circle-o-notch fa-fw w3-margin-right"></i>{" "}
                    My Groups
                </button>
                {!show && <MyGroups />}
                <button
                    onClick={handleShow}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                    <i className="fa fa-calendar-check-o fa-fw w3-margin-right"></i>{" "}
                    My Events
                </button>
                {!show && <MyEvents />}
                <button
                    onClick={handleShow}
                    className="w3-button w3-block w3-theme-l1 w3-left-align"
                >
                    <i className="fa fa-users fa-fw w3-margin-right"></i> My
                    Photos
                </button>
                {!show && <Photos />}
            </div>
        </div>
    );
}
