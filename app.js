var main = function() {
  $('form').submit(function() {
    var comment =$('#comment').val();
    
    if(comment !== "") {
      var html = $('<li>').text(comment);
      html.prependTo('.comments');
      $('#comment').val("");
    }
    else{
        alert("Please share your thoughts!");
    };

    return false;
  });
};

$(document).ready(main);
