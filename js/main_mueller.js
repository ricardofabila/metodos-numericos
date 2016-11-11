new Chartist.Line('.ct-chart');

$("#btn_calc_raiz").click(function() {
	
	let ecuacion = $( "#ecuacion" ).val();
	let X1 = parseFloat($( "#Xo" ).val());
	let X2 = parseFloat($( "#X1" ).val());
	let X3 = parseFloat($( "#X2" ).val());
  let deseado = parseFloat($( "#deseado" ).val());

	if ($( "#ecuacion" ).val() === "" || $( "#Xo" ).val() == "" || $( "#X1" ).val() == "" || $( "#X2" ).val() == "" || $( "#deseado" ).val() == "" ) {
		console.log("One of the elements is empty");
	} else {

    let result = findRoot(X1, X2, X3, ecuacion, deseado / 100);

    console.log(result);

    let real = Math.round(getY(ecuacion, result.raiz) * 1000) / 1000;

    $( "#raiz" ).text( ( Math.round(result.raiz * 100) / 100 )  + "");
    $( "#real" ).text( real + "");
    $( "#error" ).text( result.error + "");

	}
});

$("#btn_graficar").click(function() {

  let ecuacion = $( "#ecuacion" ).val();

  if ($( "#ecuacion" ).val() === "") {
    console.log("Ingrese una ecuación");
  } else {

     let x = [];

        for (var i = -10; i <= 10; i++) {
            let str = "" + i;
            x.push(str);
        }

        console.log(x);

        let y = [];

        for (var i = 0; i < x.length ; i++) {
            let temp = getY(ecuacion, x[i]);
            let str = "" + temp;
            y.push(str);
        }

        console.log(y);


        let data = {
          // A labels array that can contain any sort of values
          labels: x,
          // Our series array that contains series objects or in this case series data arrays
          series: [
            y
          ]
        };

        // Create a new line chart object where as first parameter we pass in a selector
        // that is resolving to our chart container element. The Second parameter
        // is the actual data object.
        new Chartist.Line('.ct-chart', data);
  }

});

$('.number').keypress(function(event) {
  if ((event.which != 46 || $(this).val().indexOf('.') != -1) && (event.which < 48 || event.which > 57)) {
    event.preventDefault();
  }
});