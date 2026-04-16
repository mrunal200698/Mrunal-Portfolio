var typed = new Typed(".text", {
    strings: ['Full Stack Software Developer', 'Backend Developer', 'Web Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

function validateform(){  
    var name=document.myform.name.value;  
    var email=document.myform.email.value;  
      
    if (name==null || name==""){  
      alert("Name can't be blank");  
      return false;  
    }

    else if(email!=""){  
        ValidateEmail(email);
    } 
     
}  

function ValidateEmail(mail) 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(myform.email.value))
  {
    return (true);
  }
    alert("You have entered an invalid email address!");
    return (false);
}


const button = document.getElementById('myButton');
  button.addEventListener('click', function() {
    alert('Message Sent Successfully!');
  });