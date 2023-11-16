const  app = document.querySelector("#app")
const removeProduct =(id) =>{
    fetch(` http://localhost:3000/posts/${id}`,{
        method:"DELETE"
    })
}
const listProduct =()=>{
    fetch (' http://localhost:3000/posts')
    .then((res) => res.json())
    .then((data) =>{
        app.innerHTML = data.map((product,index)=>{
            return `
            <tr>
            <th scope="row"> ${index+1}</th>
            <td>${product.name}</td>
            <td>${product.des}</td>
           
            <td><img src="${product.img}"></td>
            <td>
            <a href="update.html?id=${product.id}">
            <button type="button" class="btn btn-primary">update</button></a>
            <button type="button" class=" btn-remove btn btn-danger" data-id="${product.id}">delete</button>
            
            </td>
          </tr>
            
            `
        }).join("")
        const btnRemove = document.querySelectorAll(".btn-remove")
        for(let btn of btnRemove){
            let id = btn.dataset.id
            btn.addEventListener('click',()=>{
                return removeProduct(id)
            })
        }

    })
}
listProduct()