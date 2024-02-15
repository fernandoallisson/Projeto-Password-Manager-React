# :construction: projeto Password Manager :construction:
Este projeto é uma aplicação web desenvolvida em React para gerenciar senhas de serviços online. Ele oferece funcionalidades para cadastrar novas senhas, exibir as senhas cadastradas e verificar a validade das senhas inseridas.

# Componentes Principais:

## BotaoCadastrar:
Componente responsável por exibir um botão para cadastrar uma nova senha. Ele recebe uma propriedade cadastrada, que determina se há senhas cadastradas ou não, e uma função onClick para lidar com o evento de clique no botão.

## ComponentePrincipal:
Este é o componente principal da aplicação, que organiza a estrutura geral. Ele mantém o estado dos dados do formulário, da lista de senhas cadastradas e do status de validação da senha. Além disso, gerencia os eventos relacionados ao formulário, como envio, alterações nos campos e ações dos botões.

## Form: 
Componente responsável por exibir o formulário de cadastro de senha. Ele inclui campos para nome do serviço, login, senha, URL e botões para cadastrar ou cancelar a operação. Também apresenta feedback sobre a validade da senha inserida.

## ListaDeSenhaCadastrada: 
Componente que exibe a lista de senhas cadastradas. Ele inclui um checkbox para ocultar as senhas, bem como botões para remover cada senha da lista.

## FormCard: 
Componente responsável por exibir os detalhes de cada senha cadastrada, como nome do serviço, login e senha (com a opção de mostrar ou ocultar a senha).

## Title: 
Componente simples para exibir o título da aplicação.

# Funcionalidades Principais:

### Cadastro de nova senha: 
Permite ao usuário inserir os dados do serviço, incluindo nome, login, senha e URL, e cadastrar a senha.
###  Validação da senha: 
Verifica se a senha inserida atende aos critérios de segurança, como tamanho mínimo, presença de letras, números e caracteres especiais.
### Exibição de senhas cadastradas: 
Apresenta uma lista das senhas cadastradas, com opção para mostrar ou ocultar a senha.
### Remoção de senha: 
Permite ao usuário remover uma senha cadastrada da lista.
# Tecnologias Utilizadas:

### React: 
Biblioteca JavaScript para construção de interfaces de usuário.
### useState: 
Hook do React para gerenciamento de estado nos componentes funcionais.
### SweetAlert2: 
Biblioteca para exibição de mensagens de alerta personalizadas.
### CSS: 
Estilos para a interface da aplicação.

# Conclusão:
Este projeto oferece uma solução prática para organizar e gerenciar senhas de serviços online, com uma interface intuitiva e funcionalidades essenciais para facilitar o uso diário.