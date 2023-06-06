// type FormProps = {
//   name = string,

// }

// Um input do tipo text com o texto Nome do serviço como label.
// Um input do tipo text com o texto Login como label.
// Um input do tipo password com o texto Senha como label.
// Um input do tipo text com o texto URL como label.
// Um button com o texto Cadastrar.
// Um button com o texto Cancelar.
function Form() {
  return (
    <form>
      <label htmlFor="name">
        Nome
        <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="login">
        Login
        <input type="text" name="login" id="login" />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" name="password" id="passowrd" />
      </label>
      <label htmlFor="url">
        URL
        <input type="text" name="url" id="url" />
      </label>
      <button>Cadastrar</button>
      <button>Cancelar</button>
    </form>
  );
}

export default Form;
