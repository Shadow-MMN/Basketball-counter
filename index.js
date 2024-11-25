
let homeScore = document.getElementById('home-text');
let homeNum1  = document.getElementById('home-btn-1');
let homeNum2 = document.getElementById('home-btn-2');
let homeNum3 = document.getElementById('home-btn-3');
let guestScore = document.getElementById('guest-text');
let guestNum1 = document.getElementById('guest-btn-1');
let guestNum2 = document.getElementById('guest-btn-2');
let guestNum3 = document.getElementById('guest-btn-3');
let headHome = document.getElementById('head-home');
let headGuest = document.getElementById('head-guest');


homeScore.textContent = 0;
guestScore.textContent = 0;



function updateUnderline() {
    const home = Number(homeScore.textContent);
    const guest = Number(guestScore.textContent);
    
    if (home > guest) {
        headHome.style.textDecoration = 'underline';
        headHome.style.textDecorationColor = '#F94F6D';
        headGuest.style.textDecoration = 'none';
    } else if (guest > home) {
        headGuest.style.textDecoration = 'underline';
        headGuest.style.textDecorationColor = '#F94F6D';
        headHome.style.textDecoration = 'none';
    } else {
        headHome.style.textDecoration = 'none';
        headGuest.style.textDecoration = 'none';
    }
}


homeNum1.addEventListener('click', function() {
    homeScore.textContent = Number(homeScore.textContent) + 1;
    updateUnderline();
});
homeNum2.addEventListener('click', function() {
    homeScore.textContent = Number(homeScore.textContent) + 2;
    updateUnderline();
});
homeNum3.addEventListener('click', function() {
    homeScore.textContent = Number(homeScore.textContent) + 3;
    updateUnderline();
});


guestNum1.addEventListener('click', function() {
    guestScore.textContent = Number(guestScore.textContent) + 1;
    updateUnderline();
});
guestNum2.addEventListener('click', function() {
    guestScore.textContent = Number(guestScore.textContent) + 2;
    updateUnderline();
});
guestNum3.addEventListener('click', function() {
    guestScore.textContent = Number(guestScore.textContent) + 3;
    updateUnderline();
});
