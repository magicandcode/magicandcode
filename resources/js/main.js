// Get skill span
const mainPresentationSkill = document.querySelector('.main-presentation-skill');

const mainPresentationSkillIcon = document.querySelector('.fab');
console.log(mainPresentationSkill);

console.log(mainPresentationSkill);

const skills = {
    html5: 'HTML5',
    'css3-alt': 'CSS3',
    php: 'PHP',
    laravel: 'Laravel',
    wordpress: 'WordPress',
    js: 'JavaScript',
    react: 'React'
};
const loopSkills = (key) => {
    let keys = Object.keys(skills);
    //const {...keys} = skills;

    const skillsArray = Object.values(skills);
    i = key < skillsArray.length ? key : 0;
    mainPresentationSkill.textContent = skillsArray[i++];
    mainPresentationSkillIcon.classList = 'fab html5';

    mainPresentationSkillIcon.classList = `fab fa-${keys[i-1]}`;
};
let i = 0;
setInterval(() => loopSkills(i++), 3000);