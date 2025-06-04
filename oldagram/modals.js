export function renderModal(i){
    
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
    
    
        return commentModal;
}
    
    export function renderShareModal(i) {
        
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
    
    return shareModal;
    
}