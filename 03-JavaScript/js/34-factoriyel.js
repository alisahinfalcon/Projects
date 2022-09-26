// Arrow tipi function tanimliyoruz

const calculate = () => {
    const numb = document.querySelector("#txtNumber").value;

    if(!numb || isNaN(numb) || numb < 0 ){
        alert("Please, input a positive integer");
        return;
    }
    
    let mult = 1;
    let i = 1;
    do{
        mult = mult * i;
        i++;
    } while( i <= numb )

    document.querySelector("#result").innerHTML = mult;
}