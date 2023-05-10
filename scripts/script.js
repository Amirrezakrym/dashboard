// variable
    let LeftSlid = document.querySelector('.left-side')
    let leftSideButton = document.querySelector('.left-side-button')
    let BackDivLeft = document.querySelector('.back-div-left')
    let felesh = document.querySelector('.felesh')
    let hamb = document.querySelector('.hamb')
    let logo = document.querySelector('.logo')
    let SlideWrapper1 = document.querySelector('.slide-wrapper-1')
    let SlideWrapper2 = document.querySelector('.slide-wrapper-2')
    let followMe = document.querySelector('.follow-me')

    
    leftSideButton.addEventListener('click',function(){

    LeftSlid.classList.toggle("open")
    BackDivLeft.classList.toggle("close-back-div-left")
    
    // button opacity
    hamb.classList.toggle("hamb-opacity")
    felesh.classList.toggle("felesh-opacity")
    // logo
    logo.classList.toggle("logo-open")
    // slide-wrapper-1
    SlideWrapper1.classList.toggle("slide-wrapper-1-opacity")
     // slide-wrapper-2
     SlideWrapper2.classList.toggle("slide-wrapper-2-opacity")
    // follow-me
    followMe.classList.toggle("follow-me-opacity")
})




    BackDivLeft.addEventListener('click',function(){

    LeftSlid.classList.remove("open")
    BackDivLeft.classList.remove("close-back-div-left")

     // opacity
     hamb.classList.toggle("hamb-opacity")
     felesh.classList.toggle("felesh-opacity")
     // logo
     logo.classList.toggle("logo-open")
     // slide-wrapper-1
     SlideWrapper1.classList.toggle("slide-wrapper-1-opacity")
      // slide-wrapper-2
      SlideWrapper2.classList.toggle("slide-wrapper-2-opacity")
     // follow-me
    followMe.classList.toggle("follow-me-opacity")
})





//  function OpenSide(data,width){
    
//     let blackDiv =document.createElement("div");
//     blackDiv.classList.add("black-div");
//     document.body.appendChild(blackDiv);

//     blackDiv.addEventListener("click", function(){

//         close();
//     })


//     let divShow = document.createElement("div");
//     divShow.style.width = width;
//     divShow.className ="div-show";
//     divShow.innerHTML = data;
//     document.body.appendChild(divShow);

//     setTimeout(() => {
//         divShow.classList.add("open");
//     }, 60);


//     function close(){
//        const divShow = Array.from(document.querySelectorAll(".div-show.open")).pop();
//        const divBlack = Array.from(document.querySelectorAll(".black-div")).pop();

//        divBlack.remove();
//        divShow.classList.remove("open");
//     }
   
//  }