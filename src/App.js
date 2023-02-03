import './App.css';

function App() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('../../files/EditalDeAcessoARecursos2023.docx').then(response => {
      response.blob().then(blob => {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement('a');
          alink.href = fileURL;
          alink.download = '../../files/EditalDeAcessoARecursos2023.docx';
          alink.click();
      })
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <p>
          test
        </p>
        <a href="./files/EditalDeAcessoARecursos2023.docx" target="_blank">abre aaqui</a>
        <button onClick={onButtonClick}>
          Baixe aqui o Edital 2023.  
          {/* não vai mais baixar o edital e sim abrir no próprio site */}
        </button>
      </header>
    </div>
  );
}

export default App;
