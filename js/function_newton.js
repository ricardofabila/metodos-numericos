function getY( func, x ) {
  let str = func.split("x").join( "(" + x + ")" );
  //console.log( str );
  let result = math.eval(str);
  //console.log( "f(" + x + ") = " + result );
  return result;
}

function derivative(f,x) {
  
  let h = 0.0001
  let a = getY(f,x+h)
  //console.log(a);
  let b = getY(f,x)
  //console.log(b);
  let dy = (a - b)/h;
  //console.log( "f\'(" + x + ") = " + dy );
  if (dy >= 0.00001) {
    return dy;
  } else {
    return 0.00001;
  }
  
}


function findRoot(ecuacion, Xo) {

  for (var i = 1; i <= 20; i++) {
    Xo = Xo - ( getY(ecuacion, Xo) / derivative(ecuacion, Xo) ); 
    if ( i % 2 == 0) {
      console.log("iteración " + i + ") raiz = " + Xo); 
    }
  }
  
  return Xo;

}