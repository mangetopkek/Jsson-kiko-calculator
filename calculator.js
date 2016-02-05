function button(x){
	document.getElementById("fr1").elements['ruta'].value=document.getElementById("fr1").elements['ruta'].value+x;
}
function clean(){
	document.getElementById("fr1").elements['ruta'].value='';
}
function parser() {
	var input=document.getElementById("fr1").elements['ruta'].value;
        var tal=[];
        var operatorer=[];
        var length=input.length;
        input=input.toString();
        var start=0;
        var sum=0;
        
        for (var i=0; i<length; i++){
            if (input.charAt(i)==='+'){
                tal.push(input.substring(start, i));
                start=i+1;
            }
                
        }
        tal.push(input.substring(input.lastIndexOf("+")+1)) ;
        var tal=tal.map(Number);
     
        for (i=0; i<tal.length; i++){
            sum=sum+tal[i];
        }
        document.getElementById("fr1").elements['ruta'].value=sum;
}

