//===================================================
// Changer_Contenus_Notices.js
//
//===================================================
// Mis � jour le 17-06-2022
// script permettant d'ins�rer une zone et de supprimer une sous zone
// � partir de la page des r�sultats de winibw apr�s une recherche sur l'ensemble des notices issues du r�sultat

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
	//TODO ne jamais laisser des document.getElementById("[elementXUL]").value; sinon NPE le code s'arr�te
	//exemple => var Nouveau = document.getElementById("idTexteNouv").value;
	
	//Initialisation de variables utilis�es plus loin dans le code
	var Ligne = "Fini !\r\n\r\n";
	var msgcoll; //message d'erreur g�n�r� par winibw
	var msg; //message d'erreur
	var erreur = 0; //erreurs du lot
	var j = 0; //compteur d'incr�mentation
	var ppn //ppn de la notice modifi�e
	var count = 1; //compteur pour passer en revue toutes les notices
	var maxi = 0; //utilis� pour la barre de progression
	
	//si c'est une recherche sur un lot de notices
	//TODO comment attraper l'�l�ment idSource1 dans le ficier xul associ�
	if ( ................. ) //Lien avec l'�l�ment taggu� idSource1 dans le fichier xul
	{
		maxi = application.activeWindow.getVariable("P3GSZ");//maxi est le nombre de notices dans le lot
		application.activeWindow.command("Af 1 UNM",false);//affiche la premi�re notice du lot
		for ( count = 1; count <= maxi; count ++)//boucle pour passer en revue toutes les notices
		{
			if( count != 1)//permet de passer � la notice suivante mais permet de rester sur la derni�re notice du lot
			{application.activeWindow.simulateIBWKey("F1");} //Simule l'appui d'une touche clavier quand on est sur WinIBW
			//TODO comment r�cup�rer un PPN ?
			//alert(ppn); permet de controler le PPN ou l'on va passer dans le traitement
			//TODO comment lancer le traitement d'ajout et suppression ?
			application.activeWindow.simulateIBWKey("FR");//on valide la notice en cours
			document.getElementById("idBarreProgress").value = count/maxi*100;//on met � jour la barre de progression taggu�� idBarreProgress dans le fichier xul correspondant
			
			if ( application.activeWindow.status == "ERROR")
			{
				msgcoll = application.activeWindow.messages;//Msg est le message d'erreur g�n�r� par WinIBW
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
		Ligne = Ligne + "Aucun ppn n'a rencontr� de probl�me de validation";
	}
	else
	{
		alert(Ligne);
	}
	return true;
}

function Traitement()
{
	//Ecrire le script de traitement
}


//==============================================================================
function onCancel()
{
	// The Cancel button is pressed..
	//alert("Vous avez cliqu� sur Annuler, Rien ne sera modifi�.");
	return true;
}