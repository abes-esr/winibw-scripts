//===================================================
// Changer_Contenus_Notices.js
//
//===================================================
// Mis a jour le 17-06-2022
// script permettant d'inserer une zone et de supprimer une sous zone
// a partir de la page des resultats de winibw apres une recherche sur l'ensemble des notices issues du resultat

// Pull in the WinIBW application object:
var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);

// Pull in the fileinput, fileoutput and prompter objects:
const utility =
{
    newFileInput: function()
    {
        return Components.classes["@oclcpica.nl/scriptinputfile;1"].createInstance(Components.interfaces.IInputTextFile);
    },

    newFileOutput: function()
    {
        return Components.classes["@oclcpica.nl/scriptoutputfile;1"].createInstance(Components.interfaces.IOutputTextFile);
    },

    newPrompter: function()
    {
        return Components.classes["@oclcpica.nl/scriptpromptutility;1"].createInstance(Components.interfaces.IPromptUtilities);
    },
    nouv_Fichier_Sortie: function()
    {
      return Components.classes["@mozilla.org/network/file-output-stream;1"].createInstance(Components.interfaces.nsIFileOutputStream);
    }
};

//==============================================================================
function onLoad()
{
	return true;
}

//==============================================================================
function onAccept()
{
	//TODO ne jamais laisser des document.getElementById("[elementXUL]").value; sinon NPE le code s'arrête
	//exemple => var Nouveau = document.getElementById("idTexteNouv").value;

	//Initialisation de variables utilisees plus loin dans le code
	var Ligne = "Fini !\r\n\r\n";
	var msgcoll; //message d'erreur genere par winibw
	var msg; //message d'erreur
	var erreur = 0; //erreurs du lot
	var j = 0; //compteur d'incrementation
	var ppn //ppn de la notice modifiee
	var count = 1; //compteur pour passer en revue toutes les notices
	var maxi = 0; //utilise pour la barre de progression

	//si c'est une recherche sur un lot de notices
	if ( document.getElementById("idSource1").selected == true ) //Lien avec l'element taggue idSource1 dans le fichier xul
	{
		maxi = application.activeWindow.getVariable("P3GSZ");//maxi est le nombre de notices dans le lot
		application.activeWindow.command("Af 1 UNM",false);//affiche la premiere notice du lot
		for ( count = 1; count <= maxi; count ++)//boucle pour passer en revue toutes les notices
		{
			if( count != 1)//permet de passer a la notice suivante mais permet de rester sur la derniere notice du lot
			{application.activeWindow.simulateIBWKey("F1");} //Simule l'appui d'une touche clavier quand on est sur WinIBW
			ppn = application.activeWindow.getVariable("P3GPP"); //Recupere le nom du PPN sur lequel on est
			alert(ppn); //permet de controler le PPN ou l'on va passer dans le traitement
			Traitement();//On lance la fonction qui va operer sur chaque PPN du lot de resultat
			application.activeWindow.simulateIBWKey("FR");//on valide la notice en cours
			document.getElementById("idBarreProgress").value = count/maxi*100;//on met a jour la barre de progression tagguee idBarreProgress dans le fichier xul correspondant

			if ( application.activeWindow.status == "ERROR")
			{
				msgcoll = application.activeWindow.messages;//Msg est le message d'erreur genere par WinIBW
				for ( j=0; j < msgcoll.count; j++ )//Parcours tous les messages et on ne garde que le dernier(+important)
				{
					msg = msgcoll.item(j);
					application.activeWindow.simulateIBWKey("FE");
					erreur = erreur +1;

				}
				Ligne = Ligne + "che ppn " + ppn + ".Erreur : " + msg.text + "\r\n";
			}
		}
	}


	if ( erreur == 0)//s'il n'y a aucune erreur dans tout le lot
	{
		Ligne = Ligne + "Aucun ppn n'a rencontre de probleme de validation";
	}
	else
	{
		alert(Ligne);
	}
	return true;
}

function Traitement()
{
	application.activeWindow.command("mod",false);//Place en mode de modification la notice
	application.activeWindow.title.startOfBuffer (false); //Place le curseur au debut de la notice en cours
	ajouter("183 ##$P01$aceb\n"); //Ajout de la zone 183 de la notice en cours
	alert("ajout puis suppression de la 183");
	supprimer("102"); //Suppression de la zone 200 de la notice en cours
}


//==============================================================================
function onCancel()
{
	// The Cancel button is pressed..
	//alert("Vous avez clique sur Annuler, Rien ne sera modifie.");
	return true;
}

function supprimer(zone)
{
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	while (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	}
}

function ajouter(zone)
{
	application.activeWindow.title.endOfBuffer (false); //Deplace le curseur a la fin du tampon
	application.activeWindow.title.insertText (zone + "\n");
}
