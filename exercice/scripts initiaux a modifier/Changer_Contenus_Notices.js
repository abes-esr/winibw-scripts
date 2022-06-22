//===================================================
// Changer_Contenus_Notices_.js
//
//===================================================
// Mis � jour le 15-12-2005
// script permet de remplacer un texte par un autre
// � partir d'un fichier d'entr�e ou d'un lot de notices
// cela traite sur toute la notice ou seulement certaines zones d�finies
//	08-12-2005:	YGD:		Modification de la fa�on de rechercher, cr�ation d'expressions reguli�res
//	15-12-2005:	YGD:		Rajout du controle sur le fichier d'entr�e dans le cas o� il ne trouve pas le ppn
	

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
function Parcourir() {

	//D�finit la fenetre de parcourir pour s�lectionner le fichier d'entr�e
	var nsIFilePicker = Components.interfaces.nsIFilePicker;
	var fileChooser = Components.classes["@mozilla.org/filepicker;1"].createInstance(nsIFilePicker);
	fileChooser.init(window, "S�lectionnez un fichier � ouvrir",nsIFilePicker.modeOpen);
	fileChooser.appendFilter("Fichiers Textes","*.txt");

	var resultat = fileChooser.show();
	// 0 correspond � cliquer sur 'ok'
	if (resultat == 0)
	{
		//si c'est on traite sur un lot de notices
		if (document.getElementById("idSource1").selected == true)
		{
			document.getElementById("idCase_Fichier_Sortie").value = fileChooser.file.path ;
			nom_fich = fileChooser.file.leafName;
			//alert(fileChooser.file.isFile());
		}
		//si on traite � partir d'un fichier ppn
		else if (document.getElementById("idSource2").selected == true)
		{
			document.getElementById("idCase_Fichier_Entree").value = fileChooser.file.path ;
			document.getElementById("idCase_Fichier_Sortie").value = fileChooser.file.path + "_result.txt";
			nom_fich = fileChooser.file.leafName;
		}
	}
}

//==============================================================================
//sert � rendre accessible le le bouton parcourir
function oncommand_type_source(boolean_menu)
{
	document.getElementById("idCase_Fichier_Entree").disabled = boolean_menu;
	document.getElementById("searchbuttonE").hidden = boolean_menu;
	
	//document.getElementById("idCase_Fichier_Sortie").setAttribute("readonly",!boolean_menu);
	document.getElementById("searchbuttonS").hidden = !boolean_menu;
}

//==============================================================================
//sert � rendre in/accessible le menu d�roulant ou la case du texte
function oncommand_type_zones(cas_zone)
{
	document.getElementById("idUniqueZone").hidden = cas_zone;
}


//==============================================================================
function onLoad()
{
	return true;
}

