// variable

    // ;eft side
    let LeftSlid = document.querySelector('.left-side')
    let leftSideButton = document.querySelector('.left-side-button')
    let BackDivLeft = document.querySelector('.back-div-left')
    let felesh = document.querySelector('.felesh')
    let hamb = document.querySelector('.hamb')
    let logo = document.querySelector('.logo')
    let SlideWrapper1 = document.querySelector('.slide-wrapper-1')
    let SlideWrapper2 = document.querySelector('.slide-wrapper-2')
    let followMe = document.querySelector('.follow-me')
    // right side
    let RightSideButton = document.querySelector('.right-side-button')
    let RightSlid = document.querySelector('.right-side')
    let BackDivRight = document.querySelector('.back-div-right')

    // open and close left side
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



    // open and close background left side
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

    // open and close left side
    RightSideButton.addEventListener('click',function(){
    RightSlid.classList.add("open-right-side")
    BackDivRight.classList.add("close-back-div-right")
})

    BackDivRight.addEventListener('click',function(){
        RightSlid.classList.remove("open-right-side")
        BackDivRight.classList.remove("close-back-div-right")
})