function statistical (){
    const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let thisPage = 1;
let limit = 7;
let list = $$('.left__tableOrder-item')


function loadItem(){
    let beginGet = limit  * (thisPage - 1);
    let endGet = limit * thisPage - 1;
    list.forEach((item, index) => {
        if(index >= beginGet && index <= endGet){
            item.style.display = ''
        } else {
            item.style  .display = 'none'
        }
    });

}

loadItem();
listPage();

function listPage(){
    let count = Math.ceil(list.length / limit);
    $('.body__left-tableOrder--listPage').innerHTML = ''
    var number1 = 0;
    if(count >= 5){
        for(var i = 1; i <= 3; i++){
            let newPage = document.createElement('li');
            newPage.classList.add('tableOrder__listPage-item')
            newPage.innerText = i;
            if(i == 1){
                newPage.classList.add('active')
            }
            

            newPage.addEventListener('click', () => {
                number1 = Number(newPage.innerText)
                changePage(number1)
            })
            $('.body__left-tableOrder--listPage').appendChild(newPage);
        }
        // load button ...
        let newPage = document.createElement('li');
        newPage.classList.add('tableOrder__listPage-item');
        newPage.innerText = '...';
        $('.body__left-tableOrder--listPage').appendChild(newPage);

        // load button cuối
        newPage = document.createElement('li');
        newPage.classList.add('tableOrder__listPage-item');
        newPage.innerText = count;
        $('.body__left-tableOrder--listPage').appendChild(newPage);
        newPage.addEventListener('click', () => {
            btnFinal()
        })
    }
}


function changePage(i){
    thisPage = i;
    loadItem();
    // listPage();  
    reLoadListPage(i);
    setActive(i)
}

function reLoadListPage(i) {
    const listBtn = $$('.tableOrder__listPage-item');
    const length = Math.ceil(list.length / limit);
    const lengtharr = listBtn.length;

    if (i === Number(listBtn[2].innerText)) {
        if (i < length) {
            for (let j = 0; j <= 2; j++) {
                const newNumber = Number(listBtn[j].innerText) + 1;
                listBtn[j].innerText = newNumber;
                listBtn[j].addEventListener('click', () => {
                    changePage(newNumber);
                });
            }
        }
    } else if (i === Number(listBtn[0].innerText)) {
        if (i >= 2) {
            if (listBtn[lengtharr - 2] && listBtn[lengtharr - 2].parentNode) {
                listBtn[lengtharr - 2].style.display = '';
            }
            if (listBtn[lengtharr - 1] && listBtn[lengtharr - 1].parentNode) {
                listBtn[lengtharr - 1].style.display = '';
            }
            for (let j = 0; j <= 2; j++) {
                const newNumber = Number(listBtn[j].innerText) - 1;
                listBtn[j].innerText = newNumber;
                listBtn[j].addEventListener('click', () => {
                    changePage(newNumber);
                });
            }
        }
    }

    if (Number(listBtn[2].innerText) === length && lengtharr > 3) {
        if (listBtn[lengtharr - 2] && listBtn[lengtharr - 2].parentNode) {
            listBtn[lengtharr - 2].style.display = 'none';
        }
        if (listBtn[lengtharr - 1] && listBtn[lengtharr - 1].parentNode) {
            listBtn[lengtharr - 1].style.display = 'none';
        }
    }
}

function setActive(i){
    const listBtn = $$('.tableOrder__listPage-item')
    listBtn.forEach((item, index) => {
        item.classList.remove('active')

        if(Number(item.innerText) == i){
            item.classList.add('active')
        }
    });
}

function btnFinal(){
    thisPage = 8
    loadItem()
    const listBtn = $$('.tableOrder__listPage-item')
    let count = Math.ceil(list.length / limit);
    let length = listBtn.length
    listBtn[length - 1].style.display = 'none'
    listBtn[length - 2].style.display = 'none'
    listBtn[0].innerText = count - 2;
    listBtn[0].addEventListener('click', () => {
        changePage(count - 2)
    })
    listBtn[1].innerText = count - 1;
    listBtn[1].addEventListener('click', () => {
        changePage(count - 1)
    })
    listBtn[2].innerText = count;
    listBtn[2].addEventListener('click', () => {
        changePage(count)
    })
    listBtn.forEach((item, index) => {
        item.classList.remove('active')

        if(Number(item.innerText) == 8){
            item.classList.add('active')
        }
    });
}



let thisPageA = 1;
let limitA = 7;
let listA = $$('.left__tableProduct-item')


function loadItemA(){
    let beginGet = limitA  * (thisPageA - 1);
    let endGet = limitA * thisPageA - 1;
    listA.forEach((item, index) => {
        if(index >= beginGet && index <= endGet){
            item.style.display = ''
        } else {
            item.style.display = 'none'
        }
    });

}

loadItemA();
listPageA();

function listPageA(){
    let count = Math.ceil(listA.length / limitA);
    $('.body__left-tableProduct--listPage').innerHTML = ''
    var number1 = 0;
    if(count >= 5){
        for(var i = 1; i <= 3; i++){
            let newPage = document.createElement('li');
            newPage.classList.add('tableProduct__listPage-item')
            newPage.innerText = i;
            if(i == 1){
                newPage.classList.add('active')
            }
            newPage.addEventListener('click', () => {
                number1 = Number(newPage.innerText)
                changePageA(number1)
            })
            $('.body__left-tableProduct--listPage').appendChild(newPage);
        }
        // load button ...
        let newPage = document.createElement('li');
        newPage.classList.add('tableProduct__listPage-item');
        newPage.innerText = '...';
        $('.body__left-tableProduct--listPage').appendChild(newPage);

        // load button cuối
        newPage = document.createElement('li');
        newPage.classList.add('tableProduct__listPage-item');
        newPage.innerText = count;
        $('.body__left-tableProduct--listPage').appendChild(newPage);
        newPage.addEventListener('click', () => {
            btnFinal()
        })
    }
}


function changePageA(i){
    thisPageA = i;
    loadItemA();
    // listPage();  
    reLoadListPageA(i);
    setActiveA(i)
}

function reLoadListPageA(i) {
    const listBtn = $$('.tableProduct__listPage-item');
    const length = Math.ceil(listA.length / limitA);
    const lengtharr = listBtn.length;

    if (i === Number(listBtn[2].innerText)) {
        if (i < length) {
            for (let j = 0; j <= 2; j++) {
                const newNumber = Number(listBtn[j].innerText) + 1;
                listBtn[j].innerText = newNumber;
                listBtn[j].addEventListener('click', () => {
                    changePageA(newNumber);
                });
            }
        }
    } else if (i === Number(listBtn[0].innerText)) {
        if (i >= 2) {
            if (listBtn[lengtharr - 2] && listBtn[lengtharr - 2].parentNode) {
                listBtn[lengtharr - 2].style.display = '';
            }
            if (listBtn[lengtharr - 1] && listBtn[lengtharr - 1].parentNode) {
                listBtn[lengtharr - 1].style.display = '';
            }
            for (let j = 0; j <= 2; j++) {
                const newNumber = Number(listBtn[j].innerText) - 1;
                listBtn[j].innerText = newNumber;
                listBtn[j].addEventListener('click', () => {
                    changePageA(newNumber);
                });
            }
        }
    }

    if (Number(listBtn[2].innerText) === length && lengtharr > 3) {
        if (listBtn[lengtharr - 2] && listBtn[lengtharr - 2].parentNode) {
            listBtn[lengtharr - 2].style.display = 'none';
        }
        if (listBtn[lengtharr - 1] && listBtn[lengtharr - 1].parentNode) {
            listBtn[lengtharr - 1].style.display = 'none';
        }
    }
}

function setActiveA(i){
    const listBtn = $$('.tableProduct__listPage-item')
    listBtn.forEach((item, index) => {
        item.classList.remove('active')

        if(Number(item.innerText) == i){
            item.classList.add('active')
        }
    });
}

function btnFinal(){
    thisPageA = 8
    loadItemA()
    const listBtn = $$('.tableProduct__listPage-item')
    let count = Math.ceil(list.length / limitA);
    let length = listBtn.length
    listBtn[length - 1].style.display = 'none'
    listBtn[length - 2].style.display = 'none'
    listBtn[0].innerText = count - 2;
    listBtn[0].addEventListener('click', () => {
        changePageA(count - 2)
    })
    listBtn[1].innerText = count - 1;
    listBtn[1].addEventListener('click', () => {
        changePageA(count - 1)
    })
    listBtn[2].innerText = count;
    listBtn[2].addEventListener('click', () => {
        changePageA(count)
    })
    listBtn.forEach((item, index) => {
        item.classList.remove('active')

        if(Number(item.innerText) == 8){
            item.classList.add('active')
        }
    });
}
}

export default statistical