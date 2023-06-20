export type FormTipo = {
  id: string;
  name: string;
  url: string;
  login: string;
  password: string;
  dadosSalvos?: object[]
};

export type DadosTipo = {
  dados: FormTipo[]
  handleLixo: (event: React.MouseEvent<HTMLButtonElement>) => void
};

export type SenhaTipo = {
  tamanhoMinimo: boolean,
  tamanhoMaximo: boolean,
  temLetrasENumeros: boolean,
  temCaracteresEspeciais: boolean,
};

export type FormProp = {
  onClickDoCancelar: () => void;
  onClickDoCadastrar: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSenha: (e: React.ChangeEvent<HTMLInputElement>) => void;
  dadosDoForm: FormTipo;
  senha: SenhaTipo
  onSubmit: any;
  SenhaValidaChecada: boolean
};
