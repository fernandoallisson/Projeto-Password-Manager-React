type FormCardProps = {
  nome: string;
  url: string;
  login: string;
  senha: string;
};

function FormCard(dados: FormCardProps) {
  const { nome, url, login, senha } = dados;
  return (
    <li>
      <p><a href={ url }>{ nome }</a></p>
      <p>{ login }</p>
      <p>{ senha }</p>
    </li>
  );
}

export default FormCard;
