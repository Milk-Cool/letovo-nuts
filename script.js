if(!["ru", "en"].includes(localStorage.getItem("LETOVONUTS::language"))){
    if(navigator.languages.includes("ru")) localStorage.setItem("LETOVONUTS::language", "ru");
    else localStorage.setItem("LETOVONUTS::language", "en");
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
function lang(){
    localStorage.getItem("LETOVONUTS::language") == "en"
    ? localStorage.setItem("LETOVONUTS::language", "ru")
    : localStorage.setItem("LETOVONUTS::language", "en");
    location.reload();
}

if(localStorage.getItem("LETOVONUTS::language") == "en"){
    document.getElementsByTagName("title")[0].innerText = "Buy nuts in \"Letovo\"";
    document.getElementsByClassName("logo")[0].src = "logo-en.png";
    document.querySelector("img.flag").src = "ru-flag.svg";
    switch(document.head.id){
        case "main":
            document.querySelector("body > h1.title").innerText = "Buy nuts in \"Letovo\" for a low cost!";
            document.querySelector("body > center:nth-child(4) > span").innerText = "Stock";
            document.querySelector("body > h2").innerText = "Why choose us:";
            document.querySelector("body > ol > li:nth-child(1)").innerText = "Delivery to your house";
            document.querySelector("body > ol > li:nth-child(2)").innerText = "High-quality nuts";
            document.querySelector("body > ol > li:nth-child(3)").innerText = "Nobody will ever know";
            document.querySelector("body > ol > li:nth-child(4)").innerText = "Not waiting for more than two days";
            document.querySelector("body > center:nth-child(7)").innerText = "And much more!";
            document.querySelector("body > center:nth-child(9) > a:nth-child(1)").innerText = "Delivery information";
            document.querySelector("body > center:nth-child(9) > a:nth-child(2)").innerText = "Participating";
            document.querySelector("body > center:nth-child(9) > a:nth-child(3)").innerText = "Contacts";
            document.querySelector("#pb").innerText = "This is a joke. Don't take anything seriously.";
            break;
        case "nuts":
            document.querySelector("body > h1:nth-child(2)").innerText = "Stock";
            document.querySelector("body > h1.title.no-padding.size > a").innerText = "Back to the main page";
            document.querySelector("body > center > div:nth-child(1)").innerHTML = '<img src="nuts/keshyu.jpg" width="300" height="300">Cashew';
            document.querySelector("body > center > div:nth-child(2)").innerHTML = '<img src="nuts/funduk.jpg" width="300" height="300">Hazelnut';
            document.querySelector("body > center > div:nth-child(4)").innerHTML = '<img src="nuts/mindal.jpg" width="300" height="300">Almond';
            break;
        case "buy":
            document.querySelector("body > center > span:nth-child(1)").innerText = "Weight: ";
            document.querySelector("body > center > span:nth-child(3)").innerText = "g";
            document.querySelector("#gg2").innerText = "House № ";
            document.querySelector("#gg3").innerText = "First name: ";
            document.querySelector("#gg4").innerText = "Last name: ";
            document.querySelector("#ok").innerText = "Purchase";
            document.querySelector("body > center > span:nth-child(18)").innerText = "Cancel";

            document.querySelector("#gg2").style.marginLeft = "-6px";
            document.querySelector("#gg3").style.marginLeft = "-26px";
            document.querySelector("#gg4").style.marginLeft = "-24px";
    }
}
if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
    document.body.style.fontSize = "200%";
    document.getElementsByClassName("logo")[0].width = 356;
    document.getElementsByClassName("logo")[0].height = 134;
    document.querySelector("img.flag").width = 96;
    if(document.head.id == "main") document.getElementById("pb").style.fontSize = "8px";
    if(document.head.id == "nuts") document.getElementById("mob").innerHTML = "<br><br>";
    if(document.head.id == "buy"){
        if(localStorage.getItem("LETOVONUTS::language") == "en"){
            document.getElementById("gg2").style.marginLeft = "-34px";
            document.getElementById("gg3").style.marginLeft = "-72px";
            document.getElementById("gg4").style.marginLeft = "-70px";
        }else{
            document.getElementById("gg2").style.marginLeft = "-22px";
            document.getElementById("gg3").style.marginLeft = "27px";
            document.getElementById("gg4").style.marginLeft = "-79px";
        }
    }
}
document.querySelector("img.flag").addEventListener("click", lang);