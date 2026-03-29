import UpcomingEvent from "./UpcomingEvent"
import FriendRequest from "./FriendRequest";
import Ads from "./Ads";
import FaBug from "./FaBug";

export default function Right() {
    return (
        <div className="w3-col m2">
            <UpcomingEvent />
            <br />
            <FriendRequest />
            <br />
            <Ads />
            <br />
            <FaBug />
        </div>
    );
}
