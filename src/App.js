import Nav from "./components/Nav";
import Moviescontainer from "./components/Moviescontainer";
import { useState } from "react";
import MovieDescription from "./components/MovieDescription";
import { BrowserRouter as Router, Route,Switch} from "react-router-dom";
function App() {
  const [movie, setMovie] = useState([
    {
      id: Math.random(),
      img: "https://i.pinimg.com/originals/c4/1f/38/c41f3825633d80e0ecd833468db92c05.jpg",
      name: "Jhon Wick",
      rating: 4,
      trailer: "https://www.youtube.com/watch?v=C0BMx-qxsP4",
      description: "jhon wick movie",
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_.jpg",
      name: "Avatar",
      rating: 2,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_.jpg",
      name: "Iron Man 2",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img2.acsta.net/medias/nmedia/18/63/97/89/18949761.jpg",
      name: "Batman",
      rating: 5,
    },
    {
      id: Math.random(),
      img: "https://fr.web.img4.acsta.net/pictures/16/01/19/16/49/249124.jpg",
      name: "Deadpool 2",
      rating: 4,
    },
    {
      id: Math.random(),
      img: "https://m.media-amazon.com/images/M/MV5BODQ0NDhjYWItYTMxZi00NTk2LWIzNDEtOWZiYWYxZjc2MTgxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
      name: "Jumnanji",
      rating: 3,
    },
    {
      id: Math.random(),
      img: "https://starzplay-img-prod-ssl.akamaized.net/474w/MGM/VIKINGSY2013S06E001/VIKINGSY2013S06E001-474x677-PST.jpg",
      name: "Vikings",
      rating: 1,
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Router>
      <div className="App">
        <Nav inputValue={inputValue} handleInput={handleInput} />
        <Switch>
        <Route path="/">
        <Moviescontainer movie={movie} inputValue={inputValue} />
        </Route>
        <Route path="/MovieDescription/:id">
        <MovieDescription movie={movie} />
        </Route>
        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
