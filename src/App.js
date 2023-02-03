import './App.css';
import filedocx from './files/EditalDeAcessoARecursos2023.docx';
import filepdf from './files/DiagnosticoSocioambientalParticipativo.pdf';

function App() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('./files/EditalDeAcessoARecursos2023.docx').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = './files/EditalDeAcessoARecursos2023.docx';
          alink.click();
      })
    })
  }

  
  const onDownload4 = () => {
    fetch(filedocx).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "EditalDeAcessoARecursos2023.docx";
        a.click();
      });
    });
  };

  const onDownload6 = () => {
    fetch(filepdf).then((response) => {
      response.blob().then((blob) => {
        let url = window.URL.createObjectURL(blob);
        let a = document.createElement("a");
        a.href = url;
        a.download = "DiagnosticoSocioambientalParticipativo.pdf";
        a.click();
      });
    });
  };

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
