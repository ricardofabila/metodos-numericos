new Chartist.Line('.ct-chart');

$("#btn_calc").click(function() {

	let ecuacion = $( "#ecuacion" ).val();
	let point = parseFloat($( "#point" ).val());
    let deseado = parseFloat($( "#deseado" ).val());

	if ($( "#ecuacion" ).val() === "" || $( "#point" ).val() == "" || $( "#deseado" ).val() == "") {
		console.log("At least one of the elements is empty");
	} else {
       
        let x = [];

        for (var i = -20; i <= 20; i++) {
            let str = "" + i;
            x.push(str);
        }

        //console.log(x);

        let y = [];

        for (var i = 0; i < x.length; i++) {
            let temp = getY(ecuacion, x[i]);
            let str = "" + temp;
            y.push(str);
        }

        //console.log(y);


        let data = {
          // A labels array that can contain any sort of values
          labels: x,
          // Our series array that contains series objects or in this case series data arrays
          series: [
            y
          ]
        };

        $( "#p" ).text(point + "");

        // Create a new line chart object where as first parameter we pass in a selector
        // that is resolving to our chart container element. The Second parameter
        // is the actual data object.
        new Chartist.Line('.ct-chart', data);

        let result = calucalConError(ecuacion, point, deseado);
        console.log(result);

        let dev = Math.round(result.dx * 1000) / 1000;
        let er = Math.round(result.err * 100) / 100;
        $( "#dev" ).text( dev + "");
        console.log(er);
        $( "#er" ).text( er + "");

	}

});




$('.number').keypress(function(event) {
  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
    event.preventDefault();
  }
});