//==============================================================================
function onAccept()
{
	//D�clarations
	//mots � remplacer dans la notice
	var Ancien = document.getElementById("idTexteSuppr").value;
	var Nouveau = document.getElementById("idTexteNouv").value;
	
	var Nom_Fichier_Entree = document.getElementById("idCase_Fichier_Entree").value;
	var Nom_Fichier_Sortie = document.getElementById("idCase_Fichier_Sortie").value;
	var Fichier_Entree;
	var Fichier_Sortie;
	var date;
	var mois;
	
	var Texte = {};
	var Ligne = "Fini !\r\n\r\n";
	var msgcoll;
	var msg;
	var erreur = 0;
	var j = 0;	
	var ppn //ppn de la notice modifi�e
	var count = 1;
	var maxi = 0;
	
	//on verifie si les conditions sont bien remplies avant de commencer
	//Si le texte � supprimer n'est pas rempli, alors on ne commence pas le traitement
	if (Ancien == "")
	{
		alert("Veuillez sp�cifier le texte � remplacer");
		return false;
	}
	//si le bouton pour d�finir les zones est s�lectionn�, et que rien n'est rempli, alors le message apparait.
	if (document.getElementById("idZone2").selected == true && document.getElementById("idUniqueZone").value == "")
	{
		alert("Veuillez saisir la ou les zones dans la derni�re case");
		return false;
	}
	if ( Nouveau == "" && confirm("Vous n'avez rien mis dans \"Nouveau Texte\",\n Cela signifie que vous allez supprimer tous les \"" + Ancien +"\" ?") == false)
	{	
		return false;
	}
	
	//Permet de manipuler des fichiers en XPCOM
	var LocalFile = new  Components.Constructor("@mozilla.org/file/local;1", "nsILocalFile");
	var fichier = new LocalFile();
		
	//on cr�e le fichier de sortie s'il est demand�
	if (document.getElementById("idCase_Fichier_Sortie").value != "")
	{
		fichier.initWithPath( Nom_Fichier_Sortie );
		//Cr�ation des fichiers de sortie
		Fichier_Sortie = utility.nouv_Fichier_Sortie();
		//sert � �craser le fichier de sortie s'il exite d�j�, et l'ouvre en �criture
		Fichier_Sortie.init(fichier, 0x02 | 0x08 | 0x20, 0664, 0);
		
		//on commence le traitement
		date = new Date;
		mois = date.getMonth() + 1;
		Ecrire_Dans_Fichier(Fichier_Sortie,"D�but du travail, il est " + date.getHours()+":"+date.getMinutes()+":"+date.getSeconds() + " le "+date.getDate()+"/"+mois+"/"+date.getFullYear()+"\r\n\r\n");
	}
	
	
	
	//si c'est une recherche sur un lot de notices
	if ( document.getElementById("idSource1").selected == true )
	{
		//maxi est le nombre de notices dans le lot
		maxi = application.activeWindow.getVariable("P3GSZ");
		//affiche la premi�re notice du lot
		application.activeWindow.command("Af 1 UNM",false);
		//boucle pour passer en revue toutes les notices
		for ( count = 1; count <= maxi; count ++)
		{
			//permet de passer � la notice suivante mais permet de rester sur la derni�re notice du lot
			if( count != 1)
			{application.activeWindow.simulateIBWKey("F1");}
			
			ppn = application.activeWindow.getVariable("P3GPP");
			//on lance la recherche et le remplacement s'il y a dans la notice
			Traitement();
			//on valide la notice en cours
			application.activeWindow.simulateIBWKey("FR");
			//on met � jour la barre de progression
			document.getElementById("idBarreProgress").value = count/maxi*100;
			
			if ( application.activeWindow.status == "ERROR")
			{
				//Msg est le message d'erreur g�n�r� par WinIBW
				msgcoll = application.activeWindow.messages;
				//Parcours tous les messages et on ne garde que le dernier(+important)
				for ( j=0; j < msgcoll.count; j++ )
				{
					msg = msgcoll.item(j);
					application.activeWindow.simulateIBWKey("FE");
					erreur = erreur +1;
					
				}
				Ligne = Ligne + "che ppn " + ppn + ".Erreur : " + msg.text + "\r\n";
			}			
		}
	}
	//si c'est une recherche � partir d'un fichier d'entr�e de ppn
	else
	{
		//initialisation
		fichier.initWithPath( Nom_Fichier_Entree );
		// ouverture du fichier d'entr�e en input stream (permet de lire le contenu)
		//Ouvre le fichier en lecture seulement
		Fichier_Entree = Components.classes["@mozilla.org/network/file-input-stream;1"].createInstance(Components.interfaces.nsIFileInputStream);
		Fichier_Entree.init(fichier, 0x01, 0444, 0);
		Fichier_Entree.QueryInterface(Components.interfaces.nsILineInputStream);
		//je compte le nombre de ppn contenu dans le fichier => barre de progression
		while( Fichier_Entree.readLine(Texte) != false )
		{
			maxi = maxi + 1;
		}
		// je ferme et je r�ouvre le fichier		
		Fichier_Entree.close();
		Fichier_Entree.init(fichier, 0x01, 0444, 0);
		Fichier_Entree.QueryInterface(Components.interfaces.nsILineInputStream);
		
		// cette ligne permet de lire chaque ligne du fichier
		// et en plus la fonction readLine renvoit false si on est rendu � la fin du fichier
		while ( Fichier_Entree.readLine(Texte) != false )
		{
			ppn = Texte.value;
			//On v�rifie si la ligne est vide ou non, pour aller � la fin de la boucle
			//�a permet �galement d'enveler les lignes vide � la fin du fichier d'entree
			if (ppn != "")
			{
				application.activeWindow.command("che ppn " + ppn,false);
				if ( ppn == application.activeWindow.getVariable("P3GPP") )
				{
					//on lance la recherche et le remplacement s'il y a dans la notice
					Traitement();
					//on valide la notice en cours
					application.activeWindow.simulateIBWKey("FR");
				}
				//on met � jour la barre de progression
				document.getElementById("idBarreProgress").value = count/maxi*100;
				count ++;
				
				if ( application.activeWindow.status == "ERROR")
				{
					//Msg est le message d'erreur g�n�r� par WinIBW
					msgcoll = application.activeWindow.messages;
					//Parcours tous les messages et on ne garde que le dernier(+important)
					for ( j=0; j < msgcoll.count; j++ )
					{
						msg = msgcoll.item(j);
						application.activeWindow.simulateIBWKey("FE");
						erreur = erreur + 1;
					}
					Ligne = Ligne + "che ppn " + ppn + ".Erreur : " + msg.text + "\r\n";
				}
			}
		}
		Fichier_Entree.close();
	}
	//s'il n'y a aucune erreur dans tout le lot
	if ( erreur == 0)
	{
		Ligne = Ligne + "Aucun ppn n'a rencontr� de probl�me de validation";
	}
	//si un fichier de sortie a �t� cr�e, on stocke le message de fin
	if ( document.getElementById("idCase_Fichier_Sortie").value != "" )
	{
		Ecrire_Dans_Fichier(Fichier_Sortie, Ligne);
		Fichier_Sortie.close();
	}
	//sinon on l'affiche
	else
	{
		alert(Ligne);
	}


	return true;

}

