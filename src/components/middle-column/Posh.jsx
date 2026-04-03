import { useState } from "react";
import ComentForm from "./comentForm";
import ListComment from './listComments';


export default function Posh() {
    let image = "https://imgs.search.brave.com/Iw6FYICfb9udkU08V5lzNPi6gJK81zZlMIs5_68ZyS0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bGVzdC1uYXJ1dG8t/d2l0aC1nbG93aW5n/LWxpZ2h0LXRpeWJq/eDN1MjdtMGo0MXQu/anBn";
    

    let listCom = [
        {
            id: 1,
            txt: `Some quick example text to build on the card title and make
                    up the bulk of the card’s content.`,
        
        },
        {
            id:2,
            txt:"voy es volando"
        }
    ];

    let [like, setLike] = useState(0);
    let [btnComment, setBtnComment] = useState(false);

    return (
        <div className="card m-auto my-4" style={{ width: "25rem" }}>
            <div className="m-2 d-flex ">
                <img
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    alt="Avatar"
                    className=" w3-left w3-circle w3-margin-right"
                    style={{ width: "35px" }}
                />
                <div className="d-flex flex-column ">
                    <span style={{ fontSize: "15px" }}>John Doe</span>
                    <span style={{ fontSize: "10px" }} className="w3-opacity">
                        1 min
                    </span>
                </div>
            </div>

            <div className="card-body">
                <p className="card-text">hola bb </p>
            </div>

            <div className="card-body">
                <img src={image} className="card-img-top" alt="imagen..." />
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-around">
                    <span>👍🤣❤️ {like}</span>
                    <span>2 mil 💭</span>
                </li>
                <li className="list-group-item d-flex justify-content-around">
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => setLike(like + 1)}
                    >
                        👍 like
                    </button>
                    <button
                        className="btn btn-outline-secondary"
                        onClick={() => setBtnComment(!btnComment)}
                    >
                        💭 comments
                    </button>
                </li>
            </ul>

                {btnComment && <ComentForm />}
            <ListComment listComData = {listCom} />
        </div>
    );
}
