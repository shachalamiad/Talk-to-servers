'use strict'


// 1. address-book.html 

function getNames(onSuccess) {
var httpRequest = new XMLHttpRequest();
httpRequest.onreadystatechange = function () {
    if (httpRequest.readyState != 4 || httpRequest.status != 200) return;
    var data = JSON.parse(httpRequest.responseText);
    for (var i=0;i<data.length;i++){
        onSuccess(data);
    }
};

httpRequest.open("GET", "http://www.filltext.com/?rows=10&fname=%7bfirstName%7d&lname=%7blastName%7d&tel=%7bphone|format%7d&address=%7bstreetAddress%7d&city=%7bcity%7d&state=%7busState|abbr%7d&zip=%7bzip%7d&pretty=true", true);
httpRequest.send();
}


function getImages(onSuccess) {
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function () {
            if (httpRequest.readyState != 4 || httpRequest.status != 200) return;
            var images = JSON.parse(httpRequest.responseText);
            for (var i=0;i<data.length;i++){
                onSuccess(images);
            }
        };
        httpRequest.open("GET", "https://api.adorable.io/avatars/285", true);
        httpRequest.send();
}


// 2. yes-no.html 

function getAnswer(onSuccess) {
    $.get('https://yesno.wtf/api', onSuccess)
    
}

function getJoke(onSuccess) {
    $.get('http://api.icndb.com/jokes/random', onSuccess)
}

function getDogImage(onSuccess) {
    $.get('https://dog.ceo/api/breeds/image/random', onSuccess)
}


// 3. world-cup.html 

var gTeams;

function searchTeams(callbackFunction,filterByTxt) {
    if (gTeams) {
        if (!filterByTxt) callbackFunction(gTeams);
        else {
            const filteredTeams = gTeams.filter(team => team.country.includes(filterByTxt))
            callbackFunction(filteredTeams)
        }
        return;
    }

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE && 
            httpRequest.status === 200) {
            const teams = JSON.parse(httpRequest.responseText);
            gTeams = teams;
            callbackFunction(teams);
        }
    }

    httpRequest.open("GET", "https://worldcup.sfg.io/teams/", true);
    httpRequest.send();
}






function getFifaCode(SelectedTeam) {

    var team = gTeams.find(function(team) {
        return team.country === SelectedTeam;
      });
    return team.fifa_code
}


function searchTeams(onSuccess , filterByTxt) {

    if (gTeams) {
        
        if (!filterByTxt) onSuccess(gTeams);
        else {
            const filteredTeams = gTeams.filter(team => team.country.includes(filterByTxt))
            onSuccess(filteredTeams)
        }
        return;
    }

    $.get('https://worldcup.sfg.io/teams/', teams => {
        gTeams = teams;
        onSuccess(teams);
    });

}







function getTeamGames(onSuccess, selectedFifaCode) {

    if (!selectedFifaCode) return;

    var httpRequest = new XMLHttpRequest();

    httpRequest.onreadystatechange = function () {
        if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) {
            const teamGames = JSON.parse(httpRequest.responseText);
            onSuccess(teamGames);
        }
    }

    httpRequest.open("GET", `https://worldcup.sfg.io/matches/country?fifa_code=${selectedFifaCode}`, true);
    httpRequest.send();
}



// 4.	clash-royal.html API 
