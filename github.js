$(function() {
console.log("script is live");

var input = document.querySelector('input')
	

input.addEventListener('keyup',function(e) {


var text = $('input').val();
var test = $('#username').text();
	if(e.which === 13)
	{
		$("#repositories").text("");

	 var str = "https://api.github.com/search/users?q=" + text;
	 $.get( str,
     function( data ) {
     var string = JSON.stringify(data);
     var result = JSON.parse(string);
    
     $('#username').html(result.items[0].login);
     console.log($('#username').text())

     $('#profilePhoto').attr("src", result.items[0].avatar_url);
     });
     
    
     var repo = "https://api.github.com/search/repositories?q=user%3A"+text;
     console.log(repo);
      $.get( repo,
     function( data ) {
     var string = JSON.stringify(data);
     var result = JSON.parse(string);

     result.items.forEach(function(item){

     	$("#repositories").append("<a href=" + item.html_url + ">" + item.name + "</a> - " + "<span>" + item.language + "</span><br>");
     })
     $("input").val("")
     $('input').focus();
     //$('#repositories').html(result.items[0]);
   
    });
	}

})
	






});

