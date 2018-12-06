<!-- Practice: Student Components
Create a new project.
Paste the array of student objects above into your JavaScript file.
Put the h1, section, and aside functions into your JavaScript file.
Add the following styles to your CSS.
#container {
    display: flex;
    flex-direction: column;
}

.pushRight {
    margin-left: auto;
}

.xx-large {
    font-size: 3em;
}

.bordered {
    border-width: 1px;
    border-color: goldenrod;
    border-style: solid;
}

.dashed {
    border-style: dashed;
}

.section--padded {
    padding: 10px;
}

.passing {
    color: green;
}

.failing {
    color: orange;
}
Add a container article to your HTML.
<article id="container"></article>
Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
for (student of students) {
    let studentComponent = ""
    if (student.score >= 60) {
        studentComponent = ...
    } else {
        studentComponent = ...
    }
}
If a student is passing, then the structure should look like the following.

<div class="student">
    <h1 class="xx-large green">Student Name</h1>
    <section class="bordered dashed section--padded">Student class</section>
    <aside class="pushRight">Additional information</aside>
</div> -->
