function search(){
    const inputValue = document.getElementById("search").value 
    const searchResult = document.getElementById("search-result"); 

    if (inputValue.toUpperCase() === "BELLEVUE COLLEGE"){
        searchResult.innerHTML = '';
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
        searchResult.innerHTML += '<a href="html/dashboard.html">Bellevue College Dashboard</a> <br>';
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    }
    else if (inputValue.toUpperCase() === "BELLEVUE COLLEGE "){
        searchResult.innerHTML = '';
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    }
    else if(inputValue.toUpperCase() === "BELLEVUE COLLEGE ANALYSIS"){
        searchResult.innerHTML = '';
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
    }
    else if(inputValue.toUpperCase() === "BELLEVUE COLLEGE SUMMARY"){
        searchResult.innerHTML = '';
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    }
    else if (inputValue.toUpperCase() === ""){
        searchResult.innerHTML = '';
        searchResult.innerHTML += 'Which college are you looking for?';
    }
    else{
        searchResult.innerHTML = '';
        searchResult.innerHTML += 'The search that you are looking for is not found';

    }
}