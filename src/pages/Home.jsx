import NavBar from "../components/NavBar";
import Left from "../components/Left";
import Middle from "../components/Middle";
import Right from "../components/Right";
import Footer from "../components/Footer";

export default function Home() {
    return (
        <>
            <NavBar />
            <div
                className="w3-container w3-content"
                style={{ maxWidth: "1400px", marginTop: "80px" }}
            >
                <Left />
                <Middle />
                <Right />
            </div>
            <Footer />
        </>
    );
}
