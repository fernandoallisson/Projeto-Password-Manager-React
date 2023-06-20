import { FormTipo } from './type';

function FormCard(dados: FormTipo) {
  const { name, url, login, password } = dados;
  return (
    <li>
      <p><a href={ url }>{ name }</a></p>
      <p>{ login }</p>
      <p>{ password }</p>
    </li>
  );
}

export default FormCard;
