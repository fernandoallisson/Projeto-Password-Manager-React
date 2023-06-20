import FormCard from './FormCard';
import { DadosTipo } from './type';

function ListaDeSenhaCadastrada({ dados }: DadosTipo) {
  return (
    <section id="Cards">
      { dados.map((item) => (
        <ul key={ item.password }>
          <FormCard
            key={ `${item.login}${item.password}` }
            login={ item.login }
            name={ item.name }
            password={ item.password }
            url={ item.url }
          />
        </ul>
      ))}
    </section>
  );
}

export default ListaDeSenhaCadastrada;
