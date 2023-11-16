const updateForm = document.querySelector("#update-form")
const params= new URLSearchParams(document.location.search)
const id = params.get("id")
fetch(`http://localhost:3000/products`)
  .then(res => res.json())
  .then(data => {
      const oldProduct = data.find((product)=>{
          return product.id == id
      })
    // console.log(oldProduct)
    updateForm.innerHTML =/*html*/`
    
    <form action="index.html">
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="text" class="form-control" id="title" value="${oldProduct.title}" >
          
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="text" class="form-control" id="des"  value="${oldProduct.des}">
        </div>
        <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="text" class="form-control" id ="price" value="${oldProduct.price}" >
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input type="text" class="form-control" id="img" value="${oldProduct.img}" >
          </div>
        
        <button type="submit" id="update-form" class="btn btn-primary">Submit</button>
      </form>
    `
    const update = document.querySelector("#update-form")
    update.addEventListener("click",()=>{
        fetch(`http://localhost:3000/products/${id}`,{
            method:"PUT",
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                "id":id,
                "title":document.querySelector("#title").value,
                "des":document.querySelector("#des").value,
                "price":document.querySelector("#price").value,
                "img":document.querySelector("#img").value
            })
        })
    })
})