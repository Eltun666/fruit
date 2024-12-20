let boxx = document.getElementById("boxx")

async function getApi() {
   
    try {
     let {data} = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`);

     data.forEach((item) => {
      boxx.innerHTML += `
       <div class="inbox">
                        <div class="imgbox">
                            <img src="${item.image}" alt="">
                        </div>
                        <p>${item.title}</p>
                        <div class="text">
                            <div class="money">
                                <p>$${item.price}</p>
                            </div>
                            <div class="boxs">
                                <div class="box">
                                    <i onclick="infobox(${item.id})" class="fa-solid fa-bars"></i>
                                </div>
                                <div class="box">
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </div>
                                <div class="box">
                                    <i class="fa-solid fa-heart"></i>
                                </div>
                            </div>
                        </div>
                    </div>
      `

     });
     
      
    } catch (error) {
      console.log(error);     
    } finally{
      loading = false;
    }
}

getApi()

let informationbox = document.getElementById("informationbox")

async function infobox(id) {
  
  try {
    
    let {data} = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/productss");  
    let resalt = data.find((item) => item.id == id)
     
    if (resalt) {
      informationbox.innerHTML="" 
      informationbox.innerHTML = `
      <div class="img">
                    <img src="${resalt.image}" alt="">
                </div>
                <div class="text">
                    <p><span>Title</span>: ${resalt.title}</p>
                    <p><span>Price</span>: ${resalt.price}$</p>
                    <p><span>Description</span>: ${resalt.description}</p>
                    <p><span>Category</span>: ${resalt.category}</p>
                </div>
                <i id="closex" class="fa-brands fa-x-twitter"></i> 
      `
      informationbox.style.display = "flex"
      document.getElementById('closex').addEventListener('click', function() {
        if (informationbox) {
          informationbox.style.display = "none";  
        }
      });

    }   
    

  } catch (error) {
    console.log(error);        
  }
  
} 

function datares(resalt) {
    resalt.forEach((item) => {
        boxx.innerHTML += `
         <div class="inbox">
                          <div class="imgbox">
                              <img src="${item.image}" alt="">
                          </div>
                          <p>${item.title}</p>
                          <div class="text">
                              <div class="money">
                                  <p>$${item.price}</p>
                              </div>
                              <div class="boxs">
                                  <div class="box">
                                      <i onclick="infobox(${item.id})" class="fa-solid fa-bars"></i>
                                  </div>
                                  <div class="box">
                                      <i class="fa-solid fa-cart-shopping"></i>
                                  </div>
                                  <div class="box">
                                      <i class="fa-solid fa-heart"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
        `
  
       }); 
}

 let inp = document.getElementById("inp")
 inp.addEventListener("input",searcfunc)
async function searcfunc() {
    try {
        boxx.innerHTML=""
        let {data} = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss`);
        let resalt = data.filter((item) => item.title.toLowerCase().includes(inp.value.toLowerCase()));

        
        if (resalt.length != 0) {
            datares(resalt)
        }else{
            boxx.innerHTML="<p class='paraqraf'>Bu mehsul movcut deyil !</p>"
        }
        
    } catch (error) {
        console.log(error);
        
        
    }
    
}

searcfunc()



let az = document.getElementById("a-z")
let za = document.getElementById("z-a")
let expensive = document.getElementById("expensive")
let cheap = document.getElementById("cheap")
let def = document.getElementById("default")

az.addEventListener("click",azfunc);

async function azfunc() {
    boxx.innerHTML =""
    let {data} = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/productss");
    let resalt = data.sort((a,b ) => a.title.localeCompare(b.title))

    datares(resalt)
}

za.addEventListener("click",zafunc)

async function zafunc() {
    boxx.innerHTML =""
    let {data} = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/productss");
    let resalt = data.sort((a,b ) => b.title.localeCompare(a.title))

    datares(resalt)
}

expensive.addEventListener("click",exfunc)

async function exfunc() {
    boxx.innerHTML =""
    let {data} = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/productss");
    let resalt = data.sort((a,b) => b.price - a.price , 0)

    datares(resalt)
}

cheap.addEventListener("click",chefunc)

async function chefunc() {
    boxx.innerHTML =""
    let {data} = await axios.get("https://655f2b37879575426b44b8f7.mockapi.io/productss");
    let resalt = data.sort((a,b) => a.price - b.price , 0)

    datares(resalt)
}

def.addEventListener("click",searcfunc)