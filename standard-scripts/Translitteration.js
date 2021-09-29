// Translitteration d'une notice en doublant les zones automatiquement, auteur PDZ
// Mis a jour le 2012-01-30 variable test ajoutee, MTE
// Mis a jour le 2012-09-14 ajout coded data off ligne 97, MTE
// mis à jour le 2014-09-04 corriger régression fichier précédent
// mis à jour le 2017-06-28 ajout zone 219
// mis à jour le 2019-11-06 remplacement de la zone 219 par la zone 214
// mis à jour le 2020-01-01 : ajout de la fonction "TranslitterationArmenien" qui translittere ou ouvre une url externe en fonction de la langue choisie. 
//                            Suppression de l'arménien dans le script Translitteration()

function Translitteration()
{
var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);
var langue_source = "";
var langue_cible = "";
var ok = false;
var ok_go = false;
var alphabet = "(ba ca fa ha ga ia ma)";
var check= {value: false};
var input = {value: "exit"};
var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);



result = prompts.prompt(null, "Translittération", "Entrez l'alphabet de la notice source (ba ca fa ha ga ia ma) exit pour sortir", input,"", check);
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
	result = prompts.prompt(null, "Translittération", "Entrez l'alphabet de la notice cible (ba, ca, fa, ga, ha, ia, la, ma) exit pour sortir", input,"", check);
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
	var tab_tag = new Array("200","205","206","207","208","210","214","215","216","220","230","240","250","225","327","600","601","602","605",
                     "410","411","412","413","421","422","423","424","425","430","431","432","433","434","435","436","437","440",
					 "441","442","443","444","445","446","447","448","451","452","453","454","455","456","461","463","464","470","481","482","488",
					 "500","501","503","510","512","513","514","515","516","517","518","520","540","541","545",
					 "700","701","702","710","711","712","716","720","721","722");
	var not_biblio = " 215 216 220 230 240 250";
	var not_biblio_indicateur = " 214#4";
	var not_autorite = " 205 206 207 208 225 327 600 601 602 605";
	var numero = new Array("01","02","03","04","05","06","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32");
	var biblio = false;
	var Autorite = false;
	var indicateur = "" ;
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
					indicateur = tab_tag[i] + ZoneATraiter.substr(0,ZoneATraiter.indexOf("$")) ;
					go = not_biblio_indicateur.indexOf(indicateur.replace(/ /g,""));
					//if (tab_tag[i] == "214" && nb < 6) {
					//	prompts.alert(null,"ZoneATraiter--", ZoneATraiter + "--");
					//	prompts.alert(null,"tag et indicateur--",indicateur.replace(/ /g,"") + "--");
					//	prompts.alert(null,"go:",go + "--");
					//}
					if (go>0) {				
						nb = nb - 1 ;
					}	
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
					if (langue_source != "ba" && go<=0) {
						NouvelleZone = avant + "$6" + ccur + "$7" + source + apres + "\n";
						application.activeWindow.title.insertText(NouvelleZone);
						// +++ application.activeWindow.title.endOfBuffer(false);
						//NouvelleZone = tab_tag[i] + " 1#" + "$6" + ccur + "$7" + cible;
						NouvelleZone = tab_tag[i] + " " + avant + "$6" + ccur + "$7" + cible;
						//+++application.activeWindow.title.endOfField(true);
						//on remplace la sélection par le nouveau texte
						application.activeWindow.title.insertText(NouvelleZone);
					} //ba
					if (langue_source == "ba" && go<=0) {
						
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

// Tranlittere en Arménien ou bien ouvre une url externe pour l'arménien
function TranslitterationArmenien()
{
	var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);
var alphabet = "(ba mb url)";
var langue_source = "";
var url_cible = "";
var check= {value: false};
var ok = false;
var input = {value: "exit"};
var prompts = Components.classes["@mozilla.org/embedcomp/prompt-service;1"]
                        .getService(Components.interfaces.nsIPromptService);
						
result = prompts.prompt(null, "Translittération", "Entrez l'alphabet de la notice source (ba ou mb) ou 'url' pour accéder à l'outil externe. 'exit' pour sortir", input,"", check);
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

if (langue_source == "mb") {
	traitementexterne("mb", "ba");
}	
if (langue_source == "ba") {
    traitementexterne("ba", "mb");
}
if (langue_source == "url") {
	application.shellExecute("https://pages.lip6.fr/Jean-Francois.Perrot/inalco/arm/ISO_Uni.html",5,"open","");
}
}


