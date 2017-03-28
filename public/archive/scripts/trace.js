/* pour activer la trace, ajouter ce ci dans la balise "body" : onclick="showCoords(event)"
et inclure ce script avec   <!--  <script src="scripts/trace.js"></script> --> */ 


  function showCoords(event) {
      var x = event.clientX;
      var y = event.clientY;
      var coords = "X coords: " + x + ", Y coords: " + y;
      console.log(coords);
      console.log(event.target);
      console.log(event.model);
  }
