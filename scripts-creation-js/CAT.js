//mis \u00e0 jour le 2014-09-04 par MTE : ajout de tous les $b du 200 maintenant qu'ils sont contrôl\u00e9s
//mis \u00e0 jour le 2014-10-07 par MTE : remplacement des 200$b par 181 et si possible 182
//mis \u00e0 jour le 2015-03-19 par IAN : mise \u00e0 jour de la date dans le script CAT_creerExemplaireRetro, pass\u00e9e de 2014 \u00e0 2015
//mis \u00e0 jour le 2015-04-24 par IAN : mise \u00e0 jour de la date dans le script CAT_creer-ThesesImpEditionCommerciale, mentions subdivision de forme Th\u00e8ses et \u00e9crits acad\u00e9miques ($3 ppn) enlev\u00e9es des zones 606
//mis \u00e0 jour le 2015-12-07 par SRY : CAT_creerTheseImprimeReproduction : supprimer 451 et 452
//                                   CAT_creerTheseImprimeEditionCommerciale : supprimer $3027253139 en zone 6XX remplacer 451, 452 et supprimer 455 et 456
//									 CAT_creerTheseElectroniqueReproduction : supprimer 451, 452 et 456
//									 CAT_creerPeriodique, CAT_creerCollection, CAT_creerPeriodElectr : supprimer 301
//									 CAT_creerExemplaireRetro : remplacement de la date 2015 par 2016 
//									 CAT_creerTheseImprimeOriginelle: modification mentions zone 210
// mis \u00e0 jour le 2016-02-08 par SRY : CAT_creerElectronique, CAT_creerPeriodElectr : 230,337,339 
// mis \u00e0 jour le 2016-02-22 par SRY : CAT_creerCollection : ajout zone 301
// mis \u00e0 jour le 2016-11-14 par SRY : 
// 				CAT_creerTheseElectroniqueReproduction : modification zone 702
//				CAT_creerCollectivite : ajout de la zone 150 $a et $b
//				CAT_creerElectronique : ajout zone 336 $a
// mis \u00e0 jour le 2017-03-16 par SRY : 
// 				Nouvelles consignes RDA FR 2017 (zones 183, 210, 219, 215
// mis \u00e0 jour le 2018-01-03 par SRY : cr\u00e9ation de 2 scripts :
// 				CAT_creerEchantillonAccompagne et CAT_creerObjet
// mis \u00e0 jour le 2018-05-31 par SRY : cr\u00e9ation de script :
// 				CAT_creerArticleImp
//				modification du vocabulaire (vedette mati\u00e8re transform\u00e9 en point d'acc\u00e8s)
// mis \u00e0 jour le 2020-01-01 par SRY : modification pour \u00e9volutions Unimarc 
//				* cr\u00e9ation de script : CAT_creerPropositionFormeGenre - Ce script permet de cr\u00e9er une proposition rameau Forme/Genre Tf3
//				* Modificication des scripts suivants comme suit :
//				* remplacer 219 par 214 - suppression $x 600, 606 et 607 - ajout 608$a et $2 - modification libell\u00e9 700, 702, 710, 711 et 712
//				CAT_creerMonoIMP, CAT_creerElectronique, CAT_creerAudiovisuel, CAT_creerMultimedia, CAT_creerAtlas, CAT_creerPartition, CAT_creerMusique, CAT_creerSonore, CAT_creerEchantillonAccompagne, CAT_creerObjet, CAT_creerPeriodique, CAT_creerPeriodElectr, CAT_creerCollection, CAT_creerTheseImprimeOriginelle, CAT_creerTheseElectroniqueReproduction, CAT_creerTheseImprimeReproduction, CAT_creerTheseImprimeEditionCommerciale, CAT_creerArticleImp
// mis \u00e0 jour le 2025-10-20 par LPL : suppression de toutes les abr\u00e9viations pour mise en conformit\u00e9 avec la consigne RDA-FR de ne plus abr\u00e9ger
//				


function CAT_ajout301()
{
	// permet d'ajouter une zone 301 ISSN
	// tous ces scripts ont ete mis a jour le 20110617 par MTE
	// selon les suggestions des formateurs relais
	application.activeWindow.title.insertText ("301 ##$aDemande de num\u00e9rotation ISSN en cours");
}
function CAT_ajout305()
{
	// permet d'ajouter une zone 305 autres tirages
	application.activeWindow.title.insertText ("305 ##$aAutres tirages en ");
}
function CAT_ajoutDollar4Aut()
{
	// permet d'ajouter un dollar 4 auteur
	application.activeWindow.title.insertText ("$4070");
}
function CAT_ajoutDollar4Pref()
{
	// permet d'ajouter un dollar 4080 prefacier
	application.activeWindow.title.insertText ("$4080");
}
function CAT_ajoutDollar4Ill()
{
	// permet d'ajouter un dollar 4440 illustrateur
	application.activeWindow.title.insertText ("$4440");
	}
