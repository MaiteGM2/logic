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
        if(typeof string1 != 'string' || typeof string2 != 'string'){
            return 'Only strings are accepted';
        }
        return string1.toLowerCase().split("").sort().join("") === string2.toLowerCase().split("").sort().join("");
    }

    console.log(anagram('ab', 'ba'));

/* 4) Escribir una funcion generadora de una contraseña segura. Debe recibir un numero y generar una contraseña de esa longitud que cumpla con las siguientes consignas:
    Al menos una mayuscula
    Al menos una minuscula
    Al menos un numero
    Al menos un caracter especial
    Debe retornar la contraseña generada */

    function passwordGenerator(num){
        const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9'];
        const lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
        const uppercase = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
        const specialChars = ['!', '@', '#', '$', '%', '^', '&', '*'];
        const totalChars = ['0', '1', '2', '3', '4', '5', '6', '7', '8','9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '%', '^', '&', '*'];
        const passwordLength = num;
        const passwordLengthMin = 4;
        let password = "";

        if(isNaN(passwordLength)){
            return 'Enter a number';
        } else if(passwordLength < passwordLengthMin){
            return `The minimum number of characters is ${passwordLengthMin}`;
        }

        const randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
        const randomLowercase = lowercase[Math.floor(Math.random() * lowercase.length)];
        const randomUppercase = uppercase[Math.floor(Math.random() * uppercase.length)];
        const randomSpecial = specialChars[Math.floor(Math.random() * specialChars.length)];
        password += randomNumber + randomLowercase + randomUppercase + randomSpecial;

        for(let i = 4; i < passwordLength; i++){
            const randomChar = totalChars[Math.floor(Math.random() * totalChars.length)];
            password += randomChar;
        }
        return password;
    }

    console.log(passwordGenerator("19"));
    
/*  2) Dada una lista de usuarios con su historial de logueo. Escribir una funcion que determine si algun usuario fue logueado dentro de los ultimos 30 minutos
    La funcion debe recibir un parametro:
      - `users`: un array de objetos, donde cada objeto tiene las siguientes propiedades:
        - `id` (integer)
        - `login_time` (datetime): tiempo en el cual el usuario se logueo por ultima vez en formato fecha
   La funcion debe retornar true si un usuario se logueo en los ultimos 30 minutos */

   const users = [
    {
        id: 1,
        loginTime: "2015-03-25T12:00:00",
    },
    {
        id: 2,
        loginTime: "2024-10-18T10:10:00",
    }
   ]
   
   function timeSinceLogin(users){
    const currentDate = new Date();
    const currentTime = currentDate.getTime();
    const timeRange = 30;
    const timeDifference = currentTime - (timeRange * 60000);

    for(const user of users){
        const loginUser = new Date(user.loginTime);
        const loginTime = loginUser.getTime();

        if(loginTime >= timeDifference){
            return true;
        }
    }
 
    return false;
   }

   console.log(timeSinceLogin(users));
   
      
      
      
    
    
