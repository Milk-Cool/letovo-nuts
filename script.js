if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.body.style.fontSize = "200%";
    document.getElementsByClassName("logo")[0].width = 356;
    document.getElementsByClassName("logo")[0].height = 134;
    if(document.getElementsByTagName("head")[0].id == "nuts") document.getElementById("mob").innerHTML = "<br><br>";
    if(document.getElementsByTagName("head")[0].id == "buy"){
        document.getElementById("gg2").style.marginLeft = "-22px";
        document.getElementById("gg3").style.marginLeft = "27px";
        document.getElementById("gg4").style.marginLeft = "-79px";
    }
}
const parseUrlQuery = (value) => {
    var urlParams = new URL(value).searchParams
    return Array.from(urlParams.keys()).reduce((acc, key) => {
        acc[key] = urlParams.getAll(key)
        return acc
    }, {})
}
function limitCheck(el){
    el.value = Math.max(el.min, Math.min(el.value, el.max));
}
function cont(el){
    window.location.href = "buy.html?type=" + el.innerText;
}