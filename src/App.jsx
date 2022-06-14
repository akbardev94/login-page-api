import "./App.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Users from "./pages/Users/Users";
import UsersDetail from "./pages/Users/DetailUser";
import NotFoundPage from "./pages/404/NotFound";
import Cover from "./pages/Cover/Cover";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cover" element={<Cover />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersDetail />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
