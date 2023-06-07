import React, { useState } from 'react';

type FormProps = {
  onCancel: () => void;
};

function Form({ onCancel }: FormProps) {
  const [data, setData] = useState({
    name: '',
    login: '',
    password: '',
    url: '',
  });
  const verifyPassword = () => { // Verificação de Senha com os parâmetros passados.
    const { name, login, password } = data;
    if (!name || !login || !password) {
      // alert('Por favor, preencha todos os campos');
      return false;
    }

    if (password.length < 8 || password.length > 16) {
      // alert('A senha deve ter entre 8 e 16 caracteres');
      return false;
    }

    if (!/[a-zA-Z]/.test(password) || !/\d/.test(password)) {
      // alert('A senha deve conter letras e números');
      return false;
    }

    if (!/[!@#$%^&*()]/.test(password)) {
      console.log('A senha deve conter pelo menos um caractere especial');
      return false;
    }

    return true;
  };

  const [validPassword, setValidPassword] = useState(false);

  const handleCancel = () => {
    onCancel(); // Chama a função de callback recebida pela prop onCancel
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Qualquer mudança nos inputs eles alteram o estado.
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
    setValidPassword(verifyPassword());
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
