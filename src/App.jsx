
import Left from "./components/left-column/Left";
import Middle from "./components/middle-column/Middle";
import Right from "./components/right-column/Right";
import Footer from "./components/Footer";

function App() {
    return (
        <>
            <div class="w3-container w3-content" style={{maxWidth:"1400px" , marginTop:"80px"}}>
                <Left />
                <Middle />
                <Right />
            </div>
        <Footer />
        </>
    );
}

export default App;
