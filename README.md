# pokemon
temos que pegar

Para rodar o teste será necessário um servidor local. Aqui vai a minha sugestão pessoal:

https://nodejs.org/en/

As versões 6.11.x e 8.5.x servem perfeitamente.

Primeiramente, baixe e instale o Node.js

Depois, clone ou faça o download do repositório (e descompacte-o) em um diretório que você tenha acesso.

Após a instalação do Node, instale o http-server através do NPM com o seguinte comando: npm install -g http-server

http-server é um servidor básico que supre a necessidade de executar o projeto.

Vá, pela linha de comando, até a pasta raiz de onde o projeto foi clonado ou descompactado (onde tem o arquivo index.html).

Inicie o servidor local com o comando: http-server -c-1 (o sufixo -c-1 é para desativar o cache do servidor).O servidor vai, automaticamente, iniciar em http://localhost:8080

Abra o browser e conecte-se em localhost:8080.
