//Ce script transforme une notice de these electronique en notice de these imprimee, soit //reproduction, soit commerciale.
//Mis en prod. le 2012-09-10, auteur PDZ.
//2014-10-09 : mte : on enlève $b et on ajoute 181/182 pour texte imprime
// 2014-12-01 : mte : recupererPpn de ce script sert de modèle car on utilise la variable p3, pas la zone
// 2016-01-22 : SRY : CAT_TransfoTheseElecTheseImp: modification mentions zone 210 et prise en compte des notices ayant 2 zones 328
// 2016-11-14 : SRY : CAT_TransfoTheseElecTheseImp: desactivation automatique du mode novice et les donnees codees
// 2017-03-16 : SRY : modification RDA FR 2017
// 2017-06-01 : SRY : correction suite mise en place RDA FR 2017
// 2018-01-04 : SRY : CAT_TransfoTheseElecTheseImp : suppression zone 579 et 7X2, remplacement zone 456 par 455
// 2020-01-01 par SRY :	remplacer 219 par 214, suppression $302724640X en  606, ajout 608, transformer 7XX (on ne garde que la 700 $4070), supprimer zones 310, 311, 314, ajout paramètre vide à modifier181
//


var Res = "";




// 20170601 : correction suite mise en place RDA FR 2017
// 20180104 : suppression zone 579 et 7X2 et remplacement 456 par 455
function CAT_TransfoTheseElecTheseImp() {
var bCodedData = application.activeWindow.codedData;
var bNoviceMode = application.activeWindow.noviceMode;
var input = {value: "1"};
var check= {value: false};
var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
var flags = prompts.BUTTON_POS_0 * prompts.BUTTON_TITLE_IS_STRING  +
            prompts.BUTTON_POS_1 * prompts.BUTTON_TITLE_CANCEL +
			prompts.BUTTON_POS_2 * prompts.BUTTON_TITLE_IS_STRING;
// This value of flags will create 3 buttons. The first will be "Save", the
// second will be the value of aButtonTitle1, and the third will be "Cancel"

var button = prompts.confirmEx(null, "Choix Copie", "Que voulez-vous faire ?",
                               flags, "transformation de notice de thèse electronique en thèse imprimee (reproduction)", "", "transformation de notice de thèse electronique en thèse imprimee (ed. commerciale)", null, check);

 application.activeWindow.codedData = false;
 application.activeWindow.noviceMode = false;

 if (button == 0) AReproTheseOaAa();
 if (button == 2) ACommerceTheseOaAa();

 // application.activeWindow.codedData = true;
 if (bCodedData) application.activeWindow.codedData = true;
 // application.activeWindow.noviceMode = true;
 if (bNoviceMode) application.activeWindow.noviceMode = true;

 }

 // 20170316 : modification RDA FR 2017
 // 20170601 : correction suite mise en place RDA FR 2017
 // 20180104 : suppression zone 579
function AReproTheseOaAa()
{
var cont="";
var tabres = new Array;
var i =0;


var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);




var go=true;
Res = application.activeWindow.getVariable("P3GPP"); // recupère le ppn

if (Res == "") {

				prompts.alert(null,"ReproTheseOaAa : " , "ppn inexistant aucune action n est faite");

				go = false;
				}
