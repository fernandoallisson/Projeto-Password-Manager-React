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
  const handleCancel = () => {
    onCancel(); // Chama a função de callback recebida pela prop onCancel
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Qualquer mudança nos inputs eles alteram o estado.
    const { id, value } = e.target;
    setData({
      ...data,
      [id]: value,
    });
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
      <button type="submit">Cadastrar</button>
      <button onClick={ handleCancel }>Cancelar</button>
    </form>
  );
}

export default Form;
