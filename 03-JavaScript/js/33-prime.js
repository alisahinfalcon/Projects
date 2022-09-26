

function hesapla(){

    let numb = document.querySelector("#numSayi").value;

    //  !numb  bosluk kontrolu yapar
    //  !isNaN  sayi dehil mi? Sayi degilse true verir

    if( !numb || isNaN(numb) || numb <= 1 ){
        alert("Input a suitable number value");
        return;
    }

    let numerator = 0;

    for( let i = 2 ; i < numb ; i++){
        if( numb%i == 0 ){
            numerator++;
        }
    }

    if( numerator == 0 ){
        alert("Given numer is a prime number");
    }
    else{
        alert("Given number is NOT a prime number")
    }
}