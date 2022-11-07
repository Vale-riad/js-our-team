'use strict'

//Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
//Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
const profile = [
    {
        name : 'Wayne Barnett',
        role : 'Founder & CEO',
        img : 'wayne-barnett-founder-ceo.jpg',
    },
    {
        name: "Angela Caroll",
        role: "Chief Editor",
        img: 'angela-caroll-chief-editor.jpg'
    },
    {
        name: "Walter Gordon",
        role: "Office Manager",
        img: "walter-gordon-office-manager.jpg",
    },
    {
        name: "Angela Lopez",
        role: "Social Media Manager",
        img: "angela-lopez-social-media-manager.jpg",
    },
    {
        name: "Scott Estrada",
        role: "Developer",
        img: "scott-estrada-developer.jpg",
    },
    {
        name: "Barbara Ramos",
        role: "Graphic Designer",
        img: "barbara-ramos-graphic-designer.jpg",
    },
];

//MILESTONE 1:
//Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto
for (let i = 0; i < profile.length; i++) {
    console.log(profile[i].name, profile[i].role, profile[i].img);
    const listProfiles = `<li>
    <h4>${profile[i].name}, ${profile[i].role}, ${profile[i].img}</h4>
    <img src="${profile.img}" alt="">
    </li>
    `;
    document.getElementById('list-profils').innerHTML += listProfiles;
}   
//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe

