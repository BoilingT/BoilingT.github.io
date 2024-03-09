var leftBtn = document.getElementById("banner-btn-left");
var rightBtn = document.getElementById("banner-btn-right");
var panel = document.getElementById("banner");
var panelIndex = 1;
const panels = 13;
const panelTime = 4000;
const imageSrc = "./Images/Panels/";
const imageExtension = ".png";
/*
leftBtn.addEventListener("mouseup", (e) => {
    prevPanel();
})

rightBtn.addEventListener("mouseup", (e) => {
    nextPanel();
})
*/

function nextPanel() {
    updatePanel(++panelIndex);
    updateIcons();
    resetTimer();
    return panelIndex;
}

function prevPanel() {
    updatePanel(--panelIndex);
    updateIcons();
    resetTimer();
    return panelIndex;
}

function setBackgroundImage(element, src) {
    element.style.backgroundImage = "url(" + src +")";
    return element;
}

function updatePanel() {
    if (panelIndex > panels) {
        panelIndex = 1;
    }else if(panelIndex < 1){
        panelIndex = panels;
    }
    return banner.style.backgroundImage = ("url(" + imageSrc + panelIndex + imageExtension +")");
}

var time;
window.onload = resetTimer;

function action() {
    nextPanel();
    resetTimer();
}

function resetTimer() {
    clearTimeout(time);
    time = setTimeout(action, panelTime);
    // 5 min
    // 1000 milliseconds = 1 second
}

function addPanelIcon(color){
    const iconDiv = document.createElement("div");
    const element = document.getElementById("iconInput-container");
    if(color){
        iconDiv.setAttribute("id", "currentPanel")
    }
    iconDiv.setAttribute("onclick", "changePanel(this)");
    iconDiv.setAttribute("class", "panelIcon");
    element.appendChild(iconDiv);
    return iconDiv;
}

function updateIcons() {
    const panels = document.getElementsByClassName("panelIcon");
    const currentPanel = document.getElementById("currentPanel");
    if(currentPanel != null){
        currentPanel.removeAttribute("id");
    }
    if(panels != null){
        panels[panelIndex-1].setAttribute("id", "currentPanel");
    }
}

function addIcons(){
    for (let index = 0; index < panels; index++) {
        let element = addPanelIcon(index == panelIndex-1);
        let path = imageSrc + (index+1) + imageExtension;
        setBackgroundImage(element, path)
    }
}

function changePanel(btn) {
    btn.setAttribute("id", "currentPanel");
    elements = document.getElementsByClassName("panelIcon");
    for (let index = 0; index < elements.length; index++) {
        const element = elements[index];
        if(element != btn){
            element.removeAttribute("id");
        }else if(element == btn){
            panelIndex = index+1;
            resetTimer();
            updatePanel(panelIndex);
        }
        
    }
}

addIcons();