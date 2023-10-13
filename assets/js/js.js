const loading=document.querySelector('.loading');
const scrollToTop=document.querySelector('.scroll_to_top');
const contact=document.querySelector('.contact0');
let valueDisplays=document.querySelectorAll('.number');
let header=document.querySelector('header');
let happy=document.querySelector('.customer');
let interval=4000;
window.addEventListener('load',function(){
this.setTimeout(function(){
loading.classList.add('opacity-0','invisible')
document.body.style.overflowY='auto'
},2000)

})
scrollToTop.addEventListener('click',function(){
    window.scroll({
        top:0,
        behavior:'smooth',
    })
})
window.addEventListener('scroll',function(){

    if(window.scrollY > header.offsetHeight)
    {    console.log(window.scrollY);
        console.log(header.offsetHeight);
        scrollToTop.classList.remove('opacity-0','invisible');
    }
    else
    {    console.log(window.scrollY);
        console.log(header.offsetHeight);
        scrollToTop.classList.add('opacity-0','invisible');
    }
})


    if(window.scrollY = happy.offsetTop){
        valueDisplays.forEach((valueDisplay)=>{
            let startValue=0;
            let endValue=parseInt(valueDisplay.getAttribute('data-val'));
            let duration=Math.floor(interval/endValue);
            let counter=setInterval(function(){
                startValue+=1;
                valueDisplay.textContent=startValue;
                if(startValue==endValue){
                    clearInterval(counter);
                }
            },duration)
        });
    }