// Latin vers Arménien
function isoToUni (chn) {
var isouni = {
" ":" ",
"A":"\u0531", 
"B":"\u0532", 
"G":"\u0533", 
"D":"\u0534", 
"E":"\u0535", 
"Z":"\u0536", 
"\u0112":"\u0537", 
"\u00cb":"\u0538", 
"T\u0315":"\u0539", 
"\u017d":"\u053a", 
"I":"\u053b", 
"L":"\u053c", 
"X":"\u053d", 
"\u00c7":"\u053e", 
"K":"\u053f", 
"H":"\u0540", 
"J":"\u0541", 
"\u0120":"\u0542", 
"\u010c\u0323":"\u0543", 
"M":"\u0544", 
"Y":"\u0545", 
"N":"\u0546", 
"\u0160":"\u0547", 
"O":"\u0548", 
"\u010c":"\u0549", 
"P":"\u054a", 
"J\u030c":"\u054b", 
"\u1e58":"\u054c", 
"S":"\u054d", 
"V":"\u054e", 
"T":"\u054f", 
"R":"\u0550", 
"C\u0315":"\u0551", 
"W":"\u0552", 
"P\u0315":"\u0553", 
"K\u0315":"\u0554", 
"\u014c":"\u0555", 
"F":"\u0556", 
"a":"\u0561", 
"b":"\u0562", 
"g":"\u0563", 
"d":"\u0564", 
"e":"\u0565", 
"z":"\u0566", 
"\u0113":"\u0567", 
"\u00eb":"\u0568", 
"t\u0315":"\u0569", 
"\u017e":"\u056a", 
"i":"\u056b", 
"l":"\u056c", 
"x":"\u056d", 
"\u00e7":"\u056e", 
"k":"\u056f", 
"h":"\u0570", 
"j":"\u0571", 
"\u0121":"\u0572", 
"\u010d\u0323":"\u0573", 
"m":"\u0574", 
"y":"\u0575", 
"n":"\u0576", 
"\u0161":"\u0577", 
"o":"\u0578", 
"\u010d":"\u0579", 
"p":"\u057a", 
"\u01f0":"\u057b", 
"\u1e59":"\u057c", 
"s":"\u057d", 
"v":"\u057e", 
"t":"\u057f", 
"r":"\u0580", 
"c\u0315":"\u0581", 
"w":"\u0582", 
"p\u0315":"\u0583", 
"k\u0315":"\u0584", 
"\u014d":"\u0585", 
"f":"\u0586", 
 "\u0587":"ew"
};
   var txt = chn.split("\n");  
   var trad = "";
   for( var j = 0; j < txt.length; j++ ){
      var chn = txt[j];
      var res = "";
      for ( var i = 0; i<chn.length; i++ ) {
		var clef = chn.charAt(i);
		if( chn.charCodeAt(i+1) == 0x0315 
			|| chn.charCodeAt(i+1) == 0x0323			
		  ){ 
 	    	clef += chn.charAt(++i);
 		}
		if( clef in isouni ){
			res += isouni[clef];
		}else{
			res += clef;
		}
      }
      trad += res;
   }
   return trad;
 }

 
