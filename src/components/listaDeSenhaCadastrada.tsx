import { useState } from 'react';
import FormCard from './FormCard';
import { DadosTipo } from './type';
import './listasDeSenhaCadastradas.css';

function ListaDeSenhaCadastrada({ dados, handleLixo }: DadosTipo) {
  const [mostrarSenha, setMostrarSenha] = useState(true);

  const checked = () => {
    setMostrarSenha(!mostrarSenha);
  };
  return (
    <section id="Cards">
      <section>
        <label htmlFor="esconderSenhas">
          Esconder senhas
          {' '}
          <input
            type="checkbox"
            onClick={ checked }
            id="esconderSenhas"
          />
        </label>
      </section>
      { dados.map((item) => (
        <ul key={ item.login }>
          <FormCard
            id={ item.login }
            key={ item.login }
            login={ item.login }
            name={ item.name }
            password={ item.password }
            url={ item.url }
            showPass={ mostrarSenha }
          />
          <button
            data-testid="remove-btn"
            onClick={ handleLixo }
            value={ item.login }
          >
            lixo
          </button>
        </ul>
      ))}
    </section>
  );
}

export default ListaDeSenhaCadastrada;
