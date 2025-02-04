document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("#search-input");
    const searchButton = document.querySelector("#search-btn");

    function search() {
        const query = searchInput.value.trim();
        if (query !== "") {
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(query);
        }
    }

    // Search on Enter key press
    searchInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            search();
        }
    });

    // Search on button click
    searchButton.addEventListener("click", search);
});
