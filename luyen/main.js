const app= document.querySelector("#app")
const removeProduct= (id)=>{
    fetch(`http://localhost:3000/products/${id}`,{
        method:"DELETE",
    })
}
const listProduct =() =>{
    fetch(`http://localhost:3000/products`)
    .then((res) =>res.json())
    .then((data) =>{
        app.innerHTML= data.map((product,index)=>{
            return `
            <tr>
            <th scope="row">${index+1}</th>
            <td>${product.title}</td>
            <td>${product.des}</td>
            <td>${product.price}</td>
        
            <td><img src="${product.img}"></td>
            <td>
            <a href="update.html?id=${product.id}">
            <button type="button" class="btn btn-primary">Primary</button></a>
            <button type="button" data-id="${product.id}" class=" btn-remove btn btn-danger" onclick=" return confirm ('bạn có chắc chắn muốn xóa')">Danger</button>
            </td>
          </tr>
            
            
            `
        }).join("")
        const remove = document.querySelectorAll(".btn-remove")
        for(let btn of remove){
            let id = btn.dataset.id
            btn.addEventListener('click',()=>{
                return removeProduct(id)
            })
        }
    })
}
listProduct()