var buttons = document.getElementsByClassName("units");
var display = document.getElementById("textDisplay");
var buttonfor0 = document.getElementsByClassName("units-larger");
var operand1 =0;
var operand2 = null;
var operator = null;

 /* with operator we will get operand 1 and with "=" we will get operand 2*/
 // need to use eval func to calculate when "=" is clicked

 for(var i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click',function(){
        var value = this.getAttribute('data-value'); /* we get the value of data-value attribute by using this operator*/
        var text = display.textContent.trim(); /* trim cuts out the extra spaces*/

        if(value=='+'){
             operator = '+';

             // to store the operand1 when we get an operator, use parseFloat and textContent to get the content of the display
             operand1= parseFloat(display.textContent);

             // empty the display content with innerText to access the text of display
             display.innerText ="";
        }

        else if(value == '-'){
            operator = '-';
            operand1= parseFloat(display.textContent);
            display.innerText ="";
        }
        else if(value == '/'){
            operator = '/';
            operand1= parseFloat(display.textContent);
            display.innerText ="";
        }
        else if(value == '*'){
            operator = '*';
            operand1= parseFloat(display.textContent);
            display.innerText ="";
        }
        else if(value == '%'){
            operator = '%';
            operand1= parseFloat(display.textContent);
            display.innerText ="";
        }
        else if(value == '.'){
            if(text.length && !text.includes('.')){
                text = text + '.';
                display.innerText = text;
            }
        }
       else if(value == 'sign'){
            operand1= parseFloat(display.textContent);
            operand1 = -1 * operand1;
            display.innerText = operand1;
        }
        else if( value =='AC'){
            display.innerText="";
        }
        else if(value=='='){
            operand2= parseFloat(display.textContent);

            // use eval to get result
            // show result on display
            if(operator=='/' && operand2 ==0){
                display.innerText = "error";
            }
            else{
                // eval will calculate the operation accordingly
                var result = eval(operand1+" "+operator+" "+operand2);
                display.innerText= result;
            }

            if(result){
                operand1 = result;
                operand2 = null;
                operator = null;
            }

        }
        else{
            display.innerText += value;
        }
    });
 }
