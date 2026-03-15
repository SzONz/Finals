import Navbar from "./components/Navbar/nav";
import Footer from "./components/footer/section.jsx";

import Discover from "./pages/Discover";
import Library from "./pages/Library";

import Browse from "./pages/Browse";
import News from "./pages/News.jsx";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist.jsx";
import CommunityPosts from "./pages/CommunityPosts";
import Workshop from "./pages/Workshop";
import GamePage from "./pages/GamePage";
import Login from "./pages/Login";



import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <header>
        <Navbar />
      </header>

      <Routes>
        <Route path="/discover" element={<Discover />} /> 
        <Route path="/gamepage" element={<GamePage />} />
        <Route path="/discovery/:gameId" element={<GamePage />} />
        <Route path="/" element={<Login />} />

        {/* Discover */}
        <Route path="/browse" element={<Browse />} />
        <Route path="/news" element={<News />} />

        {/* Library */}
        <Route path="/library" element={<Library />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />

        {/* Community */}
        <Route path="/community-posts" element={<CommunityPosts />} />
        <Route path="/workshop" element={<Workshop />} />

        {/* fallback */}
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>

      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;