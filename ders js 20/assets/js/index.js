let foodimg = [
  {
    img:"https://preview.colorlib.com/theme/vegefoods/images/bg_1.jpg.webp",
    text:"We serve Fresh Vegestables & Fruits"
  },
  {
    img:"https://preview.colorlib.com/theme/vegefoods/images/bg_2.jpg.webp",
    text:"100% FRESH & ORGANIC FOODS"
  }
]

let ilkinelement = 0;
const sonElement = 1;

function organicfunc(index) {
  let organicfood = document.querySelector(".organicfood") 
  organicfood.innerHTML=""
  for (let i = 0; i < sonElement; i++) {
    let itemindex = (index + i) % foodimg.length;
    organicfood.innerHTML = `
    <div class="imgbox">
        <img src="${foodimg[itemindex].img}" alt="">
    </div>
    <div class="blackcolor">
        <h2>${foodimg[itemindex].text}</h2>
        <span>We deliver organic vegetables & fruits</span>
        <a href="">Viev Details</a>
    </div>
  `    
  }   
}

organicfunc(ilkinelement)

setInterval(() => {
  ilkinelement = (ilkinelement + 1) % foodimg.length
  organicfunc(ilkinelement)
}, 5000);

function headerfunc() {
  let header = document.querySelector(".header")
  if(window.scrollY >= 300){
    header.style.position = "fixed"
    header.classList.add("fixed")
  }else{
    header.style.position = "static"
    header.classList.remove("fixed")
  }
}

window.addEventListener("scroll", headerfunc);



let boxx = document.getElementById("boxx")
let page = 0;
let limit = 4;
let loading = false;

async function getApi() {
    if(loading) return;
    loading = true;
    boxx.innerHTML += `<img id="loadgift" src="https://th.bing.com/th/id/OIP.ngNzwrRBDElDnf2CLF_RbgHaHf?rs=1&pid=ImgDetMain" alt="">`;
    
    try {
     page++;
     let {data} = await axios.get(`https://655f2b37879575426b44b8f7.mockapi.io/productss?page=${page}&limit=${limit}`);
     document.getElementById("loadgift").remove();

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

let morebtn = document.getElementById("morebtn");
morebtn.addEventListener("click",getApi)

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

function updateTime() {
  const targetDate = new Date("2024-12-31T23:59:59");

  const now = new Date();
  const time = targetDate - now;

  if (time > 0) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hour = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((time % (1000 * 60)) / 1000)
    document.getElementById("day").innerHTML = `${days}`
    document.getElementById("hour").innerHTML = `${hour}`
    document.getElementById("minute").innerHTML = `${minute}`
    document.getElementById("second").innerHTML = `${second}`
  }
  
}

setInterval(() => {
  updateTime()
}, 1000)



let imgdata = [
  {
    img:"https://preview.colorlib.com/theme/vegefoods/images/person_1.jpg.webp" 
  },
  {
    img:"https://preview.colorlib.com/theme/vegefoods/images/person_2.jpg.webp"
  },
  {
    img:"https://preview.colorlib.com/theme/vegefoods/images/person_3.jpg.webp",    
  }
]

let ilkinelement1 = 0;
const sonElement1 = 3;

function caurselsec(index1) {
    let boxs = document.getElementById("boxs")
    boxs.innerHTML = ""
    for (let i = 0; i < sonElement1; i++) {
      let itemindex = (index1 + i) % imgdata.length
      boxs.innerHTML += `
       <div class="box">
                    <div class="imgbox">
                        <img src="${imgdata[itemindex].img}" alt="">
                        <div class="icone">
                            <span>"</span>
                        </div>
                    </div>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>

                    <div class="garbox">
                        <span>Garreth Smith</span>
                    <p>INTERFACE DESIGNER</p>
                    </div>
                </div>
      `
    }
}


caurselsec(ilkinelement1)

setInterval(() => {
  ilkinelement1 = (ilkinelement1 + 1) % imgdata.length
  caurselsec(ilkinelement1)
}, 4000);