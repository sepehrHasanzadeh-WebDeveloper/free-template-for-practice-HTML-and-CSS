let phone=document.getElementById('phone');
let btn=document.getElementById('btn');

btn.addEventListener('click' , phonenumber );
function phonenumber(event){
  if (phone.value.length !==11){
    phone.nextElementSibling.innerHTML="شماره تلفن همراه غلط میباشد";
    event.preventDefault();
  }  
}

