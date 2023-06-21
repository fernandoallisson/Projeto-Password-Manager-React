import { FormTipo } from './type';

function FormCard(dados: FormTipo) {
  const { name, url, login, password, showPass } = dados;
  return (
    <li>
      <p><a href={ url }>{ name }</a></p>
      <p>{ login }</p>
      {showPass
        ? <p>{ password }</p>
        : <p>******</p>}
    </li>
  );
}

export default FormCard;
