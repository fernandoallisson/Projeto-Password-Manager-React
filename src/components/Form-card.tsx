type FormCardProps = {
  nome: string;
  url: string;
  login: string;
  senha: string;
};

function FormCard(dados: FormCardProps) {
  const { nome, url, login, senha } = dados;
  return (
    <div>
      <a href={ url }>{ nome }</a>
      <p>{ login }</p>
      <p>{ senha }</p>
    </div>
  );
}

export default FormCard;
