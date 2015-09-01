//Input Example

_INPUT = "2\n3 9\n17 24";

//Expected Output
/*
2
0
*/

//Second Input Example (Remember to comment the first example in order
//and uncomment the next line in order test this case)

//_INPUT = "4\n1 8\n2 4\n10 13\n11 20";

//Expected Output
/*
2
1
0
1
*/

//----- Start your code here -------

console.log("");
console.log("Verificar enteros y ver si alguno es un square integer:");
console.log(_INPUT);
_INPUT = _INPUT.split("\n");
T= _INPUT.length-1;
console.log("");
console.log("Se verifico y los numeros de cuadrados existentes por caso son:");
for (i=0; i<T; i++){
rangos = _INPUT[i+1];
rango = rangos.split(" ");
contador=0;
if(1 <= rango[0] && rango[0] <= rango[1] && rango[1] <= 1000000000){
for(m = rango[0]; m <= rango[1]; m++){
c = Math.sqrt(m);
c = c%1;
if(c==0){
contador = contador+1;
}
}
console.log(contador);
}
}
console.log("");


