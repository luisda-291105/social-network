import  { useState  } from "react";

export default function ComentForm({getCommenData}) {
    let [comment ,  setComment] = useState("")
    let getComment  = (e) =>{
        setComment(e.target.value)
    }
    
    return (
        <div className="mb-3 d-flex gap-3 justify-content-center">
            <textarea className="mt-3" name="comment" placeholder="comentario"
            value={comment}
            onChange={getComment}
            ></textarea>

            <button className="btn btn-primary mt-3 "
            onClick={() => getCommenData(comment)}
            >comentar </button>
        </div>
    );
}
