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

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route path="/detail" element={<MovieDetail />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
