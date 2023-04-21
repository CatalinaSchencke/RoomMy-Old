let accordionButtons = document.querySelectorAll(".accordion-button");

accordionButtons.forEach(button => {
    button.addEventListener('click', function () {
        let contentId = button.dataset.accordionTarget;
        accordionButtons.forEach(button => {
            if (button.dataset.accordionTarget != contentId) {
                let content = document.querySelector(button.dataset.accordionTarget);
                content.classList.add("max-h-0");
                content.classList.remove("max-h-[200px]");
            }
        });

        let content = document.querySelector(contentId);
        content.classList.toggle("max-h-0");
        content.classList.toggle("max-h-[200px]");
    });
});

// setupAccordion();

// function setupAccordion() {

    

//     let button = document.querySelector('#button-accordion-1');
//     let content = document.querySelector("#firstContent");

//     console.log(button.dataset.accordionTarget);

//     button.addEventListener('click', function () {
//         content.classList.toggle("max-h-0");
//         content.classList.toggle("max-h-screen");
        
//     });

// };