function CAT_ajoutDollar4Trad()
{
	// permet d'ajouter un dollar 4730 traducteur
	application.activeWindow.title.insertText ("$4730");
}
function CAT_ajoutDollar4Ed()
{
	// permet d'ajouter un dollar 4730 \u00e9diteur
	application.activeWindow.title.insertText ("$4340");
}	
function CAT_ajoutRameau()
{
	// permet d'ajouter un $2rameau
	application.activeWindow.title.insertText ("$2rameau");
}
function CAT_ajoutFMeSH()
{
	// permet d'ajouter un $2rameau
	application.activeWindow.title.insertText ("$2fmesh");
}
function CAT_ajoutTexteImprime()
{
	// permet d'ajouter 181 et 182 ok
	 application.activeWindow.title.insertText ("181 ##$P01$ctxt"+ "\n" +"182 ##$P01$cn"+ "\n" +"183 ##$P01$anga");
	// var application = Components.classes["@oclcpica.nl/kitabapplication;1"]
    //      .getService(Components.interfaces.IApplication);
	// application.messageBox("Script inconnu ", "Ce script a \u00e9t\u00e9 d\u00e9sactiv\u00e9 le 01/01/2020", "alert-icon");
}
function CAT_ajoutRessourcElec()
{
	// permet d'ajouter 181 Ressource \u00e9lectronique
	application.activeWindow.title.insertText ("181 ##$P01$ctxt"+ "\n" +"182 ##$P01$cc");
}
function CAT_ajoutCarte()
{
	// permet d'ajouter 181 Document cartographique
	application.activeWindow.title.insertText ("181 ##$P01$ccri"+ "\n" +"182 ##$P01$cn");
}
function CAT_ajoutSon()
{
	// permet d'ajouter  181 Enregistrement sonore
	application.activeWindow.title.insertText ("181 ##$P01$csnd" + "\n" +"182 ##$P01$cs ");
}
function CAT_ajoutImagesAnimees()
{
	// permet d'ajouter 181Images anim\u00e9ees et 182 ?
	application.activeWindow.title.insertText ("181 ##$P01$ctdi");
}
function CAT_ajoutImageFixe()
{
	// permet d'ajouter 181 Image fixe
	application.activeWindow.title.insertText ("181 ##$P01$csti" + "\n" + "182 ##$P01$cn");
}
function CAT_ajoutTexteManuscrit()
{
	// permet d'ajouter 181 Texte manuscrit
	application.activeWindow.title.insertText ("181 ##$P01$ctxt" + "\n" + "182 ##$P01$cn");
}
function CAT_ajoutMicroforme()
{
	// permet d'ajouter 181 Microforme
	application.activeWindow.title.insertText ("181 ##$P01$ctxt"+ "\n" +"182 ##$P01$ch");
}
function CAT_ajoutBraille()
{
	// permet d'ajouter  181 Braille
	application.activeWindow.title.insertText ("181 ##$P01$ctct"+ "\n" +"182 ##$P01$cn");
}
function CAT_ajoutMusiqueImprimee()
{
	// permet d'ajouter 181 Musique imprim\u00e9e
	application.activeWindow.title.insertText ("181 ##$P01$cntm"+ "\n" +"182 ##$P01$cn");
}
function CAT_ajoutMusiqueBraille()
{
	// permet d'ajouter 181 Musique en braille
	 application.activeWindow.title.insertText ("181 ##$P01$ctcm"+ "\n" +"182 ##$P01$cn");
}
function CAT_ajoutObjet()
{
	// permet d'ajouter 181 Objet
	application.activeWindow.title.insertText ("181 ##$P01$ctdf"+ "\n" +"182 ##$P01$cn");
}
function CAT_ajout320()
{
	// permet d'ajouter la zone 320 Bibliographie.Index
	application.activeWindow.title.insertText ("320 ##$aBibliographie. Index");
}
function CAT_dedoublonnageDED ()
{
	// Ex\u00e9cute la commande comparant les notices li\u00e9es par une zone 024 
	application.activeWindow.command("ded unm", false);
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR plus d'abr\u00e9vations
function CAT_creerAtlas()
{
	//Ce script permet de cr\u00e9er une notice d'atlas ou de carte Ka
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
	"008 $aKax3" + "\n" +
	"010 ##$AISBN$dPrix" + "\n" +
	"073 #0$aNum\u00e9ro EAN" + "\n" +
	"181 ##$P01$ctxt" + "\n" + "182 ##$P01$cn" + "\n" + 
	"181 ##$P02$ccri" + "\n" + "182 ##$P02$cn"+ "\n" +
	"183 ##$P01$anga" + "\n" +
	"200 01#$a@Titre$eCompl\u00e9ment de Titre$f1re mention de responsabilit\u00e9$gMention de responsabilit\u00e9 de fonction diff\u00e9rente" + "\n" +
	"205 ##$aEdition" + "\n" +
	"206 ##$aEchelle" + "\n" +
	"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
	"215 ##$aImportance mat\u00e9rielle$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" +
	"304 ##$aNote sur le titre" + "\n" +
	"305 ##$aNote sur l'\u00e9dition" + "\n" +
	"315 ##$aEchelle de Cartes" + "\n" +
	"510 ##$a@Titre parall\u00e8le" + "\n" +
	"517 ##$a@Variante du Titre" + "\n" +
	"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" +
	"607 ##$aG\u00e9ographique$2rameau" + "\n" +
	"608 ##$3027497259$2rameau" + "\n" +
	"700 #1$aNom Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$bPr\u00e9nom$4180"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR plus d'abr\u00e9vations
function CAT_creerCollection()
{
	//Ce script permet de cr\u00e9er une notice de collection imprim\u00e9e Ad 
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
	"008 $aAdx3" + "\n" + 
	"106 $aCaract\u00e9ristiques physiques" + "\n" + 
	"110 $aType de publication en s\u00e9rie$bP\u00e9riodicit\u00e9$cR\u00e9gularit\u00e9" + "\n" + 
	"200 1#$a@Titre propre$eCompl\u00e9ment du Titre$f1re mention de responsabilit\u00e9$gMention de responsabilit\u00e9 de fonction diff\u00e9rente" + "\n" + 
	"181 ##$P01$ctxt" + "\n" +"182 ##$P01$cn"+ "\n" + 
	"183 ##$P01$anga" + "\n" +
	"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" + 
	"215 ##$aImportance mat\u00e9rielle$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
	"301 ##$ax volumes dans le Sudoc : pas de demande de num\u00e9rotation ISSN (Attention, \u00e0 partir de 5 notices appartenant \u00e0 la collection, demande de num\u00e9rotation ISSN \u00e0 faire via l'application Cidemis) " + "\n" + 
	"326 ##$aCollection" + "\n" + 
	"510 ##$a@Titre parall\u00e8le" + "\n" + 
	"512 ##$a@Titre de couverture" + "\n" + 
	"517 ##$a@Autres variantes du titre" + "\n" + 
	"606 ##$aSujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
	"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
	"701 #1$aNom co-Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$4651"+ "\n" + 
	"710 02$a@Nom Collectivit\u00e9 Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$4070" + "\n" + 
	"711 02$a@Nom Collectivit\u00e9 co-Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$4070" + "\n" + 
	"712 02$a@Nom Collecteur Auteur relatif \u00e0 la manifestation ou \u00e0 l'item$4Code de Fonction"
	);
	application.activeWindow.codedData = true;
}
function CAT_creerCollectivite()
{
	//Ce script permet de cr\u00e9er une notice d'autorit\u00e9 collectivit\u00e9 Tb5
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
	"008 $aTb5" + "\n" + 
	"106 ##$a0$b1$c0" + "\n" + 
	"150 ##$aType de collectivit\u00e9 officielle (11 codes possibles, voir le GM)$bCode de congr\u00e8s ou de conf\u00e9rence (valeur 0 ou 1)" + "\n" +
	"210   $90y$a@Nom de la collectivit\u00e9$bnom de la collectivit\u00e9 subordonn\u00e9e facultative$clocalisation facultative" + "\n" + 
	"340 ##$aNote biographique (informations \u00e0 justifier par des sources mentionn\u00e9es en zone 810)" + "\n" + 
	"410   $9#y$a@Nom de la collectivit\u00e9$bnom de la collectivit\u00e9 subordonn\u00e9e facultative$clocalisation facultative" + "\n" + 
	"810 ##$aOBLIGATOIRE R\u00e9f\u00e9rence du document pour lequel est cr\u00e9\u00e9e la pr\u00e9sente autorit\u00e9 Titre / Auteur, date" + "\n" + 
	"810 ##$aDocument(s) de r\u00e9f\u00e9rence permettant d'\u00e9tablir les variantes \u00e9ventuelles du nom 210 + 410, les informations biographiques 340, etc.$bCiter ici les informations trouv\u00e9e dans la source Zone 810 r\u00e9p\u00e9table pour chaque source"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerElectronique()
{
	//Ce script permet de cr\u00e9er une notice de monographie \u00e9lectronique Oa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
	"008 $aOax3" + "\n" + 
	"010 ##$AISBN" + "\n" + 
	"181 ##$P01$c..."+ "\n" + 
	"182 ##$P01$cc" + "\n" + 
	"183 ##$P01$aceb" + "\n" +
	"200 1#$a@Titre$eCompl\u00e9ment du Titre$f1re mention de responsabilit\u00e9$gMention de responsabilit\u00e9 de fonction diff\u00e9rente" + "\n" + 
	"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
	"225  #$a@Titre de la Collection$xISSN$vNum\u00e9ro" + "\n" + 
	"230 ##$aDonn\u00e9es textuelles" + "\n" + 
	"300 ##$aNote g\u00e9n\u00e9rale" + "\n" + 
	"303 ##$aNote " + "\n" + 
	"304 ##$aNote sur le Titre" + "\n" + 
	"305 ##$aNote " + "\n" + 
	"320 ##$aNote sur bibliographies et index" + "\n" + 
	"336 ##$aNote sur le type de ressource \u00e9lectronique" + "\n" + 
	"337 ##$aUn logiciel capable de lire un fichier au format XXX" + "\n" + 
	"339 ##$aFormat de la ressource$ddate de publication" + "\n" + 
	"410 ##$t@Lien au titre de la Collection$vNum\u00e9ro" + "\n" + 
	"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
	"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
	"607 ##$aNom g\u00e9ographique$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
	"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" + 
	"700 #1$aNom Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$bPr\u00e9nom$4070"  + "\n" + 
	"712 02$a@Nom Collectivit\u00e9 auteur relatif \u00e0 la manifestation ou \u00e0 l'item$4Code de Fonction"  + "\n" + 
	"856 4#$qFormat du fichier$uURL"
	);
	application.activeWindow.codedData = true;
}
function CAT_creerEtatDeCollection()
{
	//Ce script permet de cr\u00e9er un \u00e9tat de collection ouvert
	application.activeWindow.title.insertText(
	"e01 $bxO" + "\n" + 
	"930 ##$aCote$jCode PEB" + "\n" + 
	"955 41$fS\u00e9rieD\u00e9but$dVolumeD\u00e9but$eNum\u00e9roD\u00e9but$bJourD\u00e9but$cMoisD\u00e9but$aAnn\u00e9eD\u00e9but$pS\u00e9rieFin$nvolumeFin$oNum\u00e9roFin$lJourFin$mMoisFin$kAnn\u00e9eFin$0 $aAnn\u00e9eD\u00e9but-$4Commentaires(Texte libre)$7Mention de lacune"
	);
}
function CAT_creerEtatDeCollectionCR()
{
	//Ce script permet de cr\u00e9er un \u00e9tat de collection ouvert - Format des centres r\u00e9gionaux
	application.activeWindow.title.insertText(
	"e01 $bxO" + "\n" + 
	"C01 ##$bRCR$aCote$jCode PEB" + "\n" + 
	"E01 41$fS\u00e9rieD\u00e9but$dVolumeD\u00e9but$eNum\u00e9roD\u00e9but$bJourD\u00e9but$cMoisD\u00e9but$aAnn\u00e9eD\u00e9but$pS\u00e9rieFin$nvolumeFin$oNum\u00e9roFin$lJourFin$mMoisFin$kAnn\u00e9eFin$0 $aAnn\u00e9eD\u00e9but-$4Commentaire (texte libre)$7Mention de lacune"
	);
}
function CAT_creerExemplaireRetro ()
{ // Ce script permet de cr\u00e9er un exemplaire avec la mention retro en 991, maj par MTE le 2013-08-29
application.activeWindow.codedData = false;
application.activeWindow.command("mod", false);
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText(
"e01 $bx" + "\n" + 
"ATTENTION EFFACEZ LES LIGNES INUTILES A L'EXEMPLAIRE CREE" + "\n" + 
"930 ##$aCote$jCode PEB" + "\n" + 
"991 ##$aRETRO-20XX-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE SAI$b[Informations n\u00e9cessaires \u00e0 la biblioth\u00e8que ou au prestataire]" + "\n" + 
"991 ##$aRETRO-20XX-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE DER$b[Informations n\u00e9cessaires \u00e0 la biblioth\u00e8que ou au prestataire]" + "\n" + 
"991 ##$aRETRO-20XX-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-LOC$b[Informations n\u00e9cessaires \u00e0 la biblioth\u00e8que ou au prestataire]" + "\n" +"\n" +
"991 ##$aCatalogage r\u00e9trospectif-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE SAI$b[Informations n\u00e9cessaires \u00e0 la biblioth\u00e8que ou au prestataire]" + "\n" +
"991 ##$aCatalogage r\u00e9trospectif-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE DER$b[Informations n\u00e9cessaires \u00e0 la biblioth\u00e8que ou au prestataire]" + "\n" +
"991 ##$aCatalogage r\u00e9trospectif-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-LOC$b[Informations n\u00e9cessaires \u00e0 la biblioth\u00e8que ou au prestataire]"
);
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR plus d'abr\u00e9vations
function CAT_creerMonoIMP ()
{ // Ce script permet de cr\u00e9er une notice de monographie imprim\u00e9e Aa
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aAax3" + "\n" + 
"010 ##$AISBN" + "\n" + 
"073 #0$aNum\u00e9ro EAN" + "\n" +
"181 ##$P01$ctxt ou tct"+ "\n" +
"182 ##$P01$cn" + "\n" + 
"183 ##$P01$anga" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment du Titre$f1re mention de responsabilit\u00e9$gMention de responsabilit\u00e9 de fonction diff\u00e9rente" + "\n" + 
"205 ##$aEdition" + "\n" + 
"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
"215 ##$aNombre de volumes (nombre de pages ou de feuillets)$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
"225  #$a@Titre de la Collection$xISSN$vNum\u00e9ro" + "\n" + 
"300 ##$aNote g\u00e9n\u00e9rale" + "\n" + 
"305 ##$aNote sur l'\u00e9dition" + "\n" + 
"320 ##$aNote sur les Bibliographies et Index" + "\n" + 
"410 ##$t@Lien au titre de la Collection$vNum\u00e9ro" + "\n" + 
"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
"700 #1$aNom Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$bPr\u00e9nom$4070" + "\n" + 
"701 #1$aNom Co-auteur$bPr\u00e9nom$4070" + "\n" + 
"702 #1$aNom Auteur relatif \u00e0 la manifestation ou \u00e0 l'item$bPr\u00e9nom$4Code de Fonction" + "\n" + 
"712 02$a@Nom Collectivit\u00e9 auteur relatif \u00e0 la manifestation ou \u00e0 l'item$4Code de Fonction");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR : plus d'abr\u00e9viations
function CAT_creerMultimedia ()
{ // Ce script permet de cr\u00e9er une notice de document multimedia Za
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aZax" + "\n" + 
"010 ##$AISBN" + "\n" + 
"073 #0$aNum\u00e9ro EAN" + "\n" + 
"181 ##$P01$cCode du type de contenu"  + "\n" + 
"182 ##$P01$cCode du type de m\u00e9diation"  + "\n" + 
"183 ##$P01$aCode du type de support mat\u00e9riel" + "\n" +
"181 ##$P02$cCode du type de contenu"  + "\n" + 
"182 ##$P02$cCode du type de m\u00e9diation"  + "\n" + 
"183 ##$P02$aCode du type de support mat\u00e9riel" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment du Titre$f1re mention de responsabilit\u00e9$gMention de responsabilit\u00e9 de fonction diff\u00e9rente" + "\n" + 
"205 ##$aEdition" + "\n" +  
"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" + 
"215 ##$aImportance mat\u00e9rielle$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION" + "\n" + 
"215 ##$aImportance mat\u00e9rielle$cMention d'illustration$dFormat$eMat\u00e9riel d'accompagnement(2\u00e8me support)..[NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" +
"225  #$a@Titre de la Collection$xISSN$vNum\u00e9ro" + "\n" + 
"300 ##$aNote g\u00e9n\u00e9rale" + "\n" + 
"305 ##$aNote sur l'\u00e9dition" + "\n" + 
"307 ##$aNote sur la collation" + "\n" + 
"320 ##$aNote sur les Bibliographies et Index" + "\n" + 
"336 ##$aNote sur le type de fichier informatique" + "\n" + 
"337 ##$aNote sur les d\u00e9tails techniques (fichiers informatiques)" + "\n" + 
"410 ##$t@Lien au titre de la Collection$vNum\u00e9ro" + "\n" + 
"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
"700 #1$aNom Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$bPr\u00e9nom$4070" + "\n" + 
"701 #1$aNom Co-auteur$bPr\u00e9nom$4070" + "\n" + 
"702 #1$aNom Auteur relatif \u00e0 la manifestation ou \u00e0 l'item$bPr\u00e9nom$4Code de Fonction");
application.activeWindow.codedData = true;
}

function CAT_creerNoticeRCR ()
{ // Ce script permet de cr\u00e9er une notice de RCR Tw
application.activeWindow.codedData = false;
application.activeWindow.command("cre e", false);
application.activeWindow.title.insertText(
"008 $aTw6" + "\n" + 
"R100 $aNom Tutelle$bSous division$cQualificatif g\u00e9ographique" + "\n" + 
"R110 $aOrganisme affiliation " + "\n" + 
"R120 $aNom complet d\u00e9velopp\u00e9 de l'\u00e9tablissement$bSous-division$cQualificatif g\u00e9ographique" + "\n" + 
"R121 $aIntitul\u00e9 du CADIST" + "\n" + 
"R122 $aAutre nom de l'\u00e9tablissement (sigle, abr\u00e9viations et autres)" + "\n" + 
"R130 $aCode du type d'\u00e9tablissement" + "\n" + 
"R140 $aNum\u00e9ro RCR" + "\n" + 
"R150 $aParticipation \u00e0 un r\u00e9seau documentaire autre que le Sudoc" + "\n" + 
"R160 $aNote sur l'identification de l'\u00e9tablissement" + "\n" + 
"R200 $0Nom de l'\u00e9tablissement$aAdresse Physique$bMention Compl\u00e9mentaire$cMention Compl\u00e9mentaire$dLieu-dit$eCode postal$fVille$gCedex" + "\n" + 
"R201 $0Nom de l'\u00e9tablissement$bAdresse Postale$cMention Compl\u00e9mentaire$cMention Compl\u00e9mentaire$dLieu-dit$eCode postal$fVille$gCedex" + "\n" + 
"R210 $aT\u00e9l\u00e9phone Renseignements$bT\u00e9l\u00e9phone Service de PRET" + "\n" + 
"R211 $aFax" + "\n" + 
"R220 $aAdresse Web de la biblioth\u00e8que$bAdresse Web du Catalogue en Ligne$dAdresse \u00e9lectronique du service de renseignements" + "\n" + 
"R230 $aAdresse \u00e9lectronique PIB(ccfr)$bAdresse \u00e9lectronique PEB(Sudoc)" + "\n" + 
"R240 $aAutre adresse \u00e9lectronique" + "\n" + 
"R250 $aPr\u00e9cision sur la localisation" + "\n" + 
"R300 $aAnn\u00e9e cr\u00e9ation de l'\u00e9tablissement:AAAA" + "\n" + 
"R305 $aNom pr\u00e9c\u00e9dent de l'\u00e9tablissement" + "\n" + 
"R310 $aHistorique" + "\n" + 
"R410 $aNom des Organismes associ\u00e9s$bNature des liens$cN°RCR$3N°PPN de la notice li\u00e9e$eCode CR Sudoc-PS$yN°ILN_XXX " + "\n" + 
"R440 $aNote sur les organismes associ\u00e9s" + "\n" + 
"R500 $aOuvertures" + "\n" + 
"R510 $aFermetures" + "\n" + 
"R520 $aConditions d'acc\u00e8s" + "\n" + 
"R530 $aNotes particuli\u00e8res sur l'acc\u00e8s" + "\n" + 
"R610 $aCode Dewey$bPoint d'acc\u00e8s autoris\u00e9 - nom commun Rameau" + "\n" + 
"R620 $aDescription de la collection" + "\n" + 
"R800 $aAcc\u00e8s \u00e0 des Bases de donn\u00e9es [Oui/Non]$bNom des BDD$cConditions d'utilisation" + "\n" + 
"R810 $aRenseignement Bibliographiques Par t\u00e9l\u00e9phone [Oui/Non]$bpar Courrier [Oui/Non]$cpar Fax [Oui/Non]$dpar Messagerie [Oui/Non]$eConditions" + "\n" + 
"R820 $aR\u00e9servation de documents [Oui/Non]$bTypes de doc.$cConditions" + "\n" + 
"R830 $aBibliographies [Oui/Non]$bConditions" + "\n" + 
"R840 $aPhotocopie [Oui/Non]$bMicrofilmage [Oui/Non]$cMicrofichage [Oui/Non]$dNum\u00e9risation [Oui/Non]$eAutres Services de reproduction$fPr\u00e9cisions$gConditions" + "\n" + 
"R850 $aPeb [Oui/Non]$bConditions" + "\n" + 
"R860 $aConsultation sur Place [Oui/Non]$bPr\u00eat \u00e0 Domicile [Oui/Non]$cConditions" + "\n" + 
"R870 $aPortage \u00e0 domicile [Oui/Non]$bConditions" + "\n" + 
"R880 $aAutres services$bConditions" + "\n" + 
"R890 $aNotes sur les services propos\u00e9s" + "\n" + 
"R901 $aParticipation \u00e0 un r\u00e9seau documentaire$bAutre r\u00e9seau" + "\n" + 
"R910 $aClassification utilis\u00e9e" + "\n" + 
"R920 $aNotes sur Catalogues sp\u00e9cifiques" + "\n" + 
"R930 $aDocumentation de l'\u00e9tablissement" + "\n" + 
"R940 $aPublications de l'\u00e9tablissement" + "\n" + 
"R950 $aSudoc" + "\n" + 
"R960 $aDocuments consultables sur l'\u00e9tablissement" + "\n" + 
"R970 $aSyst\u00e8me d'information" + "\n" + 
"R980 $aEquipement sp\u00e9ciaux (handicap\u00e9s)" + "\n" + 
"R999 $aInformations compl\u00e9mentaires (ex:Caf\u00e9teria)");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20252010 : modification RDA-FR : plus d'abr\u00e9viations
function CAT_creerPartition ()
{ // Ce script permet de cr\u00e9er une notice de partition Ma
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aMax3" + "\n" + 
"013 ##$aISMN" + "\n" + 
"071 31$aNum\u00e9ro d'\u00e9diteur" + "\n" + 
"181 ##$P01$cntm" + "\n" + 
"182 ##$P01$cn" + "\n" + 
"183 ##$P01$anga" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment du Titre$f1re mention de responsabilit\u00e9$gMention de responsabilit\u00e9 de fonction diff\u00e9rente" + "\n" + 
"205 ##$aEdition" + "\n" + 
"208 ##$aMention sp\u00e9cifique de musique imprim\u00e9e (Format)$dMention sp\u00e9cifique parall\u00e8le de musique imprim\u00e9e" + "\n" + 
"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
"215 ##$aImportance mat\u00e9rielle$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
"225  #$a@Titre de la Collection$xISSN$vNum\u00e9ro" + "\n" + 
"300 ##$aNote g\u00e9n\u00e9rale" + "\n" + 
"305 ##$aNote sur l'\u00e9dition" + "\n" + 
"320 ##$aNote sur les Bibliographies et Index" + "\n" + 
"410 ##$t@Lien au titre de la Collection$vNum\u00e9ro" + "\n" + 
"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$3027244601$2rameau" + "\n" +
"700 #1$aNom Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$bPr\u00e9nom$4230" + "\n" + 
"701 #1$aNom Co-auteur$bPr\u00e9nom$4230" + "\n" + 
"702 #1$aNom Auteur relatif \u00e0 la manifestation ou \u00e0 l'item$bPr\u00e9nom$4Code de Fonction");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR plus d'abr\u00e9vations
function CAT_creerPeriodique ()
{ // Ce script permet de cr\u00e9er une notice de p\u00e9riodique imprim\u00e9 Ab
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aAbx3" + "\n" + 
"181 ##$P01$ctxt"+ "\n" +"182 ##$P01$cn" + "\n" + 
"183 ##$P01$anga" + "\n" +
"200 1#$a@Titre propre$eCompl\u00e9ment du Titre$f1re mention de responsabilit\u00e9$gMention de responsabilit\u00e9 de fonction diff\u00e9rente" + "\n" + 
"207 #0$aNum\u00e9rotation : indication de date et de volume" + "\n" + 
"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" + 
"215 ##$aImportance mat\u00e9rielle$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
"326 ##$aP\u00e9riodicit\u00e9$bDates" + "\n" + 
"421 ##$t@Titre Suppl\u00e9ment" + "\n" + 
"422 ##$t@Titre Publication-m\u00e8re du suppl\u00e9ment" + "\n" + 
"430 ##$t@Titre Suite de" + "\n" + 
"440 ##$t@Titre Devient" + "\n" + 
"451 ##$t@Titre Autre \u00e9dition sur le m\u00eame support" + "\n" + 
"452 ##$t@Titre Autre \u00e9dition sur un autre support" + "\n" + 
"517 ##$a@Autres variantes du titre" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
"710 02$a@Nom Collectivit\u00e9 Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$4070" + "\n" + 
"711 02$a@Nom Collectivit\u00e9 co-Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$4070" + "\n" + 
"712 02$a@Nom Collecteur Auteur relatif \u00e0 la manifestation ou \u00e0 l'item$4Code de Fonction");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerPeriodElectr ()
{ // Ce script permet de cr\u00e9er une notice de p\u00e9riodique \u00e9lectronique Ob
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aObx" + "\n" + 
"106 $az" + "\n" + 
"181 ##$P01$ctxt"+ "\n" + "182 ##$P01$cc" + "\n" + 
"183 ##$P01$aceb" + "\n" +
"200 1#$a@Titre propre$eCompl\u00e9ment du Titre$f1re mention de responsabilit\u00e9$gMention de responsabilit\u00e9 de fonction diff\u00e9rente" + "\n" + 
"207 #0$aNum\u00e9rotation : indication de date et de volume" + "\n" + 
"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" + 
"230 ##$aDonn\u00e9es textuelles" + "\n" + 
"326 ##$aP\u00e9riodicit\u00e9$bDates" + "\n" + 
"336 ##$a" + "\n" + 
"337 ##$aUn logiciel capable de lire un fichier au format XXX" + "\n" + 
"421 ##$t@Titre Suppl\u00e9ment" + "\n" + 
"422 ##$t@Titre Publication-m\u00e8re du suppl\u00e9ment" + "\n" + 
"430 ##$t@Titre Suite de" + "\n" + 
"440 ##$t@Titre Devient" + "\n" + 
"451 ##$t@Titre Autre \u00e9dition sur le m\u00eame support" + "\n" + 
"452 ##$t@Titre Autre \u00e9dition sur un autre support" + "\n" + 
"517 ##$a@Autres variantes du titre" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
"710 02$a@Nom Collectivit\u00e9 Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$4070" + "\n" + 
"711 02$a@Nom Collectivit\u00e9 co-Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$4070" + "\n" + 
"712 02$a@Nom Collecteur Auteur relatif \u00e0 la manifestation ou \u00e0 l'item$4Code de Fonction" + "\n" + 
"856 4#$qFormat$uAdresse URL (si l'acc\u00e8s est r\u00e9serv\u00e9, cr\u00e9er une E856)");
application.activeWindow.codedData = true;
}


function CAT_creerPersonnephysique ()
{ // Ce script permet de cr\u00e9er une notice d'autorit\u00e9 personne physique Tp5
application.activeWindow.codedData = false;
application.activeWindow.command("cre e", false);
application.activeWindow.title.insertText(
"008 $aTp5" + "\n" + 
"106 ##$a0$b1$c0"+ "\n" + 
"200 # $90y$aNom de famille$bPr\u00e9nom$fann\u00e9es d'existence AAAA-AAAA" + "\n" + 
"340 ##$aNote biographique (informations \u00e0 justifier par des sources mentionn\u00e9es en zone 810)" + "\n" + 
"400 # $9#y$aNom de famille$bPr\u00e9nom = Renvoi(s) facultatif(s)" + "\n" + 
"810 ##$aOBLIGATOIRE R\u00e9f\u00e9rence du document pour lequel est cr\u00e9\u00e9e la pr\u00e9sente autorit\u00e9 Titre / Auteur, date" + "\n" + 
"810 ##$aDocument(s) de r\u00e9f\u00e9rence permettant d'\u00e9tablir les variantes \u00e9ventuelles du nom 200 + 400, les informations biographiques 340, etc.$bCiter ici les informations trouv\u00e9e dans la source Zone 810 r\u00e9p\u00e9table pour chaque source");
application.activeWindow.codedData = true;
}

function CAT_creerPropositionRameau ()
{ // Ce script permet de cr\u00e9er une proposition rameau Td3
application.activeWindow.codedData = false;
application.activeWindow.command("cre e", false);
application.activeWindow.title.insertText(
"008 $aTd3" + "\n" + 
"250 ##$8frefre$9#y$aNouveau Point d'acc\u00e8s autoris\u00e9 - nom commun Rameau propos\u00e9" + "\n" + 
"450 ##$8frefre$9#y$aVariante de point d'acc\u00e8s 1" + "\n" + 
"450 ##$8frefre$9#y$aVariante de point d'acc\u00e8s 2" + "\n" + 
"810 ##$aOBLIGATOIRE R\u00e9f\u00e9rence du document pour lequel est propos\u00e9 le nouveau Point d'acc\u00e8s Titre / Auteur, date" + "\n" + 
"810 ##$aDocument de r\u00e9f\u00e9rence permettant de justifier, d\u00e9finir, ... le concept propos\u00e9 en Point d'acc\u00e8s Titre / Auteur, date");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR plus d'abr\u00e9vations
function CAT_creerMusique ()
{ // Ce script permet de cr\u00e9er une notice de document sonore musical Ga
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aGax3" + "\n" + 
"013 ##$aISMN" + "\n" + 
"071 31$aNum\u00e9ro d'\u00e9diteur" + "\n" + 
"181 ##$P01$cprm" + "\n" + "182 ##$P01$cs" + "\n" + 
"183 ##$P01$aCode du type de support mat\u00e9riel" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment du Titre$fCompositeur principal$gAutres (compositeurs, interpr\u00e8tes, instrumentistes...)" + "\n" + 
"205 ##$aEdition" + "\n" + 
"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
"215 ##$aImportance mat\u00e9rielle$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
"225  #$a@Titre de la Collection$xISSN$vNum\u00e9ro" + "\n" + 
"300 ##$aNote g\u00e9n\u00e9rale" + "\n" + 
"306 ##$aNote sur l'adresse bibliographique" + "\n" + 
"322 ##$aNote sur le g\u00e9n\u00e9rique" + "\n" + 
"323 ##$aNote sur les interpr\u00e8tes" + "\n" + 
"359 2#$vTomaison / Num\u00e9rotation de l'unit\u00e9 physique$btable des mati\u00e8res de niveau 1$pNum\u00e9ro de page ou de plage$ctable des mati\u00e8res de niveau 2 [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
"410 ##$t@Lien au titre de la Collection$vNum\u00e9ro" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
"700 #1$aNom Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$bPr\u00e9nom$4230" + "\n" + 
"701 #1$aNom Co-auteur$bPr\u00e9nom$4230" + "\n" + 
"702 #1$aNom Auteur relatif \u00e0 la manifestation ou \u00e0 l'item$bPr\u00e9nom$4Code de Fonction" + "\n" + 
"716 ##$aMarque commerciale - mention de responsabilit\u00e9$4Code de fonction");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR : plus d'abr\u00e9viations
function CAT_creerSonore ()
{ // Ce script permet de cr\u00e9er une notice de document sonore non musical Na
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aNax3" + "\n" + 
"013 ##$aISMN" + "\n" + 
"071 31$aNum\u00e9ro d'\u00e9diteur" + "\n" + 
"181 ##$P01$csnd" + "\n" + 
"182 ##$P01$cs" + "\n" +
"183 ##$P01$aCode du type de support mat\u00e9riel" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment du Titre$fCompositeur principal$gAutres (compositeurs, interpr\u00e8tes, instrumentistes...)" + "\n" + 
"205 ##$aEdition" + "\n" + 
"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
"215 ##$aImportance mat\u00e9rielle$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
"225  #$a@Titre de la Collection$xISSN$vNum\u00e9ro" + "\n" + 
"300 ##$aNote g\u00e9n\u00e9rale" + "\n" + 
"306 ##$aNote sur l'adresse bibliographique" + "\n" + 
"322 ##$aNote sur le g\u00e9n\u00e9rique" + "\n" + 
"323 ##$aNote sur les interpr\u00e8tes" + "\n" + 
"359 2#$vTomaison / Num\u00e9rotation de l'unit\u00e9 physique$btable des mati\u00e8res de niveau 1$pNum\u00e9ro de page ou de plage$ctable des mati\u00e8res de niveau 2 [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
"410 ##$t@Lien au titre de la Collection$vNum\u00e9ro" + "\n" + 
"600 #1$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
"700 #1$aNom Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$bPr\u00e9nom$4230" + "\n" + 
"701 #1$aNom Co-auteur$bPr\u00e9nom$4230" + "\n" + 
"702 #1$aNom Auteur relatif \u00e0 la manifestation ou \u00e0 l'item$bPr\u00e9nom$4Code de Fonction" + "\n" + 
"716 ##$aMarque commerciale - mention de responsabilit\u00e9$4Code de fonction");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerTheseElectroniqueReproduction ()
{ // Ce script permet de cr\u00e9er une notice de th\u00e8se \u00e9lectronique Oa (Reproduction)
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aOax3" + "\n" + 
"101 0#$afre$dfre$deng" + "\n" + 
"102 ##$aFR" + "\n" + 
"104 ##$ak$by$cy$dba$e0$ffre" + "\n" + 
"105 ##$bv$ba$c0$d0$fy$gy" + "\n" + 
"135 ##$ad$br" + "\n" + 
"181 ##$P01$ctxt" + "\n" + "182 ##$P01$cc" + "\n" + 
"183 ##$P01$aceb" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment du titre$fAuteur$gsous la direction de Pr\u00e9nom Nom du directeur de th\u00e8se" + "\n" + 
"214 #2$aLieu de diffusion$bAdresse de diffusion$cNom du diffuseur$dDate de diffusion" + "\n" +
"230 ##$aDonn\u00e9es textuelles" + "\n" + 
"300 ##$aTh\u00e8se soutenue en co-tutelle --Th\u00e8se soutenue sur un ensemble de travaux (s'il y a lieu)" + "\n" + 
"303 ##$anombre de pages g\u00e9n\u00e9r\u00e9 par l'impression du document, lorsque ce document est pagin\u00e9" + "\n" + 
"304 ##$aTitre provenant de l'\u00e9cran-titre" + "\n" + 
"320 ##$aBibliographie : xxx r\u00e9f\u00e9rences" + "\n" + 
"328 #0$zReproduction de$bTh\u00e8se d'Etat--Th\u00e8se de doctorat--Th\u00e8se de 3e cycle--Th\u00e8se d'universit\u00e9--Th\u00e8se de docteur-ing\u00e9nieur--Th\u00e8se d'exercice$cDiscipline (libell\u00e9 complet)$eUniversit\u00e9 (voir table des libell\u00e9s du Guide M\u00e9thodologique)$dAnn\u00e9e de soutenance" + "\n" + 
"330 ##$aR\u00e9sum\u00e9 français" + "\n" + 
"330 ##$aR\u00e9sum\u00e9 anglais" + "\n" + 
"337 ##$aUn logiciel capable de lire un fichier au format (pr\u00e9ciser le format)" + "\n" + 
"455 ##$t@Lien vers la th\u00e8se originelle" + "\n" + 
"541 ##$a@Titre traduit en anglais$eCompl\u00e9ment du Titre$zeng" + "\n" + 
"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
"606 ##$aAcc\u00e8s sujet - nom commun$2rameau" + "\n" + 
"606 ##$aACCES SUJET - NOM COMMUN$3040839486$2fmesh" + "\n" + 
"608 ##$3027253139$2rameau" + "\n" +
"610 0#$aMots cl\u00e9s libres" + "\n" + 
"686 ##$a $2TEF" + "\n" + 
"700 #1$aNom Auteur$bPr\u00e9nom$4070" + "\n" + 
"701 #1$aNom Directeur de th\u00e8se$bPr\u00e9nom$4727" + "\n" + 
"711 02$a@Universit\u00e9 de soutenance$4295" + "\n" + 
"711 02$a@\u00e9tablissement de cotutelle, ou composante, ou organismes partenaires (\u00e0 d\u00e9finir - voir Guide M\u00e9thodologique)$4(code de fonction \u00e0 d\u00e9finir - voir Guide M\u00e9thodologique)" + "\n" + 
"856 4#$qFormat$uAdresse URL (si l'acc\u00e8s est r\u00e9serv\u00e9, cr\u00e9er une E856)");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR : plus d'abr\u00e9viations
function CAT_creerTheseImprimeOriginelle ()
{ // Ce script permet de cr\u00e9er une notice de th\u00e8se imprim\u00e9e Aa (Document originel)corrige le 2013-09-03 MTE selon Assistance 4174
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aAax3" + "\n" + 
"029 ##$aFR$bNum\u00e9ro national de th\u00e8se (aaaaCODEnnnn)" + "\n" + 
"101 0#$afre$dfre$deng" + "\n" + 
"102 ##$aFR" + "\n" + 
"104 ##$ak$by$cy$dba$e0$ffre" + "\n" + 
"105 ##$bm$ba$c0$d0$e1$fy$gy" + "\n" + 
"181 ##$P01$ctxt"+ "\n" +"182 ##$P01$cn" + "\n" + 
"183 ##$P01$anga" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment du titre$fAuteur$gsous la direction de Pr\u00e9nom Nom du directeur de th\u00e8se" + "\n" + 
"214 #1$dDate de production" + "\n" +
"215 ##$aNombre de volumes (nombre de pages ou de feuillets)$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
"300 ##$aTh\u00e8se soutenue en co-tutelle --Th\u00e8se soutenue sur un ensemble de travaux (s'il y a lieu)" + "\n" + 
"310 ##$aTh\u00e8se confidentielle jusqu'en (ann\u00e9e)(s'il y a lieu)" + "\n" + 
"320 ##$aBibliographie : xxx r\u00e9f\u00e9rences" + "\n" + 
"328 #0$bTh\u00e8se d'Etat--Th\u00e8se de doctorat--Th\u00e8se de 3e cycle--Th\u00e8se d'universit\u00e9--Th\u00e8se de docteur-ing\u00e9nieur--Th\u00e8se d'exercice$cDiscipline (libell\u00e9 complet)$eUniversit\u00e9 (voir table des libell\u00e9s du Guide M\u00e9thodologique)$dAnn\u00e9e de soutenance" + "\n" + 
"330 ##$aR\u00e9sum\u00e9 français" + "\n" + 
"330 ##$aR\u00e9sum\u00e9 anglais" + "\n" + 
"541 ##$a@Titre traduit en anglais$eCompl\u00e9ment du Titre$zeng" + "\n" + 
"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
"606 ##$aAcc\u00e8s sujet - nom commun$2rameau" + "\n" + 
"606 ##$aACCES SUJET - NOM COMMUN$3040839486$2fmesh" + "\n" + 
"608 ##$3027253139$2rameau" + "\n" +
"610 0#$aMots cl\u00e9s libres" + "\n" + 
"686 ##$a $2TEF" + "\n" + 
"700 #1$aNom Auteur$bPr\u00e9nom$4070" + "\n" + 
"701 #1$aNom Directeur de th\u00e8se$bPr\u00e9nom$4727" + "\n" + 
"711 02$a@Universit\u00e9 de soutenance$4295" + "\n" + 
"711 02$a@Composante (d\u00e9partement, laboratoire...)$4295");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA6FR : plus d'abr\u00e9viations
function CAT_creerTheseImprimeReproduction ()
{ // Ce script permet de cr\u00e9er une notice de th\u00e8se imprim\u00e9e Aa (Reproduction)
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aAax3" + "\n" + 
"029 ##$aFR$bNum\u00e9ro national de th\u00e8se (aaaaCODEnnnn)" + "\n" + 
"100 0#$aAnn\u00e9e de soutenance" + "\n" + 
"102 ##$aFR" + "\n" + 
"104 ##$ak$by$cy$dba$e0$ffre" + "\n" + 
"105 ##$bv$ba$c0$d0$e1$fy$gy" + "\n" + 
"181 ##$P01$ctxt"+ "\n" +"182 ##$P01$cn" + "\n" + 
"183 ##$P01$anga" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment du titre$fAuteur$gsous la direction de Pr\u00e9nom Nom du directeur de th\u00e8se" + "\n" + 
"214 #2$aLieu de diffusion$bAdresse du diffuseur$cNom diffuseur$dAnn\u00e9e de diffusion" + "\n" +
"215 ##$aNombre de volumes (nombre de pages ou de feuillets)$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" +
"300 ##$aTh\u00e8se soutenue en co-tutelle --Th\u00e8se soutenue sur un ensemble de travaux (s'il y a lieu)" + "\n" + 
"320 ##$aBibliographie pages xxx-xxx. Index" + "\n" + 
"328 #0$zReproduction de$bTh\u00e8se d'Etat--Th\u00e8se de doctorat--Th\u00e8se de 3e cycle--Th\u00e8se d'universit\u00e9--Th\u00e8se de docteur-ing\u00e9nieur--Th\u00e8se d'exercice$cDiscipline (libell\u00e9 complet)$eUniversit\u00e9 (voir table des libell\u00e9s du Guide M\u00e9thodologique)$dAnn\u00e9e de soutenance" + "\n" + 
"330 ##$aR\u00e9sum\u00e9 français" + "\n" + 
"330 ##$aR\u00e9sum\u00e9 anglais" + "\n" + 
"455 ##$t@Lien vers la th\u00e8se originelle" + "\n" + 
"541 ##$a@Titre traduit en anglais$eCompl\u00e9ment du Titre$zeng" + "\n" + 
"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
"606 ##$aAcc\u00e8s sujet - nom commun$2rameau" + "\n" + 
"606 ##$aAcc\u00e8s sujet - nom commun$3040839486$2fmesh" + "\n" + 
"608 ##$3027253139$2rameau" + "\n" +
"610 0#$aMots cl\u00e9s libres" + "\n" + 
"686 ##$a $2TEF" + "\n" + 
"700 #1$aNom Auteur$bPr\u00e9nom$4070" + "\n" + 
"701 #1$aNom Directeur de th\u00e8se$bPr\u00e9nom$4727" + "\n" + 
"711 02$a@Universit\u00e9 de soutenance$4295" + "\n" + 
"711 02$a@Composante (d\u00e9partement, laboratoire...)$4295");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR : plus d'abr\u00e9viations
function CAT_creerTheseImprimeEditionCommerciale ()
{ // Ce script permet de cr\u00e9er une notice de th\u00e8se imprim\u00e9e Aa (Edition commerciale)
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aAax3" + "\n" + 
"010 ##$AISBN" + "\n" + 
"101 0#$afre$dfre" + "\n" + 
"102 ##$aFR" + "\n" + 
"104 ##$ak$by$cy$dba$e0$ffre" + "\n" + 
"105 ##$bv$c0$d0$e1$fy$gy" + "\n" + 
"181 ##$P01$ctxt"+ "\n" +"182 ##$P01$cn" + "\n" + 
"183 ##$P01$anga" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment du titre$fAuteur" + "\n" + 
"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" + 
"215 ##$aNombre de volumes (nombre de pages ou de feuillets)$cMention d'illustration$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" +
"320 ##$aBibliographie pages xxx-xxx. Index" + "\n" + 
"328 #0$zTexte remani\u00e9 de$bTh\u00e8se d'Etat--Th\u00e8se de doctorat--Th\u00e8se de 3e cycle--Th\u00e8se d'universit\u00e9--Th\u00e8se de docteur-ing\u00e9nieur--Th\u00e8se d'exercice$cDiscipline (libell\u00e9 complet)$eUniversit\u00e9 (voir table des libell\u00e9s du Guide M\u00e9thodologique)$dAnn\u00e9e de soutenance" + "\n" + 
"451 ##$t@Lien vers la th\u00e8se originelle sur le m\u00eame support" + "\n" + 
"452 ##$t@Lien vers la th\u00e8se originelle sur un support diff\u00e9rent" + "\n" + 
"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
"606 ##$aAcc\u00e8s sujet - nom commun$2rameau" + "\n" + 
"606 ##$aAcc\u00e8s sujet - nom commun$2fmesh" + "\n" + 
"610 0#$aMots cl\u00e9s libres" + "\n" + 
"700 #1$aNom Auteur$bPr\u00e9nom$4070");
application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR : plus d'abr\u00e9viations
function CAT_creerAudiovisuel ()
{ // Ce script permet de cr\u00e9er une notice de document audiovisuel Ba, choisir 181
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aBax3" + "\n" + 
"071 41$aNum\u00e9ro d'\u00e9diteur commercial" + "\n" + 
"073 #0$aCode-\u00e0-barres commercial" + "\n" + 
"181 ##$P01$ctdi ou tdm"+ "\n" + 
"182 ##$P01$cv" + "\n" + 
"183 ##$P01$avcc" + "\n" +
"200 1#$a@Titre$eCompl\u00e9ment de Titre$f1re mention de responsabilit\u00e9$gMention de responsabilit\u00e9 de fonction diff\u00e9rente" + "\n" + 
"205 ##$aEdition" + "\n" + 
"214 #0$aLieu de publication$bAdresse de l'\u00e9diteur$cNom de l'\u00e9diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
"215 ##$aImportance mat\u00e9rielle$cMention d'illustrations$dDimensions$eMat\u00e9riel d'accompagnement [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" + 
"225  #$a@Titre de la Collection$xISSN$vNum\u00e9ro" + "\n" + 
"300 ##$aNote sur les versions linguistiques (ex: Sous-titres pour les sourds et les malentendants...)" + "\n" + 
"305 ##$aNote sur l'historique de l'oeuvre (ex: Enregistrement public au th\u00e9âtre...)" + "\n" + 
"306 ##$aNote sur l'adresse bibliographique (ex: Copyright)" + "\n" + 
"307 ##$aFormat de l'image" + "\n" + 
"312 ##$aNote sur les titres associ\u00e9es (ex: D'apr\u00e8s le roman...)" + "\n" + 
"320 ##$aNote sur les documents annexes (ex: Filmographie, galeries photo, etc.)" + "\n" + 
"322 ##$aNote sur le g\u00e9n\u00e9rique" + "\n" + 
"323 ##$aNote sur les interpr\u00e8tes" + "\n" + 
"327  #$aNote de contenu" + "\n" + 
"334 ##$aNote sur les r\u00e9compenses" + "\n" + 
"517 ##$aTitres associ\u00e9es" + "\n" + 
"410 ##$t@Lien au titre de la Collection$vNum\u00e9ro" + "\n" + 
"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" + 
"700 #1$aNom du R\u00e9alisateur$bPr\u00e9nom du R\u00e9alisateur$4300" + "\n" + 
"701 #1$aNom Co-auteur$bPr\u00e9nom$4Code de Fonction" + "\n" + 
"702 #1$aNom Auteur relatif \u00e0 la manifestation ou \u00e0 l'item$bPr\u00e9nom$4Code de Fonction" + "\n" + 
"712 02$aNom Collectivit\u00e9 auteur relatif \u00e0 la manifestation ou \u00e0 l'item$4Code de Fonction");
application.activeWindow.codedData = true;
}


// 20180103 : Cr\u00e9ation
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR : plus d'abr\u00e9viations
function CAT_creerEchantillonAccompagne ()
{ //Ce script permet de cr\u00e9er une notice d'\u00e9chantillon avec mat\u00e9riel d'accompagnement
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aVax3" + "\n" + 
"100 0#$a20XX" + "\n" +  
"101 0#$afre" + "\n" + 
"102 ##$aFR" + "\n" + 
"117 ##$abe$bVOIR LES CODES SUR LE GM$cVOIR LES CODES SUR LE GM" + "\n" + 
"181 ##$P01$ctdf" + "\n" + 
"182 ##$P01$cn" + "\n" + 
"183 ##$P01$anez" + "\n" + 
"200 1#$a@Nom de l'\u00e9chantillon$e[\u00e9chantillon]$fProducteur de l'\u00e9chantillon" + "\n" + 
"214 #1$aLieu de production$d[20XX]" + "\n" + 
"215 ##$a1 \u00e9chantillon$cComposant de l'\u00e9chantillon$dDimensions de l'\u00e9chantillon (XX x XX x XX cm)- voir exemples sur GM $eLivret technique (xx pages, xx cm) [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" +  
"300 ##$aDescription de l'\u00e9chantillon et du livret technique si besoin" + "\n" + 
"345 ##$uSite web source de l'acquisition (FACULTATIF)" + "\n" + 
"463 ##$t@Titre du livret technique d'accompagnement" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$3027793079$2rameau" + "\n" +
"710 02$a@Collectivit\u00e9 productrice de l'\u00e9chantillon$4070" + "\n" + 
"830 ##$aV\u00e9rifier imp\u00e9rativement les donn\u00e9es cod\u00e9es en 101, 102, modifier les valeurs donn\u00e9es par d\u00e9faut, si besoin. Compl\u00e9ter la zone 117 en attribuant les codes pertinents par rapport \u00e0 l'objet (voir la liste des codes sur le GM). Supprimer la L606 si aucune indexation utilisant un th\u00e9saurus local n'est envisag\u00e9e. Supprimer cette zone 830 avant de valider la notice." + "\n" + 
"L606 ##$aSujet$xEchantillons$2Nom du th\u00e9saurus local utilis\u00e9");
application.activeWindow.codedData = true;
}

