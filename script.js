const image = document.querySelector(".image"), lens = document.querySelector(".lens"), root = document.documentElement;

image.addEventListener("mousemove", () => {
    lens.style.visibility = "visible";
    let oX = ((event.clientX - image.offsetLeft) - image.offsetWidth/2) / 4.5;
    let oY = ((event.clientY - image.offsetTop) - image.offsetHeight/2) / 3.45;
    let x = ((event.clientX - image.offsetLeft + oX) / image.offsetWidth) * 100;
    let y = ((event.clientY - image.offsetTop + oY) / image.offsetHeight) * 100;
    root.style.setProperty("--x", `${x}%`);
    root.style.setProperty("--y", `${y}%`);
});

if (window.getComputedStyle(lens).getPropertyValue("visibility") === "hidden") {
    image.addEventListener("mouseleave", () => {
        lens.style.visibility = "hidden";
    });
}