// Fetch the JSON data

fetch('../data/parkingData.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json(); 
    })
    .then(data => {
        //use to check data object returned okay
        //console.log(data.parkingData);

         displayParkingData(data.parkingData);
    })
    .catch(error => {
        // Handle errors
        console.error('Fetch Error :-S', error);
    });


function displayParkingData(parkingData) {
   
    for (const log of parkingData) {
        console.log(`date: ${log.date}`);
        console.log(`time: ${log.time}`);
        console.log(`note: ${log.note}`);

        document.getElementById('dataSpot').innerHTML += `<li class="list-group-item"><strong>${log.date}, ${log.time}: </strong>${log.note}</li>`; 

 }
}