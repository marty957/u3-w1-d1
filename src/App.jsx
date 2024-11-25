import "./App.css";
import TopBar from "./components/Topbar";
import Title from "./components/title";
import ButtonBuy from "./components/ButtonBuy";

function App() {
  return (
    <div className="App">
      <TopBar />
      <header className="App-header">
        <Title
          title="Ghost of Tsushima"
          description=" E' un videogioco d'avventura dinamica e stealth sviluppato da Sucker Punch Productions e pubblicato da Sony Interactive Entertainment per PlayStation 4.
        Il gioco segue le vicende dell'ultimo samurai dell'isola di Tsushima, Jin Sakai, durante la prima invasione mongola del Giappone, intorno al 1270.[2]
        Originariamente il titolo doveva uscire il 26 giugno 2020,[3][4][5] ma è stato posticipato per dare spazio a The Last of Us Parte II al 17 luglio dello
        stesso anno."
        />
      </header>
      <ButtonBuy className="buttonBuy" />
    </div>
  );
}

export default App;
