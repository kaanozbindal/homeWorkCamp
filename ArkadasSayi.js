
function tamBolenTop(sayi) {
    let toplam=0
    for (let i = 1; i < sayi; i++) {
        if(sayi%i==0){
           toplam+=i;
        }
    }
    return toplam;
}
tamBolenTop(100);

function arkadasSayi(sayi1,sayi2) {
    if(tamBolenTop(sayi1)==sayi2&&tamBolenTop(sayi2)==sayi1){
        console.log("Girdiğiniz iki sayı arkadaş sayılardır");
    }
    else{
        console.log("girdiğiniz sayilar kardeş sayı değildir")
    }
}
arkadasSayi(210,284);