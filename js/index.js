// Initialize count variable
let count = 0;

//// ---- SEARCH ---- ////

// - Search on index.html - //

function search() {
    const inputValue = document.getElementById("search").value;
    const searchResult = document.getElementById("search-result");

    if (inputValue.toUpperCase() === "BELLEVUE COLLEGE") {
        searchResult.innerHTML = "Results: <br>";
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
        searchResult.innerHTML += '<a href="html/dashboard.html">Bellevue College Dashboard</a> <br>';
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    } else if (inputValue.toUpperCase() === "BELLEVUE COLLEGE ") {
        searchResult.innerHTML = "Results: <br>";
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    } else if (inputValue.toUpperCase() === "BELLEVUE COLLEGE ANALYSIS") {
        searchResult.innerHTML = "Results <br>";
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
    } else if (inputValue.toUpperCase() === "BELLEVUE COLLEGE SUMMARY") {
        searchResult.innerHTML = "Results: <br>";
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    } else if (inputValue.toUpperCase() === "BELLEVUE COLLEGE DASHBOARD") {
        searchResult.innerHTML = "Results: <br>";
        searchResult.innerHTML += '<a href="html/dashboard.html">Bellevue College Dashboard</a> <br>';
    } else if (inputValue.toUpperCase() === "") {
        searchResult.innerHTML = "";
        searchResult.innerHTML += "Which college are you looking for?";
    } else {
        searchResult.innerHTML = "Results: <br>";
        searchResult.innerHTML += "The search that you are looking for is not found";
    }
}

//// ---- Display result ---- ////

// - Display summary - //
function display(){
    const getSummary1 = document.getElementById("summary-1");
    const getSummary2 = document.getElementById("summary-2");

    const getAnalysis1 = document.getElementById("analysis-1");
    const getAnalysis2 = document.getElementById("analysis-2");
    const getAnalysis3 = document.getElementById("analysis-3");
    const getAnalysis4 = document.getElementById("analysis-4");
    const getAnalysis5 = document.getElementById("analysis-5");

    const getResource1 = document.getElementById("resource-1");
    const getResource2 = document.getElementById("resource-2");
    const getResource3 = document.getElementById("resource-3");
    const getResource4 = document.getElementById("resource-4");
    const getResource5 = document.getElementById("resource-5");
    

    const getNavLogin = document.getElementById("nav-login");
    const getNavLogout = document.getElementById("nav-logout")

    const getLoginData = localStorage.getItem("loginData")
    const getSignUpData = localStorage.getItem("signupData")
    if (getLoginData !== null || getSignUpData !== null){
        getNavLogin.hidden = true;
        getNavLogout.hidden = false;
        if(getSummary1 && getSummary2){
            getSummary1.hidden = false;
            getSummary2.hidden = true;
        }
        else if (getAnalysis1 && getAnalysis2 && getAnalysis3 && getAnalysis4 && getAnalysis5){
            getAnalysis5.hidden = true;
            getAnalysis1.hidden = false;
            getAnalysis2.hidden = false;
            getAnalysis3.hidden = false;
            getAnalysis4.hidden = false;
        }
        else if (getResource1 && getResource2 && getResource3 && getResource4 && getResource5){
            getResource5.hidden = true;
            getResource1.hidden = false;
            getResource2.hidden = false;
            getResource3.hidden = false;
            getResource4.hidden = false;
        }
    }
    else{
        getNavLogin.hidden = false;
        getNavLogout.hidden = true;
        if(getSummary1 && getSummary2){
            getSummary1.hidden = true;
            getSummary2.hidden = false;

        }
        else if (getAnalysis1 && getAnalysis2 && getAnalysis3 && getAnalysis4 && getAnalysis5) {
            getAnalysis5.hidden = false;
            getAnalysis1.hidden = true;
            getAnalysis2.hidden = true;
            getAnalysis3.hidden = true;
            getAnalysis4.hidden = true;
            
        }
        else if (getResource1 && getResource2 && getResource3 && getResource4 && getResource5){
            getResource5.hidden = false;
            getResource1.hidden = true;
            getResource2.hidden = true;
            getResource3.hidden = true;
            getResource4.hidden = true;
        }
    }


}


//// ---- Logout ---- ////

// - Logout - //

function logout(){
    localStorage.clear();
    location.reload();
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

//// ---- SIGNUP ---- ////

function showSection(sectionName) {

    const loginSection = document.getElementById("login");
    const signupSection = document.getElementById("signup");

    loginSection.style.display = "none";
    signupSection.style.display = "none";

    document.getElementById(sectionName).style.display = "block";
}

const signupButton = document.getElementById("signup-btn");
const signupForm = document.getElementById("signup-form");
const resultsList = document.getElementById("results");

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(signupForm);
        const data = {};

        resultsList.innerHTML = "";

        formData.forEach((value, name) => {
            data[name] = value;
            resultsList.append(`${name}: ${value}`);
            resultsList.append(document.createElement("br"));
        });

        localStorage.setItem("signupData", JSON.stringify(data));

        document.getElementById("signup").style.display = "none";

        document.getElementById("results-page").style.display = "block";

        document.getElementById("nav-login").hidden = true;
        document.getElementById("nav-logout").hidden = false;
    });
}

//// ---- LOGIN ---- ////

function showSection(sectionName) {

    const loginSection = document.getElementById("login");
    const signupSection = document.getElementById("signup");

    loginSection.style.display = "none";
    signupSection.style.display = "none";

    document.getElementById(sectionName).style.display = "block";
}

const loginButton = document.getElementById("login-btn");
const loginForm = document.getElementById("login-form");
const resultsListLogin = document.getElementById("results-login");

if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(loginForm);
        const data = {};

        resultsList.innerHTML = "";

        formData.forEach((value, name) => {
            data[name] = value;
            resultsList.append(`${name}: ${value}`);
            resultsList.append(document.createElement("br"));
        });

        localStorage.setItem("loginData", JSON.stringify(data));

        document.getElementById("login").style.display = "none";

        document.getElementById("results-page-login").style.display = "block";

        document.getElementById("nav-login").hidden = true;
        document.getElementById("nav-logout").hidden = false;
    });
}

const slider = document.getElementById('slider');
    const output = document.getElementById('slider-value');

    output.textContent = slider.value; 

    slider.addEventListener('input', () => {
        output.textContent = slider.value;
    });