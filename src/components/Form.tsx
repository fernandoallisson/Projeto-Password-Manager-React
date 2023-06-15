import { useState } from 'react';
import SecaoSenha from './SecaoSenha';

const senhaValida = 'valid-password-check';
const senhaInvalida = 'invalid-password-check';

interface FormData {
  name: string;
  login: string;
  password: string;
  url: string;
}

interface SavedData {
  data: FormData;
}

type FormProp = {
  onClick: () => void;
};

function Form({ onClick }: FormProp) {
  const [dadosSalvos, setDadosSalvos] = useState<SavedData[]>([]); // Aqui é para guardar o que deve ser guardado para ser feito o map depois;

  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => { // Prevenir que carregue
    evento.preventDefault();
  };
  const [data, setData] = useState<FormData>({ // Para guardar as informações que o user digitar
    name: '',
    login: '',
    password: '',
    url: '',
  });
  const [senha, setSenha] = useState({ // Para ver se a senha tá OK!
    tamanhoMinimo: false,
    tamanhoMaximo: false,
    temLetrasENumeros: false,
    temCaracteresEspeciais: false,
  });
  const [SenhaValidaChecada, setSenhaValidaChecada] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Qualquer mudança nos inputs eles alteram o estado.
    const { name, value } = e.target;
    setData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleChangeSenha = (event: React.ChangeEvent<HTMLInputElement>) => {
    const novaSenha = event.target.value;
    const tamanhoMinimo = 8;
    const tamanhoMaximo = 16;

    setSenha((prevState) => ({
      ...prevState,
      tamanhoMinimo: novaSenha.length >= tamanhoMinimo,
      tamanhoMaximo: novaSenha.length <= tamanhoMaximo,
      temLetrasENumeros: /^(?=.*[a-zA-Z])(?=.*\d)/.test(novaSenha),
      temCaracteresEspeciais: /[!@#$%^&*(),.?":{}|<>]/.test(novaSenha),
    }));

    setData((current) => ({
      ...current,
      password: novaSenha,
    }));

    const senhaValidada = novaSenha.length >= tamanhoMinimo
    && novaSenha.length <= tamanhoMaximo
    && /^(?=.*[a-zA-Z])(?=.*\d)/.test(novaSenha)
    && /[!@#$%^&*(),.?":{}|<>]/.test(novaSenha);

    setSenhaValidaChecada(senhaValidada);
  };
  const handleCadastroSenhas = () => {
    setDadosSalvos((prevState) => [...prevState, { data }]);
  };

  return (

    <form onSubmit={ handleSubmit }>
      <section id="informacoesQueUsuarioDigita">
        <label htmlFor="nomedoservico">
          Nome do Serviço
          <input
            type="text"
            id="nomedoservico"
            name="name"
            value={ data.name }
            onChange={ handleChange }
          />
        </label>
        <label htmlFor="usuario">
          Login
          <input
            type="text"
            id="usuario"
            name="login"
            value={ data.login }
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
              value={ data.password }
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
            value={ data.url }
            onChange={ handleChange }
          />
        </label>
      </section>
      <section id="botoesDoFormulario">
        <button
          disabled={ !(SenhaValidaChecada
            && data.name.trim() !== ''
          && data.login.trim() !== '') }
          onClick={ handleCadastroSenhas }
        >
          Cadastrar
        </button>

        <button onClick={ onClick }>Cancelar</button>
      </section>
      <section>
        <SecaoSenha
          dadosSalvos={ dadosSalvos }
          login={ data.login }
          name={ data.name }
          password={ data.password }
          url={ data.url }
          key={ data.password }
        />
      </section>
    </form>
  );
}

export default Form;
