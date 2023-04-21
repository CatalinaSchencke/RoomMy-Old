let accordionButtons = document.querySelectorAll(".accordion-button");
let activeContent = document.querySelector("#activeContent");

accordionButtons.forEach(button => {

    button.addEventListener('click', function () {
        let contentId = button.dataset.accordionTarget;
        let sourceContent = button.dataset.accordionSource;

        closeOpenAccordions(contentId);        

        let accordionContent = document.querySelector(contentId);
        let sourceText = document.querySelector(sourceContent).innerHTML;
        activeContent.innerHTML = sourceText;
        accordionContent.classList.toggle("max-h-0");
        accordionContent.classList.toggle("max-h-[200px]");
    });
});

function closeOpenAccordions(contentId) {
    accordionButtons.forEach(button => {
        if (button.dataset.accordionTarget != contentId) {
            let content = document.querySelector(button.dataset.accordionTarget);
            content.classList.add("max-h-0");
            content.classList.remove("max-h-[200px]");
        }
    });
}

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
