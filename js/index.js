// Initialize count variable
let count = 0;

//// ---- SEARCH ---- ////

// - Search on index.html - //

function search() {
    let inputValue = document.getElementById("search").value;
    inputValue = inputValue.toUpperCase();
    const searchResult = document.getElementById("search-result");

    if ("".includes(inputValue.trim())) {
        searchResult.innerHTML = "";
        searchResult.innerHTML += "Which college are you looking for?";
    } else if ("BELLEVUE COLLEGE".includes(inputValue.trim())) {
        searchResult.innerHTML = "Results: <br>";
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
        searchResult.innerHTML += '<a href="html/dashboard.html">Bellevue College Dashboard</a> <br>';
        searchResult.innerHTML += '<a href="html/resources.html">Bellevue College Resources</a> <br>';
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    } else if ("BELLEVUE COLLEGE ANALYSIS".includes(inputValue.trim())) {
        searchResult.innerHTML = "Results <br>";
        searchResult.innerHTML += '<a href="html/analysis.html">Bellevue College Analysis</a> <br>';
    } else if ("BELLEVUE COLLEGE DASHBOARD".includes(inputValue.trim())) {
        searchResult.innerHTML = "Results: <br>";
        searchResult.innerHTML += '<a href="html/dashboard.html">Bellevue College Dashboard</a> <br>';
    } else if ("BELLEVUE COLLEGE RESOURCES".includes(inputValue.trim())) {
        searchResult.innerHTML = "Results <br>";
        searchResult.innerHTML += '<a href="html/resources.html">Bellevue College Resources</a> <br>';
    } else if ("BELLEVUE COLLEGE SUMMARY".includes(inputValue.trim())) {
        searchResult.innerHTML = "Results: <br>";
        searchResult.innerHTML += '<a href="html/summary.html">Bellevue College Summary</a> <br>';
    } else {
        searchResult.innerHTML = "Results: <br>";
        searchResult.innerHTML += "The search that you are looking for is not found";
    }
}

//// ---- Display result ---- ////

// - Display summary - //
function display() {
    const getSummary1 = document.getElementById("summary-1");
    const getSummary2 = document.getElementById("summary-2");
    const getSummary3 = document.getElementById("summary-3");
    const getSummary4 = document.getElementById("summary-4");
    const getSummary5 = document.getElementById("summary-5");

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

    const getImagePanel = document.getElementById("image-panel");

    const getPostLogin1 = document.getElementById("post-login-1");
    const getPostLogin2 = document.getElementById("post-login-2");
    const getPostLogin3 = document.getElementById("post-login-3");

    const getNavLogin = document.getElementById("nav-login");
    const getNavLogout = document.getElementById("nav-logout");

    const getLoginData = localStorage.getItem("loginData");
    const getSignUpData = localStorage.getItem("signupData");
    if (getLoginData !== null || getSignUpData !== null) {
        getNavLogin.hidden = true;
        getNavLogout.hidden = false;
        getPostLogin1.hidden = false;
        getPostLogin2.hidden = false;
        getPostLogin3.hidden = false;
        if (getSummary1 && getSummary2 && getSummary3 && getSummary4 && getImagePanel && getSummary5) {
            getSummary5.hidden = true;
            getSummary1.hidden = false;
            getSummary2.hidden = false;
            getSummary3.hidden = false;
            getSummary4.hidden = false;
            getImagePanel.hidden = false;
        } else if (getAnalysis1 && getAnalysis2 && getAnalysis3 && getAnalysis4 && getImagePanel && getAnalysis5) {
            getAnalysis5.hidden = true;
            getAnalysis1.hidden = false;
            getAnalysis2.hidden = false;
            getAnalysis3.hidden = false;
            getAnalysis4.hidden = false;
            getImagePanel.hidden = false;
        } else if (getResource1 && getResource2 && getResource3 && getResource4 && getImagePanel && getResource5) {
            getResource5.hidden = true;
            getResource1.hidden = false;
            getResource2.hidden = false;
            getResource3.hidden = false;
            getResource4.hidden = false;
            getImagePanel.hidden = false;
        } else {
            console.log("No Analysis, Summary or Resources was found on this page. ");
        }
    } else {
        getNavLogin.hidden = false;
        getNavLogout.hidden = true;
        getPostLogin1.hidden = true;
        getPostLogin2.hidden = true;
        getPostLogin3.hidden = true;
        if (getSummary1 && getSummary2 && getSummary3 && getSummary4 && getImagePanel && getSummary5) {
            getSummary5.hidden = false;
            getSummary1.hidden = true;
            getSummary2.hidden = true;
            getSummary3.hidden = true;
            getSummary4.hidden = true;
            getImagePanel.hidden = true;
        } else if (getAnalysis1 && getAnalysis2 && getAnalysis3 && getAnalysis4 && getImagePanel && getAnalysis5) {
            getAnalysis5.hidden = false;
            getAnalysis1.hidden = true;
            getAnalysis2.hidden = true;
            getAnalysis3.hidden = true;
            getAnalysis4.hidden = true;
            getImagePanel.hidden = true;
        } else if (getResource1 && getResource2 && getResource3 && getResource4 && getImagePanel && getResource5) {
            getResource5.hidden = false;
            getResource1.hidden = true;
            getResource2.hidden = true;
            getResource3.hidden = true;
            getResource4.hidden = true;
            getImagePanel.hidden = true;
        } else {
            console.log("No Analysis, Summary or Resources was found on this page. ");
        }
    }
}

