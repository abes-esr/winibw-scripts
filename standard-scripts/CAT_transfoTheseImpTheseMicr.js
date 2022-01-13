// 2014-10-09 : mte : adaptation pour 181/182 et suppression de $b en 200
// charge l'objet d'accès à winIbw
// 2014-12-01 : mte : correction fonction recupererPpn : on utilise la variable p3, pas la zone
// 2017-03-16 : sry : modification RDA FR 2017
// 2017-06-01 : SRY : correction suite mise en place RDA FR 2017
// 2018-01-04 : SRY : suppression zone 579
// 2020-01-01 par SRY : remplacer 219 par 214 - suppression $302724640X en 60X,  ajout 608, transforme 702 en 701 et 712 en 711
//

var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
	.getService(Components.interfaces.IApplication);

function onLoad()
{
	// à l'ouverture de la boîte de dialogue

	return true;
}
function onCancel()
{
	// The Cancel button is pressed..
	//alert("Vous avez cliqué sur Annuler, Rien ne sera modifié.");
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

	// crée une notice vide (cre)
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
// remplace la fonction modifier200() et modifier105()
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

function modifier328()
{
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag ("328", 0, true, true, false);
	var indicateurs = res.substring(4,6);
	if (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		application.activeWindow.title.endOfBuffer (false);
		application.activeWindow.title.insertText (res.replace("328 " + indicateurs,"328 #0$zReproduction de") + "\n");

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
		//on récupère le contenu de la zone sans le libellé de la $4 :
		//l'index de fin est situé à la position de la $4 + 2 caractères de la sous zone + 3 caractères du code de fonction
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
// 20180104 : suppression zone 579
function modifierNotice(ancienPpn)
{

	application.activeWindow.title.startOfBuffer (false);

	supprimer("000");
	supprimer("00A");
	supprimer("002");
	supprimer("003");
	supprimer("010");
	supprimer("035");
	supprimerRemplacer("100","100 0#$aAnnée d'édition");
	modifierRemplacer("105","$bm","$bv");
	supprimer("106");
	ajouter("130 ##$ae$bb$cm$fa$gb$hb$ib");
	modifier181();
	supprimerRemplacer("182","182 ##$P01$ch");
	supprimerRemplacer("183","183 ##$P01$ahad");
	modifierRemplacer("200","$bTexte imprimé","");
	supprimer("210");
	supprimerRemplacer("215", "215 ##$aNombre de microfiches");
	//on ajoute la $219 ou bien on la remplace si elle existe déjà
	// on remplace la 219 par la 214
	supprimerRemplacer("214","214 #2$aLille$cAtelier national de reproduction des thèses$dAnnée de diffusion");
	modifier328();
	//ajouter("455 ##$t@Lien vers la thèse imprimé, document originel");
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


}
function recupererPpn()
{
	application.activeWindow.command("mod", false);
	ppn = application.activeWindow.getVariable("P3GPP"); // recupère le ppn
	//var zone001 = application.activeWindow.title.findTag ("001", 0, true, true, false);
	//var ppn = zone001.substring(4, zone001.length);
	application.activeWindow.simulateIBWKey("FE");
	return ppn;

}

function transfoTheseImpTheseMicr()
{
	var bCodedData = application.activeWindow.codedData;
	application.activeWindow.codedData = false;

	var ppn = recupererPpn();
	picaCopyRecord();
	modifierNotice(ppn);

	application.activeWindow.codedData = bCodedData;
}