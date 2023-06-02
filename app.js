const btnHide = document.querySelectorAll('#hideList');
const list = document.querySelectorAll('#list-items');

btnHide.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        list[index].classList.toggle('active');
      }
    });
  });
  
  let screenWidth = window.innerWidth;
  if (screenWidth > 768) {
    btnHide.forEach(btn => {
      btn.removeAttribute('id');
    });
  }