type BotaoCadastrarProp = {
  onClick: () => void;
  cadastrada: string
};

function BotaoCadastrar({ onClick, cadastrada }: BotaoCadastrarProp) {
  return (
    <>
      <button onClick={ onClick }>Cadastrar nova senha</button>
      <h4>{cadastrada}</h4>
    </>
  );
}

export default BotaoCadastrar;
