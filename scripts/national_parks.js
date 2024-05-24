"use strict"

window.onload = () => {

    initParkselect();

    initTypeSelect();



    
    let selectByLocation = document.querySelector("#selectPark");

    let selectByType = document.querySelector("#selectType");

    let locationButton = document.querySelector("#location");

    let parkTypeButton = document.querySelector("#type");

   
    selectByLocation.addEventListener("change", getInfoOffList);

    selectByType.addEventListener("change", gettypeOffList);



}
function getInfoOffList(event) {

   
    let selectedState = event.target.value;

    
    let matchingActivities = nationalParksArray.filter((park) => {

      
        return park.State === selectedState;



    })
    
    let tableBody = document.querySelector("#infoTableBody");
   
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
        if (!data.Visit) {
            cell5.innerHTML = "N/A"
        } else {
            cell5.innerHTML = data.Visit;
        }
    }

}

function initParkselect() {

   
    let selectByLocation = document.querySelector("#selectPark");

    let defaultOption = document.createElement("option");

 
    defaultOption.value = "";

    selectByLocation.length = 0;

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


function initTypeSelect() {

 
    let selectByType = document.querySelector("#selectType");
   
    let defaultOption = document.createElement("option");

    defaultOption.textContent = "-- Choose A Park Type--";

    defaultOption.value = "0";


    selectByType.appendChild(defaultOption);

   
    parkTypesArray.forEach((park) => {

        let newOption = document.createElement("option");

     
        newOption.value = park;

     
        newOption.textContent = park;

        selectByType.appendChild(newOption);


    })
}
function gettypeOffList(event) {


    let selectedType = event.target.value;

    let matchingTypes = nationalParksArray.filter((type) => {

        for (let i = 0; i < parkTypesArray.length; i++) {
          
            if (type.LocationName.indexOf(selectedType) !== -1) {

                return true
            }
            return false
        };



    });

    let tableBody = document.querySelector("#infoTableBody");
  
    tableBody.innerHTML = "";
 
    let selectByType = document.querySelector("#selectType");



    matchingTypes.forEach((type) => {

       
        buildTableRow(tableBody, type);

    })
}

function buildTableRow(tableBody, chosen) {

    let newRow = tableBody.insertRow(-1);

    let cell1 = newRow.insertCell(0);
   
    cell1.innerHTML = chosen.LocationID

    let cell2 = newRow.insertCell(1);
    cell2.innerHTML = chosen.LocationName

    let cell3 = newRow.insertCell(2);
    cell3.innerHTML = `${chosen.Address}, ${chosen.City}, ${chosen.State}, ${chosen.ZipCode}`

    let cell4 = newRow.insertCell(3)
    cell4.innerHTML = `Phone: ${chosen.Phone}, Fax: ${chosen.Fax}`


    let cell5 = newRow.insertCell(4)
    if (!chosen.Visit) {
        cell5.innerHTML = "N/A"
    } else {
        cell5.innerHTML = chosen.Visit;



    }
}