// Arménien vers Latin
function uniToIso (chn) {
	var uniiso = {
" ":" ",
"\u0531":"A", 
 "\u0532":"B", 
 "\u0533":"G", 
 "\u0534":"D", 
 "\u0535":"E", 
 "\u0536":"Z", 
 "\u0537":"\u0112", 
 "\u0538":"\u00cb", 
 "\u0539":"T\u0315", 
 "\u053a":"\u017d", 
 "\u053b":"I", 
 "\u053c":"L", 
 "\u053d":"X", 
 "\u053e":"\u00c7", 
 "\u053f":"K", 
 "\u0540":"H", 
 "\u0541":"J", 
 "\u0542":"\u0120", 
 "\u0543":"\u010c\u0323", 
 "\u0544":"M", 
 "\u0545":"Y", 
 "\u0546":"N", 
 "\u0547":"\u0160", 
 "\u0548":"O", 
 "\u0549":"\u010c", 
 "\u054a":"P", 
 "\u054b":"J\u030c", 
 "\u054c":"\u1e58", 
 "\u054d":"S", 
 "\u054e":"V", 
 "\u054f":"T", 
 "\u0550":"R", 
 "\u0551":"C\u0315", 
 "\u0552":"W", 
 "\u0553":"P\u0315", 
 "\u0554":"K\u0315", 
 "\u0555":"\u014c", 
 "\u0556":"F", 
 "\u0561":"a", 
 "\u0562":"b", 
 "\u0563":"g", 
 "\u0564":"d", 
 "\u0565":"e", 
 "\u0566":"z", 
 "\u0567":"\u0113", 
 "\u0568":"\u00eb", 
 "\u0569":"t\u0315", 
 "\u056a":"\u017e", 
 "\u056b":"i", 
 "\u056c":"l", 
 "\u056d":"x", 
 "\u056e":"\u00e7", 
 "\u056f":"k", 
 "\u0570":"h", 
 "\u0571":"j", 
 "\u0572":"\u0121", 
 "\u0573":"\u010d\u0323", 
 "\u0574":"m", 
 "\u0575":"y", 
 "\u0576":"n", 
 "\u0577":"\u0161", 
 "\u0578":"o", 
 "\u0579":"\u010d", 
 "\u057a":"p", 
 "\u057b":"\u01f0", 
 "\u057c":"\u1e59", 
 "\u057d":"s", 
 "\u057e":"v", 
 "\u057f":"t", 
 "\u0580":"r", 
 "\u0581":"c\u0315", 
 "\u0582":"w", 
 "\u0583":"p\u0315", 
 "\u0584":"k\u0315", 
 "\u0585":"\u014d", 
 "\u0586":"f", 
 "\u0587":"ew"
};
   var txt = chn.split("\n");  
   var trad = "";
   for( var j = 0; j < txt.length; j++ ){
      var chn = txt[j];
      var res = "";
      for ( var i = 0; i<chn.length; i++ ) {
		var clef = chn.charAt(i);
		if( clef in uniiso ){
			res += uniiso[clef];
		}else{
			res += clef;
		}
      }
      trad += res;
   }
   return trad;
 }
 
