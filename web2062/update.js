const updateForm= document.querySelector("#update-form")
const params = new URLSearchParams(document.location.search)
const id = params.get("id")
fetch(` http://localhost:3000/posts`)
     .then(res => res.json())
     .then(data =>{
       const oldProduct= data.find((product) =>{
            return product.id == id
        })
        
         updateForm.innerHTML = /*html*/`
         <div id="success-message"></div>
            <form action="index.html" id="success-message">
                <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">title</label>
                <input type="text" class="form-control" id="name" required value="${oldProduct.name}">
                
                </div>
                <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">des</label>
                <input type="text" class="form-control" id="des" required value="${oldProduct.des}">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Img</label>
                    <input type="text" class="form-control" id="img" required value="${oldProduct.img}">
                </div>
                <button type="submit" id="btn-submit" class="btn btn-primary">Submit</button>
            </form>   
            
         `
         const btnSubmit = document.querySelector("#btn-submit")
         btnSubmit.addEventListener("click",() =>{
            fetch(`http://localhost:3000/posts/${id}`,{
                 method:"PUT",
                 headers:{
                         "Content-Type":"application/json"
                 },
                 body:JSON.stringify({
                    "id":id,
                    "name":document.querySelector("#name").value,
                    "des":document.querySelector("#des").value,
                    "img":document.querySelector("#img").value
                 })
                })
                var successMessage = document.getElementById("success-message");
                successMessage.innerHTML = "Thêm thành công!";
                successMessage.style.display = "block";

                // Tự động ẩn thông báo sau 3 giây
                setTimeout(function() {
                    successMessage.style.display = "none";
                }, 3000);
         })
         
     })