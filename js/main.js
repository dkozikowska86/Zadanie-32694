

// 2. Wewnątrz body dodaj button (znacznik <button>) z napisem "Klik!".

// 3. W pliku main.js stwórz zmienną o o nazwie "button" i przypisz do niej stworzony wcześniej przycisk (przy użyciu document.querySelector).

// 4. Następnie zaprogramuj event poprzez dodanie właściowości onclick w na obiekcie przechowywanym w zmiennej "button", który po jego kliknięciu będzie wyświetlał alert z napisem "Klik działa!".

// Pliki dodaj do zdalnego repozytorium i podeślij link do sprawdzenia.

let button = document.querySelector('button');

button.onclick = function() {
    alert('Klik działa!');
}
