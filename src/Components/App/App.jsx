import "./App.scss"
import Simflouz from "../../Pages/Simflouz/Simflouz"
import Layout from "../../Layout/Layout"
import { Routes, Route } from "react-router-dom";
import cheats_simflouz from "./cheats/cheats_simflouz.json"
import cheats_personnage from "./cheats/cheats_personnage.json"
import cheats_construction from "./cheats/cheats_construction.json"

export default function App() {
  return (
    <>
      <Layout>
            <Routes>
				        <Route path="*" element={<Simflouz data={cheats_simflouz} />} />
                <Route path="/Douze/" element={<Simflouz data={cheats_simflouz} />} />
                <Route path="/Douze/Simflouz" element={<Simflouz data={cheats_simflouz} />} />
                <Route path="/Douze/Personnage" element={<Simflouz data={cheats_personnage} />} />
				        <Route path="/Douze/Construction" element={<Simflouz data={cheats_construction} />} />
            </Routes>
      </Layout>
    </>
  );
}                   
