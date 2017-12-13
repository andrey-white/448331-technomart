var link = document.querySelector(".write-us-button");
var popup = document.querySelector(".write-us");
var close = popup.querySelector(".modal-close-button");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");

 	 		 link.addEventListener("click", function (evt) {
 		  	evt.preventDefault();
 		  	popup.classList.add("modal-show");
 		   });

 		   close.addEventListener("click", function (evt) {
   			evt.preventDefault();
  		 	popup.classList.remove("modal-show");
  		 	popup.classList.remove("modal-error");
		   });

		   form.addEventListener("submit", function (evt) {
 		    if (!name.value || !email.value) {
        evt.preventDefault();
   		  popup.classList.remove("modal-error");
    	  popup.offsetWidth = popup.offsetWidth;
    	  popup.classList.add("modal-error");   		  
   			 }
 		    });

		    window.addEventListener("keydown", function (evt) {
     	  if (evt.keyCode === 27) {
   		  if (popup.classList.contains("modal-show")) {
   	    popup.classList.remove("modal-show");
   	    popup.classList.remove("modal-error");
   		   }
  		  }
 		 });

var mapLink = document.querySelector(".map-button");
var mapPopup = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".modal-close-button");

        mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.add("modal-show");
        });

        mapClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapPopup.classList.remove("modal-show");
        });

        window.addEventListener("keydown", function (evt) {
        if (evt.keyCode === 27) {
          if (mapPopup.classList.contains("modal-show")) {
          mapPopup.classList.remove("modal-show");
          }
          }
        });