function sum(x:number, y:number):number{
    return x+y;
}

function res(x:number, y:number):number{
    return x-y;
}

function mult(x:number, y:number):number{
    return x*y;
}

function div(x:number, y:number):number{
    if(y===0)
        throw new Error("Division by zero");
    else
        return x/y;
}

const x:number=5;
const y:number=0;
const operacion:string="/";
let result:number=0;
try{
    switch(operacion){
        case "+": result=sum(x,y);
            break;
        case "-": result=res(x,y);
            break;
        case "*": result=mult(x,y);
            break;
        case "/": result=div(x,y);
            break;
    }
    console.log("el resultado de: ", x,operacion,y," es: ", result);
}

catch(error) {
    console.error("Error:",(error as Error).message);
}
