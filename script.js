// --- 1. SÉCURITÉ POUR LE BOUTON DE L'ACCUEIL ---
// On utilise .querySelector('.mon-bouton-lien') pour cibler le vrai lien de ton accueil
const boutonAccueil = document.querySelector('.mon-bouton-lien');
if (boutonAccueil && document.body.classList.contains('page-accueil')) {
    boutonAccueil.addEventListener('click', () => {
        console.log("Navigation vers le portfolio en cours...");
    });
}

// --- 2. FONCTION DE DÉFILEMENT DU CARROUSEL ---
function defiler(bouton, direction) {
    const conteneur = bouton.parentElement.querySelector('.photos-defilement');
    const largeurPhoto = conteneur.clientWidth;
    
    conteneur.scrollBy({
        left: largeurPhoto * direction,
        behavior: 'smooth'
    });
}

// --- 3. FONCTIONS POUR LA POPUP COMPACTE ---
function ouvrirPopup(imageCliquee) {
    const popup = document.getElementById('monPopup');
    const grandePhoto = document.getElementById('photoAgrandie');
    
    grandePhoto.src = imageCliquee.src;
    popup.showModal();
}

function fermerPopup() {
    const popup = document.getElementById('monPopup');
    popup.close();
}

// Fermer la popup si on clique sur le fond sombre à l'extérieur
document.getElementById('monPopup')?.addEventListener('click', function(e) {
    if (e.target === this) {
        fermerPopup();
    }
});
