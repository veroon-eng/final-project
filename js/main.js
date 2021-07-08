my_new_nav=document.querySelector(".sticky_navbar")
bodyScroll=document.querySelector("html , body")
window.addEventListener("scroll",function(){
    if(bodyScroll.scrollTop >=100){
        my_new_nav.style.display="block"
        my_new_nav.classList.remove("animate__animated","animate__slideOutUp")
        my_new_nav.classList.add("animate__animated","animate__slideInDown")
    }
    else{
        // my_new_nav.style.display="none"
        my_new_nav.classList.remove("animate__animated","animate__slideInDown")
        my_new_nav.classList.add("animate__animated","animate__slideOutUp")
    
    }
})

navLink=document.querySelectorAll(".navbar .menu li")
console.log(navLink);
var link;
var removeActive;
for(link=0;link<navLink.length;link++){
    navLink[link].addEventListener("click",function(){
        for(removeActive=0;removeActive<navLink.length;removeActive++){
            navLink[removeActive].classList.remove("active")
        }
        this.classList.add("active")
    })
}
// ##################################################################################################################################################
                                            // sticky navbar
myAccordionActive=document.querySelectorAll(".accordion .myaccordion .header  li")
var link;
var removeActive;
for(link=0;link<myAccordionActive.length;link++){
    myAccordionActive[link].addEventListener("click",function(){
        for(removeActive=0;removeActive<myAccordionActive.length;removeActive++){
            myAccordionActive[removeActive].classList.remove("myactive")
        }
        this.classList.add("myactive")
    })
}



myAccordionContent1=document.querySelectorAll(".accordion .myaccordion .boxes1 .box  ")
label1=document.querySelectorAll(".accordion .myaccordion .boxes1 .box .label h3")
for(content=0;content<myAccordionContent1.length;content++){  
    myAccordionContent1[content].addEventListener("click",function(){
        this.classList.toggle("myactive2")
    })
}
for(content=0;content<myAccordionContent1.length;content++){  
    label1[content].addEventListener("click",function(){
        this.classList.toggle("myactive3")
    })
}

myAccordionContent2=document.querySelectorAll(".accordion .myaccordion .boxes2 .box  ")
label2=document.querySelectorAll(".accordion .myaccordion .boxes2 .box .label h3")
for(content=0;content<myAccordionContent2.length;content++){  
    myAccordionContent2[content].addEventListener("click",function(){
        this.classList.toggle("myactive2")
    })
}
for(content=0;content<myAccordionContent2.length;content++){ 3
    label2[content].addEventListener("click",function(){
        this.classList.toggle("myactive3")
    })
}

myAccordionContent3=document.querySelectorAll(".accordion .myaccordion .boxes3 .box  ")
label3=document.querySelectorAll(".accordion .myaccordion .boxes3 .box .label h3")
for(content=0;content<myAccordionContent3.length;content++){  
    myAccordionContent3[content].addEventListener("click",function(){
        this.classList.toggle("myactive2")
    })
}
for(content=0;content<myAccordionContent3.length;content++){  
    label3[content].addEventListener("click",function(){
        this.classList.toggle("myactive3")
    })
}

myAccordionContent4=document.querySelectorAll(".accordion .myaccordion .boxes4 .box  ")
label4=document.querySelectorAll(".accordion .myaccordion .boxes4 .box .label h3")
for(content=0;content<myAccordionContent4.length;content++){  
    myAccordionContent4[content].addEventListener("click",function(){
        this.classList.toggle("myactive2")
    })
}
for(content=0;content<myAccordionContent4.length;content++){  
    label4[content].addEventListener("click",function(){
        this.classList.toggle("myactive3")
    })
}

myAccordionContent5=document.querySelectorAll(".accordion .myaccordion .boxes5 .box  ")
label5=document.querySelectorAll(".accordion .myaccordion .boxes5 .box .label h3")
for(content=0;content<myAccordionContent5.length;content++){  
    myAccordionContent5[content].addEventListener("click",function(){
        this.classList.toggle("myactive2")
    })
}
for(content=0;content<myAccordionContent5.length;content++){  
    label5[content].addEventListener("click",function(){
        this.classList.toggle("myactive3")
    })
}

myAccordionContent6=document.querySelectorAll(" .accordion .myaccordion .boxes6 .box  ")
label6=document.querySelectorAll(".accordion .myaccordion .boxes6 .box .label h3")
for(content=0;content<myAccordionContent6.length;content++){  
    myAccordionContent6[content].addEventListener("click",function(){
        this.classList.toggle("myactive2")
    })
}
for(content=0;content<myAccordionContent6.length;content++){  
    label6[content].addEventListener("click",function(){
        this.classList.toggle("myactive3")
    })
}



