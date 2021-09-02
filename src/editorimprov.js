
//import fkey from "https://raw.githubusercontent.com/Liftoff-KA/Ultimate-KA-Extension/main/src/main.js"; //Not required here

var num_array = ["1","2","3","4","5","6","7","8","9","0"];

//This if statement is required to seperate the individual functions for pages. It will become important later
if(num_array.includes(window.location.href.split("/")[5])){
  var auto_save = document.createElement("BUTTON");
    auto_save.style.color = "#1865f2";
    auto_save.style.cursor = "pointer";
    auto_save.style.fontSize = "15px";
    auto_save.style.backgroundColor = "white";
    auto_save.innerHTML = "Enable Autosave";
    auto_save.style.border = "1px black solid";
    auto_save.style.height = "40px";
    auto_save.style.display = "inline-flex";
    auto_save.style.justifyContent = "center";
    auto_save.style.alignItems = "center";
    auto_save.style.borderRadius = "4px";
    auto_save.style.paddingLeft = "14px";
    auto_save.style.paddingRight = "14px";
    auto_save.classList.add("autosave123")
    auto_save.style.fontWeight = "bold";
    auto_save.style.margin = "25px";
    auto_save.style.marginTop = "0px";
    auto_save.style.marginBottom = "0px";
    auto_save.onclick = function() {
        window.setInterval(function(){
            document.getElementsByClassName("_l7iimjv")[0].click();
        },5000);
    };

    document.getElementsByClassName("_3sp6y9x")[0].appendChild(auto_save)

    $(".autosave123").hover(function() {
        $(this).css("border", "2px #1865f2 solid")
        $(this).css("margin", "23px")
        auto_save.style.marginTop = "0px";
        auto_save.style.paddingLeft = "15px";
        auto_save.style.paddingRight = "15px";
        auto_save.style.marginBottom = "0px";

    }, function() {
        $(this).css("border", "1px black solid")
        $(this).css("margin", "23px")
        auto_save.style.marginBottom = "0px";
        auto_save.style.marginTop = "0px";
        auto_save.style.paddingLeft = "14px";
        auto_save.style.paddingRight = "14px";
    })
  
}
