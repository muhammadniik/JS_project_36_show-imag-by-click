const btnNavs = document.querySelector(".nav ul").children;
const imags = document.querySelector(".imags").children;

for (let i = 0; i < btnNavs.length; i++) {
    // btnNavs[i].classList.remove
    btnNavs[i].addEventListener("click", () => {
        Array.from(btnNavs).forEach(element => {
            element.classList.remove("active");

        });
        const className = btnNavs[i].getAttribute("class");

        btnNavs[i].classList.add("active");



        // Array.from(imags).forEach(e => {

        // })

        for (let m = 0; m < imags.length; m++) {
            if (imags[m].getAttribute("may-id") == className || className == "all") {
                imags[m].style.display = "block";
            } else {
                imags[m].style.display = "none";
            }

        }

    })
}