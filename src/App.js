import './App.css';
import {Header} from "./Header/Header";
import {Main} from "./Main/Main";
import {Skills} from "./Skills/Skills";
import {Projects} from "./Projects/Projects";
import {Contacts} from "./Contacts/Contacts";
import {Footer} from "./Footer/Footer";
import {useEffect} from "react";

const App = () => {
    useEffect(() => {
        document.title = 'Portfolio'
    }, [])
    return (
        <div id="containerElement" className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
