var data = (function () {
    function searchUsers(queryString, callback) {
        var request = 'https://api.github.com/search/users?q=' + queryString;

        $.get(request, function (data) {
            callback(data.items);
        })
    }

    return {
        searchUsers: searchUsers
    }
})()

