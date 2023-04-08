import React from "react";
import "../../styles/home.css";
import { CharactersDisplay } from "../component/charactersDisplay.jsx";
import { PlanetsDisplay } from "../component/planetsDisplay.jsx";
import { VehiclesDisplay } from "../component/vehiclesDisplay.jsx";

export const Home = () => (
	<div>
		<CharactersDisplay />
		<PlanetsDisplay />
		<VehiclesDisplay />
	</div>
);
