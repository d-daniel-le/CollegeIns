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
