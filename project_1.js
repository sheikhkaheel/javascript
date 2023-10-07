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
            div.innerHTML = data;
            console.log(data)
        })
}