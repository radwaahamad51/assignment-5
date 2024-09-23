document.getElementById('donatin-btn-extra').addEventListener('click', function(){
    console.log('chak')
    const tranferammount = document.getElementById('donet-ammount3').value;
    const balac = document.getElementById('your-balance').innerText;
    const main = document.getElementById('all-donate3').innerText;
    console.log(main)

    const tranferflot = parseFloat(tranferammount);
    const balacflot = parseFloat(balac);
    const mainflot = parseFloat(main);
    
    if (Number.isInteger(tranferflot) && tranferflot > 0) {
      const newtranfer = tranferflot + mainflot;
      const newbalce = balacflot - tranferflot;
      
      document.getElementById('all-donate3').innerText = newtranfer;
      document.getElementById('your-balance').innerText = newbalce;

      const h1 =document.createElement('h1');
     h1.innerText = `${tranferflot} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh`;
    console.log(h1)
     document.getElementById('hisory').appendChild(h1);
      
    }

 
  })
