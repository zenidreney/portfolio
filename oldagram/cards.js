/*I FIRST WROTE THIS WITH INNER HTML THEN AFTER LEARNING THE APPEND METHOD REFACTORED IT AS BELOW*/

export function renderCards(card, posts) {
    for (let i = 0; i < posts.length; i++) {
        const post = posts[i];

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
        
        /*MODAL FOR COMMENT BUTTON*/
        
        const commentModal = document.createElement("div");
        commentModal.className = "modal";
        commentModal.id = `modal-${i}`;
            
            const closeBtnContainer = document.createElement("div");
            closeBtnContainer.className = "close-btn-container";
                const closeBtn = document.createElement("button");
                closeBtn.className = "close-btn";
                closeBtn.id = `close-btn-${i}`;
                closeBtn.textContent = "X";
            closeBtnContainer.append(closeBtn);
        
            const messagePop = document.createElement("div");
            messagePop.className = "message-pop";
        
                const messagePara = document.createElement("p");
                messagePara.textContent = "Please enter your comment below";
        
                const messageForm = document.createElement("form");
                messageForm.className = "comment-form";
                messageForm.id = `comment-form-${i}`;
        
                /*Username*/
                    const userNameLable = document.createElement("label");
                    userNameLable.setAttribute("for", `username-${i}`);
                    userNameLable.textContent = "Username";
        
                    const userNameInput = document.createElement("input");
                    userNameInput.type = "text";
                    userNameInput.id = `username-${i}`;
                    userNameInput.name = `username-${i}`;
                    userNameInput.placeholder = "Jane Brown";
                    userNameInput.required = true;
        
                    const messageLabel = document.createElement("label");
                    messageLabel.setAttribute("for", `message-${i}`);
                    messageLabel.textContent = "Comment";
        
                    const messageInput = document.createElement("textarea");
                    
                    messageInput.id = `message-${i}`;
                    messageInput.name = `message-${i}`;
                    messageInput.placeholder = "I love this post...";
                    messageInput.required = true;
        
                    const messageBtn = document.createElement("button");
                    messageBtn.type = "submit";
                    messageBtn.textContent = "Submit";
        
                messageForm.append(userNameLable, userNameInput, messageLabel, messageInput, messageBtn);
        
            messagePop.append(messagePara, messageForm);
        
        commentModal.append(closeBtnContainer, messagePop);
        
            /*MODAL FOR SHARE BUTTON*/
        
        const shareModal = document.createElement("div");
        shareModal.id = `share-modal-${i}`;
        shareModal.className = "modal";
            
            const shareCloseBtnContainer = document.createElement("div");
            shareCloseBtnContainer.className = "close-btn-container";
        
                const shareCloseBtn = document.createElement("button");
                shareCloseBtn.className = "close-btn";
                shareCloseBtn.id = `share-close-btn-${i}`;
                shareCloseBtn.innerText = "X";
        
            shareCloseBtnContainer.append(shareCloseBtn);
        
            const messagePopContainer = document.createElement("div");
            messagePopContainer.className = "message-pop";
        
                const shareLink = document.createElement("p");
                shareLink.id = `share-link-${i}`;
                shareLink.className = "copy";
                shareLink.textContent = "Copy Page Link to Clipboard";
        
            messagePopContainer.append(shareLink);
        
        
        
        shareModal.append(shareCloseBtnContainer, messagePopContainer);

        /*APPEND ALL ELEMENTS TO THE CARDS*/
        
        card.append(postContainer, commentModal, shareModal); 
    }
}



/*
 * 
 * 
 * Original Code
 * 
 * REFERENCE HTML
 * 
 * 
    
    <div id="post-container" class="card">
    
            <div class="card-header">
                <img class="avatar-img" src=${posts[i].avatar} alt="avatar of the sender of the post." />
                <div>
                    <div><span class="bold">${posts[i].name}</span></div>
                    <span class="location">${posts[i].location}</span>
                </div>
            </div>

            <div>
                <img class="image" src=${posts[i].post} />
            </div>

            <div class="btns-container">
                <div class="icon-btns">
                    <img id="heart-${i}" class="icons" src="media/icon-heart.png" alt="" />
                    <img id="comment-${i}" class="icons" src="media/icon-comment.png" alt="" />
                    <img id="share-btn-${i}" class="icons" src="media/icon-dm.png" alt="" />
                </div>
                <p id="likes-para-${i}" class="bold">${posts[i].likes} likes</p>
                <div id="extra-comment-${i}"></div>
                <p><span class="bold">${posts[i].username}</span> <span class="mid-txt">${posts[i].comment} </span></p>
            </div>
            
        </div>
        
        
        <div class="modal" id="modal-${i}">
        
            <div id="close-btn-container-${i}" class="close-btn-container">
                <button class="close-btn" id="close-btn-${i}">X</button>
            </div>
            
            <div id="message-pop" class="message-pop">
               <p>Please enter your comment below</p>
                <form class="comment-form" id="comment-form-${i}">
                    <label for="username">Username</label>
                    <input 
                        type="text" 
                        id="username-${i}" 
                        name="username-${i}" 
                        placeholder="Jane Brown" 
                        required />
            
                    <label for="message">Comment</label>
                    <textarea
                        id="message-${i}"
                        name="message-${i}"
                        placeholder="I love this post..."
                        required
                        
                    ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
            
        </div>
        
        <div class="modal" id="share-modal-${i}">
        
            <div class="close-btn-container">
                <button class="close-btn" id="share-close-btn-${i}">X</button>
            </div>
            
            <div class="message-pop">
                <p id="share-link-${i}" class="copy">Copy Page Link to Clipboard</p>
            </div>
        </div>
        
        */
