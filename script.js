let ourTeam = [
    {
        nome: "Wayne Barnett",
        ruolo: "Founder & CEO",
        foto: "./img/wayne-barnett-founder-ceo.jpg"
    },

    {
        nome: "Angela Carol",
        ruolo: "Chief Editor",
        foto: "./img/angela-caroll-chief-editor.jpg"
    },

    {
        nome: "Walter Gordon",
        ruolo: "Chief Editor",
        foto: "./img/walter-gordon-office-manager.jpg"
    },

    {
        nome: "Angela Lopez",
        ruolo: "Social Media Manager",
        foto: "./img/angela-lopez-social-media-manager.jpg"
    },

    {
        nome: "Scott Estrada",
        ruolo: "Developer",
        foto: "./img/scott-estrada-developer.jpg"
    },

    {
        nome: "Barbara Ramos",
        ruolo: "Graphic Designer",
        foto: "./img/barbara-ramos-graphic-designer.jpg"
    },
]



let tbody = document.querySelector("tbody");

let cards = document.getElementById("cards");

for (let i = 0; i < ourTeam.length; i++) {
    console.log(ourTeam[i].nome);
    console.log(ourTeam[i].ruolo);
    console.log(ourTeam[i].foto);

    cards.innerHTML += `
    <div class="col-4 py-3">
        <div class="card" style="width: 18rem;">
            <img src="${ourTeam[i].foto}" class="card-img-top" alt="${ourTeam[i].nome}">
            <div class="card-body">
                <h5 class="card-title">${ourTeam[i].nome}</h5>
                <p class="card-text">${ourTeam[i].ruolo}</p>
            </div>
        </div>
    </div>
    `

}




