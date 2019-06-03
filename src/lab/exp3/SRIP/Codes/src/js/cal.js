function Calculate(){
	var p1,r0;
	p1 =document.getElementById('p1').value;
	r0 =document.getElementById('r0').value;
	var op = document.getElementById('op').selectedIndex;
	var opvalue = document.getElementById('op').value;
	document.getElementById('test').innerHTML = p1+" "+r0 + "  "+op+" "+opvalue;
}