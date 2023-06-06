import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  const [cadastrar, setCadastrar] = useState(false);
  const handleCadastrar = () => (cadastrar ? setCadastrar(false) : setCadastrar(true));

  return (
    <div>
      <h1>Gerenciador de senhas</h1>
      <button onClick={ handleCadastrar }>Cadastrar nova senha</button>
      {cadastrar && <Form />}
    </div>
  );
}

export default App;
