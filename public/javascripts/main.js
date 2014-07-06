(function ($) {
    $.ajax({
        dataType: 'json',
        //url: 'http://www.mokoversity.com/1/post/tags/fullstack',
        url: 'http://booklog.io/1/post',
        success: function (data){
           $('#postTemplate').tmpl(data.posts).appendTo('#content');
        }
    });
})($);
