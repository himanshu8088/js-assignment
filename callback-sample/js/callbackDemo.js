function add(a,b)
{    
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

function calculator(addition,subtraction)
{

   function calculate(operation,number1,number2)
    {   
    	///without if-else
		var result = {
  			add: addition(number1,number2),  				
  			subtract: subtraction(number1,number2),  				
		};
		return result[operation];
    
    	/*	
    		///With if-else

	        if(operation=="add")
	        {      		
	            return addition(number1,number2);
	        }        
	        else if(operation=="subtract")
	        {
	            return subtraction(number1,number2);
	        }
        */
    }
    return calculate;
}
function main()
{
    var func=calculator(add,subtract);
    console.log(func("add",1,2));        
    console.log(func("subtract",4,2));        
}
