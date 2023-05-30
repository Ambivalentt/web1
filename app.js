const btnHide = document.querySelectorAll('#hideList');
const list = document.querySelectorAll('#list-items');

btnHide.forEach((btn, index)=>{
    btn.addEventListener('click',()=>{
        list[index].classList.toggle('active')
    })
})