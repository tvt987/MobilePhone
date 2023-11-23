
function home(){
  
   


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




}
export default home