const btn = document.querySelectorAll("button");
let home_txt = document.getElementById("home_scr");
let guest_txt = document.getElementById("guest_scr");

let homescore = 0;
let guestscore = 0;

home_txt.textContent = homescore;
guest_txt.textContent = guestscore;

function add_home(increase) {
    console.log("ButtonClicked");

    home_txt.textContent = homescore += increase;
}

function add_guest(increase) {
    console.log("ButtonClicked");
    guest_txt.textContent = guestscore += increase;
}

btn[0].addEventListener("click", () => add_home(1));
btn[1].addEventListener("click", () => add_home(2));
btn[2].addEventListener("click", () => add_home(3));
btn[3].addEventListener("click", () => add_guest(1));
btn[4].addEventListener("click", () => add_guest(2));
btn[5].addEventListener("click", () => add_guest(3));

/*

Just for study purposes how the arrow used to be written:

});
btn[1].addEventListener("click", function() {
    add_home(2);
});
btn[2].addEventListener("click", function() {
    add_home(3);
});
btn[3].addEventListener("click", function() {
    add_guest(1);
});
btn[4].addEventListener("click", function() {
    add_guest(2);
});
btn[5].addEventListener("click", function() {
    add_guest(3);
});

*/
