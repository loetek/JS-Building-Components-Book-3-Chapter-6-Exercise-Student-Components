const students = [
    {
        name: "Chris Miller",
        clasS: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        clasS: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        clasS: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        clasS: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        clasS: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        clasS: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        clasS: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        clasS: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        clasS: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        clasS: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        clasS: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        clasS: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const h1 = (title, style) => {
    return `<h1 class="${style}">${title}</h1>`;
}

const section = (title, style) => {
    return `<section class="bordered dashed ${style}">${title}</section>`;
}

const aside = (title, style) => {
    return `<aside class="${style}">${title}</aside>`;
}
const article = (title, style) => {
    return `<article class ="${style}">${title}</article>`;

}

const studentCreator = (name, clasS, info) => {
    `<div id="student">
        ${h1(name, "xx-large")}
        ${section(clasS, "section--padded")}
        ${aside(info, "pushRight")}
    </div> `
};

const container = document.querySelector("#container")
container.innerHTML = studentCreator("Marcus Fulbright", "Algebra", "Not a bright student");

const getLooped = () => {
for (student of students) {
    let studentComponent ='';
    if (student.score >= 60) {
        studentComponent = studentCreator(students.name, students.score, students.info);
    } else {
        studentComponent = studentCreator(students.name, students.score, students.class);
    }
}
}
getLooped(students);
console.log(getLooped(students));