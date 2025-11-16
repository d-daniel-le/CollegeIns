////---- Search ----////

// - Search on index.html - //

function search(){
    const inputValue = document.getElementById("search").value 
    const searchResult = document.getElementById("search-result"); 

    if (inputValue.toUpperCase() === "BELLEVUE COLLEGE"){
        searchResult.innerHTML = 'Results: <br>';
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
        searchResult.innerHTML += '<a href="html/dashboard.html">Bellevue College Dashboard</a> <br>';
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    }
    else if (inputValue.toUpperCase() === "BELLEVUE COLLEGE "){
        searchResult.innerHTML = 'Results: <br>';
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    }
    else if(inputValue.toUpperCase() === "BELLEVUE COLLEGE ANALYSIS"){
        searchResult.innerHTML = 'Results <br>';
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
    }
    else if(inputValue.toUpperCase() === "BELLEVUE COLLEGE SUMMARY"){
        searchResult.innerHTML = 'Results: <br>';
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    }
    else if(inputValue.toUpperCase() === "BELLEVUE COLLEGE DASHBOARD"){
        searchResult.innerHTML = 'Results: <br>';
        searchResult.innerHTML += '<a href="html/dashboard.html">Bellevue College Dashboard</a> <br>';
    }
    else if (inputValue.toUpperCase() === ""){
        searchResult.innerHTML = '';
        searchResult.innerHTML += 'Which college are you looking for?';
    }
    else{
        searchResult.innerHTML = 'Results: <br>';
        searchResult.innerHTML += 'The search that you are looking for is not found';

    }
}

//// ---- MODALS ---- ////

// - Open iframe modal (dashboard page) - //

function openModalIFrame(imgElement) {
    const link = imgElement.dataset.link;
    const modalIFrame = document.getElementById("modal-iframe");
    const modal = document.getElementById("modal");
    modalIFrame.src = link;
    modal.style.display = "block";
}

// - Close modal - //
function closeModal() {
    document.getElementById("modal").style.display = "none";
}

// - Close modal when clicking outside - //
window.onclick = function (event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        closeModal();
    }
};
