// Get the <form> element and add an EventListener
let myForm = document.getElementById("myForm").addEventListener("submit", saveBookmark);

/**
 * Saves bookmark
 *
 * @param ev Event paramater
 */
function saveBookmark(ev) {
    let siteName = document.getElementById("siteName").value;
    let siteUrl = document.getElementById("siteUrl").value;

    // bookmark JSON
    let bookmark = {
        name: siteName,
        url: siteUrl
    };
    console.log(bookmark);

    // //Local Storage Test
    // localStorage.setItem('test', 'Hello World');
    // console.log(localStorage.getItem("test"));

    if(localStorage.getItem("bookmarks") === null) {
        // Initialize array
        let bookmarks = [];
        // Add to array
        bookmarks.push(bookmark);
        // Set to local storage as string format
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }
    else {
        // Fetch bookmarks array from local storage and convert from string to JSON
        let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
        // Add bookmark to array
        bookmarks.push(bookmark);
        // Reset back to local storage as string format
        localStorage.setItem("bookmarks", JSON.stringify(bookmarks));
    }

    // Prevents default submission behavior
    ev.preventDefault();
}

/**
 * Display bookmarks from local storage
 */
function fetchBookmarks() {
    //Get bookmarks from local storage
    let bookmarks = JSON.parse(localStorage.getItem("bookmarks"));
    let bookmarksResults = document.getElementById("bookmarksResults");
    bookmarksResults.innerHTML = " ";
    for (let i = 0; i < bookmarks.length; i++) {
        let name = bookmarks[i].name;
        let url = bookmarks[i].url;
        bookmarksResults.innerHTML += '<div class="list-group-item p-4">' + '<h4>' + name + '</h4>' + '</div>';
    }
}