# APIResearch
Atividade de PDW - Explicação do código JS
Declaração da função assíncrona: O código começa definindo uma função assíncrona chamada searchBooks(). A palavra-chave async indica que essa função será assíncrona, o que permite o uso de await para esperar por operações assíncronas, como chamadas de rede, sem bloquear a execução do código.

Obtendo valores dos elementos HTML: A função começa obtendo os valores de três elementos HTML da página usando o método getElementById(). Esses elementos são:

searchType: Um elemento de entrada (provavelmente um <select>) que representa o tipo de pesquisa a ser realizada.
searchInput: Um elemento de entrada (provavelmente um <input>) que representa o termo de pesquisa inserido pelo usuário.
apiKey: Uma chave de API do Google Books que será usada para autenticar a solicitação à API.
Chamada à API do Google Books: A função utiliza a função fetch() para enviar uma solicitação GET para a API do Google Books. A URL da solicitação é construída usando os valores de searchType, searchInput e apiKey para especificar o tipo de pesquisa e o termo de pesquisa. A resposta da API é aguardada usando await e armazenada na variável response.

Analisando a resposta JSON: Após obter a resposta da API, a função a converte em um objeto JavaScript usando await response.json(). Os dados JSON resultantes são armazenados na variável data.

Limpeza do contêiner de resultados: O código seleciona um elemento HTML com o id results e define seu conteúdo interno como uma string vazia para limpar qualquer resultado anterior.

Exibição dos resultados: Se a resposta da API contiver itens (livros), o código entra em um loop forEach para iterar por cada livro encontrado. Para cada livro, ele extrai informações relevantes, como título, autores, editora e ano de publicação, e cria um bloco HTML com essas informações. Em seguida, adiciona esse bloco HTML ao contêiner de resultados, acumulando os resultados anteriores.

Tratamento de nenhum resultado: Se a resposta da API não contiver itens (ou seja, nenhum livro correspondente à pesquisa), o código define o conteúdo do contêiner de resultados como uma mensagem informando que nenhum resultado foi encontrado.
