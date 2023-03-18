//////////////////// stops images appearing on page reload //////////////////
window.addEventListener("scroll", function(){
    if (scrollY < 100){
        document.getElementById("img1").style.display = "none";
        document.getElementById("img2").style.display = "none";
        document.getElementById("img3").style.display = "none";
    }
    else{
        document.getElementById("img1").style.display = "block";
        document.getElementById("img2").style.display = "block";
        document.getElementById("img3").style.display = "block";
    }
});
//////////////////// stops images appearing on page reload //////////////////

////////////////// img1 ///////////////////
window.addEventListener("scroll", function(){
    if (scrollY > 4137){
        document.getElementById("img1").style.position = "fixed";
    }
    if (scrollY > 4137){
        document.getElementById("img1").style.width = 507 - (scrollY/20) + "px";
        document.getElementById("img1").style.height = 507 - (scrollY/20) + "px";
    }
    else{
        document.getElementById("img1").style.position = "relative";
    }
});

window.addEventListener("scroll", function(){
    if (4500 < scrollY < 4600){
        document.getElementById("img1").style.opacity = (1 - (scrollY-4500) / 100);
    }
});
//////////////////// img1 //////////////////

////////////////// img2 ///////////////////
window.addEventListener("scroll", function(){
    if(scrollY < 4600){
        document.getElementById("img2").style.opacity = 0;
    }
    if (scrollY > 4600){
        document.getElementById("img2").style.opacity = (scrollY- (4600))/100;
    }
    if (scrollY > 4950){
        document.getElementById("img2").style.opacity = 1- ((scrollY- 4950)/100);
    }
    if (scrollY > 4600){
        document.getElementById("img2").style.width = 507 - (scrollY/20) + "px";
        document.getElementById("img2").style.height = 507 - (scrollY/20) + "px";
    }

});
//////////////////// img2 //////////////////

////////////////// img3 ///////////////////
window.addEventListener("scroll", function(){
    if(scrollY < 5050){
        document.getElementById("img3").style.opacity = 0;
    }
    if (scrollY > 5050){
        document.getElementById("img3").style.opacity = (scrollY- (5050))/100;
    }
    if (scrollY > 5335){
        document.getElementById("img3").style.opacity = 1- ((scrollY- 5335)/100);
    }
    if (scrollY > 5050){
        document.getElementById("img3").style.width = 507 - (scrollY/20) + "px";
        document.getElementById("img3").style.height = 507 - (scrollY/20) + "px";
    }

});

/*
window.addEventListener("scroll", function(){
    if(scrollY < 5050){
        document.getElementById("img3").style.opacity = 0;
    }
    if (scrollY > 5050){
        document.getElementById("img3").style.opacity = (scrollY- (5050))/100;
    }
    if (scrollY > 5000){
        document.getElementById("img3").style.width = 517 - (scrollY/20) + "px";
        document.getElementById("img3").style.height = 517 - (scrollY/20) + "px";
    }
    if (scrollY > 5335){
        document.getElementById("img3").style.width = 250 + "px";
        document.getElementById("img3").style.height = 250 + "px";
        document.getElementById("img3").style.position = "absolute";
        document.getElementById("img3").style.top = "1562px";
    }
    if (scrollY < 5335){
        document.getElementById("img3").style.position = "fixed";
        document.getElementById("img3").style.top = "50vh";
    }
});
*/
//////////////////// img3 //////////////////

//////////////////// words for imgs //////////////////
window.addEventListener("scroll", function(){
    if(scrollY < 4200){
        document.getElementById("para1_for_img1").style.opacity = 0;
    }
    if (scrollY > 4200){
        document.getElementById("para1_for_img1").style.opacity = (scrollY - 4200)/100;
    }
    if (scrollY > 4450){
        document.getElementById("para1_for_img1").style.opacity = 1 - ((scrollY - 4450)/100);
    }
    if (scrollY > 4550){
        document.getElementById("para1_for_img1").style.opacity = 0;
    }
});

window.addEventListener("scroll", function(){
    if(scrollY < 4650){
        document.getElementById("para2_for_img1").style.opacity = 0;
    }
    if (scrollY > 4650){
        document.getElementById("para2_for_img1").style.opacity = (scrollY - 4650)/100;
    }
    if (scrollY > 4900){
        document.getElementById("para2_for_img1").style.opacity = 1 - ((scrollY - 4900)/100);
    }
    if (scrollY > 5000){
        document.getElementById("para2_for_img1").style.opacity = 0;
    }
});
/*
window.addEventListener("scroll", function(){
    if(scrollY < 5100){
        document.getElementById("para3_for_img1").style.opacity = 0;
    }
    if (scrollY > 5100){
        document.getElementById("para3_for_img1").style.opacity = (scrollY - 5100)/100;
    }
    if (scrollY > 5350){
        document.getElementById("para3_for_img1").style.opacity = 1;
    }
});
*/

window.addEventListener("scroll", function(){
    if(scrollY < 5100){
        document.getElementById("para3_for_img1").style.opacity = 0;
    }
    if (scrollY > 5100){
        document.getElementById("para3_for_img1").style.opacity = (scrollY - 5100)/100;
    }
    if (scrollY > 5335){
        document.getElementById("para3_for_img1").style.opacity = 1 - ((scrollY - 5335)/100);
    }
    if (scrollY > 5450){
        document.getElementById("para3_for_img1").style.opacity = 0;
    }
});
//////////////////// words for imgs //////////////////




