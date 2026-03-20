import Profile from "./Profile";
import Accordion from "./Accordion";
import Interests from "./Interests";
import AlertBox from "./AlertBox";

export default function SideBarLeft() {
    return (
        <div class="w3-col m3">
            <Profile />
            <br />
            <Accordion />
            <br />
            <Interests />
            <br />
            <AlertBox />
        </div>
    );
}
