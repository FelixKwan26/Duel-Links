function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
  var deckProfile = function() {
    $.getJSON(
        "https://api.airtable.com/v0/appQ8HG6GId3TrnQO/Characters?maxRecords=3&view=Grid%20view",
      function(airtable) {
        var html = [];
        $.each(airtable.records, function(index, record) {
          var id = record.id;
          var decks = record.fields["Meta Decks"];
          var skills = record.fields["Skills"];
          var photo = record.fields["Photo"];
          html.push(listView(id, decks, skills, photo));
        });
        $(".list-view").append(html);
      }
    );
  };
  var listView = function(id, decks, skills, photo) {
    return `
     <p>${decks}</p>
    `;
  };
  var id = getParameterByName("id");
  if (id) {
    deckProfile(id);
  } else {
    deckProfile();
  }
var deckProfile = function() {
    $.getJSON(
      "https://api.airtable.com/v0/appQ8HG6GId3TrnQO/Deck%20Profile?api_key=key9Nf2BRCQrL6t6n",
      function(airtable) {
        var html = [];
        $.each(airtable.records, function(index, record) {
          var id = record.id;
          var decks = record.fields["Meta Decks"];
          var skills = record.fields["Skills"];
          var photo = record.fields["Photo"];
          html.push(listView(id, decks, skills, photo));
        });
        $(".list-view").append(html);
      }
    );
  };
  var listView = function(id, decks, skills, photo) {
    return `
     <p></p>
    `;
  };
  var id = getParameterByName("id");
  if (id) {
    deckProfile(id);
  } else {
    deckProfile();
  }