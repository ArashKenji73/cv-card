let skills, skillOffset, skillHeight;

skills = document.querySelectorAll('.skill');
skillOffset = document.getElementById('skills').offsetTop;
skillHeight = document.getElementById('skills').offsetHeight;


function addPercentToSkill(skill) {
    //console.log('you reached');
    //get progress digit from data attr
    let progrss = skill.dataset.progress;

    //progress bar 
    let progressNode = skill.getElementsByClassName("progress")[0];

    //progress digit
    let progressDigit = skill.getElementsByClassName("progress-digit")[0];


    //add style to node
    progressNode.style.width = progrss;
    progressDigit.textContent = progrss;

    skill.dataset.animate = "true";
}


export {
    addPercentToSkill,
    skillOffset,
    skillHeight,
    skills
}
