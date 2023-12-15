const box =document.querySelectorAll(".box")
  const body =document.querySelector("body")

  box.forEach((button)=>{
     button.addEventListener("click",(e)=>{
        console.log(e.target);
        if(e.target.id === "grey"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "yellow"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "white"){
            body.style.backgroundColor = e.target.id
        }
        if(e.target.id === "purple"){
            body.style.backgroundColor = e.target.id
        }
     })
  })