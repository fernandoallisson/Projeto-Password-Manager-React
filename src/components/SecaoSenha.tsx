import FormCard from './FormCard';

type SecaoSenhaProp = {
  name: string
  login: string;
  password: string;
  url: string;
  dadosSalvos: object[]
};

function SecaoSenha({ name, login, password, url, dadosSalvos }: SecaoSenhaProp) {
  return (
    <section id="Cards">
      { dadosSalvos.map((item, index) => (
        <ul key={ index }>
          <FormCard
            key={ `${login}${password}` }
            login={ login }
            nome={ name }
            senha={ password }
            url={ url }
          />
        </ul>
      ))}
    </section>
  );
}

export default SecaoSenha;
