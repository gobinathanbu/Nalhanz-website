const showIcon = document.querySelector("#show");
const hideIcon = document.querySelector("#hide");
const fixedNav = document.querySelector(".fixed-nav");

showIcon.addEventListener("click", () => {
    fixedNav.classList.add("show");
});

hideIcon.addEventListener("click", () => {
    fixedNav.classList.remove("show");
});

$("li").click(function() {
    $(".fixed-nav").removeClass('show');
})