 function MukemmelSayi() {
        //Tübitak tanımına göre
    for (let i = 1; i < 1000000; i++) {
        let toplam=0;
        for (let k = 0; k < i; k++) {
                if(i%k==0){
                    toplam+=k;
                }
                
            }
            if(toplam==i){
                console.log(i+" sayısı mükemmel sayıdır");
            }
        }
    }
    MukemmelSayi();