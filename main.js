const db = document.getElementById("db")
const dc = document.getElementById("dc")
dc.hidden = true
db.addEventListener("click", function(){
    if(dc.hidden){
        dc.hidden = false;
    }
    else{
        dc.hidden = true;
    }
})
