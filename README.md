<h1>CLINICA DA MULHER</h1>
<p></p>Este projeto é uma landing page estática desenvolvida para a apresentação de uma clínica de saúde. A página contém informações básicas sobre os serviços oferecidos, como atendimento médico, exames laboratoriais, aconselhamento nutricional, entre outros. O layout é responsivo, garantindo que a página se adapte a diferentes tamanhos de tela. </p>

<h2>Funcionalidades</h2>

<li>Apresentação de profissionais;</li>
<li>Busca por nome do profissional;</li>
<li>Filtro por especialidade;</li>
<li>Exibiçao de informações da clínica;</li>
<li>Menu com abas de seções;</li>
<li>Localização;</li>
<li>Contato;</li> 

<h2>Tecnologias Utilizadas</h2>
<li>HTML5:Estrutura da página web;</li>
<li>CSS3: Estilização da página web;</li>
<li>JavaScript(ES6+): Lógica de interação com a API;</li>

<h2>Arquivos de dados</h2>
<li>JSON:Arquivos contendo os dados da equipe.</li>

<h2>Estrutura do Projeto</h2>

├── CLINICA

├── assets

├── backend

│   ├── css              

|   |    └── style.css  

│   ├── Js  
  
│   ├── app.js              

│   ├── index.html             # Página de disponibilidade de equipe 

├── frontend

│   ├── css

│   │   └── style.css          # Estilos do frontend

│   ├── js

│   │   └── app.js             # Código JavaScript para conexão com API


├── node_modules

│   ├── app.js

│   ├── equipe.js

├── index.html            # Página principal do frontend

└── README.md                  # Documentação do projeto</li>

<h2>Pré-requisitos</h2>
<li>Node.js (v12 ou superior)</li>
<li>npm (gerenciador de pacote do Node.js</li>

<h2>Como executar o projeto</h2>
<h3>1) Clone o repositório</h3>

git clone https://github.com/seu-usuario/nome-do-repositorio.git

<h3>2) Instale as dependências</h3>

cd backend
npm install

<h3>Inicie o servidor da API</h3>

node app.js

O servidor será iniciado na URL http://localhost:3000.

<h3>Abra o backend</h3>

Abrir o arquivo index.html no navegador.

index.html

Visualizará a página da clinica com o campos de buscar por nome e especialidade.
