<!DOCTYPE html>
<html>	
	<head>
		<link rel="stylesheet" type="text/css" href="./assets/css/style.css" />
		<script src="./scripts/index.js"></script>
		<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
	</head>
    	<body>
		<label id="lab1"></label>
		<div class="container">
			<div id="formatted-address">
				<div id="map"></div>
			</div>	
		</div>
		<!-- Async script executes immediately and must be after any DOM elements used in callback. -->
		<script
		    src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAYgeDCDk2D4Nv67zhgHYk7dgwOFrM7hMs&sensor=true&callback=initMap" async>
		</script>
		<script>
			geocode();

			function geocode(){
			  var location = "1600 Amphitheatre Parkway Mountain View CA";
				axios.get("https://maps.googleapis.com/maps/api/geocode/json",{
					params:{
						address: location,
						key: "AIzaSyAYgeDCDk2D4Nv67zhgHYk7dgwOFrM7hMs"
					}
				})
				.then(function(response){

					console.log(response)
					
				})
				.catch(function(error){
					console.log(error);
					console.log("Aqui");
				});
			}
		</script>
	</body>
</html>