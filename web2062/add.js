const btnAdd = document.querySelector("#btn-submit")
btnAdd.addEventListener("click",()=>{
    fetch('http://localhost:3000/posts',{
        method:'POST',
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            "name":document.querySelector("#name").value,
            "des":document.querySelector("#des").value,
            "img":document.querySelector("#img").value
        })


    })
})