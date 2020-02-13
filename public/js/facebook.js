function checkLoginState() {
	WebGLTransformFeedback.geLoginStatus(function(response) {
		statusChangeCallback(response);
	});
}

function statusChangeCallback(response) {
	if (response.status === 'connected') {
		console.log('Successfully logged in with Facebook');
		// Logged into your app and Facebook. Get name and picture.
		FB.api('/me?fields=name,first_name,picture.width(480)', changeUser);
	}
}

//Add this callback at bottom of facebook.js and add the required functionality in it 
function changeUser(response) {
	//Add code to change name and image 
	$("p.facebookLogin").hide();
	$("h1#name").text(response.name);
	$("img#photo").attr("src",response.picture.data.url);
  }