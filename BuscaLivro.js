async function searchBooks() {
    
    const searchType = document.getElementById('searchType').value;
    const searchInput = document.getElementById('searchInput').value;
    const apiKey = 'AIzaSyDqMCGbzM-0tiuDG-AwYze5kJRjSlXO1y4';

    const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchType}:${searchInput}&key=${apiKey}`);
    const data = await response.json();
    const resultsContainer = document.getElementById('results');

    resultsContainer.innerHTML = '';

    if (data.items) {
        data.items.forEach(book => {
            const bookInfo = book.volumeInfo;
            const bookHTML = `
                <div class="book-card">
                    <h2>${bookInfo.title}</h2>
                    <p><strong>Autor:</strong> ${bookInfo.authors ? bookInfo.authors.join(', ') : 'N/A'}</p>
                    ${bookInfo.imageLinks ? `<img src="${bookInfo.imageLinks.thumbnail}" alt="Capa do Livro">` : ''}
                    <p><strong>Editora:</strong> ${bookInfo.publisher ? bookInfo.publisher : 'N/A'}</p>
                    <p><strong>Ano:</strong> ${bookInfo.publishedDate ? bookInfo.publishedDate : 'N/A'}</p>
                </div>
            `;

            resultsContainer.innerHTML += bookHTML;
        });
    } else {
        resultsContainer.innerHTML = '<p>Nenhum resultado encontrado.</p>';
    }

}