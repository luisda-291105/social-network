import { Route , Routes } from "react-router-dom";

import Home from './pages/Home'
import ProfilePage from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Friends from "./pages/Friends";
import Notifications from "./pages/Notifications";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Profile" element={<ProfilePage />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/notifications" element={<Notifications />} />
            <Route path="/*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
