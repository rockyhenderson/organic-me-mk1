const HistoryButton = document.getElementById("HistoryButton");
const HistoryContent = document.getElementById("history-section");

const ValueButton = document.getElementById("ValueButton");
const ValueContent = document.getElementById("value-section");

const StaffButton = document.getElementById("StaffButton");
const StaffContent = document.getElementById("staff-section");




ValueButton.addEventListener("click", () => {
    ValueContent.scrollIntoView({ behavior: "smooth" });
});

StaffButton.addEventListener("click", () => {
    StaffContent.scrollIntoView({ behavior: "smooth" });
});

HistoryButton.addEventListener("click", () => {
    HistoryContent.scrollIntoView({ behavior: "smooth" });
});