// translitteration en Arménien 
function traitementexterne(source, cible)
	{
	var ZoneATraiter = "";
	var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
          .getService(Components.interfaces.IApplication);
	var tab_tag = new Array("200","205","206","207","208","210","214","215","216","220","230","240","250","225","327","600","601","602","605",
                     "410","411","412","413","421","422","423","424","425","430","431","432","433","434","435","436","437","440",
					 "441","442","443","444","445","446","447","448","451","452","453","454","455","456","461","463","464","470","481","482","488",
					 "500","501","503","510","512","513","514","515","516","517","518","520","540","541","545",
					 "700","701","702","710","711","712","716","720","721","722");
	var not_biblio = " 215 216 220 230 240 250";
	var not_biblio_indicateur = " 214#4";
	var not_autorite = " 205 206 207 208 225 327 600 601 602 605";
	var numero = new Array("01","02","03","04","05","06","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32");
	var biblio = false;
	var Autorite = false;
	var i=0;
	var go=0;
	var j=0;
	var k=0;
	var cur=0;
	var indicateur = "" ;
	var NouvelleZone = "";
	var NouvelleZoneSource = "";
	var ccur = "";
	var avant="";
	var apres="";
	var apressource="";
	var souszone="";
	var numsszone="";
	var nb=0;
	var test=0;
	var ok = false;
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
		
		if (go<=0) {
			application.activeWindow.title.startOfBuffer (false);
			for (nb=0; nb<60; nb+=2) {
				ZoneATraiter = application.activeWindow.title.findTag(tab_tag[i], nb, false, true, true);
				indicateur = tab_tag[i] + ZoneATraiter.substr(0,ZoneATraiter.indexOf("$")) ;
				go = not_biblio_indicateur.indexOf(indicateur.replace(/ /g,""));
				//if (tab_tag[i] == "214" && nb < 6) {
				//	prompts.alert(null,"ZoneATraiter--", ZoneATraiter + "--");
				//	prompts.alert(null,"tag et indicateur--",indicateur.replace(/ /g,"") + "--");
				//	prompts.alert(null,"go:",go + "--");
				//}
				if (go>0) {				
					nb = nb - 1 ;
				}	
				if (ZoneATraiter!="") {
					cur++;
					avant = ZoneATraiter.substr(0,ZoneATraiter.indexOf("$"));
					apres = ZoneATraiter.substr(ZoneATraiter.indexOf("$"),ZoneATraiter.length-1);
					apressource = apres;
					//on sélectionne tout le reste de la ligne
			        application.activeWindow.title.endOfField(true);
			        //on remplace la sélection par le nouveau texte
					ccur = cur;
					if (cur <31) ccur = numero[cur-1];
					if (source == "mb" && go<=0) {
						// création zone langue cible
						NouvelleZone = tab_tag[i] + " " + avant + "$6" + ccur + "$7" + cible;
						j = apres.indexOf("$");
						while (j >= 0) {
							// prompts.alert(null,"indexof : ",j);
							apres = apres.substr(j+1);
							// prompts.alert(null,"apres : ",apres);
							if (apres.indexOf("$") >=0) { 
								k = apres.indexOf("$")-1 ;
							}
							else {
								k = apres.length-1;
							}
							souszone = apres.substr(1,k);
							numsszone = apres.substr(0,1);
							NouvelleZone =  NouvelleZone + "$" + numsszone + uniToIso(souszone);
							//NouvelleZone =  NouvelleZone + "$" + numsszone + souszone;
							apres = apres.substr(k);
							j = apres.indexOf("$");
						}
						//+++application.activeWindow.title.endOfField(true);
						//on remplace la sélection par le nouveau texte
						NouvelleZoneSource = avant + "$6" + ccur + "$7" + source + apressource + "\n";
						application.activeWindow.title.insertText(NouvelleZoneSource);
						application.activeWindow.title.insertText(NouvelleZone);
					} //mb
					if (source == "ba" && go<=0) {
						// +++ application.activeWindow.title.endOfBuffer(false);
						//NouvelleZone = tab_tag[i] + " 1#" + "$6" + ccur + "$7" + cible;
						NouvelleZone =  avant + "$6" + ccur + "$7" + cible;
						j = apres.indexOf("$");
						while (j >= 0) {
							apres = apres.substr(j+1);
							if (apres.indexOf("$") >=0) { 
								k = apres.indexOf("$")-1 ;
							}
							else {
								k = apres.length-1;
							}
							souszone = apres.substr(1,k);
							numsszone = apres.substr(0,1);
							NouvelleZone =  NouvelleZone + "$" + numsszone + isoToUni(souszone);
							//NouvelleZone =  NouvelleZone + "$" + numsszone + souszone;
							apres = apres.substr(k);
							j = apres.indexOf("$");
						}
						//+++application.activeWindow.title.endOfField(true);
						//on remplace la sélection par le nouveau texte
						NouvelleZone = NouvelleZone + "\n";
						application.activeWindow.title.insertText(NouvelleZone);
						NouvelleZoneSource = tab_tag[i] + " " + avant + "$6" + ccur + "$7" + source + apressource;
						application.activeWindow.title.insertText(NouvelleZoneSource);
					} //ba
					
				} //if
			} //for
					
		} // go	
	   
	} // for
	}

	//--------------------------------------------------------------------------------------------------------------------------------------------
