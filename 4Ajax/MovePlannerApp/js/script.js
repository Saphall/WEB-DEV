
function loadData() {

    var $body = $('body');
    var $wikiElem = $('#wikipedia-links');
    var $nytHeaderElem = $('#nytimes-header');
    var $nytElem = $('#nytimes-articles');
    var $greeting = $('#greeting');

    // clear out old data before new request
    $wikiElem.text("");
    $nytElem.text("");

    // load streetview
      let streetStr =$('#street').val()
      var cityStr = $('#city').val()
      var address = streetStr + ','+cityStr;

      $greeting.text('So, you want to live at '+address +'?');

     var streetViewURl='http://maps.googleapis.com/maps/api/streetview?size=600x300&location='+address+'';
     $body.append('<img class="bgimg" src ="' + streetViewURl + '" >');

     //NYT AJAX
     var nytimesUrl = 'http://api.nytimes.com/svc/search/v2/articlesearch.json?q='+cityStr+'&sort=newest&api-key=uYuZiVasoV3Dqp5v6HceG1GSMA2pMs5X'
     $.getJSON(nytimesUrl,function (data) {
       $nytHeaderElem.text('New York Times Article about '+cityStr);

       articles=data.response.docs;
       for (var i = 0;i<articles.length;i++){
         var article = articles[i];
         $nytElem.append('<li class="article">'+
       '<a href ="'+article.web_url+'">'+article.headline.main+'</a>'+
     '<p>'+article.snippet+'</p>'+'</li>');
       };
     }).error(function(e){
       $nytHeaderElem.text('New York Times Articles Could not be Loaded.');
     });


     //Wikipedia AJAX request
     var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search='+cityStr+'&format=json&callback=wikiCallback';

     var wikiRequestTimeout = setTimeout(function() {
       $wikiElem.text('Failed to get wikipedia resources');
     },8000);

     $.ajax({
       url:wikiUrl,
       dataType:'jsonp',
       //jsonp:'callback',
       success: function (response) {
         var articleList = response[1];

         for(var i=0;i<articleList.length;i++){
            articleStr = articleList[i];
            var url='http://en.wikipedia.org/wiki/'+articleStr;
            $wikiElem.append('<li><a href="'+url+'">'+articleStr+'</a></li>');
         };
        clearTimeout(wikiRequestTimeout);
       }
     });





    return false;
};

$('#form-container').submit(loadData);

// loadData();
