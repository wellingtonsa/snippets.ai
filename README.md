# Snippet AI

Este projeto foi criado como parte de um desafio técnico proposto pela empresa [Pluga](https://pluga.co). Nele, ten-se como intuito a construção de um sistema para criação de resumos de forma simplificada utilizando IA. 

## Stack

Para o backend, foram utilizado as seguintes tecnologias e ferramentas:
 - Ruby 3 e Rails 8 como base para a implementação da API
 - RSpec para testes
 - Rubocop para lint
 - Solargraph para auxilio no processo de escrita do código

Já para o frontend, as seguintes tecnologias e ferrramentas foram utilizadas:
 - Next.js 15 como base para a implementação da interface
 - Jest para testes
 - ESLint para lint
 - Tailwhind para auxilio na estilização dos componentes
 - Shadcn para auxilio na criação dos componentes
 - Axios e React Query para criação de chamadas à API

Demais ferramentas:
 - PostgreSQL como banco de dados do projeto
 - ChatGPT como modelo de IA
 - Github Actions para CI
 - Docker para conteinerização da aplicação

## Pré Requisitos
Caso deseje rodar o projeto localmente, os seguintes pacotes devem estar instalados previamente:

- Nodejs 22 ou superior
- Ruby 3+
- Rails 8+
- PostgresSQL 14+

Caso deseje utilizar via Docker, basta ter o mesmo instalado em sua máquina. 


Além dos pacotes mencionados, também é preciso uma chave de API da OpenAI, que pode ser obtida da seguinte forma:
- Acesse o site da [OpenAI Developer Platform](ttps://platform.openai.com)
- Crie uma conta, ou faça login caso já seja cadastrado
- Na tela inicial, clique em "API Keys" (Ou "Chaves de API") no menu lateral
![Alt text](https://i.imgur.com/XqaMwrU.png)
- Na próxima tela, haverá botão no canto superior direito, intitulado "Create a new secret key" (Ou "Criar nova chave secreta")
![Alt text](https://i.imgur.com/Pkb8O8v.png)
- Um modal aparecerá, onde é possível adicionar um nome indentificador para a chave, fazer outras configurações como controle de acesso. Após preenchido o nome identificador, deve-se clicar em "Create secret key" (Ou "Criar palavra secreta")
![Alt text](https://i.imgur.com/yVVBtEp.png)
- A chave de API deve aparecer na tela

Nota: A chave de API só aparecerá uma única vez. Então é recomendado que seja feito uma cópia assim que criada, pois caso seja perdida, uma nova chave de API terá que ser feita. Além disto, como este é um serviço pago, faz-se necessário a adição de crédito na sua conta da OpenAI para usufuir do serviço.

## Instruções de execução

Clone o projeto utilizando o seguinte comando pelo terminal
```
git clone https://github.com/wellingtonsa/snippets.ai.git
```

### Para rodar localmente, execute os seguintes passos:
#### Backend:
```
cd backend
```
Crie um arquivo `.env`  na raiz da pasta `backend`, com as seguintes variaveis de ambiente

```
DB_HOST=localhost
DB_NAME=snippetsai
DB_USER=postgres # altere para o nome do usuario do banco de dados
DB_PASSWORD=12345 # altere para a senha do seu usuario do banco de dados
OPENAI_API_KEY= # sua chave de API da OpenAI obtida no passo anterior

```

Após, execute os seguintes comandos 
```
bundle install # para instalar as dependencias

rails db:prepare # para criar o banco de dados e as tabelas necessárias

rails s # para rodar o serviço do backend
```
Outros comandos também estão disponíveis como:
-  `rubocop` -  Para rodar o lint no projeto
- `rspec` -  Para rodar os testes


#### Frontend:
```
cd frontend
```
Crie um arquivo `.env`  na raiz da pasta `frontend`, com as seguintes variaveis de ambiente

```
NEXT_PUBLIC_API_URL=http://localhost:3000
```

Após, execute os seguintes comandos 
```
npm install # para instalar as dependencias

npm run start # para rodar o serviço do frontend
```
Outros comandos também estão disponíveis como:
- `npm run lint` -  Para rodar o lint no projeto
- `npm run test` -  Para rodar os testes

### Para rodar via Docker, os seguintes passos devem ser seguidos:

Crie um arquivo `.env` na raiz do projeto (fora das pastas `frontend` e `backend`), com o seguinte conteúdo:

```
DB_NAME=snippetsai
DB_USER=postgres # altere para o nome do usuario do banco de dados
DB_PASSWORD=12345 # altere para a senha do seu usuario do banco de dados
OPENAI_API_KEY= # sua chave de API da OpenAI obtida no passo anterior
```

Em seguida, execute os seguintes comandos:
```
docker-compose build 
docker-componse up
```
Após esses comandos, 3 containers devem ser gerados, um para o frontend, um para o backend, e outro para o banco de dados.


Tanto localmente como via Docker, os serviços podem ser acessados através:

- `https://localhost:3000` para o backend
- `https://localhost:4000` para o frontend
- Banco de dados via conexão JDBC utilizando as credencias presentes no `.env`

# Exemplos de requisições à API
[![Execute no Insomina}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=SnippetsAI&uri=https://raw.githubusercontent.com/wellingtonsa/snippets.ai/refs/heads/main/.insominia/snippetsai.yaml?token=GHSAT0AAAAAAC3M6J43QLO4PIHH6WPO7SQK2F2HF3A)


# Considerações finais e reflexão do desafio

Sem dúvidas esse foi um dos melhores desafios que já fiz, por diversos motivos. Geralmente um desafio tem o propósito ser um momento para mostrar habilidades com o que você já tem domínio, pondo em prática tudo que com o que você já está familiarizado.

No entanto, neste desafio eu me deparei com um grande "obstáculo" logo no inicio, Ruby on Rails. Eu particularmente já tinha ouvido falar na linguagem Ruby, e no framework Rails, mas nunca parei para pesquisar sobre, ou tentar entender mais sobre como funciona, mas assim que iniciei o desafio, me deparei com o requerimento do backend, que deveria ser feito utilizando Ruby on Rails, com direito implementação de bibliotecas para lint e testes. Talvez esta foi a primeira decisão que tive que tomar no projeto, decidir entre aprender enquanto implemento, ou tirar um tempo e me aprofundar no assunto.

Então, escolhi a segunda opção, e dos 7 dias de desafio, passei 4 pesquisando e aprendendo sobre Ruby e Rails, indo desde o básico até a construção de API e deploy em produção. Utilizei estes primeiros dias para aprender sobre a linguagem, como aplicar padrões de projeto na estrutura do Rails, e como ele funciona por baixo dos panos, e digo que com certeza aprendi muitas coisas que me foram úteis nos ultimos 3 dias de implementação. Percebi que tem algumas semelhanças com Golang, o que me ajudou a assimilar durante o aprendizado, e vi que o framework Rails já entrega tudo pronto e estruturado, desde estrutura de pastas, até arquivo Dokerfile pré-configurado.

Acredito que com mais tempo, eu poderia focar em melhorar tanto o backend quanto o frontend. No front, talvez melhorando a estrutura e organização do código e estilização dos componentes, além de fazer um melhor gerenciamento de textos. Já no backend, por ser algo novo pra mim, talvez eu investiria mais tempo estudando, pra aí sim descobrir o que poderia ser melhorado.

Em um ambito geral, existem algumas outras funcionalidades que talvez seriam interessantes de implementar, como uma forma de criar um identificador pro texto inserido (talvez um sistema de hash), para identificar na base de dados se aquele texto já foi resumido, e trazer o resumo do DB, ao invés de requisitar novamente a IA, pois requisições a modelos de IA são pagas, e em larga escala podem apresentar prejuizo financeiro. Outra funcionalidade interessante, seria a possibilidade de adicionar prompts avançados através da interface. Hoje, o prompt passado para a IA é fixo no backend, e não pode ser alterado ou melhorado de forma fácil, então talvez uma funcionalidade de requisição avançada, que possibilita o usuário a adicionar informações para enriquecer a resposta da IA poderia ser uma boa.

Por fim, gostaria de agradecer pela oportunidade, e espero que gostem do resultado de alguns dias aprendendo coisas novas e pensando na melhor forma de resolver o problema da criação de resumo através de IA.