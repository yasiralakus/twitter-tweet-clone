let postBox = document.querySelector('.postBox');
let postTitle = document.querySelector('.postTitle');
let postBody = document.querySelector('.postBody');
let postTags = document.querySelector('.postTags');
let postId = document.querySelector('.postId');
let btn = document.querySelector('.btn');

let currentIndex = 0;
let currentUserId = 0;

let postData;
let userData;


function render() {

    const currentPost = postData[currentIndex];
    const currentUser = userData[currentUserId];
        

        postBox.innerHTML =
        `

        <div class="tweet">

            <div class="postTitle">
                
            <img src="https://randomuser.me/api/portraits/men/${currentIndex}.jpg" alt="">
                
            <div class="user">


                    <div class="name">${currentUser.firstName} ${currentUser.lastName} <img src="assets/img/blue-tick.png" alt=""></div>

                    <div class="username">${currentUser.username}</div>

                </div>

            </div>

            <div class="postBody">${currentPost.body}</div>
            <div class="postImg"><img src="https://picsum.photos/id/${currentIndex}/200/300" alt=""></div>


            <div class="postTitle">

        </div>

        `

    currentIndex = (currentIndex + 1) % postData.length;
    currentUserId = (currentUserId + 1) % userData.length;

}

async function fetchData() {
    
    let data = await fetch('https://dummyjson.com/posts?limit=100').then(r => r.json());

    postData = data.posts;

    let fetchUserData = await fetch('https://dummyjson.com/users?limit=100').then(r => r.json());

    userData = fetchUserData.users;

    btn.addEventListener('click', render)


}

fetchData();

//https://randomuser.me/api/portraits/men/50.jpg

//https://picsum.photos/id/237/200/300