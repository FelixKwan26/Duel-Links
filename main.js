function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return "";
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }
//   var id = getParameterByName("id");
//   if (id) {
//     characterProfile(id);
//   } else {
//     characterProfile();
//   }
  var deckProfile = function() {
    $.getJSON(
        "https://api.airtable.com/v0/appQ8HG6GId3TrnQO/Characters?api_key=key9Nf2BRCQrL6t6n",
      function(airtable) {
        var html = [];
        $.each(airtable.records, function(index, record) {
          var id = record.id;
          var name = record.fields["Name"];
          var description = record.fields["Description"];
          var photo = record.fields["Photo"];
          html.push(listView(id, name, description, photo));
        });
        $(".list-view").append(html);
      }
    );
  };
  var listView = function(id, name, description, photo) {
    return `
    <div class="card-group">
    <div class="card">
    ${photo ? `<img src="${photo[0].url}">` : ``}
      <div class="card-body">
        <h5 class="card-title">${name}</h5>
        <p class="card-text">${description}</p>
    
      </div>
    </div>
    </div>
    `;
  };
  var id = getParameterByName("id");
  if (id) {
    deckProfile(id);
  } else {
    deckProfile();
  }