import React from "react";

export default function Avatar() {
    return (
        <>
            <br />
            <img
                src="https://www.w3schools.com/w3images/avatar2.png"
                alt="Avatar"
                className="w3-left w3-circle w3-margin-right"
                style={{ width: "60px" }}
            />
            <span className="w3-right w3-opacity">1 min</span>
            <h4>John Doe</h4>
        </>
    );
}
