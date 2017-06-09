function tabsSwitch(event) {
    if(event.target.classList.contains("nav-active")){
        return;
    }
    for(let elem of document.querySelectorAll(".nav-a")){
        elem.classList.remove("nav-active");
    }
    event.target.classList.add("nav-active");
    let bindAttr = event.target.getAttribute("bind")
    for (let elem of document.querySelectorAll(".tab-active")) {
        elem.classList.remove("tab-active")
    }
    document.querySelector("#"+bindAttr).classList.add("tab-active")

    if(bindAttr==="content-2"){
        initSearchTemplateTab();
    }
}

function initTabsPage() {
    for (let elem of document.querySelectorAll(".nav-a")) {
        elem.addEventListener("click", tabsSwitch);
    }
}