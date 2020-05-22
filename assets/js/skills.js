var skills = document.querySelectorAll('.skill');


function addPercentToSkill() {
    skills.forEach(
        element => {
            //get progress digit from data attr
            let progrss = element.dataset.progress;

            //progress bar 
            let progressNode = element.getElementsByClassName("progress")[0];

            //progress digit
            let progressDigit = element.getElementsByClassName("progress-digit")[0];


            //add style to node
            progressNode.style.width = progrss;
            progressDigit.textContent = progrss;

        }
    );
}


export {
    addPercentToSkill
}
