// API Link: https://en.wikipedia.org/w/api.php?action=opensearch&limit=10&namespace=0&format=json&search=

function getSearchBar() {
    // Check if search bar is empty
    if (document.getElementsByClassName("search-bar")[0].value == "") {
        return true;
    }

    var query = document.getElementsByClassName("search-bar")[0].value;

    var wikiURL = "https://en.wikipedia.org/w/api.php?action=opensearch&limit=5&\
    namespace=0&format=json&search=" + query + "&callback=?";

    $.getJSON(wikiURL, function(data) {
        // Empty the search bar
        document.getElementsByClassName("search-bar")[0].value = "";
        // Loop through JSON arrays (title, description, links)
        for (var i = 0; i < data[1].length; i++) {
            // Change the titles
            document.getElementsByClassName("page-title")[i].innerHTML =
                "<h2>" + data[1][i] + "</h2>";
            // Change the descriptions
            document.getElementsByClassName("description-text")[i].innerHTML =
                data[2][i];
            // Change the links
            document.getElementsByClassName("page-link")[i].href =
                data[3][i];
        }

        document.getElementsByClassName("search-results")[0].style.display = "block";
    });

}


function getRandom() {
    open("https://en.wikipedia.org/wiki/Special:Random");
}


