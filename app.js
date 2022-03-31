const sections = document.querySelectorAll('.section')
const sectBtns = document.querySelectorAll('.controlls')
const sectBtn = document.querySelectorAll('.control')
const allSections = document.querySelector(".main-content")

function PageTransitions () {
    // Buttom click active class 
    for(let i = 0; i < sectBtn.length; i++) {
        sectBtn[i].addEventListener("click", function(){
            let currentBtm = document.querySelectorAll(".active-btn");
            currentBtm[0].className =  currentBtm[0].className.replace("active-btn", "");
            this.className += " active-btn";
        })

    }

    // Section active

    allSections.addEventListener("click", (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // remove selected from the other active
            sectBtns.forEach(btn => {
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            // hide other sections
            sections.forEach(section => section.classList.remove('active'))
            const element = document.getElementById(id)
            element.classList.add('active');
        }
    })

    // Toggle theme
    const themeBtn = document.querySelector(".theme-btn")
    themeBtn.addEventListener("click", () => {
        let element = document.body;
        element.classList.toggle("light-mode")
    })
}
PageTransitions()