////////////////// my name ///////////////////
window.addEventListener("scroll", function(){
    if (scrollY < 450){
        document.getElementById("my_name").style.opacity = 1;
    }
    else if (450 < scrollY < 500){
        document.getElementById("my_name").style.opacity = (1- (scrollY-450) / 300);
    }
});

window.addEventListener("scroll", function(){
    document.getElementById("my_name").style.fontSize = (70 + scrollY/60) + "px";
});
//////////////////// my name //////////////////

//////////////////// scroll animation  //////////////////
window.addEventListener("scroll", function(){
    document.getElementById("id_for_container_for_scroll_animation").style.opacity = 1 - (scrollY/50);
});
//////////////////// scroll animation //////////////////



////////////////// vid ///////////////////
window.addEventListener("scroll", function(){
    if (scrollY < 500){
        document.getElementById("code_video_wall2").style.opacity = 1;
    }
    else if (500 < scrollY < 600){
        document.getElementById("code_video_wall2").style.opacity = 1 - ((scrollY-500) / 300);
    }
});

window.addEventListener("scroll", function(){
    if (scrollY < 1400){
        document.getElementById("code_video_wall").style.opacity = 0;
    }
    else{
        document.getElementById("code_video_wall").style.opacity = ((scrollY-1400) / 300) - 1;
    }
});

//speed
document.getElementById("code_video_actual_vid").playbackRate = 0.7;

//////////////////// vid //////////////////


//////////////////// text after vid //////////////////

var start_fading_value = 1100

// about me
window.addEventListener("scroll", function(){
if(scrollY < start_fading_value){
    document.getElementById("part1_of_text_after_vid").style.opacity = 0;
}
if (scrollY > start_fading_value){
    document.getElementById("part1_of_text_after_vid").style.opacity = (scrollY- (start_fading_value))/100;
}
if (scrollY > start_fading_value + 100){
    document.getElementById("part1_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 100))/100) ;
}
if (scrollY > start_fading_value + 200){
    document.getElementById("part1_of_text_after_vid").style.opacity = 0;
}
});

// part 2
window.addEventListener("scroll", function(){
if(scrollY < start_fading_value + 100){
    document.getElementById("part2_of_text_after_vid").style.opacity = 0;
}
// about me
if (scrollY > start_fading_value + 100){
    document.getElementById("part2_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 100))/100;
}
if (scrollY > start_fading_value + 200){
    document.getElementById("part2_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 200))/100) ;
}
// about me
if (scrollY > start_fading_value + 300){
    document.getElementById("part2_of_text_after_vid").style.opacity = 0;
}
});

// part 3
window.addEventListener("scroll", function(){
if(scrollY < start_fading_value + 200){
    document.getElementById("part3_of_text_after_vid").style.opacity = 0;
}
// about me
if (scrollY > start_fading_value + 200){
    document.getElementById("part3_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 200))/100;
}
if (scrollY > start_fading_value + 300){
    document.getElementById("part3_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 300))/100) ;
}
// about me
if (scrollY > start_fading_value + 400){
    document.getElementById("part3_of_text_after_vid").style.opacity = 0;
}
});

// part 4
window.addEventListener("scroll", function(){
if(scrollY < start_fading_value + 300){
    document.getElementById("part4_of_text_after_vid").style.opacity = 0;
}
// about me
if (scrollY > start_fading_value + 300){
    document.getElementById("part4_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 300))/100;
}
if (scrollY > start_fading_value + 400){
    document.getElementById("part4_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 400))/100) ;
}
// about me
if (scrollY > start_fading_value + 500){
    document.getElementById("part4_of_text_after_vid").style.opacity = 0;
}
});

// part 5
window.addEventListener("scroll", function(){
if(scrollY < start_fading_value + 400){
    document.getElementById("part5_of_text_after_vid").style.opacity = 0;
}
// about me
if (scrollY > start_fading_value + 400){
    document.getElementById("part5_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 400))/100;
}
if (scrollY > start_fading_value + 500){
    document.getElementById("part5_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 500))/100) ;
}
// about me
if (scrollY > start_fading_value + 600){
    document.getElementById("part5_of_text_after_vid").style.opacity = 0;
}
});

// part 6
window.addEventListener("scroll", function(){
if(scrollY < start_fading_value + 500){
    document.getElementById("part6_of_text_after_vid").style.opacity = 0;
}
// about me
if (scrollY > start_fading_value + 500){
    document.getElementById("part6_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 500))/100;
}
if (scrollY > start_fading_value + 600){
    document.getElementById("part6_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 600))/100) ;
}
// about me
if (scrollY > start_fading_value + 700){
    document.getElementById("part6_of_text_after_vid").style.opacity = 0;
}
});

// part 7
window.addEventListener("scroll", function(){
if(scrollY < start_fading_value + 600){
    document.getElementById("part7_of_text_after_vid").style.opacity = 0;
}
// about me
if (scrollY > start_fading_value + 600){
    document.getElementById("part7_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 600))/100;
}
if (scrollY > start_fading_value + 700){
    document.getElementById("part7_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 700))/100) ;
}
// about me
if (scrollY > start_fading_value + 800){
    document.getElementById("part7_of_text_after_vid").style.opacity = 0;
}
});

//////////////////// text after vid //////////////////

//////////////////// slide show for project 1 //////////////////
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}
//////////////////// slide show for project 1 //////////////////






