//Практика на таймеры и работу с DOM
/*
№1

Дана кнопка. Дан абзац, текстом которого является число. По нажатию на кнопку запустите таймер, который каждую секунду будет увеличивать текст абзаца на 1.
*/
// let button=document.querySelector("#button");
// let elem1_p=document.querySelector("#elem1_p");
// button.addEventListener("click", function func(){
//     setInterval(()=>elem1_p.textContent= +elem1_p.textContent+1, 1000);
//     this.removeEventListener("click", func)
// })

/*
№2

Дана кнопка. Дан абзац, текстом которого является число, например, 10. 
По нажатию на кнопку запустите таймер, который каждую секунду будет уменьшать текст абзаца на 1. 
Как только значение абзаца станет равно нулю - остановите таймер.
*/
// let button=document.querySelector("#button");
// let elem1_p=document.querySelector("#elem1_p");
// button.addEventListener("click", function func(){
//     let timerId=setInterval(()=>{
//         elem1_p.textContent= +elem1_p.textContent-1;
//         if(+elem1_p.textContent==0){
//             clearInterval(timerId)
//         }
//     }, 1000);
//     this.removeEventListener("click", func)
// })

/*
№3

Дан инпут с числом. Сделайте так, чтобы каждую секунду в нем появлялся квадрат того числа, которое в нем записано.
*/
// let elem2_input=document.querySelector("#elem2");
// setInterval(()=>elem2_input.value**=2, 1000);

/*
№4

Дан инпут. В него вводится число. По потери фокуса сделайте так, чтобы в абзаце ниже начал тикать обратный отсчет, начиная с введенного числа. 
Когда отсчет дойдет до нуля - он должен закончится.
*/
// let elem3_input=document.querySelector("#elem3");
// let elem2_p=document.querySelector("#elem2_p");
// elem3_input.addEventListener('blur', function(){
//     let value=elem3_input.value;
//     let timerId=setInterval(()=>{
//         elem2_p.textContent= value--;
//         if(value==-1){
//             clearInterval(timerId);
//         }
//     }, 1000)
// })

/*
№5

Дан инпут, кнопка и абзац. В инпут вводится какое-то число. 
По нажатию на кнопку запишите введенное число в текст абзаца и запустите обратный отсчет в абзаце: пусть каждую секунду число в абзаце уменьшается на единицу, 
пока не дойдет до нуля.
*/
// let elem3_input=document.querySelector("#elem3");
// let elem2_p=document.querySelector("#elem2_p");
// let button=document.querySelector("#button");
// button.addEventListener("click", function func(){
//     elem2_p.textContent=elem3_input.value;
//     let timerId=setInterval(()=>{
//         elem2_p.textContent=Number(elem2_p.textContent)-1;
//         if(+elem2_p.textContent==0){
//             clearInterval(timerId)
//         }
//     }, 1000)
//     this.removeEventListener("click", func);
// })

/*
№6

Дан абзац и две кнопки. 
Сделайте так, чтобы по нажатию на первую кнопку в абзаце начал тикать таймер от 1 до бесконечности, а по нажатию на вторую таймер останавливался.
*/
// let elem3_p=document.querySelector("#elem3_p");
// let button=document.querySelector("#button");
// let button2=document.querySelector("#button2");
// let timerId;
// button.addEventListener("click", function func(){
//     timerId=setInterval(()=>{
//         elem3_p.textContent=Number(elem3_p.textContent)+1;
//     }, 1000)
//     this.removeEventListener("click", func)
// })
// button2.addEventListener("click", function(){
//     clearInterval(timerId);
// })

/*
№7

Дан абзац. Сделайте так, чтобы каждую секунду он менял свой цвет с красного на зеленый и наоборот.
*/
// let elem3_p=document.querySelector("#elem3_p");
// setInterval(()=>{
//     if(elem3_p.style.color == "red"){
//         elem3_p.style.color="green";
//      } else {
//         elem3_p.style.color="red";
//      }
// }, 1000)

/*
№8

Если выводить на экран каждую секунду текущий момент времени, то можно сделать тикающие часы. Реализуйте такие же часики, как показано ниже в образце:
*/
// let elem3_p=document.querySelector("#elem3_p");
// setInterval(() => {
//     let now = new Date();
//     elem3_p.textContent=`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`
// }, 1000);
