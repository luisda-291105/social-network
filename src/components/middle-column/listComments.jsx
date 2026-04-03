import React from "react";

export default function ListComments({ listComData }) {
    
    return (
        <ul className="list-group list-group-flush">
            {
            listComData.map((item) => (
                <li key={item.id} className="list-group-item d-flex justify-content-around">{item.txt}</li>
            ))}
        </ul>
    );
}
