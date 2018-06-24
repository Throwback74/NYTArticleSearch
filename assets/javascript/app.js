var dateConverter = function () {
    startYear = startYear + "0101";
    endYear = endYear + "0101";
}



var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'api-key': "06702dd738ec422ca15e181662852b6e",
  'q': termToSearch,
  'fq': "The New York Times",
  'begin_date': "startYear",
  'end_date': "endYear",
  'sort': "newest",
  'hl': "true",
  'page': 0
});
$.ajax({
  url: url,
  method: 'GET',
})
    .then(function(response) {
        console.log(response);
    }).catch(function(err) {
        throw err;
    });
    var results = response.data;
//   <!-- once in the function change the begin_date & end_date into full dates using year + 0101 -->

//use a loop to limit the # of the results