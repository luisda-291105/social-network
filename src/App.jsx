
import Left from "./components/left-column/Left";
import Middle from "./components/middle-column/Middle";
import Right from "./components/right-column/Right";


function App() {
    return (
        <>
            <div
                class="w3-container w3-content"
                style={{maxWidth:"1400px" , marginTop:"80px"}}
            >
                <Left />
                <Middle />
                <Right />
            </div>
        </>
    );
}

export default App;
