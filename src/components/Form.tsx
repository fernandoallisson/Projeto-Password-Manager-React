import React, { useState } from 'react';
import FormCard from './Form-card';

type FormProps = {
  onCancel: () => void;
};
// Classes para colocar na tag de formulário de senhas
const valida1 = 'valid-password-check';
const valida2 = 'invalid-password-check';
// ----------------------------------END------------------

function Form({ onCancel }: FormProps) {
  const [data, setData] = useState({
    name: '',
    login: '',
    password: '',
    url: '',
  });

  const [validPassword, setValidPassword] = useState({ // Estado para validação de senha
    length: false,
    maxLength: false,
    lettersAndNumbers: false,
    specialCharacter: false,
  });

  const verifyPassword = () => { // Verifica se os parâmetros das senhas são de acordo e altera o estado caso não
    const { password } = data;

    const lengthValid = password.length >= 7;
    const maxLengthValid = password.length <= 15;
    const lettersAndNumbersValid = /[a-zA-Z]/.test(password) && /\d/.test(password);
    const specialCharacterValid = /[!@#$%^&*()]/.test(password);

    setValidPassword({
      length: lengthValid,
      maxLength: maxLengthValid,
      lettersAndNumbers: lettersAndNumbersValid,
      specialCharacter: specialCharacterValid,
    });

    return (
      lengthValid && maxLengthValid && lettersAndNumbersValid && specialCharacterValid
    );
  };

  const handleCancel = () => { // Chama a função OnCancel para canelar o botão de cadastro
    onCancel(); // Chama a função de callback recebida pela prop onCancel
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Qualquer mudança nos inputs eles alteram o estado.
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
    if (id === 'password') {
      verifyPassword();
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Faz com que não carregue a página no Submit
    e.preventDefault();
    const { name, login } = data;
    const isNameEmpty = name.trim() === '';
    const isLoginEmpty = login.trim() === '';
    const isPasswordInvalid = !verifyPassword();

    const isSubmitDisabled = isNameEmpty || isLoginEmpty || isPasswordInvalid;

    if (!isSubmitDisabled) {
      // Realizar o envio do formulário ou qualquer outra ação necessária
    }
  };
  const [services, setServices] = useState([] as any[]);

  const handleCadastro = () => {
    if (data.name.trim() !== '' && data.login.trim() !== '') {
      // Verifica se os campos obrigatórios foram preenchidos
      const newService = {
        login: data.login,
        nome: data.name,
        senha: data.password,
        url: data.url,
      };

      setServices([...services, newService]); // Adiciona o novo serviço ao estado de serviços
      setData({ name: '', login: '', password: '', url: '' }); // Limpa os campos do formulário
    }
  };
  // ---------------------------------------------------------------------------------------

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name">
        Nome do serviço
        <input
          type="text"
          name="name"
          value={ data.name }
          id="name"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="login">
        Login
        <input
          type="text"
          name="login"
          value={ data.login }
          id="login"
          onChange={ handleChange }
        />
      </label>
      <label htmlFor="password">
        Senha
        <input
          type="password"
          name="password"
          id="password"
          value={ data.password }
          onChange={ handleChange }
        />
      </label>
      <div>
        <p className={ validPassword.length ? valida1 : valida2 }>
          Possuir 8 ou mais caracteres
        </p>

        <p className={ validPassword.maxLength ? valida1 : valida2 }>
          Possuir até 16 caracteres
        </p>

        <p className={ validPassword.lettersAndNumbers ? valida1 : valida2 }>
          Possuir letras e números
        </p>

        <p className={ validPassword.specialCharacter ? valida1 : valida2 }>
          Possuir algum caractere especial
        </p>
      </div>
      <label htmlFor="url">
        url
        <input
          type="text"
          name="url"
          value={ data.url }
          id="url"
          onChange={ handleChange }
        />
      </label>
      <button
        type="submit"
        disabled={ !(validPassword.length
        && validPassword.maxLength
        && validPassword.lettersAndNumbers
        && validPassword.specialCharacter
        && data.name.trim() !== ''
        && data.login.trim() !== '') }
        onClick={ handleCadastro }
      >
        Cadastrar
      </button>
      <button onClick={ handleCancel }>Cancelar</button>
      {/* Renderização dos serviços cadastrados */}
      {services.length > 0 ? (
        <div>
          <h2>Serviços cadastrados:</h2>
          {services.map((service, index) => (
            <FormCard
              key={ index }
              login={ service.login }
              nome={ service.nome }
              senha={ service.senha }
              url={ service.url }
            />
          ))}
        </div>
      ) : (
        <p>Nenhuma senha cadastrada</p>
      )}
    </form>
  );
}

export default Form;
