'use strict'

// 1. address-book.html 

function ask() {
    // document.querySelector('.res-container').classList.add("hidden");
    // document.querySelector('.loading').classList.remove("hidden");
    getNames(renderAddressBook);
}

function renderAddressBook(data) {
    const strHTMLs = data.map(person =>
        `<li>
        First name: ${person.fname} <br>
        Last name: ${person.lname} <br>
        Tel: ${person.tel}  <br>
        Address: ${person.address} <br>
        City: ${person.city} <br>
        State: ${person.state} <br>
        Zip code: ${person.zip} <br>
        <img src="https://api.adorable.io/avatars/40/${person.fname}.png/"
        </li>`)
    document.querySelector('.address-book').innerHTML = strHTMLs.join('');
    // onToggleLoading();
}

// function onToggleLoading() {
//     document.querySelector('.res-container').classList.remove("hidden");
//     document.querySelector('.loading').classList.add("hidden");

// }


// 2. yes-no.html 

function onUserAsk(value) {
    if (value.length >= 3 & value.charAt(value.length - 1) === '?') {
        getAnswer(renderAnswer);
    }
}

function renderAnswer(data) {
    var res = document.querySelector('h2');
    res.innerText = data.answer;
    if (data.answer === 'yes') {
        console.log('yes')
        getJoke(renderJoke)
    } else {
        console.log('no');
        getDogImage(renderDogImage);
    }
}

function renderJoke(data) {
    var res = document.querySelector('h3')
    res.innerText = data.value.joke;
}

function renderDogImage(data) {
    document.querySelector('.res-container-2 img').src = data.message;
}

// 3. world-cup.html 

function onInit() {
    searchTeams(renderTeams);
}

function renderTeams(teams) {
    const strHTMLs = teams.map(team =>
        `
        <button onclick="onSelectTeam(this)">${team.country}</button>
        `)
    document.querySelector('.team-list').innerHTML = strHTMLs.join('');
}

function onTeamSearch(txt) {
    searchTeams(renderTeams, txt)
    console.log('TEAM SEARCH', txt);
}

function onSelectTeam(el) {
    var elSelectedTeam = el.innerText
    var selectedFifaCode = getFifaCode(elSelectedTeam);
    getTeamGames(renderTeamGames, selectedFifaCode);
}

function renderTeamGames(data) {
    console.log(data)
    const strHTMLs = data.map(game =>
        `<li>
        Game venue: ${game.venue} <br>
        Game winner: ${game.winner} <br>
        Home team: ${game.home_team.country} <br>
        Home team goals: ${game.home_team.goals} <br>
        Away team: ${game.away_team.country} <br>
        Away team goals: ${game.away_team.goals} <br>
        </li>`)
    document.querySelector('.country-games').innerHTML = strHTMLs.join('');
}


// 4.	clash-royal.html API 


function askChests() {
    getChects(renderChests);
}


function renderChests(chests) {
    var chestStr;

    const strHTMLs = chests.map((chest) => {
        chestStr = chest.idName.replace(/-\d+/g,'')
        chestStr = chestStr.replace(/'/g, '')
        return `<li>
        Chest name: ${chest.name} <br>
        Chest cost: ${chest.gemCost} <br>
        <img src="http://www.clashapi.xyz/images/chests/${chestStr}.png">
        </li>`

    })
    document.querySelector('.chests-list').innerHTML = strHTMLs.join('');
}
