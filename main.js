document.querySelector('#generateArray').addEventListener('click', generateArray);
document.querySelector('#bubbleSort').addEventListener('click', bubbleSort);
document.querySelector('#swapElement').addEventListener('click', swapElement);
document.getElementById('runFunction').addEventListener('click', runFunction);

let arr = [];

function generateArray(){
    arr = [];

    if(document.querySelector('.bar-area').innerHTML != '')
        document.querySelector('.bar-area').innerHTML = '';
    
    for(let i = 0; i < 100; i++){
        let randomNum = Math.floor(Math.random() * (500 - 10) + 10);
        arr.push(randomNum);
        let vl = document.createElement('div');
        vl.setAttribute('class', 'vl');
        vl.setAttribute('id', `vl_${i}`);
        vl.style.height = `${randomNum}px`;
        document.querySelector('.bar-area').append(vl);
    }

    // let parentNode = document.querySelector('.bar-area');
    // let firstNode = document.querySelector('#vl_0');
    // let newNode = document.createElement('div');
    // newNode.setAttribute('class', 'vl');
    // newNode.setAttribute('id', 'vl_5');
    // newNode.style.height = '55px';
    // parentNode.insertBefore(newNode, firstNode);

    console.log(arr);

    // divs[0].parentNode.insertBefore(divs[1], divs[0])
    // divs[1].parentNode.insertBefore(divs[2], divs[1])
    // divs[2].parentNode.insertBefore(divs[3], divs[2])
    // divs[3].parentNode.insertBefore(divs[4], divs[3])
    // divs[4].parentNode.insertBefore(divs[5], divs[4])
    
}

function bubbleSort(){
    console.log("Bubble Sort");
}

function runFunction(){
    const divs = document.getElementsByClassName('vl');
    let count = 0;
    const moveBar = setInterval(() => {
        divs[count].style.border = '3px solid blue';
        if(count < divs.length-1){
            console.log(count);
            divs[count].parentNode.insertBefore(divs[count+1], divs[count]);
            ++count;
        } else {
            clearInterval(moveBar);
        }
    },100   );    
}
