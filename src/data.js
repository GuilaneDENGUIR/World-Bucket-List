import {BuildAllDreams} from "./dream.js"

let data;

function getData()
{
    const req = new XMLHttpRequest();
    const method = "GET";
    const url = "https://world-bucket-lis-1549812567015.firebaseio.com/dreams.json";

    req.open(method,url);

    req.onreadystatechange = function(event){
        if(this.readyState === XMLHttpRequest.DONE)
        {
            if(this.status === 200)
            {
                data = JSON.parse(this.responseText);
                BuildAllDreams();
            }
            else
            {
                console.log("Status: ", this.status);
            }
        }

    }

    req.send();
}

function putData()
{
    const req = new XMLHttpRequest();
    const method = "PUT";
    const url = "https://world-bucket-lis-1549812567015.firebaseio.com/dreams.json";

    req.open(method,url);

    req.onreadystatechange = function(event){
        if(this.readyState === XMLHttpRequest.DONE)
        {
            if(this.status === 200)
            {
                console.log(JSON.parse(this.responseText));
            }
            else
            {
                console.log("Status: ", this.status);
            }
        }

    }

    req.send(JSON.stringify(data));
}


export{data,getData,putData};