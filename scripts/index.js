/**
 * Funcion para los mapas de los Almacenes
 * lat: 19.7083441, lng: -101.2148354
 * lat: 19.6896929, lng: -101.1759843
 * lat: 23.293196,  lng: -111.6546634
 * lat: 19.7025961, lng: -101.1930753
 **/ 

var markers = [];
var uniqueId = 1;

window.onload = function () {
    var mapOptions = {
        center: new google.maps.LatLng(19.7025961,-101.1930753),
        zoom: 5,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"), mapOptions);

    //Attach click event handler to the map.
    google.maps.event.addListener(map, 'click', function (e) {

        //Determine the location where the user has clicked.
        var location = e.latLng;

        //Create a marker and placed it on the map.
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });

        //Set unique id
        marker.id = uniqueId;
        uniqueId++;

        //Attach click event handler to the marker.
        google.maps.event.addListener(marker, "click", function (e) {
            var content = 'Latitude: ' + location.lat() + '<br />Longitude: ' + location.lng();
            //content += "<br /><input type = 'button' va;ue = 'Delete' onclick = 'DeleteMarker(" + marker.id + ");' value = 'Delete' />";
            var infoWindow = new google.maps.InfoWindow({
                content: content
            });
            infoWindow.open(map, marker);
			document.getElementById("lab1").innerHTML = (content += "<br /><input type = 'button' value = 'Delete' onclick = 'DeleteMarker(" + marker.id + ");' value = 'Delete' />");
        });

        //Add marker to the array.
        markers.push(marker);
    });
};

function DeleteMarker(id) {
	document.getElementById("lab1").innerHTML = "";
    //Find and remove the marker from the Array
    for (var i = 0; i < markers.length; i++) {
        if (markers[i].id == id) {
            //Remove the marker from Map                  
            markers[i].setMap(null);

            //Remove the marker from array.
            markers.splice(i, 1);
            return;
			
        }
    }
};

/**
let map;

function initMap() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
		  	(position) => {
				const pos = {
			  		lat: position.coords.latitude,
			  		lng: position.coords.longitude,
				};

				const marker = new google.maps.Marker({
					position: pos,
					map: map,
				});

				const infowindow = new google.maps.InfoWindow({
					content: "<p>Ubicación actual:" + marker.getPosition() + "</p>",
				});
				
				google.maps.event.addListener(marker, "click", () => {
					infowindow.open(map, marker);
				});

				map.setCenter(pos);

				document.getElementById("razonReferencia").innerHTML = marker.getPosition();

				map.addListener("click", (e) => {
					placeMarketAndPanTo(e.latLng, map);
				});
		  	},
		  	() => {
			   handleLocationError(true, infoWindow, map.getCenter());
		 	}
		);
  	} else {
		// Browser doesn't support Geolocation
		handleLocationError(false, infoWindow, map.getCenter());
  	}
	
	const coord = { lat: 22.7906907,  lng: -103.7577429 };
	
	const mapOptions = {
		zoom: 18,
		center: coord,
	};

   	map = new google.maps.Map(document.getElementById("map"), mapOptions);

}

function placeMarketAndPanTo(latLng, map){
	new google.maps.Marker({
		position: latLng,
		map: map,
	});
	
	map.panTo(latLng);
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
	infoWindow.setPosition(pos);
	infoWindow.setContent(
	  browserHasGeolocation
		? "Error: El servicio de locaclización no esta disponible."
		: "Error: Tu navegador no soporta el servicio."
	);
	infoWindow.open(map);	
}  


geocode();

function geocode(){
  var location = "1600 Amphitheatre Parkway Mountain View CA";
	axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
		params:{
			address: location,
			key: "AIzaSyB84I-HSPONnX3OHkVRMRMUst48NmbMDFc"
		}
	})
	.then(function(response){
		
		console.log(response)
		
		//Formated Address
		var formattedAddress = console.log(response.data.results[0].formatted_address);
		var froamttedAdrresOutPut = '<ul class="list-group"><li class="list-group-item">${formattedAddress}</ul>';
		
		//Address components
		var addressComponents = response.data.results[0].address_components;
		var addressComponentsOuput = '<ul class="list-group">';
		for(var i = 0; i < addressComponents.length; i++){
			addressComponentsOuput += '<li class="list-group-item"><strong>${addressComponents[i].types[0]}</strong>: ${addressComponents[i].long_name}</li>';
		}
		addressComponentsOutput += '</ul>'
		
		//Output to app
		document.getElementById("formatted-address").innerHTML = 
		formattedAddressOutput;
		document.getElementById("address-components").innetHTML = 
		addressComponentsOutput;
		
	})
	.catch(function(error){
		console.log(error);
	});
}

**/