document.getElementById('donetion-bt').addEventListener('click', function(){
    console.log('chak')
    const ammount = document.getElementById('donet-ammount2').value;

    const yourbalance = document.getElementById('your-balance').innerText;
    const alldt = document.getElementById('all-donate2').innerText;
    
    
   const ammountflout = parseFloat(ammount);
    const balance = parseFloat(yourbalance);
    const alldtflout = parseFloat(alldt);
   if (Number.isInteger(ammountflout) && ammountflout > 0) {
    const newaddamunt = ammountflout + alldtflout;
 
     const mybalace = balance - ammountflout;
     console.log(newaddamunt, mybalace)
   document.getElementById('all-donate2').innerText = newaddamunt;
    document.getElementById('your-balance').innerText = mybalace;
    // add to transferhistory
    const h1 =document.createElement('h1');
     h1.innerText = `${ammountflout} taka is Donated for Flood at Fani,Bangladesh`;
    console.log(h1)
     document.getElementById('hisory').appendChild(h1);

    

    
   } else {
    alert('wront')
   }

   
})


    

   