boxes1=document.querySelector(".accordion .myaccordion .boxes1")
boxes2=document.querySelector(".accordion .myaccordion .boxes2")
boxes3=document.querySelector(".accordion .myaccordion .boxes3")
boxes4=document.querySelector(".accordion .myaccordion .boxes4")
boxes5=document.querySelector(".accordion .myaccordion .boxes5")
boxes6=document.querySelector(".accordion .myaccordion .boxes6")
myAccordionActive=document.querySelectorAll(".accordion .myaccordion .header  li")
var link;
var removeActive;
for(link=0;link<myAccordionActive.length;link++){
    myAccordionActive[link].addEventListener("click",function(){
        if(myAccordionActive[0].getAttribute("class")=="myactive"){
            boxes2.style.display="none"
            boxes3.style.display="none"
            boxes4.style.display="none"
            boxes5.style.display="none"
            boxes6.style.display="none"
            boxes1.style.display="block"
        }
        else if (myAccordionActive[1].getAttribute("class")=="myactive"){
            boxes1.style.display="none"
            boxes3.style.display="none"
            boxes4.style.display="none"
            boxes5.style.display="none"
            boxes6.style.display="none"
            boxes2.style.display="block"
        }
        else if (myAccordionActive[2].getAttribute("class")=="myactive"){
            boxes1.style.display="none"
            boxes2.style.display="none"
            boxes4.style.display="none"
            boxes5.style.display="none"
            boxes6.style.display="none"
            boxes3.style.display="block"
        }
        else if (myAccordionActive[3].getAttribute("class")=="myactive"){
            boxes1.style.display="none"
            boxes2.style.display="none"
            boxes3.style.display="none"
            boxes5.style.display="none"
            boxes6.style.display="none"
            boxes4.style.display="block"
        }
        else if (myAccordionActive[4].getAttribute("class")=="myactive"){
            boxes1.style.display="none"
            boxes2.style.display="none"
            boxes3.style.display="none"
            boxes4.style.display="none"
            boxes6.style.display="none"
            boxes5.style.display="block"
        }
        else if (myAccordionActive[5].getAttribute("class")=="myactive"){
            boxes1.style.display="none"
            boxes2.style.display="none"
            boxes3.style.display="none"
            boxes4.style.display="none"
            boxes5.style.display="none"
            boxes6.style.display="block"
        }
    })
}



// ##################################################################################################################################################
                            // fixed navbar
closeIcon=document.querySelector(".close_icon")
closeIcon2=document.querySelector(".close_icon2")
barIcon2=document.querySelector(".bar_icon2")
fixedNavbar=document.querySelector(".fixed_navbar")
barIcon=document.querySelector(".bar_icon")


barIcon.addEventListener("click",function(){
    fixedNavbar.style.display="block"
    barIcon.style.display="none";
    closeIcon.style.display="block"
    fixedNavbar.classList.add("animate__animated","animate__bounceInDown")
})
closeIcon.addEventListener("click",function(){
    fixedNavbar.style.display="none"
    closeIcon.style.display="none"
    barIcon.style.display="block"
    fixedNavbar.classList.add("animate__animated","animate__backOutDown")
})
barIcon2.addEventListener("click",function(){
    fixedNavbar.style.display="block"
    barIcon2.style.display="none";
    closeIcon2.style.display="block"
    fixedNavbar.classList.add("animate__animated","animate__bounceInDown")
})
closeIcon2.addEventListener("click",function(){
    fixedNavbar.style.display="none"
    closeIcon2.style.display="none"
    barIcon2.style.display="block"
})




fixedNavLink=document.querySelectorAll(".fixed_navbar ul li")
console.log(fixedNavLink);
var link;
var removeActive;
for(link=0;link<fixedNavLink.length;link++){
    fixedNavLink[link].addEventListener("click",function(){
        for(removeActive=0;removeActive<fixedNavLink.length;removeActive++){
            fixedNavLink[removeActive].classList.remove("active")
        }
        this.classList.add("active")
    })
}


for(link=0;link<fixedNavLink.length;link++){
    fixedNavLink[link].addEventListener("click",function(){
        fixedNavbar.style.display="none";
        closeIcon.style.display="none"
        barIcon.style.display="block"
        closeIcon2.style.display="none"
        barIcon2.style.display="block"

    })
}
// ##################################################################################################################################################
                                    // scroll-top


scrollTop=document.querySelector(".scroll-top")
bodyScroll=document.querySelector("html , body")
 window.addEventListener("scroll",function(){
     if(bodyScroll.scrollTop>100){
        scrollTop.style.display="block"
        scrollTop.addEventListener("click",function(){
            window.scrollTo(0,0)
        })
     }
     else{
        scrollTop.style.display="none"
     }
 })




// ##################################################################################################################################################
                                    // custom colors
red_custom=document.querySelector(".red_custom")
purple_custom=document.querySelector(".purple_custom")
green_custom=document.querySelector(".green_custom")
blue_custom=document.querySelector(".blue_custom")
cog_custom=document.querySelector(".cog_custom")
custom_board=document.querySelector(".custom_board")


cog_custom.addEventListener("click",function(){
    custom_board.classList.toggle("show_custom")
    custom_board.classList.add("animate__animated","animate__backInDown")

})

red_custom.addEventListener("click",function(){

    getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    document.documentElement.style.setProperty('--main-color', 'red')

    getComputedStyle(document.documentElement).getPropertyValue('--main-color-hover');
    document.documentElement.style.setProperty('--main-color-hover', '#9b0606')
    
})



purple_custom.addEventListener("click",function(){

    getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    document.documentElement.style.setProperty('--main-color', '#c000ff')

    getComputedStyle(document.documentElement).getPropertyValue('--main-color-hover');
    document.documentElement.style.setProperty('--main-color-hover', '#8808b2')
    
})


green_custom.addEventListener("click",function(){

    getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    document.documentElement.style.setProperty('--main-color', '#0be10b')

    getComputedStyle(document.documentElement).getPropertyValue('--main-color-hover');
    document.documentElement.style.setProperty('--main-color-hover', '#088b08')

  
    
})



blue_custom.addEventListener("click",function(){

    getComputedStyle(document.documentElement).getPropertyValue('--main-color');
    document.documentElement.style.setProperty('--main-color', '#2a81ea')

    getComputedStyle(document.documentElement).getPropertyValue('--main-color-hover');
    document.documentElement.style.setProperty('--main-color-hover', '#1468cd')
    
})
