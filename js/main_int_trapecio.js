new Chartist.Line('.ct-chart');

$("#btn_calc").click(function() {

	let ecuacion = $( "#ecuacion" ).val();
	let inferior = parseFloat($( "#inferior" ).val());
    let superior = parseFloat($( "#superior" ).val());
    let n = parseFloat($( "#n" ).val());

	if ($( "#ecuacion" ).val() === "" || $( "#inferior" ).val() == "" || $( "#superior" ).val() == "" || $( "#n" ).val() == "") {
		console.log("At least one of the elements is empty");
	} else {

        let x = [];
        let y = [];

        for (var i = inferior ; i <= superior; i++) {
            let str = "" + i;
            x.push(str);
        }
        //console.log(x);
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

        let options = {
            showArea: true
        };

        // Create a new line chart object where as first parameter we pass in a selector
        // that is resolving to our chart container element. The Second parameter
        // is the actual data object.
        new Chartist.Line('.ct-chart', data, options);

        if(inferior > superior){
            let z = inferior;
            inferior = superior;
            superior = z;
        }

        let area = integral(ecuacion, inferior, superior, n);
        area = Math.round(area * 1000) / 1000;
        $( "#area" ).text( area + "");

	}

});




$('.number').keypress(function(event) {
  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
    event.preventDefault();
  }
});