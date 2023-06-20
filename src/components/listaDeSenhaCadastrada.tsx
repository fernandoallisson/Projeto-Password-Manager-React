import FormCard from './FormCard';
import { DadosTipo } from './type';

function ListaDeSenhaCadastrada({ dados, handleLixo }: DadosTipo) {
  return (
    <section id="Cards">
      { dados.map((item) => (
        <ul key={ item.login }>
          <FormCard
            id={ item.login }
            key={ item.login }
            login={ item.login }
            name={ item.name }
            password={ item.password }
            url={ item.url }
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
