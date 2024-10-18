/* 1) Escribir una funcion que cumpla con los siguientes casos de prueba:
    sum(1,2) => 3
    sum(1)(2) => 3
    sum(1,a) => “second parameter is not a number”
    sum(1)(a) => “second parameter is not a number” */

    function sum(a, b) {
        if(b == undefined) {
            return function(b) {
                if(isNaN(b)) {
                    return "second parameter is not a number";
                }
                return a + b;
            }
        } else{
            if(isNaN(b)) {
                return "second parameter is not a number";
            }
            return a + b;
        }
    }

      
      
      
    
    
