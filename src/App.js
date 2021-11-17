import "./App.css";
import {
	BrowserRouter,Routes, Route, 
  // Navigate,
	// Outlet,
} from "react-router-dom";

//Pages
import Home from "../src/pages/Home";
import Detail from "../src/pages/Detail";
import Header from "../src/components/Header";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route exact path="/" element={<Home />}></Route>
				<Route exact path="/detail" element={<Detail />}></Route>
				{/* <Route path="/login" element={<Login />} />       */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;
