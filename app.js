const send_btn=document.querySelector('#send_message');

const message_entered=document.querySelector('#message_enter');

const message_display=document.querySelector('#message_delivered');

send_btn.addEventListener('click',get_message);

function get_message()
{
    let get_txt=message_entered.value;
    //console.log(get_txt);
    if(get_txt==='')//if nothing entered 
    {
alert('you have not entered any message !!!!');
    }
    
    message_display.innerHTML=get_txt;
    message_display.style.color='#820933';
    message_entered.value='';
}