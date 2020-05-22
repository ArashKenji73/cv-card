var skills = document.querySelectorAll('.skill');


function addPercentToSkill() {
    skills.forEach(
        element => {

            let progrss = element.dataset.progress;
            let progressNode = element.getElementsByClassName("progress")[0];

            let progressDigit = element.getElementsByClassName("progress-digit")[0];


            progressNode.style.width = progrss;


            progressDigit.textContent = progrss;


        }
    );
}


export {addPercentToSkill}