function Traitement()
{
	// D�clarations
	//mots � remplacer dans la notice
	var Ancien = document.getElementById("idTexteSuppr").value;
	var Nouveau = document.getElementById("idTexteNouv").value;
	// etiquette des zones � modifier ex:010;6xx
	var Toutes_Etiquettes = document.getElementById("idUniqueZone").value;
	var Nom_Fichier_Entree = document.getElementById("idCase_Fichier_Entree").value;//chemin du fichier en entr�e
	
	//
	// SRY : fichier de sortie 2
	//
	// var Nom_Fichier_Sortie = document.getElementById("idCase_Fichier_Sortie").value;
	// var Fichier_Sortie;
	// var LocalFile = new  Components.Constructor("@mozilla.org/file/local;1", "nsILocalFile");
	// var fichier = new LocalFile();
	var Ligne = "Fini SRY !\r\n\r\n";
	
	
	//initialisation des tableaux
	var Tableau = [];
	var Sous_Zones = [];
	var ancien_tag;
	//initialisation des compteurs
	var total = 0;
	var i = 0;
	var j = 0;
	var k = 0;
	
	//
	// SRY : fichier de sortie 2
	//
	// fichier.initWithPath( Nom_Fichier_Sortie )
	// fichier.initWithPath( Nom_Fichier_Sortie );
	// Fichier_Sortie = utility.nouv_Fichier_Sortie() + "_SRY.txt" ;
	// Fichier_Sortie.init(fichier, 0x02 | 0x08 | 0x20, 0664, 0);
	
	
	
	//modifie la notice en cours
		application.activeWindow.command("mod",false);
		application.activeWindow.title.startOfBuffer(false);
		
		//si c'est une modification � faire sur toute la notice
		if (document.getElementById("idZone1").selected ==  true)
		{
			do{
			
				ancien_tag = application.activeWindow.title.tag;
				Chercher_Remplacer_Par_Zone(application.activeWindow.title.tag, Ancien, Nouveau);
				// Ligne = "1 : "+ application.activeWindow.title.tag+"\r\n\r\n";
				// alert(Ligne);
				// Ecrire_Dans_Fichier(Fichier_Sortie,Ligne);
				
			//permet de sortir de la boucle quand il arrive sur la derni�re zone
			}while(application.activeWindow.title.tag != ancien_tag);
		}
		//si on effectue les modification seulement sur une ou plusieurs zones
		else
		{
			//total est le compteur pour savoir combien de points virgules sont entr�es en param�tres
			total = 0;
			var Deb = Toutes_Etiquettes.indexOf(';');
			while (Deb != -1) 
			{
				total++;
				Deb = Toutes_Etiquettes.indexOf(';',++Deb);
			}
			
			for( i=0; i<=total; i++ )
			{
				//on convertit tout le champ demand� pour les zones en majuscules
				Toutes_Etiquettes = Toutes_Etiquettes.toUpperCase();
				//toutes les zones s�par�es par un ';' sont plac�s dans un tableau que l'on va traiter
				Tableau = Toutes_Etiquettes.split(";");
				//s'il n'y a pas de tiret alors on enl�ve les 'x'
				if( Tableau[i].indexOf("-") == -1 )
				{
					//on commence le traitement pour remplacer tous les 'x' par des 0
					do
					{
						Tableau[i] = Tableau[i].replace(/X/,"");
						j = Tableau[i].indexOf("X");				
					
					}while( j!=-1 );
				}
			
				//si c'est uniquement compos� de chiffres, ex:010 ou 6xx transform� en 6
				if (isNaN(Tableau[i]) == false)
				{
					//si l'utilisateur a rentr� 010 ou 6xx, => simple remplacement
					Chercher_Remplacer_Par_Zone(Tableau[i], Ancien, Nouveau);
					//Ligne = "2 : "+Tableau[i]+"\r\n\r\n";
					//alert(Ligne);
					// Ecrire_Dans_Fichier(Fichier_Sortie,Ligne);
				}
				//si ce sont des nombres s�par�s par des tirets, par exemple 010-6xx
				else
				{
					//les nombres s�par�s par un tiret sont plac�s dans un autre tableau
					Sous_Zones = Tableau[i].split("-");
					//on remplace tous les x dans le 1er argument par des 0, et tous les x dans le 2�me argument par un 9
					//ex:01x-6xx va nous donner 010-699, ainsi la recherche sera faite sur cet intervalle 
					do
					{
						Sous_Zones[0] = Sous_Zones[0].replace(/X/,0);
						Sous_Zones[1] = Sous_Zones[1].replace(/X/,9);
						j = Sous_Zones[0].indexOf("X");
						k = Sous_Zones[1].indexOf("X");				
				
					}while( j!=-1 || k!=-1 );
					
					//on fait le test si l'�tiquette de zone n'est pas dans la notice courante
					//alors on va chercher l'�tiquette de zone suivante que l'on va mettre comm d�but d'intervalle
					if( application.activeWindow.title.findTag(Sous_Zones[0], 0, false, false, false) == "" )
					{
						//on se replace au d�but de la notice
						application.activeWindow.title.startOfBuffer(false);
						//tant que l'�tiquette de zone est inf�rieur � ce qui est entr�
						do
						{
							application.activeWindow.title.lineDown(1,false);
						
						}while(application.activeWindow.title.tag < Sous_Zones[0]);
						//on descend une ligne puisque la boucle se termine sur la ligne pr�c�dente
						application.activeWindow.title.lineDown(1,false);
						//on d�finit le d�but de l'intervalle comme l'�tiquette o� le curseur est plac�
						Sous_Zones[0] = application.activeWindow.title.tag;
						//on se replace au d�but de la notice
						application.activeWindow.title.startOfBuffer(false);
					}
					//permet de faire le remplacement dans l'intervalle donn�, ex: 010-219
					do
					{
						Chercher_Remplacer_Par_Zone(Sous_Zones[0], Ancien, Nouveau);
						//Ligne = "2 : "+Sous_Zones[0]+"\r\n\r\n";
						//alert(Ligne);
						// Ecrire_Dans_Fichier(Fichier_Sortie,Ligne);
						Sous_Zones[0] = application.activeWindow.title.tag;
							
					}while(Sous_Zones[0] <= Sous_Zones[1]);
				}
			}
		}
	
	
}


