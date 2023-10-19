import "./App.scss"
import Simflouz from "../../Pages/Simflouz/Simflouz"
import Layout from "../../Layout/Layout"
import cheats_simflouz from "./cheats/cheats_simflouz.json"
import cheats_personnage from "./cheats/cheats_personnage.json"
import cheats_construction from "./cheats/cheats_construction.json"
import {useState, useEffect} from "react"

export default function App() {
	const [currentRoute, setCurrentRoute] = useState(null);

	useEffect(() => {
		setCurrentRoute(window.location.pathname)
		console.log(window.location.pathname)
	}, []);

  return (
    <div id="app-container">
		<Layout>
			{currentRoute === "/" && <Simflouz data={ cheats_simflouz }/>}
			{currentRoute === "/Douze" && <Simflouz data={ cheats_simflouz }/>}
			{currentRoute === "/Douze/" && <Simflouz data={ cheats_simflouz }/>}
			{currentRoute === "/Douze/Simflouz" && <Simflouz data={ cheats_simflouz }/>}
			{currentRoute === "/Douze/Personnage" && <Simflouz data={ cheats_personnage }/>}
			{currentRoute === "/Douze/Construction" && <Simflouz data={ cheats_construction }/>}
		</Layout>
    </div>
  );
}
