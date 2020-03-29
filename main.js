document.querySelector('#generateArray').addEventListener('click', generateArray);
document.querySelector('#bubbleSort').addEventListener('click', bubbleSort);
document.querySelector('#swapElement').addEventListener('click', swapElement);

let arr = [];

function generateArray(){
    arr = [];

    // if(document.querySelector('.bar-area').innerHTML != '')
    //     document.querySelector('.bar-area').innerHTML = '';
    
    // for(let i = 0; i < 100; i++){
    //     let randomNum = Math.floor(Math.random() * (500 - 10) + 10);
    //     arr.push(randomNum);
    //     let vl = document.createElement('div');
    //     vl.setAttribute('class', 'vl');
    //     vl.setAttribute('id', `vl_${i}`);
    //     vl.style.height = `${randomNum}px`;
    //     document.querySelector('.bar-area').append(vl);
    // }
    // let parentNode = document.querySelector('.bar-area');
    // let firstNode = document.querySelector('#vl_0');
    // let newNode = document.createElement('div');
    // newNode.setAttribute('class', 'vl');
    // newNode.setAttribute('id', 'vl_5');
    // newNode.style.height = '55px';
    // parentNode.insertBefore(newNode, firstNode);

    console.log(arr);
}

function bubbleSort(){
    console.log("Bubble Sort");
}

// function swapElement(){

// }
