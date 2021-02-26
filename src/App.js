import "./App.css";
import MovieApp from "./Components/MovieApp";
import MovieDetails from "./Components/MovieDetails/MovieDetails";
import { Route, Switch } from "react-router-dom";
import PrivateRoute from "./Router/PrivateRoute";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MovieApp} />
        <Route path="/movie" component={MovieDetails} />
        {/* <PrivateRoute path="/dashbord" component={Home} /> */}
      </Switch>
    </div>
  );
}

export default App;
