import { useState } from 'react';
import './App.css';
import Form from './components/Form';

function App() {
  // Estado para alterar a tela do componente para 'Show' --------------------------------------------------
  const [cadastrar, setCadastrar] = useState(false);
  // Estado para alterar a visibilidade do 'botão cadastrar nova senha' ------------------------------------
  const [showBtnCadastrar, setShowBtnCadastrar] = useState(true);
  // Altera o estado de dois componentes / o de cadastrar e o de mostrar o btn -----------------------------
  const handleCadastrar = () => {
    setCadastrar(true);
    setShowBtnCadastrar(false);
  };
  // Altera o estado de dois componentes / o de cadastrar e o de mostrar o btn -----------------------------
  const handleCancel = () => {
    setCadastrar(false);
    setShowBtnCadastrar(true);
  };

  return (
    <div>
      <header>
        <h1>Gerenciador de senhas</h1>
      </header>
      <section>
        {showBtnCadastrar && (
          <button onClick={ handleCadastrar }>Cadastrar nova senha</button>
        )}
        {cadastrar && <Form onCancel={ handleCancel } /> }
      </section>
    </div>
  );
}

export default App;
