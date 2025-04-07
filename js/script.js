// document.getElementById('contact-form').addEventListener('submit', function (e) {
//     e.preventDefault(); // Prevent default submission
//     const form = e.target;

//     fetch(form.action, {
//         method: form.method,
//         body: new FormData(form),
//         headers: {
//             'Accept': 'application/json'
//         }
//     }).then(response => {
//         if (response.ok) {
//             alert('Thank you for your message! We will get back to you soon.');
//             form.reset();
//         } else {
//             alert('Oops! There was a problem submitting your form.');
//         }
//     }).catch(error => {
//         alert('Oops! There was a problem submitting your form.');
//     });
// });



let topNavigation = document.querySelector("#top-navigation");
let toggleButton = document.querySelector("#toggle-button");
let mainPlatform = document.querySelector("#main-platform");


function isSideNavOpen(){
    if (topNavigation.className.includes("show-dropdown") ) {
        return true;
    }else{
        return false;
    }
}

function toggleSideNav(){
    if ( isSideNavOpen() == false) {
        // This will run when the sideNav is close
        topNavigation.classList.add("show-dropdown");
    }else{
        // This will run when the sideNav is open
        topNavigation.classList.remove("show-dropdown");
    }
}


document.addEventListener("scroll" , scrollEvent);
scrollEvent();

function scrollEvent(){
    let initialScrollPosition = window.scrollY;
    let topNavigationHeight = topNavigation.clientHeight;
    let mainPlatformHeight = mainPlatform.clientHeight;
    let scrollPosition = initialScrollPosition + topNavigationHeight;
    if (scrollPosition >= mainPlatformHeight) {
        topNavigation.classList.add("black-bg");
    }else{
        topNavigation.classList.remove("black-bg");
    }
}