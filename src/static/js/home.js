/**------------------------set coundown time sale-----------------------  **/

function home(){
  let countDownDate = new Date("Nov 5, 2023 15:37:25").getTime();
const conutdown = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  if (hours < 10) {
    hours = '0' + hours;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }

  document.querySelector('.count-down .countdown-time .hours span').innerHTML = hours;
  document.querySelector('.count-down .countdown-time .minutes span').innerHTML = minutes;
  document.querySelector('.count-down .countdown-time .seconds span').innerHTML = seconds;
  if (distance < 0) {
    clearInterval();

  }

}, 1000);
//------------   slide sale product-------------------
const itemlist = document.querySelector('#slider .product-sale');
const itemlisttopzone = document.querySelector('.topzone .list-topzone');
const nextp = document.getElementById('next-product');
// const nexttopzone = document.getElementById('next-topzone');
const prevp = document.getElementById('prev-product');
// const prevtopzone = document.getElementById('prev-topzone');
const initSlider = () => {
  nextp.addEventListener('click', () => {
    const scrollAmount = itemlist.clientWidth;
    itemlist.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prevp.addEventListener('click', () => {
    const scrollAmount = -itemlist.clientWidth;
    itemlist.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  // nexttopzone.addEventListener('click', () => {
  //   const scrollAmount = itemlisttopzone.clientWidth;
  //   itemlisttopzone.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
  // prevtopzone.addEventListener('click', () => {
  //   const scrollAmount = -itemlisttopzone.clientWidth;
  //   itemlisttopzone.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
}

window.addEventListener("load", initSlider);

//------------   slide iphone-------------------
const itemlistIphone = document.querySelector('#slider-iphone .product-iphone');
const itemlisttopzoneIphone = document.querySelector('.topzoneIphone .list-topzone');
const nextpIphone = document.getElementById('next-iphone');
// const nexttopzoneIphone = document.getElementById('next-topzone');
const prevpIphone = document.getElementById('prev-iphone');
// const prevtopzoneIphone = document.getElementById('prev-topzone');
const initSliderIphone = () => {
  nextpIphone.addEventListener('click', () => {
    const scrollAmount = itemlistIphone.clientWidth;
    itemlistIphone.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prevpIphone.addEventListener('click', () => {
    const scrollAmount = -itemlistIphone.clientWidth;
    itemlistIphone.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  // nexttopzoneIphone.addEventListener('click', () => {
  //   const scrollAmount = itemlisttopzoneIphone.clientWidth;
  //   itemlisttopzoneIphone.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
  // prevtopzoneIphone.addEventListener('click', () => {
  //   const scrollAmount = -itemlisttopzoneIphone.clientWidth;
  //   itemlisttopzoneIphone.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
}

window.addEventListener("load", initSliderIphone);

//------------   slide ipad-------------------
const itemlistIpad = document.querySelector('#slider-ipad .product-ipad');
const itemlisttopzoneIpad = document.querySelector('.topzoneIpad .list-topzone');
const nextpIpad = document.getElementById('next-ipad');
// const nexttopzoneIpad = document.getElementById('next-topzone');
const prevpIpad = document.getElementById('prev-ipad');
// const prevtopzoneIpad = document.getElementById('prev-topzone');
const initSliderIpad = () => {
  nextpIpad.addEventListener('click', () => {
    const scrollAmount = itemlistIpad.clientWidth;
    itemlistIpad.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prevpIpad.addEventListener('click', () => {
    const scrollAmount = -itemlistIpad.clientWidth;
    itemlistIpad.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  // nexttopzoneIpad.addEventListener('click', () => {
  //   const scrollAmount = itemlisttopzoneIpad.clientWidth;
  //   itemlisttopzoneIpad.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
  // prevtopzoneIpad.addEventListener('click', () => {
  //   const scrollAmount = -itemlisttopzoneIpad.clientWidth;
  //   itemlisttopzoneIpad.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
}

window.addEventListener("load", initSliderIpad);

//------------   slide Mac-------------------
const itemlistMac = document.querySelector('#slider-mac .product-mac');
const itemlisttopzoneMac = document.querySelector('.topzoneMac .list-topzone');
const nextpMac = document.getElementById('next-mac');
// const nexttopzoneMac = document.getElementById('next-topzone');
const prevpMac = document.getElementById('prev-mac');
// const prevtopzoneMac = document.getElementById('prev-topzone');
const initSliderMac = () => {
  nextpMac.addEventListener('click', () => {
    const scrollAmount = itemlistMac.clientWidth;
    itemlistMac.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prevpMac.addEventListener('click', () => {
    const scrollAmount = -itemlistMac.clientWidth;
    itemlistMac.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  // nexttopzoneMac.addEventListener('click', () => {
  //   const scrollAmount = itemlisttopzoneMac.clientWidth;
  //   itemlisttopzoneMac.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
  // prevtopzoneMac.addEventListener('click', () => {
  //   const scrollAmount = -itemlisttopzoneMac.clientWidth;
  //   itemlisttopzoneMac.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
}

window.addEventListener("load", initSliderMac);

//------------   slide Watch-------------------
const itemlistWatch = document.querySelector('#slider-watch .product-watch');
const itemlisttopzoneWatch = document.querySelector('.topzoneWatch .list-topzone');
const nextpWatch = document.getElementById('next-watch');
// const nexttopzoneWatch = document.getElementById('next-topzone');
const prevpWatch = document.getElementById('prev-watch');
// const prevtopzoneWatch = document.getElementById('prev-topzone');
const initSliderWatch = () => {
  nextpWatch.addEventListener('click', () => {
    const scrollAmount = itemlistWatch.clientWidth;
    itemlistWatch.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prevpWatch.addEventListener('click', () => {
    const scrollAmount = -itemlistWatch.clientWidth;
    itemlistWatch.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  // nexttopzoneWatch.addEventListener('click', () => {
  //   const scrollAmount = itemlisttopzoneWatch.clientWidth;
  //   itemlisttopzoneWatch.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
  // prevtopzoneWatch.addEventListener('click', () => {
  //   const scrollAmount = -itemlisttopzoneWatch.clientWidth;
  //   itemlisttopzoneWatch.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
}

window.addEventListener("load", initSliderWatch);

//------------   slide AT-------------------
const itemlistAt = document.querySelector('#slider-at .product-at');
const itemlisttopzoneAt = document.querySelector('.topzoneAt .list-topzone');
const nextpAt = document.getElementById('next-at');
// const nexttopzoneAt = document.getElementById('next-topzone');
const prevpAt = document.getElementById('prev-at');
// const prevtopzoneAt = document.getElementById('prev-topzone');
const initSliderAt = () => {
  nextpAt.addEventListener('click', () => {
    const scrollAmount = itemlistAt.clientWidth;
    itemlistAt.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  prevpAt.addEventListener('click', () => {
    const scrollAmount = -itemlistAt.clientWidth;
    itemlistAt.scrollBy({ left: scrollAmount, behavior: "smooth" });
  });
  // nexttopzoneAt.addEventListener('click', () => {
  //   const scrollAmount = itemlisttopzoneAt.clientWidth;
  //   itemlisttopzoneAt.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
  // prevtopzoneAt.addEventListener('click', () => {
  //   const scrollAmount = -itemlisttopzoneAt.clientWidth;
  //   itemlisttopzoneAt.scrollBy({ left: scrollAmount, behavior: "smooth" });
  // });
}

window.addEventListener("load", initSliderAt);

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const modelLoginO = $$('.js-model-login')
const modelLogin = $('.model-login')
const modelRegister = $('.model-register')
const modelLoginForm = $$('.model-form')
const modelRegisterO = $('.js-model-registerO')
const modelLoginOpen = $('.js-model-loginO')
const modelForget = $('.model-forget')
const modelForgetO = $('.js-model-forget')
const modelChangePass = $('.model-changepass')
const modelChangePassO = $('.js-model-changepass')
const btnModel = $('.model-form__header--btn')
const modelSetProfileO = $('.js-model-setprofileO')
const modelSetProfile = $('.model-setprofile')

btnModel.addEventListener('click', () => {
  modelSetProfile.style.display = 'none'
})

modelSetProfileO.addEventListener('click', () => {
  modelSetProfile.style.display = 'block'
  modelLogin.style.display = 'none'
})

modelSetProfile.addEventListener('click', () => {
  modelSetProfile.style.display = 'none'
})

modelChangePass.addEventListener('click', () => {
  modelChangePass.style.display = 'none'
})

modelChangePassO.addEventListener('click', () => {
  modelLogin.style.display = 'none'
  modelChangePass.style.display = 'block'
})

modelForgetO.addEventListener('click', () => {
  modelForget.style.display = 'block'
  modelLogin.style.display = 'none'
})

modelForget.addEventListener('click', () => {
  modelForget.style.display = 'none'
})

modelLoginO.forEach(element => {
  element.addEventListener('click', () => {
    modelLogin.style.display = 'flex'
    modelRegister.style.display = 'none'
    modelForget.style.display = 'none'
  })
});
modelLogin.addEventListener('click', () => {
  modelLogin.style.display = 'none'
  modelRegister.style.display = 'none'
})

modelRegister.addEventListener('click', () => {
  modelLogin.style.display = 'none'
  modelRegister.style.display = 'none'
})

modelLoginForm.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
  })
});

modelRegisterO.addEventListener('click', () => {
  modelLogin.style.display = 'none'
  modelRegister.style.display = 'block'
})

modelLoginOpen.addEventListener('click', () => {
  modelLogin.style.display = 'flex'
  modelRegister.style.display = 'none'
})




}
export default home