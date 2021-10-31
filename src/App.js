import { useState } from "react";
import "./App.css";
import ListOfGifs from "./components/ListOfGifs";
import { Link, Route } from "wouter";
function App() {
  const [keyword, setKeyword] = useState("panda");
  return (
    <div className="App">
      <section className="App-content">
        <h1>APP</h1>
        <Link to="/gif/panda">Gifs de pandas</Link>
        <Link to="/gif/lol">Gifs de lol</Link>
        <Link to="/gif/cats">Gifs de gatitos</Link>
        <Route path="/gif/:keyword" component={ListOfGifs} />
      </section>
    </div>
  );
}

export default App;
