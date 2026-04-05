import React, { useEffect } from "react";

export default function ListComments({ storageData}) {

    return (
        <ul className="list-group list-group-flush">
            {
            storageData.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-around">{item.txt}</li>
            ))}
        </ul>
    );
}
