/**
	Convertir un caractère unicode ALA en un caractère unicode ISO 9.<b> 
	Les formes composées sont préférées pour les caractères ISO.
*/
// mis à jour le 2018-05-31 par SRY : ajout zone 219
function convertirCaractereAlaVersIsoCyrillique (caract)
{
	switch (caract)
	{
		case "\u016C\u0307" : return "\u0041\u030C";
		case "\u016D\u0307" : return "\u0061\u030C";
		case "\u1E1E" : return "\u0046\u0300";
		case "\u1E1F" : return "\u0046\u0300";
		case "\u1E8E" : return "\u0059\u0300";
		case "\u1E8F" : return "\u0079\u0300";
		case "\u016C" : return "\u0055\u030C";
		case "\u016D" : return "\u0075\u030C";
		case "\u01F1" : return "\u005A\u0302";
		case "\u0044\u007A" : return "\u005A\u0302";
		case "\u01F2" : return "\u005A\u0302";
		case "\u01F3" : return "\u007A\u0302";
		case "\u01CA" : return "\u004E\u0302";
		case "\u01CB" : return "\u004E\u0302";
		case "\u01CC" : return "\u006E\u0302";
		case "\u01C4" : return "\u0044\u030C";
		case "\u01C5" : return "\u0044\u030C";
		case "\u01C6" : return "\u0044\u030C";
		case "\u0055\u0306\u0307" : return "\u0041\u030C";
		case "\u0075\u0306\u0307" : return "\u0061\u030C";
		case "\u0046\u0307" : return "\u0046\u0300";
		case "\u0066\u0307" : return "\u0066\u0300";
		case "\u0059\u0307" : return "\u0059\u0300";
		case "\u0079\u0307" : return "\u0079\u0300";
		case "\u0055\u0306" : return "\u0055\u030C";
		case "\u0075\u0306" : return "\u0075\u030C";
		case "\u0044\u005A" : return "\u005A\u0302";
		case "\u0064\u007A" : return "\u007A\u0302";
		case "\u0048" : return "\u0047";
		case "\u0068" : return "\u0067";
		case "\u0044\u006a" : return "\u0110";
		case "\u0044\u004a" : return "\u0110";
		case "\u0064\u006a" : return "\u0111";
		case "\u0049\uFE20\u0065\uFE21" : return "\u0045\u0302";
		case "\u0049\uFE20\u0045\uFE21 " : return "\u0045\u0302";
		case "\u0069\uFE20\u0065\uFE21" : return "\u0065\u0302";
		case "\u005a\uFE20\u0068\uFE21" : return "\u005a\u030c";
		case "\u005a\uFE20\u0048\uFE21" : return "\u005a\u030c";
		case "\u007a\uFE20\u0068\uFE21" : return "\u007a\u030c";
		case "\u012a" : return "\u0049\u0300";
		case "\u0049\u0304" : return "\u0049\u0300";
		case "\u012b" : return "\u0069\u0300";
		case "\u0069\u0304" : return "\u0069\u0300";
		case "\u004a" : return "\u004a\u030c";
		case "\u006a" : return "\u006a\u030c";
		case "\u012c" : return "\u004a";
		case "\u0049\u0306" : return "\u004a";
		case "\u012d" : return "\u006a";
		case "\u0069\u0306" : return "\u006a";
		case "\u01C7" : return "\u004C\u0302";
		case "\u01C8" : return "\u004C\u0302";
		case "\u01C9" : return "\u006C\u0302";
		case "\u004e\u006a" : return "\u004e\u0302";
		case "\u004e\u004a" : return "\u004e\u0302";
		case "\u006e\u006a" : return "\u006e\u0302";
		case "\u0043" : return "\u0043\u0301";
		case "\u0063" : return "\u0063\u0301";
		case "\u004b\u0068" : return "\u0048";
		case "\u004b\u0048" : return "\u0048";
		case "\u006b\u0068" : return "\u0068";
		case "\u0054\uFE20\u0073\uFE21" : return "\u0043";
		case "\u0054\uFE20\u0053\uFE21" : return "\u0043";
		case "\u0074\uFE20\u0073\uFE21" : return "\u0063";
		case "\u0043\u0068" : return "\u0043\u030c";
		case "\u0043\u0048" : return "\u0043\u030c";
		case "\u0063\u0068" : return "\u0063\u030c";
		case "\u0044\u017e" : return "\u0044\u030c";
		case "\u0044\u007a\u030c" : return "\u0044\u030c";
		case "\u0044\u017d" : return "\u0044\u030c";
		case "\u0044\u005a\u030c" : return "\u0044\u030c";
		case "\u0064\u017e" : return "\u0064\u030c";
		case "\u0064\u007a\u030c" : return "\u0064\u030c";
		case "\u0053\u0068" : return "\u0053\u030c";
		case "\u0053\u0048" : return "\u0053\u030c";
		case "\u0073\u0068" : return "\u0073\u030c";
		case "\u0053\u0068\u0063\u0068" : return "\u0053\u0302";
		case "\u0053\u0048\u0043\u0048" : return "\u0053\u0302";
		case "\u0073\u0068\u0063\u0068" : return "\u0073\u0302";
		case "\u0116" : return "\u0045\u0300";
		case "\u0045\u0307" : return "\u0045\u0300";
		case "\u0117" : return "\u0065\u0300";
		case "\u0065\u0307" : return "\u0065\u0300";
		case "\u0049\uFE20\u0075\uFE21" : return "\u0055\u0302";
		case "\u0049\uFE20\u0055\uFE21" : return "\u0055\u0302";
		case "\u0069\uFE20\u0075\uFE21" : return "\u0075\u0302";
		case "\u0049\uFE20\u0061\uFE21" : return "\u0041\u0302";
		case "\u0049\uFE20\u0041\uFE21" : return "\u0041\u0302";
		case "\u0069\uFE20\u0061\uFE21" : return "\u0061\u0302";
		case "\u0049\uFE20\u006f\uFE21" : return "\u0045\u0308";
		case "\u0049\uFE20\u004f\uFE21" : return "\u0045\u0308";
		case "\u0069\uFE20\u006f\uFE21" : return "\u0065\u0308";
		case "\u005a\u0068" : return "\u005a\u030c";
		case "\u005a\u0048" : return "\u005a\u030c";
		case "\u007a\u0068" : return "\u007a\u030c";
		default : return "\u0000";
	}
}
/**
	Renvoie les zones à traiter définies par défaut.
*/
function renvoieZonesATraiterParDefaut ()
{
	var zones = new Array;
	var cz = "200,205,206,207,208,210,219,225,327,410,411,412,413";
	cz = cz + ",421,422,423,430,434,435,436,437,440,441,444,445,446";
	cz = cz + ",447,451,452,453,454,455,456,461,463,464,470,481,482,488";
	cz = cz + ",500,501,503,510,512,513,514,515,516,517,518,520,532";
	cz = cz + ",540,541,545,600,601,602,604,605,700,701,702,710";
	cz = cz + ",711,712,716,720,721,722";
	zones = cz.split(",");
	return zones;
	
}

