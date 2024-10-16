function start(){
    const head = document.head
    head.append(document.createElement("title"))
    document.getElementsByTagName("title")[0].append("Omega Cat Studio")
    console.log(document.getElementById("defauld").innerHTML + "yes")
    head.source
    switch (new Date().getDay()) {
        case 0:
        day = "Sunday";
        break;
        case 1:
        day = "Monday";
        break;
        case 2:
        day = "Tuesday";
        break;
        // additional cases
        default:
        day = "Unknown";
        }
}