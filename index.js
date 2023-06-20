


// Import stylesheets
import './style.css';

// Write Javascript code!


function OpenWhatsapp()
{
	const WhatsApp = "com.whatsapp";
	const intent = new intent(intent.ACTION_MAIN)
	intent.setPackage(WhatsApp);
	startActivity(intent);
}

 