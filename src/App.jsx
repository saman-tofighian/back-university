import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import AddArticle from "./pages/AddArticle/AddArticle";
import Article from "./pages/Article/Article";
import EditArticle from "./pages/EditeArticle/EditArticle";
import Articles from "./pages/ArticlesPage/Articles";
import Courses from "./pages/Courses/Courses";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/add-article" element={<AddArticle />} />
          <Route path="/article/:articleId" element={<Article />} />
          <Route path="/edit-article/:articleId" element={<EditArticle />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/*" element={<h1>404 Page</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
