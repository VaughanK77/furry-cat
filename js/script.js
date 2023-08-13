var cat = document.querySelector(".cat");
var button = document.querySelector(".show-cat");
button.addEventListener("click", function() {
    if (cat.classList.contains("show")) {
        cat.classList.remove("show");
        button.innerText = "Wait, come back!";
        button.classList.add("disappear");
        // console.log("Yes");
    } else {
        cat.classList.add("show");
        button.innerText = "Shoo, cat!";
        button.classList.remove("disappear");
    // console.log("No");
}
});