if (go == true) {
xpicaCopyRecord();
suptag("Cré");
suptag("...");
suptag("00A");
suptag("002");
suptag("003");
suptag("033");
suptag("035");
suptag("100");
suptag("135");
suptag("182");
suptag("183");
suptag("210");
suptag("214");
suptag("230");
suptag("304");
suptag("337");
suptag("579");
suptag("856");
application.activeWindow.title.endOfBuffer(false);

application.activeWindow.title.insertText("100 0#$aAnn\u00e9e d'\u00e9dition\n");
application.activeWindow.title.endOfBuffer(false);
modifier181("");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("182 ##$P01$cn\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("183 ##$P01$anga\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("215 ##$a$c$d30 cm$e\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("214 #2$aLieu de diffusion$cNom du diffuseur$dAnn\u00e9e de diffusion\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("455 ##$0" + Res + "\n");

modifierRemplacer("600","$3027253139$2rameau","$2rameau");
modifierRemplacer("601","$3027253139$2rameau","$2rameau");
modifierRemplacer("602","$3027253139$2rameau","$2rameau");
modifierRemplacer("602","$3027253139$2rameau","$2rameau");
modifierRemplacer("604","$3027253139$2rameau","$2rameau");
modifierRemplacer("605","$3027253139$2rameau","$2rameau");
modifierRemplacer("606","$3027253139$2rameau","$2rameau");
modifierRemplacer("607","$3027253139$2rameau","$2rameau");
application.activeWindow.title.endOfBuffer(false);
modifierRemplacer("702","702","701");
modifierRemplacer("712","712","711");
remplacerValeurZone700("7");

//modif 105 $bm en $bv
application.activeWindow.title.startOfBuffer (false);
cont = application.activeWindow.title.findTag("105", 0, true, true, false);
if (cont != "") {
		application.activeWindow.title.deleteLine(1);
		cont = cont.replace("$bm","$bv");

		application.activeWindow.title.insertText(cont + "\n");

}

//modif 008
application.activeWindow.title.startOfBuffer (false);
cont = application.activeWindow.title.findTag("008", 0, true, true, false);
if (cont != "") {
		application.activeWindow.title.deleteLine(1);
		cont = cont.replace("$aO","$aA");

		application.activeWindow.title.insertText(cont + "\n");

}
//modif 200 on enleve le $b et son contenu
application.activeWindow.title.startOfBuffer (false);
cont = application.activeWindow.title.findTag("200", 0, true, true, false);
if (cont != "") {
		application.activeWindow.title.deleteLine(1);
		cont = cont.replace("$bRessource \u00e9lectronique","");
 		application.activeWindow.title.insertText(cont + "\n");
}

//modif 328
// 22-01-2016 : SRY : prise en compte de toutes les 328
do
    {
        application.activeWindow.title.startOfBuffer (false);
        cont = application.activeWindow.title.findTag ("328", 0, true, true, false);
        if (cont != "")
        {
            application.activeWindow.title.deleteLine(1);
			tabres[i] = cont.replace("#0","#0$zReproduction de");
            i++;
        }
    } while (cont != "")

for (i=0;i<tabres.length;i++)
{
    application.activeWindow.title.endOfBuffer (false);
    application.activeWindow.title.insertText (tabres[i]+ "\n");
}

} // end go
prompts.alert(null,"ReproTheseOaAa : " , "une fois la notice validee, modifier le ppn " + Res + " et ajouter la zone 456 ##$0 + le nouveau ppn genere");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("une fois la notice validee, modifier le ppn " + Res + " et ajouter la zone 456 ##$0 + le nouveau ppn genere\n");
} // fin de fonction
// 20170601 : correction suite mise en place RDA FR 2017
function modifier181(tag)
{
	application.activeWindow.title.startOfBuffer (false);
	var cont = application.activeWindow.title.findTag ("181", 0, true, true, false);

	if (cont != "")
	{
		//on laisse la 181 telle quelle
	}
	else
	{
		application.activeWindow.title.endOfBuffer (false);
		application.activeWindow.title.insertText ("181 ##$P01$ctxt" + "\n");
	}
}
function xpicaCopyRecord() {
	var bCodedData = application.activeWindow.codedData;

	application.activeWindow.codedData = false;
	application.activeWindow.noviceMode = false;

	application.activeWindow.command("\\too unm", false);
	application.activeWindow.copyTitle();

	var matCode = application.activeWindow.materialCode;
	var forceDocType = matCode.substr(0, 2);


	application.activeWindow.command("\\sys 1; \\bes 1", false);


	application.activeWindow.materialCode = forceDocType;

	// cree une notice vide (cre)
	if (Autorite) application.activeWindow.command("\\inv 2", false);
	if (Autorite == false) application.activeWindow.command("\\inv 1", false);
	if ((application.activeWindow.status == "OK") && (application.activeWindow.title != null)) {
		application.activeWindow.pasteTitle();
		if (bCodedData) {
			application.activeWindow.codedData = true;
		}
		application.activeWindow.title.endOfBuffer(false);
	}
}
function suptag(tag)
{
//supression de la ligne tag tronque ou non
var res="x";
while (res != "") {
	application.activeWindow.title.startOfBuffer (false);
	res = application.activeWindow.title.findTag(tag, 0, true, true, false);
	if (res != "") application.activeWindow.title.deleteLine(1);;
}

}

 // 20170316 : modification RDA FR 2017
 // 20170601 : correction suite mise en place RDA FR 2017
 // 20180104 : suppression zone 579
