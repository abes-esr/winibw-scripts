// Translitteration d'une notice en doublant les zones automatiquement, auteur PDZ
// Mis a jour le 2012-01-30 variable test ajoutee, MTE
// Mis a jour le 2012-09-14 ajout coded data off ligne 97, MTE
// mis à jour le 2014-09-04 corriger régression fichier précédent
// mis à jour le 2017-06-28 ajout zone 219
function Translitteration()
{
var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);
var langue_source = "";
var langue_cible = "";
var ok = false;
var ok_go = false;
var alphabet = "(ba ca fa ha ga ia ma mb)";
var check= {value: false};
var input = {value: "exit"};
var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);



result = prompts.prompt(null, "Translittération", "Entrez l'alphabet de la notice source (ba ca fa ha ga ia ma mb) exit pour sortir", input,"", check);
// input.value contient la chaîne de caractères saisie par l'utilisateur
// check.value indique l'état de la case à cocher
// result - contient true si l'utilisateur a cliqué sur OK


langue_source = input.value;
if (langue_source=="exit") return;
if (alphabet.indexOf(langue_source)>0) ok = true;

if (ok==false) {
                if (langue_source == null) langue_source = "chaine vide";
				prompts.alert(null,"Valeur entrée : ",langue_source);
                prompts.alert(null,"Erreur","l'alphabet source ne correspond a aucune langue proposée, relancer le script");
				
				return;
				}
ok=false;
input = "exit";
if (langue_source == "ba") ok_go = true;
if (langue_source == "ba") {
	input = {value: "exit"};
	result = prompts.prompt(null, "Translittération", "Entrez l'alphabet de la notice cible (ba, ca, fa, ga, ha, ia, la, ma, mb) exit pour sortir", input,"", check);
	langue_cible = input.value;
}
if (langue_source != "ba") langue_cible="ba";
if (langue_cible=="exit") return;
if (alphabet.indexOf(langue_cible)>0) ok = true;
if (ok==false) {
                prompts.alert(null,"Erreur","l'alphabet cible ne correspond à aucune langue proposée, relancer le script");
				return;
				}
if (langue_cible == "ba") ok_go = true;
if (langue_cible == langue_source) {
									prompts.alert(null,"Erreur","langue identique, relancez le script");
									return;
									}
if (ok_go == false) {
						prompts.alert(null,"Erreur","aucune des langues source ou cible ne contient : ba, relancez le script");
						return;
					}
	// fonction de traitement
	traite(langue_cible, langue_source);
	application.activeWindow.pressButton("Translittérer");
	application.activeWindow.pressButton("PicaButton2");
	//prompts.alert(null,"INFO","Validez la notice avec le bouton Translitteration");
	//--------------------------------------------------------------------------------------------------------------------------------------------
	function traite(cible, source)
	{
	var ZoneATraiter = "";
	var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);
	var tab_tag = new Array("200","205","206","207","208","210","215","216","219","220","230","240","250","225","327","600","601","602","605",
                     "410","411","412","413","421","422","423","424","425","430","431","432","433","434","435","436","437","440",
					 "441","442","443","444","445","446","447","448","451","452","453","454","455","456","461","463","464","470","481","482","488",
					 "500","501","503","510","512","513","514","515","516","517","518","520","540","541","545",
					 "700","701","702","710","711","712","716","720","721","722");
	var not_biblio = " 215 216 220 230 240 250";
	var not_autorite = " 205 206 207 208 225 327 600 601 602 605";
	var numero = new Array("01","02","03","04","05","06","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32");
	var biblio = false;
	var Autorite = false;
	var i=0;
	var go=0;
	var j=0;
	var cur=0;
	var NouvelleZone = "";
	var ccur = "";
	var avant="";
	var apres="";
	var nb=0;
	var test=0;	
	var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
	application.activeWindow.command("mod",false);
	application.activeWindow.codedData = false;
	application.activeWindow.title.startOfBuffer (false);
	ZoneATraiter = application.activeWindow.title.findTag("008", 0, false, true, true);
	if (ZoneATraiter != "") test = ZoneATraiter.indexOf("$aT");
	if (test>=0) Autorite = true; else biblio = true;
	for (i=0; i<tab_tag.length; i++) {
		go = 0;
		if (Autorite) {
		   go = not_autorite.indexOf(tab_tag[i]); 
		   }
		if (biblio) {
		   go = not_biblio.indexOf(tab_tag[i]); 
		   }
		   //prompts.alert(null,"i et go",tab_tag[i] + " " + go);
		if (go<=0) {
		            
					application.activeWindow.title.startOfBuffer (false);
					for (nb=0; nb<60; nb+=2) {
					ZoneATraiter = application.activeWindow.title.findTag(tab_tag[i], nb, false, true, true);
					if (ZoneATraiter!="") {
					cur++;
					avant = ZoneATraiter.substr(0,ZoneATraiter.indexOf("$"));
					apres = ZoneATraiter.substr(ZoneATraiter.indexOf("$"),ZoneATraiter.length-1);
					//prompts.alert(null,"tag et ligne",tab_tag[i] + " " + ZoneATraiter);
					//prompts.alert(null,"avant",avant);
					//prompts.alert(null,"apres",apres);
					//prompts.alert(null,"indexof",ZoneATraiter.indexOf("$"));
					//on sélectionne tout le reste de la ligne
			        application.activeWindow.title.endOfField(true);
			        //on remplace la sélection par le nouveau texte
					ccur = cur;
					if (cur <31) ccur = numero[cur-1];
					if (langue_source != "ba") {
						NouvelleZone = avant + "$6" + ccur + "$7" + source + apres + "\n";
						application.activeWindow.title.insertText(NouvelleZone);
						// +++ application.activeWindow.title.endOfBuffer(false);
						//NouvelleZone = tab_tag[i] + " 1#" + "$6" + ccur + "$7" + cible;
						NouvelleZone = tab_tag[i] + " " + avant + "$6" + ccur + "$7" + cible;
						//+++application.activeWindow.title.endOfField(true);
						//on remplace la sélection par le nouveau texte
						application.activeWindow.title.insertText(NouvelleZone);
					} //ba
					if (langue_source == "ba") {
						
						// +++ application.activeWindow.title.endOfBuffer(false);
						//NouvelleZone = tab_tag[i] + " 1#" + "$6" + ccur + "$7" + cible;
						NouvelleZone =  avant + "$6" + ccur + "$7" + cible + "\n";
						//+++application.activeWindow.title.endOfField(true);
						//on remplace la sélection par le nouveau texte
						application.activeWindow.title.insertText(NouvelleZone);
						NouvelleZone = tab_tag[i] + " " + avant + "$6" + ccur + "$7" + source + apres;
						application.activeWindow.title.insertText(NouvelleZone);
					} //ba
					 } //nb
					 
					}
					
		}	
	   
	}
	}	
	//--------------------------------------------------------------------------------------------------------------------------------------------
}

