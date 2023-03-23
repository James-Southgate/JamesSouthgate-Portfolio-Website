//////////////////// project images disappear on window resize //////////////////
document.addEventListener("resize", function(){
    if (window.innerWidth < 100){

    }
});
//////////////////// project images disappear on window resize //////////////////

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
    var outer_outer_container_for_img1 = document.getElementById("outer_outer_container_for_img1"); ///
    var outer_outer_container_for_img1_pos = outer_outer_container_for_img1.getBoundingClientRect(); ///

    var screen_height_test = document.getElementById("screen_height_test"); ///
    var screen_height_test_pos = screen_height_test.getBoundingClientRect(); ///


    var img1 = document.getElementById("img1");
    var img1_pos = img1.getBoundingClientRect();

    var img1_moving = document.getElementById("img1_moving");
    var img1_moving_pos = img1_moving.getBoundingClientRect();


// stop it moving in center
    if (img1_pos.top > img1_moving_pos.top){
        document.getElementById("img1_moving").style.opacity = 0;
        document.getElementById("img1").style.opacity = 1;

        document.getElementById("img1").style.width = 300 - (0.05*(img1_pos.top - img1_moving_pos.top)) + "px";
        document.getElementById("img1").style.height = 300 - (0.05*(img1_pos.top - img1_moving_pos.top)) + "px";

        document.getElementById("img1").style.opacity = (1 - ((img1_pos.top - img1_moving_pos.top)/200)) + 1.8;
    }
    if (img1_pos.top < img1_moving_pos.top){
        document.getElementById("img1_moving").style.opacity = 1;
        document.getElementById("img1").style.opacity = 0;
    }
// stop it moving in center


///////////// words for 1 /////////////
    if(img1_pos.top < img1_moving_pos.top){
        document.getElementById("para1_for_img1").style.opacity = 0;
    }
    if (img1_pos.top > img1_moving_pos.top){
        document.getElementById("para1_for_img1").style.opacity = (img1_pos.top - img1_moving_pos.top)/100;
    }
    if (img1_pos.top > img1_moving_pos.top + 150){
        document.getElementById("para1_for_img1").style.opacity = 1 - (((img1_pos.top - img1_moving_pos.top)/75) - 3.5 );
    }
///////////// words for 1 /////////////

//////////////////////// img 1 //////////////////////

//////////////////////// img 2 //////////////////////
    var img2 = document.getElementById("img2");
    var img2_pos = img2.getBoundingClientRect();

    var img2_moving = document.getElementById("img2_moving");
    var img2_moving_pos = img2_moving.getBoundingClientRect();

    var img2_moving2 = document.getElementById("img2_moving2");
    var img2_moving2_pos = img2_moving2.getBoundingClientRect();

    if(img2_pos.top < img2_moving_pos.top){
        document.getElementById("img2").style.opacity = 0;
    }
    if (img2_pos.top > img2_moving_pos.top){
        document.getElementById("img2").style.opacity = (((img2_pos.top - img2_moving_pos.top)/200)) - 0.15;

        document.getElementById("img2").style.width = 300 - (0.05*(img2_pos.top - img2_moving_pos.top)) + "px";
        document.getElementById("img2").style.height = 300 - (0.05*(img2_pos.top - img2_moving_pos.top)) + "px";
    }

    if (img2_pos.top > img2_moving2_pos.top){
        document.getElementById("img2").style.opacity = 1 - (((img2_pos.top - img2_moving2_pos.top)/200)) - 0.15;
    }


///////////// words for 2 /////////////
    if (img2_pos.top < img2_moving_pos.top - 200){
        document.getElementById("para2_for_img1").style.opacity = 0;
    }
    if (img2_pos.top > img2_moving_pos.top - 200){
        document.getElementById("para2_for_img1").style.opacity = ((img2_pos.top - img2_moving_pos.top)/100) - 1;
    }
    if (img2_pos.top > img2_moving_pos.top + 300){
        document.getElementById("para2_for_img1").style.opacity = 1 - (((img2_pos.top - img2_moving_pos.top)/100) - 3);
    }

///////////// words for 2 /////////////

//////////////////////// img 2 //////////////////////

//////////////////////// img 3 //////////////////////

    var img3 = document.getElementById("img3");
    var img3_pos = img3.getBoundingClientRect();

    var img3_moving = document.getElementById("img3_moving");
    var img3_moving_pos = img3_moving.getBoundingClientRect();

    var img3_moving2 = document.getElementById("img3_moving2");
    var img3_moving2_pos = img3_moving2.getBoundingClientRect();

    if(img3_pos.top < img3_moving_pos.top){
        document.getElementById("img3").style.opacity = 0;
    }
    if (img3_pos.top > img3_moving_pos.top){
        document.getElementById("img3").style.opacity = (((img3_pos.top - img3_moving_pos.top)/200)) - 0.15;

        document.getElementById("img3").style.width = 300 - (0.05*(img3_pos.top - img3_moving_pos.top)) + "px";
        document.getElementById("img3").style.height = 300 - (0.05*(img3_pos.top - img3_moving_pos.top)) + "px";
    }

    if (img3_pos.top > img3_moving2_pos.top){
        document.getElementById("img3").style.opacity = 1 - (((img3_pos.top - img3_moving2_pos.top)/200)) - 0.15;
    }


