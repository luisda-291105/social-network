import Avatar from "./Post/avatar";
import Descripcion from "./Post/Descripcion";
import GroupBtn from "./Post/GroupBtn";
import ImagePost from "./Post/ImagePost";

export default function Posh() {
    return (
        <div className="w3-container w3-card w3-white w3-round w3-margin">
            <Avatar />
            <br />
            <hr className="w3-clear" />
            <Descripcion />
            <ImagePost />
            <GroupBtn />
        </div>
    );
}