function ACommerceTheseOaAa()
{

var cont="";
var cont200="";
var tabres = new Array;
var i =0;
var j =0;

var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
var go=true;
Res = application.activeWindow.getVariable("P3GPP"); // recupère le ppn

if (Res == "") {

				prompts.alert(null,"ReproTheseOaAa : " , "ppn inexistant aucune action n est faite");

				go = false;
				}
if (go == true) {
xpicaCopyRecord();
suptag("Cré");
suptag("...");
suptag("00A");
suptag("002");
suptag("003");
suptag("029");
suptag("033");
suptag("035");
suptag("100");
suptag("135");
suptag("182");
suptag("183");
suptag("210");
suptag("214");
suptag("230");
suptag("300");
suptag("304");
suptag("310");
suptag("311");
suptag("314");
suptag("330");
suptag("337");
suptag("541");
suptag("579");
suptag("686");
suptag("701");
suptag("702");
suptag("710");
suptag("711");
suptag("712");
suptag("716");
suptag("720");
suptag("721");
suptag("722");
suptag("856");

application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("010 ##$A\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("100 0#$aAnn\u00e9e d'\u00e9dition\n");
modifier181("");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("182 ##$P01$cn\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("183 ##$P01$anga\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("215 ##$a $c $d $e\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("214 #0$aLieu de publication$cNom de l'\u00e9diteur$dAnn\u00e9e de publication\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("320 ##$a\n");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("452 ##$0" + Res + "\n");
application.activeWindow.title.startOfBuffer (false);

modifierRemplacer("600","$3027253139$2rameau","$2rameau");
modifierRemplacer("601","$3027253139$2rameau","$2rameau");
modifierRemplacer("602","$3027253139$2rameau","$2rameau");
modifierRemplacer("602","$3027253139$2rameau","$2rameau");
modifierRemplacer("604","$3027253139$2rameau","$2rameau");
modifierRemplacer("605","$3027253139$2rameau","$2rameau");
modifierRemplacer("606","$3027253139$2rameau","$2rameau");
modifierRemplacer("607","$3027253139$2rameau","$2rameau");
application.activeWindow.title.endOfBuffer(false);


//modif 008
application.activeWindow.title.startOfBuffer (false);
cont = application.activeWindow.title.findTag("008", 0, true, true, false);
if (cont != "") {
		application.activeWindow.title.deleteLine(1);
		cont = cont.replace("$aO","$aA");

		application.activeWindow.title.insertText(cont + "\n");

}
cont = application.activeWindow.title.findTag("105", 0, true, true, false);
if (cont != "") {
		application.activeWindow.title.deleteLine(1);
		cont = cont.replace("$bm","$bv");

		application.activeWindow.title.insertText(cont + "\n");

}
//modif 200 on enleve le $b et son contenu, le $g et son contenu
application.activeWindow.title.startOfBuffer (false);
cont = application.activeWindow.title.findTag("200", 0, true, true, false);
if (cont != "") {
		application.activeWindow.title.deleteLine(1);
		cont = cont.replace("$bRessource \u00e9lectronique","");
		i = cont.indexOf("\$g");
		j = cont.lastIndexOf("\$");
		if ( i>=0 ) {
			if (i == j) {
				if (i == 0  && j > 0) {
					cont = cont.substr(j);
				} else {
					cont = cont.substr(0,j);
				}
			} else {
				cont200 = cont.substr(i+1);
				j = cont200.indexOf("\$");
				cont200 = "$" + cont200.substr(0,j);
				cont = cont.replace(cont200,"");
			}
		}
		application.activeWindow.title.insertText(cont + "\n");
}

// modif 328
// 22-01-2016 : SRY : prise en compte de toutes les 328
// 20170601 : correction suite mise en place RDA FR 2017
i=0;
do
    {
        application.activeWindow.title.startOfBuffer (false);
        cont = application.activeWindow.title.findTag ("328", 0, true, true, false);
        if (cont != "")
        {
            application.activeWindow.title.deleteLine(1);
			tabres[i] = cont.replace("$zReproduction de","");
			tabres[i] = cont.replace("#0","#0$zTexte remani\u00e9 de");
			i++;
        }
    } while (cont != "")

for (i=0;i<tabres.length;i++)
{
    application.activeWindow.title.endOfBuffer (false);
    application.activeWindow.title.insertText (tabres[i]+ "\n");
}

//modif 456 : on remplace par 455
application.activeWindow.title.startOfBuffer (false);
cont = application.activeWindow.title.findTag("456", 0, true, true, false);
if (cont != "") {
		application.activeWindow.title.deleteLine(1);
		cont = cont.replace("456","455");
		application.activeWindow.title.insertText(cont + "\n");
}

// ne garder que les 700 avec un $4070
i=0;
do
    {
        application.activeWindow.title.startOfBuffer (false);
        cont = application.activeWindow.title.findTag ("700", 0, true, true, false);
        if (cont != "")
        {
            application.activeWindow.title.deleteLine(1);
			if ( cont.indexOf("$4070") > 0 ) {
				tabres[i] = cont;
				i++;
			}
        }
    } while (cont != "")

for (i=0;i<tabres.length;i++)
{
    application.activeWindow.title.endOfBuffer (false);
    application.activeWindow.title.insertText (tabres[i]+ "\n");
}

prompts.alert(null,"CommerceTheseOaAa : " , "une fois la notice validee, modifier le ppn " + Res + " et ajouter la zone 452 ##$0 + le nouveau ppn genere");
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("une fois la notice validee, modifier le ppn " + Res + " et ajouter la zone 452 ##$0 + le nouveau ppn genere\n");

}

}
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

function remplacerValeurZone700(tag) {
	var res="x";
	application.activeWindow.title.startOfBuffer (false);
	var i=0;
	while (res != "") {
		res = application.activeWindow.title.findTag(tag, i, true, true, false);
		//on recupere le contenu de la zone sans le libelle de la $4 :
		//l'index de fin est situe à la position de la $4 + 2 caractères de la sous zone + 3 caractères du code de fonction
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



