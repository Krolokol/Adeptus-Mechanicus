var arr = []
const cart = {
    'tovar1' :{
        "name": "WM1",
        "count": 0,
        "price": 150
    },
    'tovar2' :{
        "name": "WM2",
        "count": 0,
        "price": 150
    },
    'tovar3' :{
        "name": "WM3",
        "count": 0,
        "price": 150
    },
    'tovar4' :{
        "name": "WM4",
        "count": 0,
        "price": 150
    },
    'tovar5' :{
        "name": "KS1",
        "count": 0,
        "price": 150
    },
    'tovar6' :{
        "name": "KS2",
        "count": 0,
        "price": 150
    },
    'tovar7' :{
        "name": "KS3",
        "count": 0,
        "price": 150
    },
    'tovar8' :{
        "name": "KS4",
        "count": 0,
        "price": 150
    },
    'tovar9' :{
        "name": "VC1",
        "count": 0,
        "price": 150
    },
    'tovar10' :{
        "name": "VC2",
        "count": 0,
        "price": 150
    },
    'tovar11' :{
        "name": "VC3",
        "count": 0,
        "price": 150
    },
    'tovar12' :{
        "name": "VC4",
        "count": 0,
        "price": 150
    }
};


//увеличение кол-ва товаров
document.onclick = event => {
    const catalog = document.querySelector('.catalog1');
    const hren = document.createElement('li');
    const jij = document.createElement('p');
    if (event.target.classList.contains('button-plus')) {
        plusFunc(event.target.dataset.id);
        hren.innerHTML = arr;
        }
    if (event.target.classList.contains('button-minus')) {
        minusFunc(event.target.dataset.id);
    }
    if (event.target.classList.contains('button-clear')) {
        clearFunc(event.target.dataset.id);
        hren.innerHTML = arr;
        catalog.appendChild(hren);
    }
}

// увеличение кол-ва товаров

const plusFunc = id => {

    cart[id]['count']++;
    arr.push(id);
    renderCart();
    console.log(arr)
    return arr;
    
}

// уменьшение кол-ва товаров

const minusFunc = id => {
    if (cart[id]['count']-1 == -1) {
        renderCart(id);
        return true;
    }
    cart[id]['count']--;
    arr.pop(id);
    renderCart();
    console.log(arr);
    return arr;
}

const clearFunc = id => {
    arr = [];
    console.log(arr);
}

// удаление товара из корзины

const deleteFunc = id => {
    delete cart[id];
    renderCart();
}


const renderCart = () => {
    console.log(cart);
}

renderCart();

// let buttonCountPlus = document.getElementsByClassName("buttonCountPlus");
// let buttonCountMinus = document.getElementsByClassName("buttonCountMinus");
// let count = document.getElementsByClassName("buttonCountNumber");
// let count2 = document.getElementsByClassName("num");
// let number = 0;
// let price = 350;

// buttonCountPlus.onclick = function() {
//     if (number <= 99) {
//         number++;
//         count.innerHTML = number;
//         count2.value = number * price;
//     }
// };

// buttonCountMinus.onclick = function() {
//    if (number >= 1) {
//        number--;
//        count.innerHTML = number;
//        count2.value = number * price;
//     }
// };

//for (let i = 0; i<=6; i++) {
 //   const hren = document.createElement('li');
 //   hren.textContent = 'count';
 //   const catalog = document.querySelector('.catalog1');
 //   catalog.appendChild(hren);
 //   i++;
//}
