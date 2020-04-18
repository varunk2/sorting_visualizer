document.querySelector('#generateArray').addEventListener('click', generateArray);
document.querySelector('#bubbleSort').addEventListener('click', bubbleSort);
document.querySelector('#swapElement').addEventListener('click', swapElement);
document.getElementById('runFunction').addEventListener('click', runFunction);

let arr = [];

function generateArray(){
    arr = [];
    console.log(arr);

    /*if(document.querySelector('.bar-area').innerHTML != '')
        document.querySelector('.bar-area').innerHTML = ''; */
    
    // for(let i = 0; i < 100; i++){
    /*for(let i = 0; i < 10; i++){
        let randomNum = Math.floor(Math.random() * (500 - 10) + 10);
        arr.push(randomNum);
        let vl = document.createElement('div');
        vl.setAttribute('class', 'vl');
        vl.setAttribute('id', `vl_${i}`);
        vl.style.height = `${randomNum}px`;
        document.querySelector('.bar-area').append(vl);
    }*/

    // let parentNode = document.querySelector('.bar-area');
    // let firstNode = document.querySelector('#vl_0');
    // let newNode = document.createElement('div');
    // newNode.setAttribute('class', 'vl');
    // newNode.setAttribute('id', 'vl_5');
    // newNode.style.height = '55px';
    // parentNode.insertBefore(newNode, firstNode);

    // divs[0].parentNode.insertBefore(divs[1], divs[0])
    // divs[1].parentNode.insertBefore(divs[2], divs[1])
    // divs[2].parentNode.insertBefore(divs[3], divs[2])
    // divs[3].parentNode.insertBefore(divs[4], divs[3])
    // divs[4].parentNode.insertBefore(divs[5], divs[4])
    
}

function createArrayFromDom(){
    arr = []
    const divs = document.getElementsByClassName('vl');
    for(i = 0; i < divs.length; i++){
        let element = Number(divs[i].attributes.id.textContent.split('_')[1])
        arr.push(element);
    }
    return arr;
}

function bubbleSort(){
    console.log("Bubble Sort");
    console.log("Array before Sorting");
    // ex_arr = [...arr];
    let ex_arr = createArrayFromDom();
    console.log(ex_arr);
    const arrayLength = ex_arr.length
    
    for(let i = 0; i < arrayLength; i++){

        document.getElementById(`vl_${ex_arr[i]}`).style.border = '3px solid yellowgreen';
        document.getElementById(`vl_${ex_arr[i+1]}`).style.border = '3px solid red';

        for(let j = 0; j < arrayLength-1-i; j++){

            if(ex_arr[j] > ex_arr[j+1]){
                let _div0 = document.getElementById(`vl_${ex_arr[j]}`);
                let _div1 = document.getElementById(`vl_${ex_arr[j+1]}`);
                _div1.parentNode.insertBefore(_div1, _div0);
                // temp = ex_arr[j]
                // ex_arr[j] = ex_arr[j+1]
                // ex_arr[j+1] = temp
            }
        }
    }
    console.log('Sorted Array:');
    console.log(ex_arr);
}

function runFunction(){
    const arr = createArrayFromDom();
    let divs = document.getElementsByClassName('vl');
    let count = 0;
    
    const moveBar = setInterval(() => {
        divs[count].style.border = '3px solid #20db20';
        divs[count+1].style.border = '3px solid red';
        if(count <= divs.length-1){
            if(arr[count] > arr[count+1]){
                temp = arr[count];
                arr[count] = arr[count+1];
                arr[count+1] = temp;
            }
            console.log(count);
            console.log(arr);
            ++count;
        } else {
            clearInterval(moveBar);
        }
    },1000);

    /* const moveBar = setInterval(() => {
        divs[count].style.border = '3px solid blue';
        if(count < divs.length-1){
            console.log(count);
            divs[count].parentNode.insertBefore(divs[count+1], divs[count]);
            ++count;
        } else {
            clearInterval(moveBar);
        }
    },100); */
}

/*
const div0 = divs[0];
const div1 = divs[1];
const div2 = divs[2];
const div3 = divs[3];
const div4 = divs[4];

const elem0 = Number(div0.attributes.id.textContent.split('_')[1]);
const elem1 = Number(div1.attributes.id.textContent.split('_')[1]);
const elem2 = Number(div2.attributes.id.textContent.split('_')[1]);
const elem3 = Number(div3.attributes.id.textContent.split('_')[1]);
const elem4 = Number(div4.attributes.id.textContent.split('_')[1]);
*/