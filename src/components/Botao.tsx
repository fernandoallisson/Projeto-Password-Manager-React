type BotaoCadastrarProp = {
  onClick: () => void;
};

function BotaoCadastrar({ onClick }: BotaoCadastrarProp) {
  return (
    <button onClick={ onClick }>Cadastrar nova senha</button>
  );
}

export default BotaoCadastrar;