// 20180103 : Cr\u00e9ation
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR : plus d'abr\u00e9viations
function CAT_creerObjet ()
{ //Ce script permet de cr\u00e9er une notice d'objet
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aVax3" + "\n" + 
"100 0#$a20XX" + "\n" +  
"101 0#$afre" + "\n" + 
"117 ##$aVOIR LES CODES SUR LE GM $bVOIR LES CODES SUR LE GM$cVOIR LES CODES SUR LE GM" + "\n" + 
"181 ##$P01$ctdf" + "\n" + 
"182 ##$P01$cn" + "\n" + 
"183 ##$P01$anez" + "\n" + 
"200 1#$a@Nom de l'objet$fProducteur de l'objet" + "\n" + 
"214 #1$aLieu de production$d[20XX]" + "\n" + 
"215 ##$a1 objet$cComposants de l'objet$dDimensions de l'objet (XX x XX x XX cm) - voir exemples sur le GM [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" +  
"300 ##$aDescription de l'objet et de son usage" + "\n" + 
"345 ##$uSite web source de l'acquisition (FACULTATIF)" + "\n" + 
"606 ##$aSujet$xSubdivision de sujet$yG\u00e9ographique$zChronologique$2rameau" + "\n" + 
"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
"710 02$a@Collectivit\u00e9 productrice de l'objet$4070" + "\n" + 
"830 ##$aV\u00e9rifier imp\u00e9rativement les donn\u00e9es cod\u00e9es en 101, 102, modifier les valeurs donn\u00e9es par d\u00e9faut, si besoin. Compl\u00e9ter la zone 117 en attribuant les codes pertinents par rapport \u00e0 l'objet (voir la liste des codes sur le GM). Supprimer la L606 si aucune indexation utilisant un th\u00e9saurus local n'est envisag\u00e9e. Supprimer cette zone 830 avant de valider la notice." + "\n" + 
"L606 ##$aSujet$2Nom du th\u00e9saurus local utilis\u00e9"
);
application.activeWindow.codedData = true;
}

