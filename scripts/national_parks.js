"use strict"


window.onload = () => {

    initParkselect();

    
    let selectByLocation = document.querySelector("#selectPark");

    let selectByType = document.querySelector("#selectType");

   
    selectByLocation.addEventListener("change", getInfoList)

}
function getInfoList(event) {

    let selectedState = event.target.value;

    
    let matchingActivities = nationalParksArray.filter((park) => {

        return park.State === selectedState;



    })
   
    let tableBody = document.querySelector("#inforTableBody");
    
    tableBody.innerHTML = "";

    matchingActivities.forEach((park) => {

       
        buildTableRow(tableBody, park);


    })

   
    function buildTableRow(tableBody, data) {

        let newRow = tableBody.insertRow(-1);

        let cell1 = newRow.insertCell(0);
       
        cell1.innerHTML = data.LocationID

        let cell2 = newRow.insertCell(1);
        cell2.innerHTML = data.LocationName

        let cell3 = newRow.insertCell(2);
        cell3.innerHTML = `${data.Address}, ${data.City}, ${data.State}, ${data.ZipCode}`

        let cell4 = newRow.insertCell(3)
        cell4.innerHTML = `Phone: ${data.Phone}, Fax: ${data.Fax}`

        let cell5 = newRow.insertCell(4)
        if (typeof data.Visit === "undefined"){
            cell5.innerHTML = "N/A"
        }else{
            cell5.innerHTML = data.Visit;
        }
    }

}


function initParkselect() {

    let selectByLocation = document.querySelector("#selectPark");
   
    let defaultOption = document.createElement("option");

    defaultOption.value = ""

    
    defaultOption.textContent = "-- Choose Park Location--";

   
    selectByLocation.appendChild(defaultOption);

    
    locationsArray.forEach((state) => {

       
        let newOption = document.createElement("option");

     
        newOption.value = state;

     
        newOption.textContent = state;

        selectByLocation.appendChild(newOption);


    })


}

function matchByStateName(nationalParksArray, state) {

    
    let matching = [];
   
    let numItems = nationalParksArray.length;

  
    for (let i = 0; i < numItems; i++) {
        if (nationalParksArray[i].State === state) {
           
            matching.push(nationalParksArray[i]);
        }
    }

    return matching;
}