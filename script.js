const inputfield=document.querySelector(".inputfield");
const main=document.querySelector(".resume_builder");
const outcont=document.querySelector(".output_container");
let ishidden=true;
function hide(){
    if(ishidden){
        main.style.display="none";
        ishidden=false;
        outcont.style.display="block";
        outcont.innerHTML=`
        <div class="output">
        <div class="heading">
        <h1>${inputfield["name"].value}</h1>
        <h4>${inputfield["title"].value}</h4>
        </div>
        <div class="info">
        <div class="left">
        <div class="box">
        <h2>Objectives</h2>
        <p>${inputfield["objectives"].value}</p>
        </div>
        <div class="box">
        <h2>skills</h2>
        <p>${inputfield["skills"].value}</p>
        </div>
        <div class="box">
        <h2>Academic details</h2>
        <p>${inputfield["academicdetails"].value}</p>
        </div>
        <div class="box">
        <h2>Contact</h2>
        <p>${inputfield["contact"].value}</p>
        </div>
        </div>
        <div class="right">
        <div class="box">
        <h2>Work Experience</h2>
        <p>${inputfield["workexperience"].value}</p>
        </div>
        <div class="box">
        <h2>Achievements</h2>
        <p>${inputfield["achievements"].value}</p>
        </div>
        <div class="box">
        <h2>projects</h2>
        <p>${inputfield["projects"].value}</p>
        </div>
        </div>
        </div>
        </div>
        <button onclick="print()"> Print Resume</button>`
    }
    else{
        main.style.display="block";
        ishidden=true;
        outcont.style.display="block";
        outcont.innerHTML="";
    }
}