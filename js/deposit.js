

    document.getElementById('deposit-btn').addEventListener('click',function(){
        const depositValue= parseFloat(document.getElementById('deposit-input').value);
        if(isNaN(depositValue)){
            alert('thik moto ekta kichui parosh nah ,vodai');
            document.getElementById('deposit-input').value='';
            return;
        }
        let depositBoard = (parseFloat(document.getElementById('deposit-total').innerText))+  depositValue;
        document.getElementById('deposit-total').innerText=depositBoard;
        console.log(depositBoard);
        
        const balance= parseFloat(document.getElementById('balance-total').innerText)+depositValue;
        document.getElementById('balance-total').innerText=balance;
    
        document.getElementById('deposit-input').value='';
    })
    //withdraw
    document.getElementById('withdraw-btn').addEventListener('click',function(){
        const withdrawValue= parseFloat(document.getElementById('withdraw-input').value);
        if(isNaN(withdrawValue)){
            alert('thik moto ekta kichui parosh nah ,vodai');
            document.getElementById('withdraw-input').value='';
            return;
        }
        if(withdrawValue <=  parseFloat(document.getElementById('balance-total').innerText)){
            let withdrawBoard = (parseFloat(document.getElementById('withdraw-total').innerText))+  withdrawValue;
        document.getElementById('withdraw-total').innerText=withdrawBoard;
        console.log(withdrawBoard);
        
    
       
        const balance= parseFloat(document.getElementById('balance-total').innerText)-withdrawValue;
        document.getElementById('balance-total').innerText=balance;
        
        }
        else{alert('tor bap er tka gache dhore?')}
        document.getElementById('withdraw-input').value='';
    })
