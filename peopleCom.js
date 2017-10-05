

 function countCommunication(p) {
var c=0;
if (p <= 3){
	console.log(p);
} else {

 p =p - 1;
 while(p > 0) { 

 c += p;
 p--;
 }
 console.log(c);
} 
}
 countCommunication(7);
 countCommunication(8);
 countCommunication(3);
 countCommunication(2);
 countCommunication(1);