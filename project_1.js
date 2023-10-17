function ajaxCall() {
    let input = document.getElementById('searchText');
    let URL = `https://www.google.com/search?q=${input.value}`;
    fetch(URL).
        then((response) => {
            if (response.ok) {
                return response.text();
            }
        }).
        then((data) => {
            let div = document.getElementById('content');
            div.style.display = 'block';
            div.innerHTML = data;
            console.log(data)
        })
}

// search Suggestions


let search = document.getElementById('searchText');
let suggestions = document.getElementById('searchSuggestions');
let button = document.getElementById('btn');

let suggestionsArray = [];

// Load suggestions from localStorage on page load
const storedSuggestions = localStorage.getItem('suggestionsArray');
if (storedSuggestions) {
    suggestionsArray = JSON.parse(storedSuggestions);
}

// Function to update suggestions in localStorage
function updateLocalStorage() {
    localStorage.setItem('suggestionsArray', JSON.stringify(suggestionsArray));
}

button.addEventListener('click', () => {
    const inputSearchValue = search.value.trim();

    if (inputSearchValue && !suggestionsArray.includes(inputSearchValue)) {
        suggestionsArray.push(inputSearchValue);
        updateLocalStorage(); // Save the updated suggestions to localStorage
    }
    suggestions.style.display = "none";
    
});

search.addEventListener('input', () => {
    const inputSearchValue = search.value.trim();
    
    if (inputSearchValue) {
        const matchingSuggestions = suggestionsArray.filter((item) =>
        item.toLowerCase().includes(inputSearchValue.toLowerCase())
        );
        suggestions.style.display = "block";
        suggestions.innerHTML = '';
        matchingSuggestions.forEach((item) => {
            const suggestionsDiv = document.createElement('div');
            suggestionsDiv.innerHTML = item;
            suggestionsDiv.classList = 'suggestionsDiv';
            suggestionsDiv.addEventListener('click', () => {
                search.value = item; // Replace the text in the search box
                suggestions.style.display = "none";
                suggestions.innerHTML = ''; // Clear the suggestions
            });
            suggestions.appendChild(suggestionsDiv);
        });
    } else {
        // Remove suggestions when input is empty
        suggestions.innerHTML = '';
        suggestions.style.display = "none";
    }
});


























