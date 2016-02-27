/**
 * Created by Samsu on 27/02/2016.
 */

  function textstuff(){
   var sometext = document.getElementById("searchterm").value
   var thebutton = document.getElementById("buttonlink")
   var thepath= "searchsomething/"
   var thepath1= "http://127.0.0.1:8000/social/searchsomething/"
   var thepath2= thepath1.concat(sometext).concat("\/")
    var removedpath=thebutton.getAttribute("href")
//thepath.concat(sometext).concat("\/")

   thebutton.setAttribute("href",thepath2)
   }
