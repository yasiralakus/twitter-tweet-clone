let postData;
let userData;

let currentPostIndex = 0;
let currentUserIndex = 0;

let generated = document.querySelector('.generated');
let btn = document.querySelector('.btn');


function generateNumber() {
    let randomNumber = (Math.floor(Math.random() * 1000))
    return randomNumber;
}

function render() {

    const currentPost = postData[currentPostIndex];
    const currentUser = userData[currentUserIndex];

    generated.innerHTML += `

    <div class="tweet">

        <div class="userInfo">

            <img class="userImg" src="https://randomuser.me/api/portraits/men/${currentUserIndex}.jpg" alt="">

            <div class="userNames">

                <p class="nameSurname"><a href="">${currentUser.firstName} ${currentUser.lastName}</a> <img src="assets/img/blue-tick.png" alt=""></p>

                <p class="username">@${currentUser.username} - 1 sa</p>

            </div>



        </div>


        <div class="postDetails">

            <div class="postBody">${currentPost.body}</div>

            <img class="postImg" src="https://picsum.photos/id/${currentUserIndex}/580/400" alt="">


        </div>

        <div class="interaction">


            <div class="icon">

                <i class="fa-regular fa-heart"></i>
                <p class="random">${generateNumber()}</p>

            </div>

            <div class="icon">

                <i class="fa-solid fa-retweet"></i>
                <p class="random">${generateNumber()}</p>

            </div>

            <div class="icon">

                <i class="fa-regular fa-comment"></i>
                <p class="random">${generateNumber()}</p>

            </div>

            <div class="icon">

                <i class="fa-solid fa-signal"></i>
                <p class="random">${generateNumber()}</p>

            </div>

            <div class="icon">

                <i class="fa-regular fa-bookmark"></i> 
                <p class="random">${generateNumber()}</p>

            </div>

        </div>

    </div>

    `


    currentPostIndex = (currentPostIndex + 1) % postData.length;
    currentUserIndex = (currentUserIndex + 1) % userData.length;
}



async function fetchData() {
    let fetchingPosts = await fetch('https://dummyjson.com/posts?limit=100')
        .then(r => r.json());

    postData = fetchingPosts.posts;

    let fetchingUsers = await fetch('https://dummyjson.com/users?limit=100')
        .then(r => r.json());

    userData = fetchingUsers.users;

    btn.addEventListener('click', render)
}

fetchData();