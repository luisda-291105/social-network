import { Route , Routes } from "react-router-dom";

import Home from './pages/Home'
import ProfilePage from "./pages/Profile";
import NotFunt from "./components/NotFunt";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="Profile" element={<ProfilePage />} />
            <Route path="*" element={<NotFunt />} />
        </Routes>
    );
}

export default App;
