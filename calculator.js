
function button(x){
	document.getElementById("fr1").elements['ruta'].value=document.getElementById("fr1").elements['ruta'].value+x;
}
function clean(){
	document.getElementById("fr1").elements['ruta'].value='';
}
/*function calculation() {
	var i;
	var input = document.getElementById("fr1").elements['ruta'].value
	var tal1,tal2,sum;
	for (i = 0; i < input.length; i++){
		if (input.charAt(i)=="+"){
			tal1 = input.substring(0,i);
			tal2 = input.substring(i+1);
		}
		tal1=tal1.parseInt(tal1);
		tal2=tal2.parseInt(tal2);
		sum=tal1+tal2;
		document.getElementById("test").innerHTML = sum;
		
	}
}*/
