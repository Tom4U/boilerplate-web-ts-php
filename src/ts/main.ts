const output = document.getElementById('output');

fetch('/api/check.php').then((response) => {
    response.json().then((result) => {
        if (output) output.innerText = result;
    });
});
