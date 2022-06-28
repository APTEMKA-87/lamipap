import './App.css';
import Header from './components/Header/Header'
import Info from "./components/Info/info";
import PaperCardboard from "./components/paper_cardboard/paper/paper_cardboard";
import Equipment from "./components/Equipment/equipment";
import Footer from "./components/footer/footer";

function App() {
    return <div>
        <Header/>
        <Info/>
        <PaperCardboard/>
        <Equipment/>
        <Footer/>
    </div>
        ;
}

export default App;
