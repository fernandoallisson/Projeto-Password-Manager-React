import { useState } from 'react';
import './App.css';
import Form from './components/Form';
import Title from './components/Title';
import BotaoCadastrar from './components/Botao';

function App() {
// ------------------------Bloco de armazenamento de renderização -----------------------//
  const [mostrarinformacoes, setMostrarInformacoes] = useState({ // Este estado vai armazenar o que deve ser renderizado (form ou botao)
    botao: true,
    formulario: false,
  });

  const handleChange = () => { // Esta função vai alterar o valor do estado neste bloco
    setMostrarInformacoes((prevState) => ({
      botao: !prevState.botao,
      formulario: !prevState.formulario,
    }));
  };
  // ---------------------------------- Fim do Bloco de renderização ---------------------//

  return (
    <div>
      <Title titulo="Gerenciador de Senhas" />

      {mostrarinformacoes.botao && <BotaoCadastrar onClick={ handleChange } />}

      {mostrarinformacoes.formulario && <Form onClick={ handleChange } />}
    </div>
  );
}

export default App;
