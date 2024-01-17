document.addEventListener('DOMContentLoaded', function () {
    const searchButton = document.getElementById('searchButton');
    const postIdInput = document.getElementById('postIdInput');
    const resultContainer = document.getElementById('resultContainer');

    async function showPostById(postId) {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
            const post = await response.json();

            // Gosterilen neticeleri temizle
            resultContainer.innerHTML = '';

            // Postu ekranda goster
            const postElement = document.createElement('div');
            postElement.innerHTML = `<strong>Title:</strong> ${post.title}<br><strong>Body:</strong> ${post.body}`;
            resultContainer.appendChild(postElement);
        } catch (error) {
            console.error('Error:', error);
        }
    }

    searchButton.addEventListener('click', function () {
        const postId = postIdInput.value.trim();

        // Eger postId bos deyilse ve bir sayıdirsa
        if (postId && /^\d+$/.test(postId)) {
            showPostById(postId);
        } else {
            alert('yalnis post ID. xahish edirik post ID nomresini daxil edin.');
        }
    });
});