// 20180531 : Cr\u00e9ation
// 20200101 : modification TB 2020
// 20251020 : modification RDA-FR : plus d'abr\u00e9viations
function CAT_creerArticleImp ()
{ //Ce script permet de cr\u00e9er une notice d'article Archive
application.activeWindow.codedData = false;
application.activeWindow.command("cre", false);
application.activeWindow.title.insertText(
"008 $aAsx3" + "\n" + 
"100 0#$a20XX" + "\n" +  
"101 0#$afre" + "\n" + 
"104 ##$ak$by$cy$dba$e0$ffre" + "\n" + 
"105 ##$c0$d0$fy$gy" + "\n" + 
"200 1#$a@Titre de l'article$ecompl\u00e9ment de titre$f1e mention de responsabilit\u00e9$g2e mention de responsabilit\u00e9" + "\n" + 
"209 ##$btome ou volume$cann\u00e9e$dnum\u00e9ro ou fascicule$hx-x (ne pas indiquer p.)" + "\n" + 
"215 ##$a[nombre de pages]$cmention d'illustration [NE PAS UTILISER D'ABREVIATIONS, SAUF POUR LES SYMBOLES METRIQUES, LES DUREES OU LES TERMES DEJA ABREGES SUR LA PUBLICATION]" + "\n" +  
"305 ##$aIn : Titre-cl\u00e9 de la revue dont l'article est extrait, ISSN. - Volume, tomaison, num\u00e9ro de fascicule" + "\n" + 
"320 ##$aBibliographie ou index" + "\n" + 
"L606 ##$aSujet$2Nom du th\u00e9saurus local utilis\u00e9" + "\n" + 
"606 ##$aSujet$2rameau" + "\n" + 
"463 ##$t@Titre de la revue$vnum\u00e9ro/ann\u00e9e de la revue" + "\n" + 
"700 #1$aNom Auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$bPr\u00e9nom$4code de fonction" + "\n" + 
"701 #1$aCo-auteur relatif \u00e0 l'oeuvre ou \u00e0 l'expression$bPr\u00e9nom$4code de fonction" + "\n" +
"830 #$aSupprimer la L606 si aucune indexation utilisant un th\u00e9saurus local n'est envisag\u00e9e. Supprimer cette zone 830 avant de valider la notice."
);
application.activeWindow.codedData = true;
}

// 20200101 : Cr\u00e9ation
function CAT_creerPropositionFormeGenre ()
{ // Ce script permet de cr\u00e9er une proposition rameau Forme/Genre Tf3
application.activeWindow.codedData = false;
application.activeWindow.command("cre e", false);
application.activeWindow.title.insertText(
"008 $aTf3" + "\n" + 
"280 ##$8frefre$9#y$aNouveau Point d'acc\u00e8s autoris\u00e9 \u2013 Forme ou Genre Rameau propos\u00e9" + "\n" + 
"480 ##$8frefre$9#y$aVariante de point d'acc\u00e8s 1" + "\n" + 
"480 ##$8frefre$9#y$aVariante de point d'acc\u00e8s 2" + "\n" + 
"810 ##$aOBLIGATOIRE R\u00e9f\u00e9rence du document pour lequel est propos\u00e9 le nouveau Point d'acc\u00e8s Titre / Auteur, date" + "\n" + 
"810 ##$aDocument de r\u00e9f\u00e9rence permettant de justifier, d\u00e9finir, ... le concept propos\u00e9 en Point d'acc\u00e8s Titre / Auteur, date"
);
application.activeWindow.codedData = true;
}

