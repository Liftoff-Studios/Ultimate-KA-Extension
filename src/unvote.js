//Stuff that adds the unvote button
//Took me a lot of time but worthwhile :D

import fkey from "https://raw.githubusercontent.com/Liftoff-KA/Ultimate-KA-Extension/main/src/main.js";

var num_array = ["1","2","3","4","5","6","7","8","9","0"];

//This if statement is required to seperate the individual functions for pages. It will become important later
if(num_array.includes(window.location.href.split("/")[5])){
    
    var unvote_button = document.createElement("BUTTON");
    unvote_button.style.color = "#1865f2";
    unvote_button.style.cursor = "pointer";
    unvote_button.style.fontSize = "15px";
    unvote_button.style.backgroundColor = "white";
    unvote_button.innerHTML = "Unvote";
    unvote_button.style.border = "1px black solid";
    unvote_button.style.height = "40px";
    unvote_button.style.display = "inline-flex";
    unvote_button.style.justifyContent = "center";
    unvote_button.style.alignItems = "center";
    unvote_button.style.borderRadius = "4px";
    unvote_button.style.paddingLeft = "14px";
    unvote_button.style.paddingRight = "14px";
    unvote_button.classList.add("unvotebutton123")
    unvote_button.style.fontWeight = "bold";
    unvote_button.style.margin = "2px";
    unvote_button.style.marginTop = "0px";
    unvote_button.style.marginBottom = "0px";
    unvote_button.onclick = function() {
        removeVote(window.location.href)
    };

    document.getElementsByClassName("_7z5jsor")[0].appendChild(unvote_button)

    $(".unvotebutton123").hover(function() {
        $(this).css("border", "2px #1865f2 solid")
        $(this).css("margin", "0px")
        unvote_button.style.marginTop = "0px";
        unvote_button.style.paddingLeft = "15px";
        unvote_button.style.paddingRight = "15px";
        unvote_button.style.marginBottom = "0px";

    }, function() {
        $(this).css("border", "1px black solid")
        $(this).css("margin", "2px")
        unvote_button.style.marginBottom = "0px";
        unvote_button.style.marginTop = "0px";
        unvote_button.style.paddingLeft = "14px";
        unvote_button.style.paddingRight = "14px";
    })



    function removeVote(url) {
        var sects = url.split("/");
        var entity = "";
        fetch("https://www.khanacademy.org/api/internal/scratchpads/" + sects[5]).then(response => response.json())
            .then((data) => {
                entity = data.key;
                console.log("Entity Key Received");

                fetch("https://www.khanacademy.org/api/internal/discussions/voteentity", {
                    "headers": {
                        "content-type": "application/x-www-form-urlencoded;charset=UTF-8",

                        "x-ka-fkey": fkey
                    },
                    "referrer": url,
                    "referrerPolicy": "strict-origin-when-cross-origin",
                    "body": "entity_key=" + data.key + "&vote_type=0",
                    "method": "POST",
                    "mode": "cors",
                    "credentials": "include"
                });

                var voter = document.getElementsByClassName("_1hbejdyb")[0];
                var vote_splitter = voter.textContent.split("•");
                var finalle = "";
                if (voter.textContent.includes("!")) {
                    var reducedNo = (parseInt(vote_splitter[1]) - 1);

                    finalle = "Vote Up •" + " " + reducedNo;
                    voter.style.setProperty("background-color", "#1865f2", "important");
                    voter.style.setProperty("color", "white", "important");
                    voter.style.setProperty("cursor", "pointer", "important");
                    voter.style.setProperty("font-size", "15px", "important");
                    voter.style.setProperty("font-weight", "bold", "important");
                    voter.textContent = finalle;

                }


            });


    };

    
};
