import {initMap} from './map.js'
import {putData, getData} from './data.js'



function init()
{
    initMap();
    getData();
}

window.init = init;

