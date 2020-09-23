import {data, putData} from './data.js';
import{addMarkerOnMap,visitDreamOnMap} from './map.js';


const dreamsContainer = document.querySelector("#dreams-container");

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

function BuildAllDreams()
{
    while(dreamsContainer.hasChildNodes())
    {
        dreamsContainer.removeChild(dreamsContainer.lastChild);
    }
    data.forEach(buildOneDream);
    addDreamsListeners();
}

//----------------------------------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------------------------------

function buildOneDream(dream)
{   
    const dreamElement = document.createElement("div");
    dreamElement.innerHTML = 
    `<div class="card text-center" id="${dream.id}">
        <h4 class="card-header font-weight-bold">${dream.description}</h4>
        <img src=${dream.imagePath} class="card-img-top" alt="">
        <div class="card-body">
            <a href="#" class="button-action btn btn-${dream.done ? "secondary":"danger"} btn-block font-weight-bold">${dream.done ? "Je veux le refaire":"Je me lance !"}</a>
        </div>
        <div class="card-footer text-muted text-right">
          <a href="#" type="button" class="button-visit btn btn-outline-secondary btn-sm">Visiter</a>
          <a href="${dream.link}" target="_blank" type="button" class="btn btn-outline-dark btn-sm">Plus d'info</a>
        </div>
    </div>`;
    dreamsContainer.appendChild(dreamElement);
    addMarkerOnMap(dream);

}

function addDreamsListeners()
{
    document.querySelectorAll(".button-visit").forEach(item => {
        item.addEventListener("click", event => {
            visitDream(item.parentElement.parentElement.getAttribute("id"));
        })
    });

    document.querySelectorAll(".button-action").forEach(item => {
        item.addEventListener("click", event => {
            toggleDreamDone(item.parentElement.parentElement.getAttribute("id"));
            BuildAllDreams();
        })
    });
}

function visitDream(dreamId)
{
    let position = data.filter(item => item.id == dreamId)[0].coordinates;
    visitDreamOnMap(position);
}

function toggleDreamDone(dreamId)
{
    let dream = data.filter(item => item.id == dreamId)[0];
    dream.done = !dream.done;
    putData();
}

export{BuildAllDreams};