function Chercher_Remplacer_Par_Zone(Etiquette, Ancien, Nouveau)
{
	j = 0;
	var ZoneATraiter; //zone trouv�e par findtag
	var NouvelleZone;
	//Sert � remplacer tous les caract�res sp�piaux. ex:$a3285987
	var Remplace = Ancien.replace(/\\/g,"\\\\");
	Remplace = Remplace.replace(/\$/g,"\\$");
	Remplace = Remplace.replace(/\./g,"\\.");
	Remplace = Remplace.replace(/\[/g,"\\[");
	Remplace = Remplace.replace(/\]/g,"\\]");
	Remplace = Remplace.replace(/\)/g,"\\)");
	Remplace = Remplace.replace(/\(/g,"\\(");
	Remplace = Remplace.replace(/\}/g,"\\}");
	Remplace = Remplace.replace(/\{/g,"\\{");
	Remplace = Remplace.replace(/\^/g,"\\^");
	Remplace = Remplace.replace(/\?/g,"\\?");
	Remplace = Remplace.replace(/\*/g,"\\*");
	Remplace = Remplace.replace(/\+/g,"\\+");
	Remplace = Remplace.replace(/\-/g,"\\-");

	//l'option g permet de traiter toutes les occurences, et i permet de ne pas tenir compte de la casse
	if( document.getElementById("idRespectCasse").checked == true )
	{
		Ancien = new RegExp(Remplace,"g");
	}
	else
	{
		//on ne tient pas compte de la casse
		Ancien = new RegExp(Remplace,"gi");
	}
		
	
	ZoneATraiter = application.activeWindow.title.findTag(Etiquette, j, document.getElementById("idNomZone").checked, true, true);
	
	// Ligne = "ZoneATraiter : "+ZoneATraiter+"\r\n\r\n";
	// alert(Ligne);
	while(ZoneATraiter != "")
	{
		NouvelleZone = ZoneATraiter.replace(Ancien, Nouveau);
		
		//on ne remplace la ligne que si la chaine recherch�e � �t� trouv�e dans la zone
		if( ZoneATraiter != NouvelleZone )
		{
			//on s�lectionne tout le reste de la ligne
			application.activeWindow.title.endOfField(true);
			//on remplace la s�lection par le nouveau texte
			application.activeWindow.title.insertText(NouvelleZone);
		}
		j = j + 1;
		ZoneATraiter = application.activeWindow.title.findTag(Etiquette, j, document.getElementById("idNomZone").checked, true, true);
	}
	//ces lignes sont n�cessaires, pour se trouver � chaque fois en d�but de ligne suivante
	application.activeWindow.title.endOfField(false);
	application.activeWindow.title.lineDown(1,false);
	application.activeWindow.title.startOfField(false);
}

//==============================================================================
// j'ai cr�e cette ptite fonction parce que la fonction write
// demande � chaque fois la longueur de la chaine � traiter
// et il aurait fallu que j'�crire � chaque fois 2 lignes pour �crire une ligne
// dans un fichier
// � chaque fois: Ligne = "toto";
// Fichier_Sortie.write(Ligne, Ligne.length);
function Ecrire_Dans_Fichier(Fichier, ligne)
{
    Fichier.write(ligne, ligne.length);
    return;
}

//==============================================================================
function onCancel()
{
	// The Cancel button is pressed..
	//alert("Vous avez cliqu� sur Annuler, Rien ne sera modifi�.");
	return true;
}
