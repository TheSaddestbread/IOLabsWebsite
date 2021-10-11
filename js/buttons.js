var Advocacy = false;
var Education = false;

function expandAdvocacy() {
    var text = "<ul><li>We work with community groups to understand and address the barriers faced by underserved populations to STEM educational programming and other opportunities.</li><li>We initiate projects that focus on improving the accessibility, and the relevance and design of these programs and opportunities.</li><li> We collaborate with educational institutions on projects that aim to create systemic change.</li></ul>";
    var OpenContent = document.getElementById("advocacycontent").classList;
    var button = document.getElementById("advocacybutton").classList;
    var ClosedContent = document.getElementById("advocacytext");

    Advocacy = !Advocacy;
    if(Advocacy)
    {
        button.add("IO-button-active");
        OpenContent.remove("IO-content-closed");
        ClosedContent.innerText = "";
        return;
    }
    ClosedContent.innerHTML = text;
    OpenContent.add("IO-content-closed");
    button.remove("IO-button-active");
}

function expandEducation() {
    var text = "Free computer programming education for children from low-income households, including workshops, one-on-one mentorship, and coding challenges for prizes.\n"
    var OpenContent = document.getElementById("educationcontent").classList;
    var button = document.getElementById("educationbutton").classList;
    var ClosedContent = document.getElementById("educationtext");

    Education = !Education;
    if(Education)
    {
        button.add("IO-button-active");
        OpenContent.remove("IO-content-closed");
        ClosedContent.innerText = "";
        return;
    }
    ClosedContent.innerHTML = text;
    OpenContent.add("IO-content-closed");
    button.remove("IO-button-active");
}

function expandEvents() {
    var text = "Free computer programming education for children from low-income households, including workshops, one-on-one mentorship, and coding challenges for prizes.\n"
    var OpenContent = document.getElementById("eventscontent").classList;
    var button = document.getElementById("eventsbutton").classList;
    var ClosedContent = document.getElementById("eventstext");

    Education = !Education;
    if(Education)
    {
        button.add("IO-button-active");
        OpenContent.remove("IO-content-closed");
        ClosedContent.innerText = "";
        return;
    }
    ClosedContent.innerHTML = text;
    OpenContent.add("IO-content-closed");
    button.remove("IO-button-active");
}
function expandOpportunities() {
    var text = "Free computer programming education for children from low-income households, including workshops, one-on-one mentorship, and coding challenges for prizes.\n"
    var OpenContent = document.getElementById("opportunitiescontent").classList;
    var button = document.getElementById("opportunitiesbutton").classList;
    var ClosedContent = document.getElementById("opportunitiestext");

    Education = !Education;
    if(Education)
    {
        button.add("IO-button-active");
        OpenContent.remove("IO-content-closed");
        ClosedContent.innerText = "";
        return;
    }
    ClosedContent.innerHTML = text;
    OpenContent.add("IO-content-closed");
    button.remove("IO-button-active");
}
