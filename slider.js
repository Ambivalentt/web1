const swiper = new Swiper('.swiper-container', {  //Se llama el contenedor swiper
    slidesPerView: getSlidesPerView(),            //llamamos la funcion responsive
    navigation: {                                 
      nextEl: '#nextButton',    // llamamos los botones prev y next
      prevEl: '#prevButton',
    },
    pagination: {
      el: '.swiper-pagination',  //numero de paginas del swiper (puntos)
      //type: 'fraction',         //fraction si queremos enumerarlos
    },
  });
  
  function getSlidesPerView() {
    let screenWidth = window.innerWidth;   //llamamos innerwidth
  
    if (screenWidth >= 992) return 4;   //Si innedWidth es mayor o igual que 992px regresara 3 cards/imagenes
    if (screenWidth >= 768) return 3;   //Si es mayor que 768px regresara 2 cards/imagenes
    if (screenWidth >= 471) return 2;   //Mayor o igual 471
    
    if (screenWidth <= 470) return 1;   //menor o igual que 470px
  }
  
  window.addEventListener('resize', function() {         //funcion para implementar parametros a swiper
    swiper.params.slidesPerView = getSlidesPerView();
    swiper.update();
  });

  ///////////////Slider-2
  const swiper2 = new Swiper('.swiper-container-2',{
    slidesPerView: 1,            //llamamos la funcion responsive
    
    navigation: {                                 
      nextEl: '#nextButton1',    // llamamos los botones prev y next
      prevEl: '#prevButton1',
    },
    pagination: {
      el: '.swiper-pagination1',  //numero de paginas del swiper (puntos)
      //type: 'fraction',         //fraction si queremos enumerarlos
    },
  })



  