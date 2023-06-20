import { useState } from 'react';
import BotaoCadastrar from './Botao';
import { FormTipo, SenhaTipo } from './type';
import ListaDeSenhaCadastrada from './listaDeSenhaCadastrada';
import Title from './titulo';
import Form from './Form';

const cadastrada = 'Nenhuma senha cadastrada';
const noCadastrada = '';
function ComponentePrincipal() {
  // Parte de Estados -------------------------------------------------------------------------------
  const [dadosDoForm, setDadosDoForm] = useState({ // estado para o formulário
    name: '',
    login: '',
    password: '',
    url: '',
  });
  const [mostrarBotaoOuForm, setMostrarBotaoOuForm] = useState(false); // estado para mostrar btn

  const [listaDeDados, setListaDeDados] = useState<FormTipo[]>([]); // Estado para listas de formulario

  const [senha, setSenha] = useState<SenhaTipo>({ // Para ver se a senha tá OK!
    tamanhoMinimo: false,
    tamanhoMaximo: false,
    temLetrasENumeros: false,
    temCaracteresEspeciais: false,
  });

  const [SenhaValidaChecada, setSenhaValidaChecada] = useState(false);
  // Parte de Handles ---------------------------------------------------------------------------------
  const handleMostrarInformacoes = () => { // Esta função vai alterar o valor do estado neste bloco
    setMostrarBotaoOuForm(true);
  };
  const handleSubmit = (evento: React.FormEvent<HTMLFormElement>) => { // Prevenir que carregue
    evento.preventDefault();
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { // Qualquer mudança nos inputs eles alteram o estado.
    const { name, value } = e.target;
    setDadosDoForm((prevState) => ({
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

    setDadosDoForm((current) => ({
      ...current,
      password: novaSenha,
    }));

    const senhaValidada = novaSenha.length >= tamanhoMinimo
    && novaSenha.length <= tamanhoMaximo
    && /^(?=.*[a-zA-Z])(?=.*\d)/.test(novaSenha)
    && /[!@#$%^&*(),.?":{}|<>]/.test(novaSenha);

    setSenhaValidaChecada(senhaValidada);
  };
  const onClickDoCancelar = () => {
    setMostrarBotaoOuForm(false); // Mostrar novamente o botão "Cadastrar Nova Senha"
    onClickDoLimparFormulario(); // Limpar os dados do formulário
  };
  const onClickDoLimparFormulario = () => {
    setDadosDoForm({
      name: '',
      login: '',
      password: '',
      url: '',
    });
    setSenha({
      tamanhoMinimo: false,
      tamanhoMaximo: false,
      temLetrasENumeros: false,
      temCaracteresEspeciais: false,
    });
    setSenhaValidaChecada(false);
  };
  const onClickDoCadastrar = () => {
    setListaDeDados((prevState) => [...prevState, dadosDoForm]);
    onClickDoLimparFormulario();
    setMostrarBotaoOuForm(false);
  };

  return (
    <div>
      <section id="titulo">
        <Title titulo="Gerenciador de Senhas" />
      </section>
      <section id="secao-botao-&-formulario">
        {!mostrarBotaoOuForm
          ? <BotaoCadastrar
              cadastrada={ listaDeDados.length === 0 ? cadastrada : noCadastrada }
              onClick={ handleMostrarInformacoes }
          />
          : <Form
              dadosDoForm={ dadosDoForm }
              handleChange={ handleChange }
              handleChangeSenha={ handleChangeSenha }
              onSubmit={ handleSubmit }
              senha={ senha }
              onClickDoCancelar={ onClickDoCancelar }
              SenhaValidaChecada={ SenhaValidaChecada }
              onClickDoCadastrar={ onClickDoCadastrar }

          /> }
      </section>
      <section id="secao-senhas-cadastradas">
        {listaDeDados
          && <ListaDeSenhaCadastrada dados={ listaDeDados } />}
      </section>
    </div>
  );
}

export default ComponentePrincipal;
