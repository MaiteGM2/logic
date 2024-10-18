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
      
    console.log(sum(1, 2));
    console.log(sum(1)(2));
    console.log(sum(1, 'a'));
    console.log(sum(1)('a'));


/* 3) Escribir una funcion que determine si 2 strings son un anagrama
    Ignorar espacios en los strings
    No diferenciar entre mayusculas y minusculas
    Retornar true si es anagrama y false de lo contrario */

    function anagram(string1, string2){
        return string1.toLowerCase().split("").sort().join("") === string2.toLowerCase().split("").sort().join("");
    }

    console.log(anagram("ab", "ba"));

      
      
      
    
    
