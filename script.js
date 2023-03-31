const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');
const resultsList = document.getElementById('results');

searchBtn.addEventListener('click', async () => {
  const query = searchInput.value;
  const url = `/search?query=${query}`;
  const response = await fetch(url);
  const results = await response.json();

  renderResults(results);
});

function renderResults(results) {
  resultsList.innerHTML = '';

  results.forEach(result => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = result.url;
    a.textContent = result.title;
    li.appendChild(a);
    resultsList.appendChild(li);
  });
}
