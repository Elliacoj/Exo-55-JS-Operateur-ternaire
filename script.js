let paragraphe = document.getElementById('paragraphe');
let span5 = document.getElementById('span5');
let span12 = document.getElementById('span12');
let resultat = document.getElementById('resultat');
let container = document.getElementById('container');

resultat.innerHTML = (parseInt(span5.innerText) < parseInt(span12.innerText)) ? (parseInt(span5.innerText) + parseInt(span12.innerText)).toString() :
    (parseInt(span5.innerText) - parseInt(span12.innerText)).toString();

if (parseInt(resultat.innerText) - 10 < 0) {
    paragraphe.innerHTML = 'le résultat est inférieur à 0';
}

container.style.backgroundColor = 'green';