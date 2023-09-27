// "use strict";


// let sidebar = document.querySelector(".sidebar");

// let openIcon = document.querySelector(".sidebar .open-icon")

// let closeIcon = document.querySelector(".sidebar .close-icon")

// openIcon.addEventListener("click", function(){
//     sidebar.classList.remove("move-sidebar");
//     this.previousElementSibling.classList.remove("d-none");
//     this.classList.add("d-none");
// })


// closeIcon.addEventListener("click", function(){
//     sidebar.classList.add("move-sidebar");
//     this.nextElementSibling.classList.remove("d-none");
//     this.classList.add("d-none");
// })


$(function(){

    let sidebar = $(".sidebar")


    $(".sidebar .open-icon").click(function(){
        sidebar.removeClass("move-sidebar")
        $(this).prev().removeClass("d-none")
        $(this).addClass("d-none")
    })

    $(".sidebar .close-icon").click(function(){
        sidebar.addClass("move-sidebar")
        $(this).next().removeClass("d-none")
        $(this).addClass("d-none")
    })
        



})