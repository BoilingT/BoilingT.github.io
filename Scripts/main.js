function gotoElementById(id) {
    location.href = id;
    closeNav();
}

function updateNavColors(element) {
    let quickNavBtns = document.getElementsByClassName("quickNavBtn");
    for (let i = 0; i < quickNavBtns.length; i++) {
        const btn = quickNavBtns[i];
        if(btn != element){
            btn.removeAttribute("style");
        }
        
    }
    element.style.backgroundColor = "rgb(223, 152, 46)";
    /*setTimeout(() => {
        element.removeAttribute("style");
    }, 5000);*/
}

function addQuickNavBtn(id, text){
    const btnDiv = document.createElement("div");
    const container = document.getElementById("quickNav-btnContainer");

    btnDiv.setAttribute("onclick", `gotoElementById("#${id}"); updateNavColors(this)`);
    btnDiv.setAttribute("class", "quickNavBtn");
    btnDiv.innerText = text;
    container.appendChild(btnDiv);
    return btnDiv;
}

function updateQuickNav() {
    const headers = document.getElementsByClassName("quickNavHeader");
    for (let i = 0; i < headers.length; i++) {
        const header = headers[i];
        addQuickNavBtn((header.getAttribute("value")+'').toLowerCase(), header.innerText);        
    }
}

updateQuickNav();

function openNav() {
    const nav = document.getElementsByClassName("quickNav")[0];
    nav.style.left = "0px";
}

function closeNav() {
    const nav = document.getElementsByClassName("quickNav")[0];
    nav.style.left = "-" + (nav.clientWidth) + "px";
}

window.addEventListener("resize", () => {
    closeNav();
})

setTimeout(() => {
    closeNav();
}, 1000);

function mainNav() {
    const nav = document.getElementById("burger-menu");
    const text = document.getElementById("burgerIconText");
    const icon = document.getElementById("burgerIcon");
    if(nav.style.display != "block"){
        nav.style.display = "block";
        try {
            icon.style.width = "100%";
            text.style.display = "block";
        } catch (error) {
            
        }
        setTimeout(() => {
            nav.style.right = "0px";
        }, 100);
    }else{
        nav.style.right = "-" + (nav.clientWidth) + "px";
        document.getElementById("burgerIcon").style.width = "";
        text.style.display = "";
        setTimeout(() =>{
            nav.style.display = "none";
        },1000)
    }
}

function changeQuickNavColor() {
    const icon = document.getElementById("quickNav-arrowIcon");
    if(icon.style.backgroundColor == "rgba(171, 48, 29, 0.7)"){
        icon.style.backgroundColor = "rgba(223, 152, 46, 0.5)";
    }else{
        icon.style.backgroundColor = "rgba(171, 48, 29, 0.7)";
    }
    setTimeout(() => {
        changeQuickNavColor();
    }, 5000);
}
changeQuickNavColor();

function isInView(element) {
    const rect = element.getBoundingClientRect();
    if(rect != null){
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }else{
        console.log("NULL");
    }
}

//Profile btn
function profileWindow() {
    const element = document.getElementById("profileWindow");
    if(element.style.height != "500px"){
        element.style.height = "500px";
    }
}