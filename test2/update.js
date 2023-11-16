const updateForm =document.querySelector("#update-form")
const params = new URLSearchParams(document.location.search)
const id = params.get("id")
fetch (`http://localhost:3000/posts`)
       .then(res =>res.json())
       .then(data =>{
        const oldProduct = data.find((product)=>{
            return product.id == id
        })
        updateForm.innerHTML = /*html*/`
            <form action="index.html">
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email address</label>
                <input type="text" class="form-control" id="name" aria-describedby="emailHelp" value=${oldProduct.name}>
                
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="text" class="form-control" id="des" value=${oldProduct.des}>
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="text" class="form-control" id="img" value=${oldProduct.img}>
                </div>
                
                <button type="submit" id="btn-update" class="btn btn-primary">Submit</button>
            </form>
        `
      

const btnUpdate= document.querySelector("#btn-update")
btnUpdate.addEventListener('click',()=>{
    fetch(` http://localhost:3000/posts/${id}`,{
    method:'PUT',
    headers:{
        "Content-Type":"application/json"
    },
    body:JSON.stringify({
        "id":id,
        "name":document.querySelector("#name").value,
        "des":document.querySelector("#des").value,
        "img":document.querySelector("#img").value,
        

    })
})

})
})