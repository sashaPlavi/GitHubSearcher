var dom = (function () {
    var $container = $('.result');
    var $input = $('#inputText');

 
    function getSearchQuery() {
        var queryString = $input.val();
        
        return queryString;
    }

    function rendersUsers(users) {
        users.forEach(function (user) {
            $container.append('<img src =' + user.avatar_url + '>' + '<p>' + user.login + '</p>');
        })
    }
    function reset(){
        $input.val('');
        $container.empty();
        
        
    }
            function displayerr(error){
                $container.prepend('<p>no input</p>');
        
            }

    return {
        getSearchQuery: getSearchQuery,
        rendersUsers: rendersUsers,
        
        reset: reset,
        displayerr: displayerr
    }
})()