document.addEventListener("DOMContentLoaded", () => {
  const addPostBtn = document.getElementById("addPostBtn");
  const addPostModal = document.getElementById("addPostModal");
  const closeModalBtn = document.getElementById("closeModalBtn");
  const addPostForm = document.getElementById("addPostForm");
  const postsContainer = document.getElementById("posts");

  // Show the Add Post Modal
  addPostBtn.addEventListener("click", () => {
    console.log("Add Post button clicked");
    addPostModal.classList.remove("hidden");
  });

  // Close the Add Post Modal
  closeModalBtn.addEventListener("click", () => {
    console.log("Close Modal button clicked");
    addPostModal.classList.add("hidden");
  });

  // Add a New Post
  addPostForm.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submit button clicked");

    const postContent = document.getElementById("postContent").value;
    console.log("Post content:", postContent);

    // Check if the text area is empty
    if (!postContent.trim()) {
      alert("Please enter some content for your post!");
      return;
    }

    // Create a new post element
    const newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.innerHTML = `
      <div class="post-header">
        <img src="images/user3.png" alt="User Avatar" class="avatar">
        <div class="post-info">
          <h3>Mozn Alshehri</h3>
          <p>Just now • near</p>
        </div>
        <button class="menu-btn">⋮</button>
      </div>
      <p class="post-content">${postContent}</p>
      <div class="post-actions">
        <span>❤️ 0</span>
        <span>💬 0</span>
        <span>✈️</span>
      </div>
    `;

    console.log("Appending new post");
    postsContainer.prepend(newPost);

    // Reset the form and close the modal
    addPostForm.reset();
    addPostModal.classList.add("hidden");
  });
});