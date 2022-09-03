const html = document.querySelector('html')

colorPickers = document.querySelectorAll('[data-color]')

console.log(colorPickers)

const r = document.querySelector(':root');

colorPickers.forEach(colorPicker => colorPicker.addEventListener('click',(e)=> {
    r.style.setProperty(`--color-accent`, `${e.target.dataset.color}`);
    for (let i=0; i<colorPickers.length; i++){
        if(colorPickers[i] == e.target)
        {
            e.target.classList.add('selected-border')
        }
        else 
        {
            colorPickers[i].classList.remove('selected-border')
        }
    }

}))




document.addEventListener('scroll', debounce(checkScrollDistance,500))
   
function debounce(fn,delay) {
    let timeoutId 
    return ()=>{
        if (timeoutId) {
            clearTimeout(timeoutId)
        }
        timeoutId = setTimeout(fn,delay)
    }
}

function checkScrollDistance() {
    if (window.pageYOffset>100){
        console.log('show menu')
    }
}

