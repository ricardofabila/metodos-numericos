function integral(fun, inferior, superior, n) {

	if(inferior == superior){
		return 0;
	}

	if(inferior > superior){
		let z = inferior;
		inferior = superior;
		superior = z;
	}

	let area = 0;
	let h = math.abs(superior - inferior) / n;

	let x = [];
	for (var i = inferior ; i <= superior; i = i + h) {
	    x.push(i);
    }

    let y = [];
    for (var i = 0; i < x.length; i++) {
        let temp = getY(fun, x[i]);
        y.push(temp);
    }

    let m = [];
    for (var i = 0; i < x.length; i++) {
    	
    	if ( i == 0 ) {
    		m.push(1);
    	} else if ( i == x.length - 1) { 
    		m.push(1);
    	} else {
    		m.push(2);
    	}

    }

    let y_m = [];

	for (var i = 0; i < x.length; i++) {
        let temp = y[i] * m[i];
        y_m.push(temp);
    }

    let suma = 0;

    for (var i = 0; i < y_m.length; i++) {
        suma += y_m[i];
    }

    area = (h/2) * suma;

    /*
    console.log(x);
	console.log(y);
	console.log(m);
	console.log(y_m);
	*/

	console.log("last area before rounding:" + area);
	area = Math.round(area * 100) / 100;
	console.log("last area after rounding:" + area);

	return area;
}


function getY( func, x ) {
  let str = func.split("x").join( "(" + x + ")" );
  //console.log( str );
  let result = math.eval(str);
  //console.log( "f(" + x + ") = " + result );
  return result;
}

