 /* 
 for(let i = 1; i < 100; i++){
   if(sumRandDice >= 7){
     count_total++;
 
   }
   else{
     return 0;
   }
 
   if(diceRandOne == 6 || diceRandTwo == 6){
     count_6++
   }
 }
 */
 /* 
     if (sumRandDice >= 7 ) {
    for(i = 1; i <= diceRandom.length; i++) 
    {       //4                     6
       if(diceRandOne == 6 || diceRandTwo == 6)
       {
         count_6++;//1
         count_total++;
       }
       else{
         count_total++;
       }
     }
   }
   else{
     return 0;
   }*/
      //return count_6/count_total.toFixed(3);






        
 // 4 , 6 = sumten = 10
 //
     
 /*
 
       if (sumRandDice < 6 || sumRandDice > 12) {return 0}
         for(i = 1; i <= 6; i++) 
         {
           for(j = 1; j<= 6; j++) {
             if(diceRandOne+diceRandTwo == sumRandDice) {
               count_total++;
             if (diceRandOne == 6 || diceRandTwo == 6) {
               count_6++;
               }
             }
           }
         }
         
     if(count_6 == 0){
       return 0;   
      }
      */
     // 4, 6 = 10 diceTen


//-------------------------------


for(let i = 1; i<= 6; i++)
{
    for(let j= 1; j<=6; j++)
    {
        diceNums.push("( "+ i+","+j+" )"+" => "+(i+j));
        diceAdd.push(i+j);
    }
}







     
 for(let i = 0; i < 100; i++){
    if(sumRandDice >= 7){
         if(sumRandDice == 7){
               if(diceRandOne == 6 || diceRandTwo == 6)
               {
                     count_6++;
                     count_total++;
                     
                     seven = (count_6/count_total);
                     console.log("we got a seven! "+ seven);
               }
               else
               {
                 count_total++;
               }
         }
         else if(sumRandDice == 8){
      
             if(diceRandOne == 6 || diceRandTwo ==6){
                 console.log("its an 8")
             }
         }  
    }
     else
     {
       console.log("less than 7");
      return 0;
     }
   }









   //---------------------------------------------next
   

   for(let i = 0; i < 100; i++){
    dice.push(Math.floor((Math.random()*6)+1));
  }
  for(let i = 0; i< 50; i++){
    let add = dice[2*i] + dice[2*i+1];
    sumRandDice.push(add);
  }
  
  //dice[], consists of random values rolled 100 times, or two dice being rolled 50 times.
  //sumRandDice[], consists of 2k and 2k+1 index values being added together. 
  console.log(sumRandDice.length);
  console.log("Dice Array: " + dice);
  console.log("SumRandDice : " + sumRandDice);
  
  for(let i = 0; i < 50; i++){
    if(sumRandDice[i] >= 7){
          if(sumRandDice[i] == 7){
  
             count_total++;
                if(dice[2*i] == 6 || dice[2*i+1] == 6)
                {
                      count_6++;
                }
                seven = count_6/count_total;
                console.log("Seven: "+seven);
          }
          else if(sumRandDice[i] == 8){
            count_total++;
                if(dice[2*i] == 6 || dice[2*i+ 1] == 6)
                {
                  count_6++;
                  
                }
               
                eight= count_6/count_total;
                console.log(eight);
  
          }else if(sumRandDice[i] == 9){
            count_total++;
            if(dice[2*i] == 6 || dice[2*i+ 1] == 6)
            {
              count_6++;
              
            }
            nine = count_6/count_total;
            console.log(nine);
  
      }else if(sumRandDice[i] == 10){
        count_total++
        if(dice[2*i] == 6 || dice[2*i+ 1] == 6)
        {
          count_6++;
          
        }
        ten = count_6/count_total
        console.log(ten);
      }else if(sumRandDice[i] == 11){
        count_total++;
        if(dice[2*i] == 6 || dice[2*i+ 1] == 6)
        {
          count_6++
          
        }
      
        
        eleven=count_6/count_total;
        console.log(eleven);
      }else if(sumRandDice[i] == 12){
        count_total++;
        if(dice[2*i] == 6 || dice[2*i+ 1] == 6)
        { 
          count_6++;
          
        }
  
          twelve=count_6/count_total;
          console.log(twelve);
      }   
    }
    else
    {
          console.log("less than 7")
    }
  }
   //-------------------------------------------------