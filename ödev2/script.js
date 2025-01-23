var sayi1 = document.getElementById("sayi1");
var sayi = document.getElementById("sayi2");
var sonuc = document.getElementById("sonuc");

function hesapla(a) {
    alert 

    var sonuc2 = "";

    switch (a) {
        case "+":
            sonuc2 = Number(sayi1.value) + Number(sayi2.value)
            break;
        case "-":
            sonuc2 = Number(sayi1.value) - Number(sayi2.value)
            break;
        case "*":
            sonuc2 = Number(sayi1.value) * Number(sayi2.value)
            break;
        case "/":
            sonuc2 = Number(sayi1.value) / Number(sayi2.value)
            break;
    
       
    }
    
    sonuc.innerHTML = sonuc2;
}
