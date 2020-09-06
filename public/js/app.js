



console.log("This is my friendly Page");
/*
fetch('http://puzzle.mead.io/puzzle').then((response)=>{

response.json().then((data)=>{
    console.log(data);
})
})

*/



const controlSearch=(address)=>{

    fetch('http://localhost:3000/weather?address='+address+'').then((response)=>{

        response.json().then((data)=>{
           
            console.log(data.location);
        })
        })


}


   




const weather=document.querySelector('form');
const t=document.querySelector('input');

weather.addEventListener('submit',(e)=>{
    e.preventDefault();

    const h=t.value;
    controlSearch(h);



})
