// Récupération des boutons et de l'output
const buttons = document.querySelectorAll('button');
const output = document.getElementById('output');

// Ajout d'un événement de clic sur chaque bouton
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Récupère le texte du bouton cliqué
        const currentValue = button.textContent;
        
        // Si l'affichage est à 0, on remplace par la valeur du bouton
        if (output.textContent === '0') {
            output.textContent = currentValue;
        } else {
            // Sinon, on ajoute la valeur du bouton à la suite
            output.textContent += currentValue;
        }
    });
});
