const HistoryButton = document.getElementById("HistoryButton");
const HistoryContent = document.getElementById("history-section");

const ValueButton = document.getElementById("ValueButton");
const ValueContent = document.getElementById("value-section");

const StaffButton = document.getElementById("StaffButton");
const StaffContent = document.getElementById("staff-section");




ValueButton.addEventListener("click", () => {
    document.getElementById('value-section').style.display = "block"
    document.getElementById('staff-section').style.display = "none"
    document.getElementById('history-section').style.display = "none"
    ValueContent.scrollIntoView({ behavior: "smooth" });
});

StaffButton.addEventListener("click", () => {
    document.getElementById('value-section').style.display = "none"
    document.getElementById('staff-section').style.display = "block"
    document.getElementById('history-section').style.display = "none"
    StaffContent.scrollIntoView({ behavior: "smooth" });
});

HistoryButton.addEventListener("click", () => {
    document.getElementById('value-section').style.display = "none"
    document.getElementById('staff-section').style.display = "none"
    document.getElementById('history-section').style.display = "block"
    HistoryContent.scrollIntoView({ behavior: "smooth" });
});