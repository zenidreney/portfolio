const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "media/avatar-vangogh.jpg",
        post: "media/post-vangogh.jpg",
        comment: "everything is whriling!",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "media/avatar-courbet.jpg",
        post: "media/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "media/avatar-ducreux.jpg",
        post: "media/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today??",
        likes: 152
    }
];

/*DISPLAYING THE CONTENT BASED ON THE ARRAY*/

const card = document.getElementById("post-container");

//console.log(card);

for (let i = 0; i < posts.length; i++) {
    card.innerHTML += `<div id="post-container" class="card">
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
                    <img class="icons" src="media/icon-dm.png" alt="" />
                </div>
                <p id="likes-para-${i}" class="bold">${posts[i].likes} likes</p>
                <div id="extra-comment-${i}"></div>
                <p><span class="bold">${posts[i].username}</span> <span class="mid-txt">${posts[i].comment} </span></p>
            </div>
        </div>
        
        
        <div class="modal" id="modal-${i}">
            <div class="close-btn-container">
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
        </div>`;
}

/*INCREASE AND DECREASE LIKES TOGGLE THE ICON*/

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

/*ADD CLICK EVENT TO COMMENT ICON*/

for (let i = 0; i < posts.length; i++) {
    const commentBtn = document.getElementById(`comment-${i}`);

    //console.log(commentBtn)
    commentBtn.addEventListener("click", function () {
        document.getElementById(`modal-${i}`).style.display = "inline";
    });
}

/*CLOSE THE COMMENT BOX*/

for (let i = 0; i < posts.length; i++) {
    const closeBtn = document.getElementById(`close-btn-${i}`);

    closeBtn.addEventListener("click", function () {
        document.getElementById(`modal-${i}`).style.display = "none";
        //console.log("clicked");
    });
}

/*HANDLE SUBMIT COMMENT*/

for (let i = 0; i < posts.length; i++) {
    const commentForm = document.getElementById(`comment-form-${i}`);

    commentForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const commentFormData = new FormData(commentForm);

        const name = commentFormData.get(`username-${i}`);
        const userComment = commentFormData.get(`message-${i}`);
        //console.log(name, userComment);

        const extraComment = document.getElementById(`extra-comment-${i}`);
        //console.log(extraComment);
        extraComment.innerHTML = `<p><span class="bold">${name}</span>
        <span class="mid-txt">${userComment}</span></p>`;
        document.getElementById(`modal-${i}`).style.display = "none";
    });
}
