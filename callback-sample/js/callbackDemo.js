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
        if(operation=="add")
        {
            //addition.apply({name:"Apoorva"},[number1,number2])
            return addition(number1,number2);
        }        
        else if(operation=="subtract")
        {
            return subtraction(number1,number2);
        }
    }
    return calculate;
}
function main()
{
    var func=calculator(add,subtract);
    console.log(func("add",1,2));    
}
