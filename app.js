const allTabs = document.querySelectorAll(".tab");
const allTabsBtn = document.querySelectorAll(".icon");

for (let tabBtn of allTabsBtn) {
    tabBtn.addEventListener("click", e => {
        const tabClass = e.target.dataset.tab;
        const selectedTab = document.querySelector(`.${tabClass}`);
        for (let btn of allTabsBtn) {
            btn.classList.remove("active");
        }
        for (let tab of allTabs) {
            tab.style.display = "none";
        }
        e.target.classList.add("active");
        selectedTab.style.display = "block";
    });
}