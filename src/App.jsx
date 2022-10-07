import { Link, Route, Routes } from "react-router-dom";
import "./App.css";

import About from "./pages/About";
import Index from "./pages/Index";
import Todo from "./pages/Todo";

function App() {
  return (
    <>
      <header className="headerx">
        <nav>
          <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/todo">Todo</Link>
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/about" element={<About />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>
    </>
  );
}

export default App;
