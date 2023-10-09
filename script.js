let count=0;
const value = document.getElementById('value');
const btns = document.querySelectorAll('.btn');
btns.forEach(function(btn){
    btn.addEventListener('click',function (event){
        const styles = event.target.classList;

        if(styles.contains('decrease')){
            count--;
        }
        else if(styles.contains('reset')){
            count=0;
        }
        else if(styles.contains('increase')){
            count++;
        }

        if(count>0){
            value.style.color='green';
        }
        else if(count<0){
            value.style.color='red';
        }
        else{
            value.style.color='cornflowerblue';
        }

        value.textContent=count;
    })
})

// let value = document.getElementById('value');
// const increase = document.getElementsByClassName('increase');
// const decrease = document.getElementsByClassName('decrease');
// const reset = document.getElementsByClassName('reset');
// function color(value){
//     if(value.textContent>0){
//         value.style.color='green'
//     }
//     else if(value.textContent===0){
//         value.style.color='black'
//     }
//     else if(value.textContent<0){
//         value.style.color='red'
//     }
// }
// increase[0].addEventListener('click',()=>{
//     value.textContent++;
//     color(value);
// })
// decrease[0].addEventListener('click',()=>{
//     value.textContent--;
//     color(value);
// })
// reset[0].addEventListener('click',()=>{
//     value.textContent=0;
//     color(value);
// })