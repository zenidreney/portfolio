/*I FIRST WROTE THIS WITH INNER HTML THEN AFTER LEARNING THE APPEND METHOD REFACTORED IT AS BELOW*/

import { renderModal, renderShareModal } from "./modals.js";

export function renderCards(containerDiv, postsArray) {
    for (let i = 0; i < postsArray.length; i++) {
        
        const shareModal = renderShareModal(i);
        const commentModal = renderModal(i);
        
        const post = postsArray[i];

       /*  POST CONTAINER */
        const postContainer = document.createElement("div");
        postContainer.id = "post-container";
        postContainer.className = "card";

       /*  Header */
            const cardHeader = document.createElement("div");
            cardHeader.className = "card-header";

                const avatarImg = document.createElement("img");
                avatarImg.className = "avatar-img";
                avatarImg.src = post.avatar;
                avatarImg.alt = "avatar of the sender of the post.";

                const headerContainer = document.createElement("div");
                headerContainer.className = "header-container";

                    const nameDiv = document.createElement("div");
                    const nameSpan = document.createElement("span");
                    nameSpan.className = "bold";
                    nameSpan.textContent = post.name;
                    nameDiv.appendChild(nameSpan);

                    const locationSpan = document.createElement("span");
                    locationSpan.className = "location";
                    locationSpan.textContent = post.location;

                headerContainer.appendChild(nameDiv);
                headerContainer.appendChild(locationSpan);
            
            cardHeader.append(avatarImg, headerContainer);
            //cardHeader.appendChild(headerContainer);
        
        /* Image */
            
            const postImageContainer = document.createElement("div");
                const postImg = document.createElement("img");
                postImg.className = "image";
                postImg.src = post.post;
            postImageContainer.appendChild(postImg);
            
        /* Buttons Container */
        
            const btnsContainer = document.createElement("div");
            btnsContainer.className ="btns-container";
                const iconBtns = document.createElement("div");
                iconBtns.className = "icon-btns";
                    const heartIcon = document.createElement("img");
                    heartIcon.className = "icons";
                    heartIcon.id = `heart-${i}`;
                    heartIcon.src = "./media/icon-heart.png";
        
                    const commentIcon = document.createElement("img");
                    commentIcon.className = "icons";
                    commentIcon.id = `comment-${i}`;
                    commentIcon.src = "./media/icon-comment.png";
        
                    const shareBtnIcon = document.createElement("img");
                    shareBtnIcon.className = "icons";
                    shareBtnIcon.id = `share-btn-${i}`;
                    shareBtnIcon.src = "./media/icon-dm.png";
        
                iconBtns.append(heartIcon, commentIcon, shareBtnIcon);
        
                const likesPara = document.createElement("p");
                likesPara.className = "bold";
                likesPara.id = `likes-para-${i}`;
                likesPara.textContent = `${post.likes} likes`;
        
                const extraCommentContainer = document.createElement("div");
                extraCommentContainer.id = `extra-comment-${i}`;
        
                const commentPara = document.createElement("p");
                    const userNameSpan = document.createElement("span");
                    userNameSpan.className = "bold";
                    userNameSpan.textContent = post.username;
                    const userCommentSpan = document.createElement("span");
                    userCommentSpan.className = "mid-text";
                    userCommentSpan.textContent = ` ${post.comment}`;
                commentPara.append(userNameSpan, userCommentSpan);
        
            btnsContainer.append(iconBtns, likesPara, extraCommentContainer, commentPara);
        
        postContainer.append(cardHeader, postImageContainer, btnsContainer);

        /*APPEND ALL ELEMENTS TO THE CARDS*/
        
        containerDiv.append(postContainer, commentModal, shareModal); 
    }
}

