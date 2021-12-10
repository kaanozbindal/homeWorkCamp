
function asalControl(...numbers) {
    for (let i = 0; i < numbers.length; i++) 
    {
        let contAsal=1
       for (let j = 2; j < numbers[i]; j++) 
       {
           if(numbers[i]%j==0)
           {
              
               contAsal=0;
           }
           
       }      
      
           if(contAsal==1)
           {
               console.log(numbers[i] + " sayısı asaldır");
            
           }
           else{
            console.log(numbers[i] + " sayısı asal değildir");
           }
    
    }
}
asalControl(19,801,100,999,11);