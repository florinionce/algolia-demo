$(function() {
  var client = algoliasearch("E58BN1IANB", "5eeaf4666ea0f0a847d4b0c4c77d893f");
  var index = client.initIndex('Post');
  //initialize autocomplete on search input (ID selector must match)
  autocomplete('#aa-search-input',
  { hint: false }, {
      source: autocomplete.sources.hits(index, {hitsPerPage: 5}),
      //value to be displayed in input control after user's suggestion selection
      displayKey: 'name',
      //hash of templates used when rendering dataset
      templates: {
          //'suggestion' templating function used to render a single suggestion
          suggestion: function(suggestion) {
            return '<span>' +
              suggestion._highlightResult.body.value + '</span><span>' +
              suggestion._highlightResult.title.value + '</span>';
          }
      }
  });

})