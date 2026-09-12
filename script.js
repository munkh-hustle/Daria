function openModal(modalId) {
    const template = document.getElementById(modalId);
    const modalBody = document.getElementById('modal-body');
    const overlay = document.getElementById('modal-overlay');
    if (template && modalBody && overlay) {
        modalBody.innerHTML = template.innerHTML;
        overlay.style.display = 'flex';
    }
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    if (overlay) overlay.style.display = 'none';
}

window.onclick = function(event) {
    const overlay = document.getElementById('modal-overlay');
    if (event.target === overlay) closeModal();
};

function switchTab(tabId) {
    document.querySelectorAll('.tab-content').forEach(tab => tab.classList.remove('active'));
    document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
    document.getElementById(tabId).classList.add('active');
    event.currentTarget.classList.add('active');
}