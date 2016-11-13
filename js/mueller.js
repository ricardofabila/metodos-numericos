function findRoot(a, b, c, func, errorDeseado) {
	
	errorDeseado = math.abs(errorDeseado);
	
	let temp = 100;
	let d = 0;
	
	while (temp > errorDeseado){
		d = mueller(a,b,c, func);
		console.log("raiz = " + d);
		temp = getError(c,d);
		a = b;
		b = c;
		c = d;
	}

	temp = Math.round(getError(c,d) * 100) / 100;
	return {raiz : d, error : temp };
}

function mueller(X0,X1,X2, func) {
	
	let f0 = getY(func, X0);
	//console.log("f0 = " + f0);
	let f1 = getY(func, X1);
	//console.log("f1 = " + f1);
	let f2 = getY(func, X2);
	//console.log("f2 = " + f2);

	let h0 = X1 - X0;
	//console.log("h0 = " + h0);
	let h1 = X2 - X1;
	//console.log("h1 = " + h1);

	let beta0 = (f1 - f0) / h0;
	//console.log("beta0 = " + beta0);
	let beta1 = (f2 - f1) / h1;
	//console.log("beta1 = " + beta1);

	let a = (beta1 - beta0) / (h1 + h0);
	//console.log("a = " + a);
	let b = (a * h1) + beta1;
	//console.log("b = " + b);
	let c = f2;
	//console.log("c = " + c);

	let discriminante = Math.pow( ((b * b) - (4*a*c) ) , 0.5 );
	//console.log("discriminente = " + discriminante);

	let X3 = X2 + (-2 * c ) / ( b +  discriminante);

	//console.log("raiz = " + X3);

	return X3;
}

function getError(anterior, nuevo) {
	error = ( math.abs(nuevo - anterior) / nuevo) * 100;
	//console.log("error  = " + error);
	return error;
}

function getY( func, x ) {
  let str = func.split("x").join( "(" + x + ")" );
  //console.log( str );
  let result = math.eval(str);
  //console.log( "f(" + x + ") = " + result );
  return result;
}