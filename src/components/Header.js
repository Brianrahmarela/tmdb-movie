import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
	return (
		<div className="bg-base h-16" data-testid="navbar">
			<main className="flex flex-row justify-between max-w-7xl mx-auto p-4">
				<main className="flex ">
					<h2 className="text-white font-bold text-md mx-4">
						<Link to="/">
							<h1 className="text-white font-bold text-xl md:text-2xl">ADD+</h1>
						</Link>{" "}
					</h2>
				</main>

				<main className="flex justify-around space-x-3 md:space-x-10">
					<h2 className="text-white font-bold text-md md:text-lg">
						<Link to="/detail">Detail</Link>
					</h2>
					<h2 className="text-white font-bold text-md md:text-lg">
						<Link to="/watchlist">Watchlist</Link>
					</h2>
					<h2 className="text-white font-bold text-md md:text-lg">
						<Link to="/watched">Watched</Link>
					</h2>
				</main>
			</main>
		</div>
	);
};

export default Header;
