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
        "https://api.airtable.com/v0/appQ8HG6GId3TrnQO/Joey?api_key=key9Nf2BRCQrL6t6n&view=joey",
      function(airtable) {
        var html = [];
        $.each(airtable.records, function(index, record) {
          var id = record.id;
          //var description = record.fields["How to Obtain"];
          var photo = record.fields["Photos"];
          html.push(listView(id, photo));
        });
        $(".list-view").append(html);
      }
    );
  };

  var listView = function(id, photo,) {
    return `
    
    <div class="col-sm-3">
        <div class="card-group hover">
            <div class="card text-white bg-dark mb-3">
    ${photo ? `<img src="${photo[0].url}"> ` : ``}
      <div class="card-body">
        <h5 class="card-title"></h5>
    
    </div>
      </div>
     </div>
    </div>
    `;
  };

  var getOneRecord = function(id) {
    $.getJSON(
      `https://api.airtable.com/v0/appQ8HG6GId3TrnQO/Joey/${id}?api_key=key9Nf2BRCQrL6t6n&view=joey` ,
      function(record) {
        var html = [];
        var picture = record.fields["Photo"];
        var pack = record.fields["How to Obtain"]
        html.push(detailView(picture, pack,));
        $(".detail-view").append(html);
      }
    );
  };

  var detailView = function(picture, pack) {
    return `
    <div class="card-group">
    <div class="card text-white bg-dark mb-3">
    ${picture ? `<img src="${picture[0].url}">` : ``}
      <div class="card-body">
        <p class="card-text">${pack}</p>
    
      </div>
    </div>
    </div>
    `;
  };
  
  var id = getParameterByName("id");
  if (id) {
    getOneRecord(id);
  } else {
    deckProfile();
  }