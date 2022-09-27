// charge l'objet d'acc�s � winIbw
// MTE 2012-02-07 ordre dans 856
// 2014-10-09 : mte : v�rif pour 181/182 : on enl�ve 200 $b et on ajoute 181 et 182
// 2014-12-01 : mte : correction fonction recupererPpn : on utilise la variable p3, pas la zone
// 2015-12-07 : SRY : prise en compte des notices ayant 2 zones 328 et message d'alerte indiquant qu'il faut ajouter la zone 456 dans la notice initiale
// 2016-11-14 : SRY : remplacer la zone 303 par la zone 307
// 2017-03-16 : SRY : modification RDA FR 2017 + modification zones 230, 303,304 et position zone 200
// 2017-06-01 : SRY : correction suite mise en place RDA FR 2017
// 2018-01-04 : SRY : suppression zone 579
// 2020-01-01 par SRY : remplacer 219 par 214 - supprimer pour toutes les zones 60X la sous zone$302724640X, ajout zone 608,  transformer 702 en 701 et 712 en 711, supprimer  zones 033 et 839, modifier zones 337 et 856 (remplacer format par PDF)
//

var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
	.getService(Components.interfaces.IApplication);

function onLoad()
{
	// � l'ouverture de la bo�te de dialogue

	return true;
}
function onCancel()
{
	// The Cancel button is pressed..
	//alert("Vous avez cliqu� sur Annuler, Rien ne sera modifi�.");
	return true;
}

function picaCopyRecord() {
	var bCodedData = application.activeWindow.codedData;

	application.activeWindow.codedData = false;
	application.activeWindow.noviceMode = false;

	application.activeWindow.command("\\too unm", false);
	application.activeWindow.copyTitle();

	var matCode = application.activeWindow.materialCode;
	var forceDocType = matCode.substr(0, 2);


	application.activeWindow.command("\\sys 1; \\bes 1", false);


	application.activeWindow.materialCode = forceDocType;

	// cr�e une notice vide (cre)
	application.activeWindow.command("\\inv 1", false);

	if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
		application.activeWindow.pasteTitle();
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		application.activeWindow.title.endOfBuffer(false);
	}
}

// 20170601 : correction suite mise en place RDA FR 2017
function modifier181()
{
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag ("181", 0, true, true, false);

	if (res != "")
	{
		//on laisse la 181 telle quelle
	}
	else
	{
		ajouter("181 ##$P01$ctxt");
	}
}

// remplace la fonction modifier200()
function modifierRemplacer(zone,ancientexte,nouveautexte)
{
	var tabres = new Array;
	var i =0;
	var res = "" ;

	do
	{
		application.activeWindow.title.startOfBuffer (false);
		res = application.activeWindow.title.findTag (zone, 0, true, true, false);
		if (res != "")
		{
			if (zone == ancientexte) {
				tabres[i] = nouveautexte + res.substring(3) + "\n";
			}
			else {
				tabres[i] = res.replace(ancientexte,nouveautexte) + "\n";
			}
			application.activeWindow.title.deleteLine(1);
			i++;
		}
	}	while (res != "")

	for (i=0;i<tabres.length;i++)
	{
		application.activeWindow.title.endOfBuffer (false);
		application.activeWindow.title.insertText (tabres[i]);
	}
}
function modifier105()
{
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag ("105", 0, true, true, false);
	if (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.endOfBuffer (false);
		var res_search_m = res.search(/\$bm/);
		var res_search_7 = res.search(/\$b7/);
		if (res_search_m > 0 || res_search_7 > 0 )
		{
			if (res_search_m > 0 ) {
				res = res.replace("$bm","$bv");
				res = res.replace("$b7","");
			} else {
				res = res.replace("$b7","$bv");
			}
		}
		application.activeWindow.title.insertText (res + "\n");
	}
}
// SRY 20151207 : prise en compte de toutes les zones 328
function modifier328()
{
	var tabres = new Array;
	var indicateurs = "";
	var res = "";
	var i =0;

	do
	{
		application.activeWindow.title.startOfBuffer (false);
		res = application.activeWindow.title.findTag ("328", 0, true, true, false);
		if (res != "")
		{
			indicateurs = res.substring(4,6);
			tabres[i] = res.replace("328 " + indicateurs,"328 #0$zReproduction de") + "\n";
			application.activeWindow.title.deleteLine(1);
			i++;
		}
	} while (res != "")

	for (i=0;i<tabres.length;i++)
	{
		application.activeWindow.title.endOfBuffer (false);
		application.activeWindow.title.insertText (tabres[i]);
	}
}
function supprimerRemplacer(ancienneZone, nouvelleZone)
{
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag (ancienneZone, 0, true, true, false);
	while (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag (ancienneZone, 0, true, true, false);
	}
	application.activeWindow.title.endOfBuffer (false);
	application.activeWindow.title.insertText (nouvelleZone + "\n");
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
	application.activeWindow.title.endOfBuffer (false);
	application.activeWindow.title.insertText (zone + "\n");
}

