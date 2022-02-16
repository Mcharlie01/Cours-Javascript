//variables
let cours = 'abc efg hij'
console.log(cours+'//cours avant MAJ')

cours = 'klm nop'
console.log(cours+'//cours après MAJ')

const prenom = 'patrice';
console.log(prenom) 

//functions
function FaireQuelqueChose() {
    console.log('je fais un truc');
}

FaireQuelqueChose();


//il existe un deuxième moyen plus utilisé pour le faire 

const fairUneTache = (type) => {
    console.log('je fais :' + type);
}

fairUneTache('du javascrpit')
fairUneTache('a manger')