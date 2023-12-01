function nav() {
  const $ = document.querySelector.bind(document)
  const $$ = document.querySelectorAll.bind(document)

  const modelLoginO = $$('.js-model-login')
  const modelLogin = $('.model-login')
  const modelRegister = $('.model-register')
  const modelLoginForm = $$('.model-form')
  const modelRegisterO = $('.js-model-registerO')
  const modelLoginOpen = $('.js-model-loginO')
  const modelForget = $('.js-guima')
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

export default nav