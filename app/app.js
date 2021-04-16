import * as MODEL from "../model/model.js";

function init() {
    let currentHeroImage = "tours";
    MODEL;            //places code from model.js
    $("section a").click(function(e) {
        let btnID = this.id;
        let contentID = btnID + "Content";
        
        console.log(btnID);

        MODEL.getPageContent(contentID);
    });
}

//checks for all elemants to be read by browser
$(document).ready(function() {
    init();
    //MODEL.getPageContent("toursContent");
});