//// ---- Logout ---- ////

// - Logout - //

function logout() {
    localStorage.clear();
    const pathname = window.location.pathname;
    if (pathname.endsWith("/index.html")) {
        location.href = "./index.html";
        window.location.reload(true);
        return;
    } else {
        location.href = "../index.html";
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

//// ---- SIGNUP ---- ////

function showSection(sectionName) {
    const loginSection = document.getElementById("login");
    const signupSection = document.getElementById("signup");

    loginSection.style.display = "none";
    signupSection.style.display = "none";

    document.getElementById(sectionName).style.display = "block";

    clearAllErrors();
}

function clearAllErrors() {
    var errorMessages = document.querySelectorAll(".error-message");
    for (var i = 0; i < errorMessages.length; i++) {
        errorMessages[i].style.display = "none";
    }

    var inputs = document.querySelectorAll("input");
    for (var j = 0; j < inputs.length; j++) {
        inputs[j].classList.remove("field-error");
    }
}

function showError(fieldId, message) {
    const errorElement = document.getElementById(fieldId + "-error");
    const inputElement = document.querySelector(`[name="${fieldId}"]`);

    if (errorElement && inputElement) {
        errorElement.textContent = message;
        errorElement.style.display = "block";
        inputElement.classList.add("field-error");
        inputElement.classList.remove("field-valid");
    }
}

function hideError(fieldId) {
    var errorElement = document.getElementById(fieldId + "-error");
    var inputElement = document.querySelector('[name="' + fieldId + '"]');

    if (errorElement && inputElement) {
        errorElement.style.display = "none";
        inputElement.classList.remove("field-error");
    }
}

function validatePhone(phone) {
    let digitCount = 0;
    for (let i = 0; i < phone.length; i++) {
        const char = phone[i];
        if (char >= "0" && char <= "9") {
            digitCount++;
        }
    }
    return digitCount === 10;
}

function formatPhone(input) {
    let numbersOnly = "";
    for (let i = 0; i < input.value.length; i++) {
        const char = input.value[i];
        if (char >= "0" && char <= "9") {
            numbersOnly += char;
        }
    }

    if (numbersOnly.length <= 3) {
        input.value = numbersOnly;
    } else if (numbersOnly.length <= 6) {
        input.value = "(" + numbersOnly.substring(0, 3) + ") - " + numbersOnly.substring(3);
    } else if (numbersOnly.length <= 10) {
        input.value =
            "(" + numbersOnly.substring(0, 3) + ") - " + numbersOnly.substring(3, 6) + " - " + numbersOnly.substring(6);
    } else {
        input.value =
            "(" +
            numbersOnly.substring(0, 3) +
            ") - " +
            numbersOnly.substring(3, 6) +
            " - " +
            numbersOnly.substring(6, 10);
    }
}

function validateZipcode(zipcode) {
    if (zipcode.length !== 5) return false;

    for (let i = 0; i < zipcode.length; i++) {
        const char = zipcode[i];
        if (char < "0" || char > "9") {
            return false;
        }
    }
    return true;
}

function validateEmail(email) {
    if (!email.includes("@")) return false;
    if (!email.includes(".")) return false;
    if (email.indexOf("@") === 0) return false;
    if (email.endsWith(".")) return false;

    return true;
}

function validatePassword(password) {
    return password.length >= 1;
}

const signupForm = document.getElementById("signup-form");
if (signupForm) {
    const phoneInput = signupForm.querySelector('input[name="phone"]');
    if (phoneInput) {
        phoneInput.addEventListener("input", function () {
            formatPhone(this);
        });
    }

    const zipcodeInput = signupForm.querySelector('input[name="zipcode"]');
    if (zipcodeInput) {
        zipcodeInput.addEventListener("input", function () {
            var numbersOnly = "";
            for (var i = 0; i < this.value.length; i++) {
                var char = this.value[i];
                if (char >= "0" && char <= "9") {
                    numbersOnly += char;
                }
            }
            this.value = numbersOnly.substring(0, 5);
        });
    }
}

function validateSignupField(fieldName, value) {
    switch (fieldName) {
        case "firstname":
        case "lastname":
            if (!value.trim()) {
                showError(fieldName, "This field is required");
            } else {
                hideError(fieldName);
            }
            break;
        case "phone":
            if (!value.trim()) {
                showError(fieldName, "Phone number is required");
            } else if (!validatePhone(value)) {
                showError(fieldName, "Please use format: (123) - 456 - 7890");
            } else {
                hideError(fieldName);
            }
            break;
        case "zipcode":
            if (!value.trim()) {
                showError(fieldName, "Zipcode is required");
            } else if (!validateZipcode(value)) {
                showError(fieldName, "Please enter a valid 5-digit zipcode");
            } else {
                hideError(fieldName);
            }
            break;
        case "email":
            if (!value.trim()) {
                showError(fieldName, "Email is required");
            } else if (!validateEmail(value)) {
                showError(fieldName, "Please enter a valid email address");
            } else {
                hideError(fieldName);
            }
            break;
        case "password":
            if (!value.trim()) {
                showError(fieldName, "Password is required");
            } else {
                hideError(fieldName);
            }
            break;
    }
}

if (signupForm) {
    signupForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(signupForm);
        let isValid = true;

        clearAllErrors();

        const fields = [
            {name: "firstname", message: "First name is required"},
            {name: "lastname", message: "Last name is required"},
            {name: "phone", message: "Phone number is required"},
            {name: "zipcode", message: "Zipcode is required"},
            {name: "email", message: "Email is required"},
            {name: "password", message: "Password is required"}
        ];

        for (var i = 0; i < fields.length; i++) {
            var field = fields[i];
            var value = formData.get(field.name);
            if (!value.trim()) {
                showError(field.name, field.message);
                isValid = false;
            } else {
                validateSignupField(field.name, value);
                var errorElement = document.getElementById(field.name + "-error");
                if (errorElement && errorElement.style.display === "block") {
                    isValid = false;
                }
            }
        }

        const password = formData.get("password");
        const passwordConfirm = formData.get("passwordconfirm");
        if (!passwordConfirm.trim()) {
            showError("passwordconfirm", "Please confirm your password");
            isValid = false;
        } else if (password !== passwordConfirm) {
            showError("passwordconfirm", "Passwords do not match");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const data = {};
        const resultsList = document.getElementById("results");

        resultsList.innerHTML = "";

        formData.forEach(function (value, name) {
            data[name] = value;
            resultsList.append(name + ": " + value);
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

const loginForm = document.getElementById("login-form");
if (loginForm) {
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const formData = new FormData(loginForm);
        let isValid = true;

        clearAllErrors();

        const email = formData.get("login-email");
        if (!email || !email.trim()) {
            showError("login-email", "Email is required");
            isValid = false;
        } else if (!validateEmail(email)) {
            showError("login-email", "Please enter a valid email address");
            isValid = false;
        }

        const password = formData.get("login-password");
        if (!password || !password.trim()) {
            showError("login-password", "Password is required");
            isValid = false;
        }

        if (!isValid) {
            return;
        }

        const data = {};
        const resultsListLogin = document.getElementById("results-login");

        if (resultsListLogin) {
            resultsListLogin.innerHTML = "";

            formData.forEach(function (value, name) {
                data[name] = value;
                resultsListLogin.append(name + ": " + value);
                resultsListLogin.append(document.createElement("br"));
            });

            localStorage.setItem("loginData", JSON.stringify(data));

            document.getElementById("login").style.display = "none";
            document.getElementById("results-page-login-bubble").style.display = "block";

            document.getElementById("nav-login").hidden = true;
            document.getElementById("nav-logout").hidden = false;
        }
    });
}

//// ---- UPDATE FORM VALIDATION ---- ////
const updateForm = document.querySelector("form.dashboard-form");
const resultsDashboard = document.getElementById("results-page-dashboard");
const slider = document.getElementById("slider");
const sliderValue = document.getElementById("slider-value");

if (slider && sliderValue) {
    sliderValue.textContent = slider.value;

    slider.addEventListener("input", function () {
        sliderValue.textContent = this.value;
    });
}

function validateEmail(email) {
    if (!email.includes("@")) return false;
    if (!email.includes(".")) return false;
    if (email.indexOf("@") === 0) return false;
    if (email.endsWith(".")) return false;

    return true;
}

function validateUpdateDate(dateString) {
    if (!dateString) return false;

    const selectedDate = new Date(dateString);
    const today = new Date();
    const selectedDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
    const todayDay = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    return selectedDay >= todayDay;
}

function showFieldError(fieldId, message) {
    hideFieldError(fieldId);

    const field = document.getElementById(fieldId);
    if (field) {
        const errorElement = document.createElement("div");
        errorElement.className = "field-error-message";
        errorElement.id = fieldId + "-error";
        errorElement.style.color = "red";
        errorElement.style.fontSize = "0.8em";
        errorElement.style.marginTop = "5px";
        errorElement.textContent = message;

        field.after(errorElement);
        field.style.border = "2px solid red";
    }
}

function hideFieldError(fieldId) {
    const errorElement = document.getElementById(fieldId + "-error");
    const field = document.getElementById(fieldId);

    if (errorElement) {
        errorElement.remove();
    }
    if (field) {
        field.style.border = "";
    }
}

if (updateForm) {
    updateForm.addEventListener("submit", function (e) {
        e.preventDefault();

        let isValid = true;

        hideFieldError("email");
        hideFieldError("update-date");

        const emailInput = document.getElementById("email");
        if (emailInput) {
            const emailValue = emailInput.value.trim();
            if (emailValue === "") {
                showFieldError("email", "Email is required");
                isValid = false;
            } else if (!validateEmail(emailValue)) {
                showFieldError("email", "Please enter a valid email address (e.g., user@example.com)");
                isValid = false;
            }
        }

        const dateInput = document.getElementById("update-date");
        if (dateInput) {
            const dateValue = dateInput.value;
            if (dateValue === "") {
                showFieldError("update-date", "Start date is required");
                isValid = false;
            } else if (!validateUpdateDate(dateValue)) {
                showFieldError("update-date", "Please select a date in the future");
                isValid = false;
            }
        }

        if (!isValid) {
            return;
        }

        const formData = new FormData(updateForm);
        const data = {};

        if (resultsDashboard) {
            resultsDashboard.innerHTML = "";

            const dataTypesDiv = document.getElementById("data-types");
            const checkedBoxes = dataTypesDiv.querySelectorAll('input[type="checkbox"]:checked');
            const selectedDataTypes = [];
            for (var i = 0; i < checkedBoxes.length; i++) {
                selectedDataTypes.push(checkedBoxes[i].value);
            }

            if (selectedDataTypes.length > 0) {
                resultsDashboard.append("datatype: " + selectedDataTypes.join(" "));
                resultsDashboard.appendChild(document.createElement("br"));
                data["datatype"] = selectedDataTypes.join(" ");
            }

            formData.forEach(function (value, name) {
                if (name !== "graphs" && name !== "headcount" && name !== "coa") {
                    data[name] = value;
                    resultsDashboard.append(name + ": " + value);
                    resultsDashboard.appendChild(document.createElement("br"));
                }
            });

            localStorage.setItem("updatePreferences", JSON.stringify(data));
            updateForm.style.display = "none";
            document.getElementById("results-page-dashboard").style.display = "block";
        }
    });
}

const output = document.getElementById("slider-value");
if (output && slider) {
    output.textContent = slider.value;

    slider.addEventListener("input", function () {
        output.textContent = slider.value;
    });
}
