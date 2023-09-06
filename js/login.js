//Login_part
document.getElementById('submit-btn').addEventListener('click',function(){
   const Email =document.getElementById('email').value;
   const Password= document.getElementById('password').value;
   if(Email==='sontan@bap.com'&&Password==="6969"){
    window.location.href='mainPage.html';
   }
   else{
    alert('Please input your password and id correctly');
   }
})

// // Deposit
// document.getElementById('deposit').addEventListener('click',function(){
//     const text = document.getElementById('input-deposit').value;
//     console.log(text)
// })