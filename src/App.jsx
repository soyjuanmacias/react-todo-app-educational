import { useState } from "react";
import "./App.css";
import { Navigation } from "./components/Navigation/Navigation";
import { Tabs } from "./components/Navigation/Tabs";

const INITAL_TAB = Object.keys(Tabs)[0]; // TODOS

export const App = () => {
    const [activeTab, setActiveTab] = useState(INITAL_TAB);

    return (
        <div className="app-container">
            <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
            <h1 className="app-title">📝 Mi Lista de Tareas</h1>

            <p>Pestaña Activa: {activeTab}</p>
        </div>
    );
};
