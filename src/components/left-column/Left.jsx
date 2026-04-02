import Profile from "./Profile";
import Acordion from "./Acordion";
import Interests from "./Interests";
import AlertBox from "./AlertBox";

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
