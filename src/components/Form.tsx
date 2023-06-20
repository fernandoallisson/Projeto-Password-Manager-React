import { FormProp } from './type';

const senhaValida = 'valid-password-check';
const senhaInvalida = 'invalid-password-check';

function Form({
  dadosDoForm,
  onClickDoCancelar,
  handleChange,
  onClickDoCadastrar,
  handleChangeSenha,
  SenhaValidaChecada,
  senha,
  onSubmit,
}: FormProp) {
  return (
    <form onSubmit={ onSubmit }>
      <section id="informacoesQueUsuarioDigita">
        <label htmlFor="nomedoservico">
          Nome do Serviço
          <input
            type="text"
            id="nomedoservico"
            name="name"
            value={ dadosDoForm.name }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="usuario">
          Login
          <input
            type="text"
            id="usuario"
            name="login"
            value={ dadosDoForm.login }
            onChange={ handleChange }
          />
        </label>
        <div>
          <label htmlFor="senha">
            Senha
            <input
              type="password"
              id="senha"
              name="password"
              value={ dadosDoForm.password }
              onChange={ handleChangeSenha }
            />
          </label>
          <div id="comandoSenhas">
            {senha.tamanhoMinimo ? (
              <p className={ senhaValida }>Possuir 8 ou mais caracteres</p>
            ) : (
              <p className={ senhaInvalida }>Possuir 8 ou mais caracteres</p>
            )}
            {senha.tamanhoMaximo ? (
              <p className={ senhaValida }>Possuir até 16 caracteres</p>
            ) : (
              <p className={ senhaInvalida }>Possuir até 16 caracteres</p>
            )}
            {senha.temLetrasENumeros ? (
              <p className={ senhaValida }>Possuir letras e números</p>
            ) : (
              <p className={ senhaInvalida }>Possuir letras e números</p>
            )}
            {senha.temCaracteresEspeciais ? (
              <p className={ senhaValida }>Possuir algum caractere especial</p>
            ) : (
              <p className={ senhaInvalida }>Possuir algum caractere especial</p>
            )}
          </div>
        </div>
        <label htmlFor="link">
          URL
          <input
            type="text"
            id="link"
            name="url"
            value={ dadosDoForm.url }
            onChange={ handleChange }
          />
        </label>
      </section>
      <section id="botoesDoFormulario">
        <button
          disabled={ !(SenhaValidaChecada
            && dadosDoForm.name.trim() !== ''
          && dadosDoForm.login.trim() !== '') }
          onClick={ onClickDoCadastrar }
        >
          Cadastrar
        </button>

        <button onClick={ onClickDoCancelar }>Cancelar</button>
      </section>
    </form>
  );
}

export default Form;
