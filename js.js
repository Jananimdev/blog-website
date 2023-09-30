document.addEventListener("DOMContentLoaded", function() {
    const postButton = document.getElementById("post-button");
    const postContent = document.getElementById("post-content");
    const feed = document.querySelector(".feed");

    postButton.addEventListener("click", function() {
        const content = postContent.value;
        if (content.trim() !== "") {
            createPost(content);
        }
    });

    function createPost(content) {
        const postElement = document.createElement("div");
        postElement.classList.add("post");
        postElement.textContent = content;
        feed.prepend(postElement);
        postContent.value = "";
    }
});
// ... Previous JavaScript code ...

function createPost(content) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.textContent = content;
    feed.prepend(postElement);
    postContent.value = "";
}
// ... Previous JavaScript code ...

// ... Previous JavaScript code ...

function createPost(content, image) {
    const postElement = document.createElement("div");
    postElement.classList.add("post");
    postElement.innerHTML = `
        <p>${content}</p>
        ${image ? `<img src="${image}" alt="Posted image">` : ""}
        <div class="post-actions">
            <button class="like-button" onclick="toggleLike(this)">👍</button>
            <button class="dislike-button" onclick="toggleDislike(this)">👎</button>
            <button class="delete-button" onclick="deletePost(this)">🗑️</button>
        </div>
    `;

    const feed = document.querySelector(".feed");
    feed.prepend(postElement);
    postContent.value = "";
}

function deletePost(button) {
    const post = button.closest(".post");
    post.remove();
}

const postButton = document.getElementById("post-button");
postButton.addEventListener("click", () => {
    const postContent = document.getElementById("post-content").value;
    const imageInput = document.getElementById("image-upload");
    const selectedImage = imageInput.files[0];

    if (postContent.trim() !== "") {
        const reader = new FileReader();
        reader.onload = function(event) {
            createPost(postContent, event.target.result);
        };
        reader.readAsDataURL(selectedImage);
    }
});



