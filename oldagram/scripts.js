let posts = [
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
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

/*DISPLAYING THE CONTENT BASED ON THE ARRAY*/

let card = document.getElementById("post-container");

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
                    <img class="icons" src="media/icon-comment.png" alt="" />
                    <img class="icons" src="media/icon-dm.png" alt="" />
                </div>
                <p id="likes-para-${i}" class="bold">${posts[i].likes} likes</p>
                <p><span class="bold">${posts[i].username}</span> <span class="mid-txt">${posts[i].comment} </span></p>
            </div>
        </div>`;
}


for (let i = 0; i < posts.length; i++) {
    let icon = document.getElementById(`heart-${i}`);
    let likesText = document.getElementById(`likes-para-${i}`);
    let clicked = false;
    
    icon.addEventListener("click", function(){
        
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


