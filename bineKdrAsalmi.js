
 function asalMi() {
     
     for (let i=0; i <1001; i++) {
         let kontrol=1;
         for (let k = 2; k < i; k++) 
         {
             if (i%k==0) 
              {
                  kontrol=0;
            
               }

         }

         if(kontrol==1&&i>1){
            console.log(i+" sayısı asaldır")
            
        }
         
    }
         }
 asalMi();