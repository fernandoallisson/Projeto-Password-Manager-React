import React, { useState } from 'react';

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

    const lengthValid = password.length >= 8;
    const maxLengthValid = password.length <= 16;
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
    verifyPassword();
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => { // Faz com que não carregue a página no Submit
    e.preventDefault();
    // Depois que salvar vou adicionar aqui as informações para serem salvas
  };
  // ---------------------------------------------------------------------------------------

  return (
    <form onSubmit={ handleSubmit }>
      <label htmlFor="name">
        Nome do serviço
        <input type="text" name="name" id="name" onChange={ handleChange } />
      </label>
      <label htmlFor="login">
        Login
        <input type="text" name="login" id="login" onChange={ handleChange } />
      </label>
      <label htmlFor="password">
        Senha
        <input type="password" name="password" id="password" onChange={ handleChange } />
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
        <input type="text" name="url" id="url" onChange={ handleChange } />
      </label>
      <button type="submit" disabled={ !validPassword }>Cadastrar</button>
      <button onClick={ handleCancel }>Cancelar</button>
    </form>
  );
}

export default Form;
