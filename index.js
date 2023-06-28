


// Import stylesheets
import './style.css';

// Write Javascript code!
function sendWhatsAppMassage()
{
	var phoneNumber = "6283183101521";
	var message = "hallo, apa kabar";

	var url = "https://wa.me/" + phoneNumber + encodeURIComponent(message);
	
	window.open(url);
}

 