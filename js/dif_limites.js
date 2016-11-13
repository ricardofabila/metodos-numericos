function calucalConError(fun, punto, errorDeseado) {

	if(punto == 0){
		let d = hardDerivative(fun, punto);
		console.log("harded: " + d);
		let erro = 0.0001;
		return {dx : d, err : erro };
	}
	
	errorDeseado = math.abs(errorDeseado);	
	let temp = 100;
	let d = 0;
	let c = 0;
	let h = 0.1;
	let i = 1;
	let a = 1;
	let z = false;

	let extra = 0;

	while (temp > errorDeseado){
		d = derivative(fun, punto, a);
		//console.log("dx = " + d);
		temp = getError(c,d);
		
		if(i == 1){
			extra = temp;
		}
		
		if(temp >= extra && i > 3 ){
			z = true;
			break;
		}

		i++;
		a = math.pow(h,i)
		let x = c;
		c = d;
		d = x;

	}
	
	console.log("last err before rounding:" + temp);
	temp = Math.round(temp * 100) / 100;
	console.log("last err :" + temp);

	if(z === true){
		d = NaN;
		temp = NaN;
	}

	if(d == NaN || temp == NaN || temp < 0){
		let d = hardDerivative(fun, punto);
		console.log("harded: " + d);
		let erro = 0.0001;
		return {dx : d, err : erro };
	}

	if(d == NaN || temp == NaN || temp < 0){
		d = NaN;
		temp = NaN;
	}

	return {dx : d, err : temp };
}


function getY( func, x ) {
  let str = func.split("x").join( "(" + x + ")" );
  //console.log( str );
  let result = math.eval(str);
  //console.log( "f(" + x + ") = " + result );
  return result;
}

function derivative(f,x,h) {
  
  let a = getY(f,x+h)
  //console.log(a);
  let b = getY(f,x)
  //console.log(b);
  let dy = (a - b)/h;
  //console.log( "f\'(" + x + ") = " + dy );
  return dy;
  
}

function hardDerivative(f,x) {
  let h = 0.0001;
  let a = getY(f,x+h);
  //console.log(a);
  let b = getY(f,x);
  //console.log(b);
  let dy = (a - b)/h;
  //console.log( "f\'(" + x + ") = " + dy );
  return dy;
  
}


function getError(anterior, nuevo) {
	error = ( Math.abs(nuevo - anterior) / nuevo) * 100;
	//console.log("error  = " + error);
	return error;
}