/**
	Renvoie les zones à traiter choisies par l'utilisateur
*/
function renvoieZonesATraiterChoisies (chaineZones)
{
	var zones = new Array;
	zones = chaineZones.split(",");
	return zones;
}

/**
	Renvoie les zones à traiter
*/
function renvoieZonesATraiter ()
{
	if (document.getElementById("radToutesZones").getAttribute("selected") == "true")
	{
		return renvoieZonesATraiterParDefaut ();
	}
	else if (document.getElementById("radZonesChoisies").getAttribute("selected") == "true")
	{
		return renvoieZonesATraiterChoisies (document.getElementById("txtZones").value);
	}
	else
	{
		return new Array;
	}
}
/**
	Convertir la chaîne passée en paramètre de l'unicode ALA vers les 
	caractères de l'unicode ISO 9.
*/
function convertirChaineAlaVersIsoCyrillique (chaine)
{
	
	// tests avec substr
	// tant que chaine.length >0, envoyer toute la chaine , puis toute la chaîne -1, puis -2 
	// lorsque le res est diff. de rien (a preciser), inserer le caract dans la nouvelle chaine
	// et decaler i d'autant de pos que la longueur du caract (= de la chaine).
	// si chaine.length =0 et res = rien, alors le caract reste le même.
	// caractPrec permet de ne pas convertir si le caractère précédant celui en cours
	// est un $ (pour exclure la transformation du $c).
	
	chaineRes = "";
	res = "\u0000";
	caractPrec = "\u0000";
	posFin = chaine.length;
	pos = 0;
	
	while (pos < chaine.length) // traite toute la chaine
	{
		posFin = chaine.length;
		
		while (posFin > pos && res == "\u0000")
		{
			res = convertirCaractereAlaVersIsoCyrillique (chaine.substring(pos, posFin));
			if (res == "\u0000")
			{
				posFin --;
			}
		}
		if (res == "\u0000" || caractPrec == "\u0024")
		{
			res = chaine.substring(pos, pos+1);
			pos+=1;
		}
		else
		{
			pos += posFin - pos;
		}
		chaineRes += res;
		caractPrec = res;
		res = "\u0000";
	}
	return chaineRes;
}
/**
	Vérifie si la zone passée en paramètre doit être convertie.
	Permet de placer des restrictions. 
*/
function aConvertir (res)
{
	if (res != "" && res.indexOf("$7ca") == -1)
	{
		return true;
	}
	return false;
}
/**
	Permet de découper la chaine res et de choisir la partie
	à convertir : à gauche du choix = non converti, à droite = converti.
*/
function convertirChaine (res)
{
	if ((pos = res.indexOf ("$7ba")) != -1)
	{
		return res.substring(0, pos) + convertirChaineAlaVersIsoCyrillique (res.substring(pos),res.length);
	}
	else
	{
		// toute la chaîne est convertie
		return convertirChaineAlaVersIsoCyrillique (res);
	}
}
/** 	Passe en revue toute les zones /zone/ de la notice, et 
	teste pour chacune d'elles son contenu avant de le convertir 
	ex : - première zone 517 (i = 0)
		 - deuxième zone 517 (i = 1) etc. jusqu'à res == ""
*/
function convertirZone (zone, application)
{
	var i = 0;
	application.activeWindow.title.startOfBuffer (false);
	do
	{
		res = application.activeWindow.title.findTag (zone, i, true, true, false);
		if (aConvertir (res) == true)
		{
			application.activeWindow.title.deleteLine(1);
			application.activeWindow.title.insertText (convertirChaine (res) + "\n");
		}
		i++;
	}
	while (res != "");
}

// couche contrôle
//
//


function btnLancer_click ()
{
	application = Components.classes["@oclcpica.nl/kitabapplication;1"].getService(Components.interfaces.IApplication);
	application.activeWindow.command ("mod", false);
	
	var zones = new Array;
	zones = renvoieZonesATraiter ();
	
	try
	{
		var i = 0;
		while (i < zones.length)
		{
			convertirZone (zones[i], application);
			i++;
		}
	}
	catch (ex)
	{
		alert("erreur");
	}
}
function radToutesZones_click()
{
document.getElementById("txtZones").disabled = true;
}
function radZonesChoisies_click()
{
document.getElementById("txtZones").disabled = false;
}
function onLoad ()
{
	return true;
}
function onCancel()
{
	return true;
}