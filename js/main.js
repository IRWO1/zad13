let n = prompt("Podaj liczbę");

function sprawdz(num1){
    if(200 >= num1 && num1 >= 100){
        return("Liczba znajduje się w przedziale");
    } else {
        return("Liczba nie znajduje się w przedziale");
    }
    
}
console.log(sprawdz(n));