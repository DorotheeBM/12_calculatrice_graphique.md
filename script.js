// Récupération des boutons et de l'output
const buttons = document.querySelectorAll('button');
const output = document.getElementById('output');

// Les chiffres et opérateurs s'ajoutent à la suite
let resetScreen = false;

// Ajout d'un événement de clic sur chaque bouton
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Récupère le texte du bouton cliqué
        const currentValue = button.textContent;
        
        // Si c'est le bouton égal, on calcule le résultat
        if (currentValue === '=') {
            try {
                let expression = output.textContent
                //eval() évalue l'expression mathématique sous forme de texte
                const result = eval(expression);
                // Affiche le résultat
                output.textContent = result;
                // réinitialiser l'affichage au prochain clic
                resetScreen = true;
                // Si Faute de frappe affichage du message "Error"
            } catch (error) {
                output.textContent = 'Error';
                // réinitialiser l'affichage au prochain clic
                resetScreen = true;
            }
        } 
        // SInon on repart de zéro
        else {
            if (resetScreen) {
                output.textContent = '0';
                // on peut retaper 
                resetScreen = false;
            }
            // Si 0 est affiché
            if (output.textContent === '0') {
                // On affiche le contenu du bouton cliqué
                output.textContent = currentValue;
                // sINON on concatène
            } else {
                output.textContent += currentValue;
            }
        }
    });
});
