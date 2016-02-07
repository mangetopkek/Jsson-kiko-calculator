function button(x){
	document.getElementById("fr1").elements['ruta'].value=document.getElementById("fr1").elements['ruta'].value+x;
}
function clean(){
	document.getElementById("fr1").elements['ruta'].value='';
}
function parser() {
	var input=document.getElementById("fr1").elements['ruta'].value;        //variabel deklarationer
        var tal=[];
        var operatorer=[];
        var length=input.length;
        input=input.toString();
        var characters=["+", "-", "*", "/"];
        var start=0;
        var sum;
        var thechar;
        var lasttal;

        
        for (var i=0; i<length; i++){       //utagning av tal (OBS ej sista talet)
            if (input.charAt(i)==='+' || input.charAt(i)==='-' || input.charAt(i)==='/' || input.charAt(i)==='*'){
                tal.push(input.substring(start, i));
                start=i+1;
            }
                
        }
        lasttal=Math.max(input.lastIndexOf("+"),input.lastIndexOf("-"),input.lastIndexOf("*"),input.lastIndexOf("/"));
        
        tal.push(input.substring(lasttal+1)) ;       //utagning av sista talet
        var tal=tal.map(Number);        //converterar talen till ints

        for (i=0; i<length; i++){       //utagning av operatorer
            thechar=input.charAt(i);
            if (characters.indexOf(thechar) !==-1){
                operatorer.push(thechar);
            }
        }

  
        
        for (i=0; i<=operatorer.length; i++){       //beräknar division och multiplikation först
            switch (operatorer[i]){
                case '*':
                    tal[i]=tal[i]*tal[i+1];
                    tal[i+1]=null;
                    operatorer[i]=null;
                    break;
                case '/':
                    tal[i]=tal[i]/tal[i+1];
                    tal[i+1]=null;
                    operatorer[i]=null;
                    break;
                default :
                    break;
            }
        }
        
        sum=tal[0];  //initialiserar var sum
        
        for (i=0; i<=tal.length-2; i++){  //beräknar

            switch (operatorer[i]){
                case '+':
                    sum=sum+tal[i+1];
                    break;
                case '-':
                    sum=sum-tal[i+1];

                    break;
                case '*':
                    sum=sum*tal[i+1];
                    break;
                case '/':
                    sum=sum/tal[i+1];
                    break;
                default :
                    break;
            }
        }
        if (sum===666){                                     //easteregg
            window.location = "http://www.webbteknik.caesax.se/johannes/dance/dance.html";
        }
        document.getElementById("fr1").elements['ruta'].value=sum;
    }

