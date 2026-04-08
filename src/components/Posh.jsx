import { useState, useEffect } from "react";
import ComentForm from "./commentForm";
import ListComment from "./listComments";

export default function Posh() {
    let [like, setLike] = useState(0);
    // let storageLike = [...like]
    let countLikeStorage = () => {
        setLike(like + 1)
        localStorage.setItem("countLike" , JSON.stringify(like))

    }

    let listCom = [
        /* {
            id: 1,
            txt: `Some quick example text to build on the card title and make
                    up the bulk of the card’s content.`,
        },
        {
            id: 2,
            txt: "voy es volando",
        }, */
    ];

    let [txtComment, setTxtComment] = useState("");
    let [listData, setListData] = useState(listCom);
    let [btnComment, setBtnComment] = useState(false);
    let storage = JSON.parse(localStorage.getItem("comentarios")) || [
        ...listData,
    ];

    function local_storage(com) {
        storage.push({ id: storage.length + 1, txt: com });

        console.log(`storage = ${storage}`);

        localStorage.setItem("comentarios", JSON.stringify(storage));
    }

    function getCommenData(c) {
        setTxtComment(c);
        console.log(txtComment);
        local_storage(c);
    }

    useEffect(() => {
        listData = JSON.parse(localStorage.getItem("comentarios"))
    },[])

    useEffect(() => {
        {
            txtComment &&
                setListData([
                    ...listData,
                    { id: listData.length + 1, txt: txtComment },
                ]);
        }
    }, [txtComment]);

    function compartir() {
        alert("Aun no esta disponible esta funcionalidad...")
    }


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
            
                <div className="d-flex ms-auto gap-2">
                    <i className="bi bi-three-dots fs-4"></i>
                    <i className="bi bi-x fs-4"></i>
                </div>
            </div>

            <div className="card-body">
                <p className="card-text">hola bb </p>
            </div>

            <div className="card-body">
                <img
                    src="https://imgs.search.brave.com/Iw6FYICfb9udkU08V5lzNPi6gJK81zZlMIs5_68ZyS0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvY29v/bGVzdC1uYXJ1dG8t/d2l0aC1nbG93aW5n/LWxpZ2h0LXRpeWJq/eDN1MjdtMGo0MXQu/anBn"
                    className="card-img-top"
                    alt="imagen..."
                />
            </div>

            <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-around">
                    <span className="d-flex gap-1 me-auto">
                        <i className="bi bi-hand-thumbs-up"></i>
                        <i className="bi bi-emoji-smile"></i>
                        <i className="bi bi-heart"></i> {JSON.parse(localStorage.getItem("countLike"))}</span>
                    <span className=" d-flex gap-2">{storage.length} <i className="bi bi-chat-dots"></i></span>
                </li>
                <li className="list-group-item d-flex justify-content-around">
                    <button
                        className="btn "
                        onClick={countLikeStorage}
                    >
                        <i className="bi bi-hand-thumbs-up"></i>
                        
                        <span className="ps-2">like</span>
                    </button>
                    <button
                        className="btn "
                        onClick={() => setBtnComment(!btnComment)}
                    >
                        <i className="bi bi-chat-dots"></i>
                        
                        <span className="ps-2">comment</span>
                    </button>
                    <button
                        className="btn"
                        onClick={compartir}
                    >
                        <i className="bi bi-share"></i>
                        <span className="ps-2">share</span>
                    </button>
                </li>
            </ul>

            {btnComment && <ComentForm getCommenData={getCommenData} /> }
            {btnComment && <ListComment  storageData={storage} /> }
            
        </div>
    );
}
