const add = document.querySelector("#add-form")
add.addEventListener("click",()=>{
    fetch(` http://localhost:3000/products`,{
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            "title":document.querySelector("#title").value,
            "des":document.querySelector("#des").value,
            "price":document.querySelector("#price").value,
            "img":document.querySelector("#img").value,
        })
    })
})