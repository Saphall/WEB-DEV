(function () {
    const form = document.querySelector('#search-form');
    const searchField = document.querySelector('#search-keyword');
    let searchedForText;
    const responseContainer = document.querySelector('#response-container');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        responseContainer.innerHTML = '';
        searchedForText = searchField.value;



        //Unsplash api request =>> REQUIRES HEADERS
        const imgRequest = new XMLHttpRequest();
        imgRequest.onload = addImage;
        imgRequest.onerror = function (err) {
            requestError(err,'image');
        };
        imgRequest.open('GET',`https://api.unsplash.com/search/photos?page=1&query=${searchedForText}`);
        imgRequest.setRequestHeader('Authorization', 'Client-ID 7Q5fCy-1DX9dzb7eaAME_Nut8zaJ5y0Tsp9XrNB2qmQ');
        imgRequest.send();


        //NewYork Times API AJAX
        const articleRequest = new XMLHttpRequest();
        articleRequest.onload = addArticles;
        articleRequest.onerror=function (err) {
          requestError(err,'articles');
        };
        articleRequest.open('GET', `http://api.nytimes.com/svc/search/v2/articlesearch.json?q=${searchedForText}&api-key=uYuZiVasoV3Dqp5v6HceG1GSMA2pMs5X`);
        articleRequest.send();

    });


      //function for unsplash api
        function addImage() {
          let htmlContent = '';
          const data = JSON.parse(this.responseText);
          const firstImage = data.results[0];

          if (data && data.results && data.results[0]){
            htmlContent=`<figure>
            <img src="${firstImage.urls.regular}" alt="${searchedForText}">
            <figcaption>${searchedForText} by ${firstImage.user.name}</figcaption>
            <figure>`;
          }else{
            htmlContent=`<div class="error-no-image">No images available.</div>`;
          }

          responseContainer.insertAdjacentHTML('afterbegin',htmlContent);
        }



        //function for newyork api
        function addArticles() {
          let htmlContentt='';
          const data = JSON.parse(this.responseText);

          if (data && data.response.docs && data.response.docs.length>1){
            htmlContentt='<ul>'+data.response.docs.map(article => `<li class='article'>
            <h2><a href ='${article.web_url}'>${article.headline.main}</a></h2>
            <p>${article.snippet}</p></li>`).join('')+'</ul>'
          }else{
              htmlContentt=`<div class="error-no-articles">No articles available.</div>`;
          }

          responseContainer.insertAdjacentHTML('beforeend',htmlContentt);

        }

})();
