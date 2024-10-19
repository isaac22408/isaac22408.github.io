const db = document.getElementById("db")
const dc = document.getElementById("dc")

dc.style.maxHeight = "none";
const fullHeight = dc.scrollHeight + "px";
dc.style.maxHeight = 0;
db.addEventListener("click", function(){
    if(dc.style.maxHeight === "0px"){
        dc.style.maxHeight = fullHeight;
    }
    else{
        dc.style.maxHeight = 0;
        dc.style.overflow = "hidden"
    }
})
