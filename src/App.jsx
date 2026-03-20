import SideBarLeft from "./components/left-column/SideBarLeft";
import Middle from "./components/middle-column/Middle";
function App() {
    return (
        <>
            <div
                class="w3-container w3-content"
                style={{maxWidth:"1400px" , marginTop:"80px"}}
            >
                <SideBarLeft />
                <Middle />
            </div>
        </>
    );
}

export default App;
