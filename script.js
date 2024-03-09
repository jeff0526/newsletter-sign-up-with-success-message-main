const emailadd = document.getElementById('emailcomp')
const subs = document.getElementById('submit')

subs.onclick=function(){

        var val = document.getElementById('emailcomp').value;
        let er_email = document.querySelector('.erroremail')
        let input_er = document.querySelector('#emailcomp')

        if(val.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        
            document.querySelector('.ty-container').style.display='block';
            document.querySelector('.container').style.display='none';

        }else{
            er_email.style.display = "inline";
           input_er.classList.replace('inputvalid', 'inputerror');
        }
          
        
  

    }
emailadd.onclick= function(){
    let input_er = document.querySelector('#emailcomp')
    let er_email = document.querySelector('.erroremail')
    if(input_er.placeholder = !null || input_er.placeholder =='email@company.com'){
        input_er.placeholder = '';

    }
    if (input_er.className == 'inputerror'){
        er_email.style.display = "none";
        input_er.classList.replace('inputerror', 'inputvalid');
    }
}