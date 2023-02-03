import './App.css';
import filedocx from './files/EditalDeAcessoARecursos2023.docx';
import filepdf from './files/DiagnosticoSocioambientalParticipativo.pdf';
import Routes from "./routes/routes";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <p>
          test
        </p>
       
        <a href={filedocx} download>Click to download import docx</a>
        <a href={filepdf} download>Click to download import import pdf</a>
      </header>
    </div>
  );
}

export default App;
