import './App.css';
import {Route} from "react-router";
import ClocksContainer from "./components/Clocks/ClocksContainer";

function App() {
    return (
        <Route path='/' render={() => <ClocksContainer/>}/>
    );
}

export default App;
