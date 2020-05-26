
let skills, skillOffset, skillHeight;

skills = document.querySelectorAll('.skill');
skillOffset = document.getElementById('skills').offsetTop;
skillHeight = document.getElementById('skills').offsetHeight;


function addPercentToSkill() {
    //console.log('you reached');
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
    addPercentToSkill,
    skillOffset,
    skillHeight
}
