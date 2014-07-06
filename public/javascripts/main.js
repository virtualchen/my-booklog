(function ($) {
    $.ajax({
        dataType: 'json',
        //url: 'http://www.mokoversity.com/1/post/tags/fullstack',
        url: 'http://booklog.io/1/post',
        success: function (data){
            var content = $('#content');
            var titles = "";
            console.log(data);
            data.posts.forEach(function(title){
                titles += '<div class="alert alert-success" role="alert">'
                titles += title.subject;
                titles += '</div>'
                content.html(titles);
            });
        }
    });
})($);
