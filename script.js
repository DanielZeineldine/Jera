window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.backgroundColor = "#fff"; // Change to your desired color
    } else {
        document.getElementById("navbar").style.backgroundColor = "transparent"; // Change to your initial background color
    }
}

function show() {
    const side = document.querySelector('.sidebar')
    side.style.display = 'flex'
}
function hide() {
    const side2 = document.querySelector('.sidebar')
    // const hamb = document.querySelector('.hamimg')
    // hamb.style.display = 'none'   
    side2.style.display = 'none'
}











/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
// function myFunction() {
//     var x = document.getElementById("for_ham");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }