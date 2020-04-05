function scroll() {
    document.getElementById('bio').scrollIntoView();
    document.getElementById('projects').scrollIntoView();
    document.getElementById('skills').scrollIntoView();
    document.getElementById('contact').scrollIntoView();
}

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }