document.getElementById('donet').addEventListener('click', function(event){
    event.preventDefault();
    const donetamount = document.getElementById('donet-ammount').value;
    const yourbalance = document.getElementById('your-balance').innerText;
    const alldonate = document.getElementById('all-donate').innerText;
    
    const doneta = parseFloat(donetamount);
    const balance = parseFloat(yourbalance);
    const allcash = parseFloat(alldonate);
   if (Number.isInteger(doneta) && doneta > 0) {
    const newadd = doneta + allcash;
    // console.log(newadd);
    const newmybalace = balance -doneta;
    document.getElementById('all-donate').innerText = newadd;
    document.getElementById('your-balance').innerText = newmybalace;
    // add to transferhistory
    const h1 =document.createElement('h1');
    h1.innerText = `${doneta} taka is Donated for Flood at Noakhali,Bangladesh`;
    console.log(h1)
    document.getElementById('hisory').appendChild(h1);

    

    
   } else {
    alert('wront')
   }

   
})


