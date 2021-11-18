import "./App.css";
import {
	BrowserRouter,Routes, Route, 
  // Navigate,
	// Outlet,
} from "react-router-dom";

//Pages
import Home from "../src/pages/Home";
import MovieDetail from "../src/pages/MovieDetail";
import Header from "../src/components/Header";
import Add from "../src/components/Add";
import Watched from "../src/components/Watched";
import Watchlist from "../src/components/Watchlist";
import { GlobalProvider } from "./context/GlobalState";

function App() {
	return (
		<GlobalProvider>

		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route path="/detail" element={<MovieDetail />}></Route>
				<Route path="/watchlist" element={<Watchlist />}></Route>
				<Route path="/watched" element={<Watched />}></Route>
				<Route path="/add" element={<Add />}></Route>
			</Routes>
		</BrowserRouter>
		</GlobalProvider>
	);
}

export default App;
