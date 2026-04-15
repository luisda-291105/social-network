import { useState } from "react";

export default function SideBarLeft() {
    return (
        <div className="w3-col m3">
            <Profile />
            <br />
            <Acordion />
            <br />
            <Interests />
            <br />
            <AlertBox />
        </div>
    );
}

export function Acordion() {
    const [Groups, setGroups] = useState(true);
    const [Events, setEvents] = useState(true);
    const [photos, setPhotos] = useState(true);

    function toogleGroup() {
        setGroups(!Groups);
    }

    function toogleEvents() {
        setEvents(!Events);
    }

    function tooglePhotos() {
        setPhotos(!photos);
    }

    function MyEvents() {
        return (
            <div id="Demo2" className=" w3-container">
                <p>Some other text..</p>
            </div>
        );
    }
    function Photos() {
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
    function MyGroups() {
        return (
            <div id="Demo1" className=" w3-container">
                <p>Some text..</p>
            </div>
        );
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

export function Profile() {
    return (
        <div className="w3-card w3-round w3-white">
            <div className="w3-container">
                <h4 className="w3-center">My Profile</h4>
                <p className="w3-center">
                    <img
                        src="https://www.w3schools.com/w3images/avatar3.png"
                        className="w3-circle"
                        style={{height:"106px " ,width:"106px"}}
                        alt="Avatar"
                    />
                </p>
                <hr />
                <p>
                    <i className="fa fa-pencil fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    Designer, UI
                </p>
                <p>
                    <i className="fa fa-home fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    London, UK
                </p>
                <p>
                    <i className="fa fa-birthday-cake fa-fw w3-margin-right w3-text-theme"></i>{" "}
                    April 1, 1988
                </p>
            </div>
        </div>
    );
}

export function Interests() {
    return (
        <div className="w3-card w3-round w3-white w3-hide-small">
            <div className="w3-container">
                <p>Interests</p>
                <p>
                    <span className="w3-tag w3-small w3-theme-d5">News</span>
                    <span className="w3-tag w3-small w3-theme-d4">W3Schools</span>
                    <span className="w3-tag w3-small w3-theme-d3">Labels</span>
                    <span className="w3-tag w3-small w3-theme-d2">Games</span>
                    <span className="w3-tag w3-small w3-theme-d1">Friends</span>
                    <span className="w3-tag w3-small w3-theme">Games</span>
                    <span className="w3-tag w3-small w3-theme-l1">Friends</span>
                    <span className="w3-tag w3-small w3-theme-l2">Food</span>
                    <span className="w3-tag w3-small w3-theme-l3">Design</span>
                    <span className="w3-tag w3-small w3-theme-l4">Art</span>
                    <span className="w3-tag w3-small w3-theme-l5">Photos</span>
                </p>
            </div>
        </div>
    );
}

export function AlertBox() {
    const active = "w3-display-none";

    let [visible, setVisible] = useState(true);

    if (!visible) return null
    
    return (
        <div className="w3-container w3-display-container w3-round w3-theme-l4 w3-border w3-theme-border w3-margin-bottom w3-hide-small">
            <span
                onClick={() => setVisible(!visible)}
                className="w3-button w3-theme-l3 w3-display-topright"
            >
                <i className="fa fa-remove"></i>
            </span>
            <p>
                <strong>Hey!</strong>
            </p>
            <p>People are looking at your profile. Find out who.</p>
        </div>
    );
}