///////////// words for 3 /////////////
    if (img3_pos.top < img3_moving_pos.top + 100){
        document.getElementById("para3_for_img1").style.opacity = 0;
    }
    if (img3_pos.top > img3_moving_pos.top + 100){
        document.getElementById("para3_for_img1").style.opacity = ((img3_pos.top - img3_moving_pos.top)/100) - 1;
    }
    if (img3_pos.top > img3_moving_pos.top + 200){
        document.getElementById("para3_for_img1").style.opacity = 1 - (((img3_pos.top - img3_moving_pos.top)/100) - 3);
    }
///////////// words for 3 /////////////

//////////////////////// img 3 //////////////////////

});





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

//var start_fading_value = 900; - original, now not needed

// about me
window.addEventListener("scroll", function(){
    var start_fading_value = (0.5*document.getElementById("screen_height_test").getBoundingClientRect().bottom) + 500;

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

    var start_fading_value = (0.5*document.getElementById("screen_height_test").getBoundingClientRect().bottom) + 500;

    if(scrollY < start_fading_value + 100){
        document.getElementById("part2_of_text_after_vid").style.opacity = 0;
    }
    if (scrollY > start_fading_value + 100){
        document.getElementById("part2_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 100))/100;
    }
    if (scrollY > start_fading_value + 200){
        document.getElementById("part2_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 200))/100) ;
    }
    if (scrollY > start_fading_value + 300){
        document.getElementById("part2_of_text_after_vid").style.opacity = 0;
    }
});

// part 3
window.addEventListener("scroll", function(){

    var start_fading_value = (0.5*document.getElementById("screen_height_test").getBoundingClientRect().bottom) + 500;

    if(scrollY < start_fading_value + 200){
        document.getElementById("part3_of_text_after_vid").style.opacity = 0;
    }
    if (scrollY > start_fading_value + 200){
        document.getElementById("part3_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 200))/100;
    }
    if (scrollY > start_fading_value + 300){
        document.getElementById("part3_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 300))/100) ;
    }
    if (scrollY > start_fading_value + 400){
        document.getElementById("part3_of_text_after_vid").style.opacity = 0;
    }
});

// part 4
window.addEventListener("scroll", function(){

    var start_fading_value = (0.5*document.getElementById("screen_height_test").getBoundingClientRect().bottom) + 500;

    if(scrollY < start_fading_value + 300){
        document.getElementById("part4_of_text_after_vid").style.opacity = 0;
    }
    if (scrollY > start_fading_value + 300){
        document.getElementById("part4_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 300))/100;
    }
    if (scrollY > start_fading_value + 400){
        document.getElementById("part4_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 400))/100) ;
    }
    if (scrollY > start_fading_value + 500){
        document.getElementById("part4_of_text_after_vid").style.opacity = 0;
    }
});

// part 5
window.addEventListener("scroll", function(){

    var start_fading_value = (0.5*document.getElementById("screen_height_test").getBoundingClientRect().bottom) + 500;

    if(scrollY < start_fading_value + 400){
        document.getElementById("part5_of_text_after_vid").style.opacity = 0;
    }
    if (scrollY > start_fading_value + 400){
        document.getElementById("part5_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 400))/100;
    }
    if (scrollY > start_fading_value + 500){
        document.getElementById("part5_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 500))/100) ;
    }
    if (scrollY > start_fading_value + 600){
        document.getElementById("part5_of_text_after_vid").style.opacity = 0;
    }
});

// part 6
window.addEventListener("scroll", function(){

    var start_fading_value = (0.5*document.getElementById("screen_height_test").getBoundingClientRect().bottom) + 500;

    if(scrollY < start_fading_value + 500){
        document.getElementById("part6_of_text_after_vid").style.opacity = 0;
    }
    if (scrollY > start_fading_value + 500){
        document.getElementById("part6_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 500))/100;
    }
    if (scrollY > start_fading_value + 600){
        document.getElementById("part6_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 600))/100) ;
    }
    if (scrollY > start_fading_value + 700){
        document.getElementById("part6_of_text_after_vid").style.opacity = 0;
    }
});

// part 7
window.addEventListener("scroll", function(){

    var start_fading_value = (0.5*document.getElementById("screen_height_test").getBoundingClientRect().bottom) + 500;

    if(scrollY < start_fading_value + 600){
        document.getElementById("part7_of_text_after_vid").style.opacity = 0;
    }
    if (scrollY > start_fading_value + 600){
        document.getElementById("part7_of_text_after_vid").style.opacity = (scrollY- (start_fading_value + 600))/100;
    }
    if (scrollY > start_fading_value + 700){
        document.getElementById("part7_of_text_after_vid").style.opacity = 1 - ((scrollY-(start_fading_value + 700))/100) ;
    }
    if (scrollY > start_fading_value + 800){
        document.getElementById("part7_of_text_after_vid").style.opacity = 0;
    }
});

//////////////////// text after vid //////////////////