function remplacerValeurZone700(tag) {
	var res="x";
	application.activeWindow.title.startOfBuffer (false);
	var i=0;
	while (res != "") {
		res = application.activeWindow.title.findTag(tag, i, true, true, false);
		//on r�cup�re le contenu de la zone sans le libell� de la $4 :
		//l'index de fin est situ� � la position de la $4 + 2 caract�res de la sous zone + 3 caract�res du code de fonction
		var sousZones = res.split("$4");
		var zone = res.substring(0, res.indexOf("$4"));
		//pour chaque $4
		for (var j=1;j<sousZones.length;j++) {
			zone += "$4" + sousZones[j].substring(0, 3);
		}
		zone += "\n";
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.insertText(zone);
		i++;
	}
}

// 20170316 : modification RDA FR 2017
// 20170601 : correction suite mise en place RDA FR 2017
// 20180104 : SRY : suppression zone 579
// 20200101 : mise � jour TB 2020
function modifierNotice(ancienPpn)
{


	application.activeWindow.title.startOfBuffer (false);

	supprimer("000");
	supprimer("00A");
	supprimer("002");
	supprimer("003");
	supprimerRemplacer("008", "008 $aOax3");
	supprimer("010");
	supprimer("033");
	supprimer("035");
	supprimerRemplacer("100","100 0#$aAnn�e de mise en ligne");
	modifier105();
	supprimer("106");
	ajouter("135 ##$ad$br");
	modifier181();
	supprimerRemplacer("182","182 ##$P01$cc");
	supprimerRemplacer("183","183 ##$P01$aceb");
	modifierRemplacer("200","$bTexte imprim�","");
	supprimer("210");
	supprimer("215");
	//on ajoute la $219 ou bien on la remplace si elle existe d�j�
	// on remplace la 219 par la 214
	supprimerRemplacer("214","214 #2$aLieu de diffusion$cNom du diffuseur$dDate de diffusion");
	ajouter("230 ##$aDonn�es textuelles");
	supprimerRemplacer("303","303 ##$aDescription d'apr�s la consultation, AAAA-MM-JJ");
	ajouter("304 ##$aTitre provenant de l'�cran-titre -- Titre provenant des m�tadonn�es -- Titre provenant du conteneur -- Titre provenant de la page de titre du document num�ris�");
	ajouter("307 ##$aL'impression du document g�n�re XXX p.");
	modifier328();
	ajouter("337 ##$aUn logiciel capable de lire un fichier au format PDF");
	ajouter("455 ##$0" + ancienPpn);
	supprimer("579");
	modifierRemplacer("600","$3027253139$2rameau","$2rameau");
	modifierRemplacer("601","$3027253139$2rameau","$2rameau");
	modifierRemplacer("602","$3027253139$2rameau","$2rameau");
	modifierRemplacer("602","$3027253139$2rameau","$2rameau");
	modifierRemplacer("604","$3027253139$2rameau","$2rameau");
	modifierRemplacer("605","$3027253139$2rameau","$2rameau");
	modifierRemplacer("606","$3027253139$2rameau","$2rameau");
	modifierRemplacer("607","$3027253139$2rameau","$2rameau");
	ajouter("608 ##$3027253139$2rameau");
	remplacerValeurZone700("7");
	modifierRemplacer("702","702","701");
	modifierRemplacer("712","712","711");
	supprimer("801");
	supprimer("802");
	supprimer("830");
	supprimer("839");
	ajouter("856 4#$qPDF$uAdresse URL (si l'acc�s est r�serv�, cr�er une E856)$zAcc�s au texte int�gral");


}
function recupererPpn()
{
	application.activeWindow.command("mod", false);
	//var zone001 = application.activeWindow.title.findTag ("001", 0, true, true, false);
	//var ppn = zone001.substring(4, zone001.length);
	ppn = application.activeWindow.getVariable("P3GPP"); // recup�re le ppn
	application.activeWindow.simulateIBWKey("FE");
	return ppn;

}
function transfoTheseImpTheseElec()
{
	var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
		.getService(Components.interfaces.nsIPromptService);
	var bCodedData = application.activeWindow.codedData;
	application.activeWindow.codedData = false;

	var ppn = recupererPpn();
	picaCopyRecord();
	modifierNotice(ppn);

	// SRY le 22/01/2016
	prompts.alert(null,"CAT_transfoTheseImpTheseElec : " , "une fois la notice valid�e, modifier le ppn " + ppn + " et ajouter la zone 456 ##$0 + le nouveau ppn g�n�r�");
	application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText("une fois la notice valid�e, modifier le ppn " + ppn + " et ajouter la zone 456 ##$0 + le nouveau ppn g�n�r�\n");

	application.activeWindow.codedData = bCodedData;
}