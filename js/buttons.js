var Advocacy = false;

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

