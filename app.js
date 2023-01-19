// Heading section :

const at = document.querySelector('.at');
const hintans = document.querySelector('.hintans');

function hintfn()
{
    hintans.innerHTML = "Argentine Captain";
}

function submitfn()
{
    var n = document.getElementById('tName').value;
    var d = document.getElementById('tDesig').value;
    if(n===""){  alert("Please Enter Your Name Above");}
    if(d==="")
    {
        alert("Please Enter Your Answer Above");
    }

    if(n !== "" && (d=== "Lionel Messi" || d==="lionel messi" || d==="messi") )
    {
        at.innerHTML= n + "!" +" You Are A Good Friend Indeed :)";
    }

    else
    {
        at.innerHTML = "Seems Like You Dont Know Me Well.."
    }

    console.log(n,d);

}



// Content Section :


const wrapper = document.querySelector('.content');
const question = document.querySelector('.question');
const yesbtn = document.querySelector('.yes-btn');
const nobtn = document.querySelector('.no-btn');

const rect = wrapper.getBoundingClientRect();
const btnrect = nobtn.getBoundingClientRect();
const t = document.querySelector('.anstxt');
var count = 0;



yesbtn.addEventListener('click', ()=> {
    question.innerHTML = "Nahhh I didnt expect this! 🤷‍♂️";
    nobtn.style.display = "none";
});

function eve()
{
    const i = Math.floor(Math.random() * (rect.width - btnrect.width)) + 1;
    const j = Math.floor(Math.random() * (rect.height - btnrect.height)) + 1;
    
    nobtn.style.left = i + 'px';
    nobtn.style.top = j+'px';
    count = count +1;
    if(count === 6)
    {
        
        t.innerHTML = "Ohhh So Desperate To Click No, Thank You <3 ";
    }
    if(count === 10)
    {
        question.innerHTML = "Its Ok! I Idled It :) You Can Click It Now 🙂"
        nobtn.removeEventListener('mouseover',eve);
    }
};

nobtn.addEventListener('mouseover', eve);

nobtn.addEventListener('click',()=> {
question.innerHTML = "Umm, I Can Sense Your Happiness After Clicking 'No'"
t.innerHTML="";
yesbtn.style.display = "none";
});
