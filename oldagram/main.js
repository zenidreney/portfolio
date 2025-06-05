/*SOME DATA TO MAKE THE APP WORK*/

import { posts } from "./data.js";
import { renderCards } from "./cards-render.js";

/*DISPLAYING THE CONTENT BASED ON THE ARRAY FROM THE IMPORT*/

const postContainer = document.getElementById("post-container");
renderCards(postContainer, posts);

/*MODAL DISPLAY*/

for (let i = 0; i < posts.length; i++) {
    //const commentBtn = document.getElementById(`comment-${i}`);
    //const shareBtn = document.getElementById(`share-btn-${i}`);

    //const closeBtn = document.getElementById(`close-btn-${i}`);
    //const shareCloseBtn = document.getElementById(`share-close-btn-${i}`);

    const modal = document.getElementById(`modal-${i}`);
    const shareModal = document.getElementById(`share-modal-${i}`);

    /*OPEN THE MODALS*/
    document.addEventListener("click", function (e) {
        /*First reset so that the click event triggers open.
         This will also ensure that the modal closes when clcked outside*/
        modal.style.display = "none";
        shareModal.style.display = "none";

        if (e.target.id === `comment-${i}`) {
            modal.style.display = "inline";
        } else if (e.target.id === `share-btn-${i}`) {
            shareModal.style.display = "inline";
        }
    });
    /*CLOSE THE MODALS*/

    modal.addEventListener("click", function (e) {
        e.stopPropagation();

        if (e.target.id === `close-btn-${i}`) {
            modal.style.display = "none";
        }
    });

    shareModal.addEventListener("click", function (e) {
        e.stopPropagation();

        if (e.target.id === `share-close-btn-${i}`) {
            shareModal.style.display = "none";
        }
    });
}

/*BUTTONS LOGIC*/

/*LIKE BUTTON*/

/*Increase and decrease likes*/

for (let i = 0; i < posts.length; i++) {
    const icon = document.getElementById(`heart-${i}`);
    const likesText = document.getElementById(`likes-para-${i}`);
    let clicked = false;

    icon.addEventListener("click", function () {
        if (!clicked) {
            posts[i].likes++;
            likesText.innerHTML = posts[i].likes + " likes";
            icon.src = "media/heart-fill.svg";
            clicked = true;
        } else {
            posts[i].likes--;
            likesText.innerHTML = posts[i].likes + " likes";
            icon.src = "media/icon-heart.png";
            clicked = false;
        }
    });
}

/*COMMENT BUTTON*/

/*Submit and display the comment*/

for (let i = 0; i < posts.length; i++) {
    const commentForm = document.getElementById(`comment-form-${i}`);

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const commentFormData = new FormData(commentForm);

        const name = commentFormData.get(`username-${i}`);
        const userComment = commentFormData.get(`message-${i}`);

        const extraComment = document.getElementById(`extra-comment-${i}`);

        extraComment.innerHTML = `<p><span class="bold">${name}</span>
        <span class="mid-txt">${userComment}</span></p>`;
        document.getElementById(`modal-${i}`).style.display = "none";

        /*Clear Input Fields*/

        document.getElementById(`username-${i}`).value = "";
        document.getElementById(`message-${i}`).value = "";
    });
}

/*SHARE BUTTON*/

/*Copy the URL to Clipboard*/

for (let i = 0; i < posts.length; i++) {
    const shareLink = document.getElementById(`share-link-${i}`);

    shareLink.addEventListener("click", function () {
        navigator.clipboard.writeText(window.location.href);
        alert("Copied to Clipboard");
    });
}
