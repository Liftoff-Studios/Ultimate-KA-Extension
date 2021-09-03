
/**Method (Easier)*/

//import fkey from "https://raw.githubusercontent.com/Liftoff-KA/Ultimate-KA-Extension/main/src/main.js";




var notifBlueButtonStylesRaw = "-webkit-box-direction: normal !important;-webkit-box-orient: vertical !important;-webkit-box-align: stretch !important;-ms-flex-align: stretch !important;-webkit-align-items: stretch !important;align-items: stretch !important;border-width: 0px !important;border-style: solid !important;-moz-box-sizing: border-box !important;box-sizing: border-box !important;-webkit-flex-direction: column !important;-ms-flex-direction: column !important;flex-direction: column !important;margin: 0px !important;padding: 0px !important;z-index: 0 !important;min-height: 0px !important;min-width: 0px !important;display: -webkit-inline-box !important;display: -moz-inline-box !important;display: -ms-inline-flexbox !important;display: -webkit-inline-flex !important;display: inline-flex !important;background-color: #1865f2 !important;border-radius: 50% !important;height: 16px !important;width: 16px !important;position: absolute !important;right: -10px !important;top: -7px !important;";

$("._4jvfagi").append("<div class='_1bzguq7u' style='"+notifBlueButtonStylesRaw+"' aria-label = 'You have a new notification'></div>");
$("._1bzguq7u").hide();


function getNotifs(){
    fetch("https://www.khanacademy.org/api/internal/user/notifications/readable?casing=camel", {
            "headers": {
            "accept": "*/*",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "same-origin",
            "x-ka-fkey": fkey
        },
        "referrer": window.location.href,
        "referrerPolicy": "strict-origin-when-cross-origin",
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "include"
    }).then(response => response.json()).then(data => {
        var notif = false;
        for(var i = 0; i < data.notifications.length; i++){
            notif = (data.notifications[i].brandNew == true) || notif;
        }

        if(notif){
            //Code for stuff
            $("._1bzguq7u").show();
            alert("New Notification");
            fetch("https://www.khanacademy.org/api/internal/user/notifications/clear_brand_new", {
                "headers": {
                    "accept": "*/*",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "x-ka-fkey": fkey
                },
                "referrer": window.location.href,
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "POST",
                "mode": "cors",
                "credentials": "include"
            });
        } else {
            $("._1bzguq7u").hide();
        }
    });

};

document.addEventListener("load", () => {
    window.setInterval(getNotifs, 5000);
});
