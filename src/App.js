import './App.css';
import Home from './pages/Home'

function App() {

  return (
    <div className="App">
      <Routes>
        {/* Componente da tela inicial */}
        <Route index element={<Home />} />
        {/* Componente de uma rota específica */}
        {/* <Route path="about" element={<About />} /> */}
        {/* Componente para quando não encontrar uma rota */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </div>
  );
}

export default App;
