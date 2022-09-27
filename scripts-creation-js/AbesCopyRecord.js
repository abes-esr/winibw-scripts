// MTE le 2012-06-04//
function CopyRecord() {

var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);
var theMessage = "Utilisez la touche F5 pour copier une notice"; 
application.messageBox("WinIBW 3", theMessage, "message-icon");       
}
