// type FormProps = {
//   name = string,
// }

function Form() {
  return (
    <form>
      <label htmlFor="name">
        Nome do serviço
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="login">
        Login
        <input type="text" name="login" id="login" />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" name="password" id="password" />
      </label>
      <label htmlFor="url">
        url
        <input type="text" name="url" id="url" />
      </label>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
