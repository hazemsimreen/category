const getCategories=async()=>{
    const{ data }=await axios.get(`https://dummyjson.com/products/category-list`);
   return data;
}

const printCategories=async()=>{
   const ndata= await getCategories();

const result=ndata.map((category)=>{
    return `
    <div class= "category">
    <h2> ${category}</h2>
    <a href="detiles.html?category=${category}"> Details</a>
    </div>
    `
 }).join(' ');
 document.querySelector(".categories .row").innerHTML=result;
}

printCategories();

const getProducts=async()=>{
    const { data } = await axios.get(`https://dummyjson.com/products`);
    console.log(data);
    return data;
    
}
const prinProductes=async()=>{
    const pdata= await getProducts();
 
 const result=pdata.products.map((product)=>{
     return `
     <div class= "product">
     <img src="${product.thumbnail}"/>
     <h3> ${product.title}</h3>
     <span> ${product.price}</span>
     </div>
     `
  }).join(' ');
  document.querySelector(".products .row").innerHTML=result;
 }
 prinProductes();