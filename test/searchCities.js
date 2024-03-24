var OUR_DATA = []; // Array to store the data
var myCity;

$(document).ready(function () {
    GetCitiesData();
});

function GetCitiesData() {
    // Fetch data from local JSON file
    $.getJSON("data.json", function(result) {
        OUR_DATA = result; // Store the data in OUR_DATA array
        
        console.log("Fetched data:", OUR_DATA); // Debugging: Print fetched data
        
        // Loop through the data and populate the list
        for (var i = 0; i < OUR_DATA.length; i++) {
            var data = OUR_DATA[i];
            $("#listPopulate").append(
                `<tr><td id="city_list">${data.name}</td></tr>`
            );
        }
    });
}

function findCity(e) {
    if (e.code === "Enter") {
        $('#inputSearch').val('');
        $("#searchedData").empty(); // Clear previous search results
        
        // Find the city object in the OUR_DATA array
        var cityData = OUR_DATA.state.find(city => city.name.toLowerCase() === myCity.toLowerCase());
        console.log("searched data", cityData); // the state is properly getting filtered
        
        if (cityData) {
            // If city data is found, create HTML to display the data
            var html = `
                <div class="city-details">
                    <h2>${cityData.name}</h2>
                    <div class="info">
                        <p>${cityData.info}</p>
                        <img src="${cityData.images}" alt="${cityData.name}">
                        <a href="${cityData.location}" target="_blank">Location</a>
                    </div>
                </div>
            `;
            // Append the HTML to the specified element
            $("#searchedData").append(html);
        } else {
            // If city data is not found, display error message
            $("#searchedData").append(
                `<h2 class="no-result">No Result Found</h2>`
            );
        }
    }
}


function storeCity(t) {
    myCity = t.value.toLowerCase(); // Store the input city in lowercase
}

$("#btn_close").click(function(){
    $("#cityPopulate").empty();
});
