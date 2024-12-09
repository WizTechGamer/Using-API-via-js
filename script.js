document.addEventListener("DOMContentLoaded", () => {
    const contentDiv = document.getElementById("content");

    // Define the API URL
    const apiUrl = "https://jsonplaceholder.typicode.com/posts";

    // Fetch data from the API
    fetch(apiUrl)
        .then((response) => {
            if (!response.ok) {
                throw new Error("Failed to fetch data: " + response.statusText);
            }
            return response.json();
        })
        .then((data) => {
            // Process and display the data
            displayData(data);
        })
        .catch((error) => {
            contentDiv.innerHTML = `<p>Error: ${error.message}</p>`;
        });

    // Function to display data
    function displayData(posts) {
        const html = posts
            .slice(0, 10) // Display only the first 10 posts
            .map((post) => {
                return `
          <div class="card">
            <h2>${post.title}</h2>
            <p>${post.body}</p>
          </div>
        `;
            })
            .join("");
        contentDiv.innerHTML = html;
    }
});
