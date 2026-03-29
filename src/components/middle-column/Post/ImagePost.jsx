import React from "react";

export default function ImagePost() {
    return (
        <div className="w3-row-padding" style={{ margin: "0 -16px" }}>
            <div className="w3-half">
                <img
                    src="https://www.w3schools.com/w3images/lights.jpg"
                    style={{ width: "100%" }}
                    alt="Northern Lights"
                    className="w3-margin-bottom"
                />
            </div>
            <div className="w3-half">
                <img
                    src="https://www.w3schools.com/w3images/nature.jpg"
                    style={{ width: "100%" }}
                    alt="Nature"
                    className="w3-margin-bottom"
                />
            </div>
        </div>
    );
}
