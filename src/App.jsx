import "./App.css";
import TopBar from "./components/Topbar";
import Title from "./components/title";
import ButtonBuy from "./components/ButtonBuy";
import FormGroup from "./components/FormGroup";
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
        <FormGroup id="name_input" labelText="Your Name" placeholder="Type your name" type="text" />
        <FormGroup id="surnname_input" labelText="Your Surname" placeholder="Type your Surname" type="text" />
        <FormGroup id="email_input" labelText="Your email" placeholder="Type your email" type="email" />
      </header>
      <ButtonBuy className="buttonBuy" />
    </div>
  );
}

export default App;
