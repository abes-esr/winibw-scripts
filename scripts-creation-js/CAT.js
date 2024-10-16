// mis � jour le 2014-09-04 par MTE : ajout de tous les $b du 200 maintenant qu'ils sont contr�l�s
// mis � jour le 2014-10-07 par MTE : remplacement des 200$b par 181 et si possible 182
// mis � jour le 2015-03-19 par IAN : mise � jour de la date dans le script CAT_creerExemplaireRetro, pass�e de 2014 � 2015
// mis � jour le 2015-04-24 par IAN : mise � jour de la date dans le script CAT_creer-ThesesImpEditionCommerciale, mentions subdivision de forme Th�ses et �crits acad�miques ($3 ppn) enlev�es des zones 606
// mis � jour le 2015-12-07 par SRY : CAT_creerTheseImprimeReproduction : supprimer 451 et 452
//                                   CAT_creerTheseImprimeEditionCommerciale : supprimer $3027253139 en zone 6XX remplacer 451, 452 et supprimer 455 et 456
//									 CAT_creerTheseElectroniqueReproduction : supprimer 451, 452 et 456
//									 CAT_creerPeriodique, CAT_creerCollection, CAT_creerPeriodElectr : supprimer 301
//									 CAT_creerExemplaireRetro : remplacement de la date 2015 par 2016
//									 CAT_creerTheseImprimeOriginelle: modification mentions zone 210
// mis � jour le 2016-02-08 par SRY : CAT_creerElectronique, CAT_creerPeriodElectr : 230,337,339
// mis � jour le 2016-02-22 par SRY : CAT_creerCollection : ajout zone 301
// mis � jour le 2016-11-14 par SRY :
// 				CAT_creerTheseElectroniqueReproduction : modification zone 702
//				CAT_creerCollectivite : ajout de la zone 150 $a et $b
//				CAT_creerElectronique : ajout zone 336 $a
// mis � jour le 2017-03-16 par SRY :
// 				Nouvelles consignes RDA FR 2017 (zones 183, 210, 219, 215
// mis � jour le 2018-01-03 par SRY : cr�ation de 2 scripts :
// 				CAT_creerEchantillonAccompagne et CAT_creerObjet
// mis � jour le 2018-05-31 par SRY : cr�ation de script :
// 				CAT_creerArticleImp
//				modification du vocabulaire (vedette mati�re transform� en point d'acc�s)
// mis � jour le 2020-01-01 par SRY : modification pour �volutions Unimarc
//				* cr�ation de script : CAT_creerPropositionFormeGenre - Ce script permet de cr�er une proposition rameau Forme/Genre Tf3
//				* Modificication des scripts suivants comme suit :
//				* remplacer 219 par 214 - suppression $x 600, 606 et 607 - ajout 608$a et $2 - modification libell� 700, 702, 710, 711 et 712
//				CAT_creerMonoIMP, CAT_creerElectronique, CAT_creerAudiovisuel, CAT_creerMultimedia, CAT_creerAtlas, CAT_creerPartition, CAT_creerMusique, CAT_creerSonore, CAT_creerEchantillonAccompagne, CAT_creerObjet, CAT_creerPeriodique, CAT_creerPeriodElectr, CAT_creerCollection, CAT_creerTheseImprimeOriginelle, CAT_creerTheseElectroniqueReproduction, CAT_creerTheseImprimeReproduction, CAT_creerTheseImprimeEditionCommerciale, CAT_creerArticleImp
// mis � jour le 2022-04-13 par LJ : cr�ation de deux scripts de cr�ation de m�moire nativement num�rique
//				CAT_creerMemoireElec et CAT_creerMemoireImpr
// mis � jour le 2022-05-25 par MRX :
//		cr�ation de six scripts
//				CAT_creerHDRElecVO : cr�ation HDR nativement �lectronique
//				CAT_creerHDRImprVO : cr�ation HDR nativement imprim�e
//				CAT_creerHDRElecReproduction : cr�ation reproduction �lectronique de HDR
//				CAT_creerHDRImprReproduction : cr�ation reproduction imprim�e de HDR
//				CAT_creerMemoireElecReproduction : cr�ation reproduction �lectronique de m�moire
//				CAT_creerMemoireImprReproduction : cr�ation reproduction imprim�e de m�moire
//		mise � jour de 5 scripts :
//				CAT_creerTheseImprimeOriginelle
//				CAT_creerTheseImprimeReproduction
//				CAT_creerTheseEclectroniqueReproduction
//				CAT_creerMemoireElec
//				CAT_creerMemoireImpr
// mis � jour le 2022-06-03 par MRX :
//		cr�ation de 3 scripts
//				CAT_creerTheseElecAutreVersionAuteur : cr�ation version remani�e d'une th�se
//				CAT_creerTheseImprNonDeposee : cr�ation th�se non d�pos�e
//				CAT_creerTheseImprPerdue : cr�ation th�se perdue
// mise � jour le 2022-06-22 par MRX :
//				CAT_creerTheseEclectroniqueReproduction
//				CAT_creerHDRElecVO : cr�ation HDR nativement �lectronique
//				CAT_creerHDRElecReproduction : cr�ation reproduction �lectronique de HDR
//				CAT_creerMemoireElec
//				CAT_creerMemoireElecReproduction : cr�ation reproduction �lectronique de m�moire
//				CAT_creerTheseRemanieeAuteur : cr�ation version remani�e d'une th�se


function CAT_ajout301()
{
	// permet d'ajouter une zone 301 ISSN
	// tous ces scripts ont ete mis a jour le 20110617 par MTE
	// selon les suggestions des formateurs relais
	application.activeWindow.title.insertText ("301 ##$aDemande de num�rotation ISSN en cours");
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
	// permet d'ajouter un dollar 4730 �diteur
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
	// application.messageBox("Script inconnu ", "Ce script a �t� d�sactiv� le 01/01/2020", "alert-icon");
}
function CAT_ajoutRessourcElec()
{
	// permet d'ajouter 181 Ressource �lectronique
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
	// permet d'ajouter 181Images anim�ees et 182 ?
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
	// permet d'ajouter 181 Musique imprim�e
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
	// Ex�cute la commande comparant les notices li�es par une zone 024
	application.activeWindow.command("ded unm", false);
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerAtlas()
{
	//Ce script permet de cr�er une notice d'atlas ou de carte Ka
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aKax3" + "\n" +
		"010 ##$AISBN$dPrix" + "\n" +
		"073 #0$aNum�ro EAN" + "\n" +
		"181 ##$P01$ctxt" + "\n" + "182 ##$P01$cn" + "\n" +
		"181 ##$P02$ccri" + "\n" + "182 ##$P02$cn"+ "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 01#$a@Titre$eCompl�ment de Titre$f1re mention de responsabilit�$gMention de responsabilit� de fonction diff�rente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"206 ##$aEchelle" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance mat�rielle$cMention d'ill.$dDimensions$eMat�riel d'accompagnement" + "\n" +
		"304 ##$aNote sur le titre" + "\n" +
		"305 ##$aNote sur l'�dition" + "\n" +
		"315 ##$aEchelle de Cartes" + "\n" +
		"510 ##$a@Titre parall�le" + "\n" +
		"517 ##$a@Variante du Titre" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"607 ##$aG�ographique$2rameau" + "\n" +
		"608 ##$3027497259$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif � l'oeuvre ou � l'expression$bPr�nom$4180"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerCollection()
{
	//Ce script permet de cr�er une notice de collection imprim�e Ad
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAdx3" + "\n" +
		"106 $aCaract�ristiques physiques" + "\n" +
		"110 $aType de publication en s�rie$bP�riodicit�$cR�gularit�" + "\n" +
		"200 1#$a@Titre propre$eCompl�ment du Titre$f1re mention de responsabilit�$gMention de responsabilit� de fonction diff�rente" + "\n" +
		"181 ##$P01$ctxt" + "\n" +"182 ##$P01$cn"+ "\n" +
		"183 ##$P01$anga" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"301 ##$aX volumes dans le Sudoc au AAAA-MM-JJ : pas de demande de num�rotation ISSN" + "\n" +
		"326 ##$aCollection" + "\n" +
		"510 ##$a@Titre parall�le" + "\n" +
		"512 ##$a@Titre de couverture" + "\n" +
		"517 ##$a@Autres variantes du titre" + "\n" +
		"606 ##$aSujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"701 #1$aNom co-Auteur relatif � l'oeuvre ou � l'expression$4651"+ "\n" +
		"710 02$a@Nom Collectivit� Auteur relatif � l'oeuvre ou � l'expression$4651" + "\n" +
		"711 02$a@Nom Collectivit� co-Auteur relatif � l'oeuvre ou � l'expression$4651" + "\n" +
		"712 02$a@Nom Collecteur Auteur relatif � la manifestation ou � l'item$4Code de Fonction"
	);
	application.activeWindow.codedData = true;
}
function CAT_creerCollectivite()
{
	//Ce script permet de cr�er une notice d'autorit� collectivit� Tb5
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTb5" + "\n" +
		"106 ##$a0$b1$c0" + "\n" +
		"150 ##$aType de collectivit� officielle (11 codes possibles, voir le GM)$bCode de congr�s ou de conf�rence (valeur 0 ou 1)" + "\n" +
		"210   $90y$a@Nom de la collectivit�$bnom de la collectivit� subordonn�e facultative$clocalisation facultative" + "\n" +
		"340 ##$aNote biographique (informations � justifier par des sources mentionn�es en zone 810)" + "\n" +
		"410   $9#y$a@Nom de la collectivit�$bnom de la collectivit� subordonn�e facultative$clocalisation facultative" + "\n" +
		"810 ##$aOBLIGATOIRE R�f�rence du document pour lequel est cr��e la pr�sente autorit� Titre / Auteur, date" + "\n" +
		"810 ##$aDocument(s) de r�f�rence permettant d'�tablir les variantes �ventuelles du nom 210 + 410, les informations biographiques 340, etc.$bCiter ici les informations trouv�e dans la source Zone 810 r�p�table pour chaque source"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerElectronique()
{
	//Ce script permet de cr�er une notice de monographie �lectronique Oa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"010 ##$AISBN" + "\n" +
		"017 70$aDOI$2DOI" + "\n" +
		"181 ##$P01$c..."+ "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eCompl�ment du Titre$f1re mention de responsabilit�$gMention de responsabilit� de fonction diff�rente" + "\n" +
		"214 #2$a $c $d" + "\n" +
		"225  #$a@Titre de la Collection �lectronique$xISSN$vNum�ro" + "\n" +
		"305 ##$aNote " + "\n" +
		"320 ##$aNote sur bibliographies et index" + "\n" +
		"336 ##$aNote sur le type de ressource �lectronique" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format XXX" + "\n" +
		"339 ##$aFormat de la ressource$ddate de publication" + "\n" +
		"371 .#$a" + "\n" +
		"410 ##$t@Lien au titre de la Collection �lectronique$vNum�ro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"607 ##$aNom g�ographique$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif � l'oeuvre ou � l'expression$bPr�nom$4070"  + "\n" +
		"712 02$a@Nom Collectivit� auteur relatif � la manifestation ou � l'item$4Code de Fonction"  + "\n" +
		"856 4#$qFormat du fichier$uURL"
	);
	application.activeWindow.codedData = true;
}
function CAT_creerEtatDeCollection()
{
	//JVK 20221011 - D�boggage les fonctions de cr�ation doivent contenir la commande cree avant l'insertion des zones
	//application.activeWindow.codedData = false;
	//application.activeWindow.command("cre", false);
	//Ce script permet de cr�er un �tat de collection ouvert
	application.activeWindow.title.insertText(
		"e01 $bxO" + "\n" +
		"930 ##$aCote$jCode PEB" + "\n" +
		"955 41$fS�rieD�but$dVolumeD�but$eNum�roD�but$bJourD�but$cMoisD�but$aAnn�eD�but$pS�rieFin$nvolumeFin$oNum�roFin$lJourFin$mMoisFin$kAnn�eFin$0 $aAnn�eD�but-$4Commentaires(Texte libre)$7Mention de lacune"
	);
}
function CAT_creerEtatDeCollectionCR()
{
	//JVK 20221011 - D�boggage les fonctions de cr�ation doivent contenir la commande cree avant l'insertion des zones
	//application.activeWindow.codedData = false;
	//application.activeWindow.command("cre", false);
	//Ce script permet de cr�er un �tat de collection ouvert - Format des centres r�gionaux
	application.activeWindow.title.insertText(
		"e01 $bxO" + "\n" +
		"C01 ##$bRCR$aCote$jCode PEB" + "\n" +
		"E01 41$fS�rieD�but$dVolumeD�but$eNum�roD�but$bJourD�but$cMoisD�but$aAnn�eD�but$pS�rieFin$nvolumeFin$oNum�roFin$lJourFin$mMoisFin$kAnn�eFin$0 $aAnn�eD�but-$4Commentaire (texte libre)$7Mention de lacune"
	);
}
function CAT_creerExemplaireRetro ()
{ // Ce script permet de cr�er un exemplaire avec la mention retro en 991, maj par MTE le 2013-08-29
	//application.activeWindow.codedData = false;
	//JVK 20221011 - Correction des commandes wini pour creation
	//application.activeWindow.command("cre", false);
	//application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText(
		"e01 $bx" + "\n" +
		"ATTENTION EFFACEZ LES LIGNES INUTILES A L'EXEMPLAIRE CREE" + "\n" +
		"930 ##$aCote$jCode PEB" + "\n" +
		"991 ##$aRETRO-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE SAI$b[Informations n�cessaires � la biblioth�que ou au prestataire]" + "\n" +
		"991 ##$aRETRO-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE DER$b[Informations n�cessaires � la biblioth�que ou au prestataire]" + "\n" +
		"991 ##$aRETRO-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-LOC$b[Informations n�cessaires � la biblioth�que ou au prestataire]" + "\n" +"\n" +
		"991 ##$aCatalogage r�trospectif-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE SAI$b[Informations n�cessaires � la biblioth�que ou au prestataire]" + "\n" +
		"991 ##$aCatalogage r�trospectif-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE DER$b[Informations n�cessaires � la biblioth�que ou au prestataire]" + "\n" +
		"991 ##$aCatalogage r�trospectif-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-LOC$b[Informations n�cessaires � la biblioth�que ou au prestataire]"
	);
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerMonoIMP ()
{ // Ce script permet de cr�er une notice de monographie imprim�e Aa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"010 ##$AISBN" + "\n" +
		"073 #0$aNum�ro EAN" + "\n" +
		"181 ##$P01$ctxt ou tct"+ "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du Titre$f1re mention de responsabilit�$gMention de responsabilit� de fonction diff�rente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aNombre de vol. (nbr. de p. ou f.)$cMention d'ill.$dDimensions$eMat�riel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNum�ro" + "\n" +
		"300 ##$aNote g�n�rale" + "\n" +
		"305 ##$aNote sur l'�dition" + "\n" +
		"320 ##$aNote sur les Bibliographies et Index" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNum�ro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif � l'oeuvre ou � l'expression$bPr�nom$4070" + "\n" +
		"701 #1$aNom Co-auteur$bPr�nom$4070" + "\n" +
		"702 #1$aNom Auteur relatif � la manifestation ou � l'item$bPr�nom$4Code de Fonction" + "\n" +
		"712 02$a@Nom Collectivit� auteur relatif � la manifestation ou � l'item$4Code de Fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerMultimedia ()
{ // Ce script permet de cr�er une notice de document multimedia Za
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aZax" + "\n" +
		"010 ##$AISBN" + "\n" +
		"073 #0$aNum�ro EAN" + "\n" +
		"181 ##$P01$cCode du type de contenu"  + "\n" +
		"182 ##$P01$cCode du type de m�diation"  + "\n" +
		"183 ##$P01$aCode du type de support mat�riel" + "\n" +
		"181 ##$P02$cCode du type de contenu"  + "\n" +
		"182 ##$P02$cCode du type de m�diation"  + "\n" +
		"183 ##$P02$aCode du type de support mat�riel" + "\n" +
		"200 1#$a@Titre$eCompl�ment du Titre$f1re mention de responsabilit�$gMention de responsabilit� de fonction diff�rente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance mat�rielle$cMention d'ill.$dDimensions$eMat�riel d'accompagnement" + "\n" +
		"215 ##$aImportance mat�rielle$cMention d'ill.$dFormat$eMat�riel d'accompagnement(2�me support).." + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNum�ro" + "\n" +
		"300 ##$aNote g�n�rale" + "\n" +
		"305 ##$aNote sur l'�dition" + "\n" +
		"307 ##$aNote sur la collation" + "\n" +
		"320 ##$aNote sur les Bibliographies et Index" + "\n" +
		"336 ##$aNote sur le type de fichier informatique" + "\n" +
		"337 ##$aNote sur les d�tails techniques (fichiers informatiques)" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNum�ro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif � l'oeuvre ou � l'expression$bPr�nom$4070" + "\n" +
		"701 #1$aNom Co-auteur$bPr�nom$4070" + "\n" +
		"702 #1$aNom Auteur relatif � la manifestation ou � l'item$bPr�nom$4Code de Fonction");
	application.activeWindow.codedData = true;
}

function CAT_creerNoticeRCR ()
{ // Ce script permet de cr�er une notice de RCR Tw
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTw6" + "\n" +
		"R100 $aNom Tutelle$bSous division$cQualificatif g�ographique" + "\n" +
		"R110 $aOrganisme affiliation " + "\n" +
		"R120 $aNom complet d�velopp� de l'�tablissement$bSous-division$cQualificatif g�ographique" + "\n" +
		"R121 $aIntitul� du CADIST" + "\n" +
		"R122 $aAutre nom de l'�tablissement (sigle, abr�viations et autres)" + "\n" +
		"R130 $aCode du type d'�tablissement" + "\n" +
		"R140 $aNum�ro RCR" + "\n" +
		"R150 $aParticipation � un r�seau documentaire autre que le Sudoc" + "\n" +
		"R160 $aNote sur l'identification de l'�tablissement" + "\n" +
		"R200 $0Nom de l'�tablissement$aAdresse Physique$bMention Compl�mentaire$cMention Compl�mentaire$dLieu-dit$eCode postal$fVille$gCedex" + "\n" +
		"R201 $0Nom de l'�tablissement$bAdresse Postale$cMention Compl�mentaire$cMention Compl�mentaire$dLieu-dit$eCode postal$fVille$gCedex" + "\n" +
		"R210 $aT�l�phone Renseignements$bT�l�phone Service de PRET" + "\n" +
		"R211 $aFax" + "\n" +
		"R220 $aAdresse Web de la biblioth�que$bAdresse Web du Catalogue en Ligne$dAdresse �lectronique du service de renseignements" + "\n" +
		"R230 $aAdresse �lectronique PIB(ccfr)$bAdresse �lectronique PEB(Sudoc)" + "\n" +
		"R240 $aAutre adresse �lectronique" + "\n" +
		"R250 $aPr�cision sur la localisation" + "\n" +
		"R300 $aAnn�e cr�ation de l'�tablissement:AAAA" + "\n" +
		"R305 $aNom pr�c�dent de l'�tablissement" + "\n" +
		"R310 $aHistorique" + "\n" +
		"R410 $aNom des Organismes associ�s$bNature des liens$cN�RCR$3N�PPN de la notice li�e$eCode CR Sudoc-PS$yN�ILN_XXX " + "\n" +
		"R440 $aNote sur les organismes associ�s" + "\n" +
		"R500 $aOuvertures" + "\n" +
		"R510 $aFermetures" + "\n" +
		"R520 $aConditions d'acc�s" + "\n" +
		"R530 $aNotes particuli�res sur l'acc�s" + "\n" +
		"R610 $aCode Dewey$bPoint d'acc�s autoris� - nom commun Rameau" + "\n" +
		"R620 $aDescription de la collection" + "\n" +
		"R800 $aAcc�s � des Bases de donn�es [Oui/Non]$bNom des BDD$cConditions d'utilisation" + "\n" +
		"R810 $aRenseignement Bibliographiques Par t�l�phone [Oui/Non]$bpar Courrier [Oui/Non]$cpar Fax [Oui/Non]$dpar Messagerie [Oui/Non]$eConditions" + "\n" +
		"R820 $aR�servation de documents [Oui/Non]$bTypes de doc.$cConditions" + "\n" +
		"R830 $aBibliographies [Oui/Non]$bConditions" + "\n" +
		"R840 $aPhotocopie [Oui/Non]$bMicrofilmage [Oui/Non]$cMicrofichage [Oui/Non]$dNum�risation [Oui/Non]$eAutres Services de reproduction$fPr�cisions$gConditions" + "\n" +
		"R850 $aPeb [Oui/Non]$bConditions" + "\n" +
		"R860 $aConsultation sur Place [Oui/Non]$bPr�t � Domicile [Oui/Non]$cConditions" + "\n" +
		"R870 $aPortage � domicile [Oui/Non]$bConditions" + "\n" +
		"R880 $aAutres services$bConditions" + "\n" +
		"R890 $aNotes sur les services propos�s" + "\n" +
		"R901 $aParticipation � un r�seau documentaire$bAutre r�seau" + "\n" +
		"R910 $aClassification utilis�e" + "\n" +
		"R920 $aNotes sur Catalogues sp�cifiques" + "\n" +
		"R930 $aDocumentation de l'�tablissement" + "\n" +
		"R940 $aPublications de l'�tablissement" + "\n" +
		"R950 $aSudoc" + "\n" +
		"R960 $aDocuments consultables sur l'�tablissement" + "\n" +
		"R970 $aSyst�me d'information" + "\n" +
		"R980 $aEquipement sp�ciaux (handicap�s)" + "\n" +
		"R999 $aInformations compl�mentaires (ex:Caf�teria)");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerPartition ()
{ // Ce script permet de cr�er une notice de partition Ma
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aMax3" + "\n" +
		"013 ##$aISMN" + "\n" +
		"071 31$aNum�ro d'�diteur" + "\n" +
		"181 ##$P01$cntm" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du Titre$f1re mention de responsabilit�$gMention de responsabilit� de fonction diff�rente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"208 ##$aMention sp�cifique de musique imprim�e (Format)$dMention sp�cifique parall�le de musique imprim�e" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance mat�rielle$cMention d'ill.$dDimensions$eMat�riel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNum�ro" + "\n" +
		"300 ##$aNote g�n�rale" + "\n" +
		"305 ##$aNote sur l'�dition" + "\n" +
		"320 ##$aNote sur les Bibliographies et Index" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNum�ro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$3027244601$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif � l'oeuvre ou � l'expression$bPr�nom$4230" + "\n" +
		"701 #1$aNom Co-auteur$bPr�nom$4230" + "\n" +
		"702 #1$aNom Auteur relatif � la manifestation ou � l'item$bPr�nom$4Code de Fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerPeriodique ()
{ // Ce script permet de cr�er une notice de p�riodique imprim� Ab
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAbx3" + "\n" +
		"181 ##$P01$ctxt"+ "\n" +"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre propre$eCompl�ment du Titre$f1re mention de responsabilit�$gMention de responsabilit� de fonction diff�rente" + "\n" +
		"207 #0$aNum�rotation : indication de date et de volume" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance mat�rielle$cMention d'ill.$dDimensions$eMat�riel d'accompagnement" + "\n" +
		"326 ##$aP�riodicit�$bDates" + "\n" +
		"421 ##$t@Titre Suppl�ment" + "\n" +
		"422 ##$t@Titre Publication-m�re du suppl�ment" + "\n" +
		"430 ##$t@Titre Suite de" + "\n" +
		"440 ##$t@Titre Devient" + "\n" +
		"451 ##$t@Titre Autre �dition sur le m�me support" + "\n" +
		"452 ##$t@Titre Autre �dition sur un autre support" + "\n" +
		"517 ##$a@Autres variantes du titre" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"710 02$a@Nom Collectivit� Auteur relatif � l'oeuvre ou � l'expression$4651" + "\n" +
		"711 02$a@Nom Collectivit� co-Auteur relatif � l'oeuvre ou � l'expression$4651" + "\n" +
		"712 02$a@Nom Collecteur Auteur relatif � la manifestation ou � l'item$4Code de Fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerPeriodElectr ()
{ // Ce script permet de cr�er une notice de p�riodique �lectronique Ob
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aObx" + "\n" +
		"106 $az" + "\n" +
		"181 ##$P01$ctxt"+ "\n" + "182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre propre$eCompl�ment du Titre$f1re mention de responsabilit�$gMention de responsabilit� de fonction diff�rente" + "\n" +
		"207 #0$aNum�rotation : indication de date et de volume" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication" + "\n" +
		"326 ##$aP�riodicit�$bDates" + "\n" +
		"336 ##$a" + "\n" +
		"371 .#$a" + "\n" +
		"421 ##$t@Titre Suppl�ment" + "\n" +
		"422 ##$t@Titre Publication-m�re du suppl�ment" + "\n" +
		"430 ##$t@Titre Suite de" + "\n" +
		"440 ##$t@Titre Devient" + "\n" +
		"451 ##$t@Titre Autre �dition sur le m�me support" + "\n" +
		"452 ##$t@Titre Autre �dition sur un autre support" + "\n" +
		"517 ##$a@Autres variantes du titre" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"710 02$a@Nom Collectivit� Auteur relatif � l'oeuvre ou � l'expression$4651" + "\n" +
		"711 02$a@Nom Collectivit� co-Auteur relatif � l'oeuvre ou � l'expression$4651" + "\n" +
		"712 02$a@Nom Collecteur Auteur relatif � la manifestation ou � l'item$4Code de Fonction" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'acc�s est r�serv�, cr�er une E856)");
	application.activeWindow.codedData = true;
}


function CAT_creerPersonnephysique ()
{ // Ce script permet de cr�er une notice d'autorit� personne physique Tp5
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTp5" + "\n" +
		"106 ##$a0$b1$c0"+ "\n" +
		"200 # $90y$aNom de famille$bPr�nom$fann�es d'existence AAAA-AAAA" + "\n" +
		"340 ##$aNote biographique (informations � justifier par des sources mentionn�es en zone 810)" + "\n" +
		"400 # $9#y$aNom de famille$bPr�nom = Renvoi(s) facultatif(s)" + "\n" +
		"810 ##$aOBLIGATOIRE R�f�rence du document pour lequel est cr��e la pr�sente autorit� Titre / Auteur, date" + "\n" +
		"810 ##$aDocument(s) de r�f�rence permettant d'�tablir les variantes �ventuelles du nom 200 + 400, les informations biographiques 340, etc.$bCiter ici les informations trouv�e dans la source Zone 810 r�p�table pour chaque source");
	application.activeWindow.codedData = true;
}

function CAT_creerPropositionRameau ()
{ // Ce script permet de cr�er une proposition rameau Td3
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTd3" + "\n" +
		"250 ##$8frefre$9#y$aNouveau Point d'acc�s autoris� - nom commun Rameau propos�" + "\n" +
		"450 ##$8frefre$9#y$aVariante de point d'acc�s 1" + "\n" +
		"450 ##$8frefre$9#y$aVariante de point d'acc�s 2" + "\n" +
		"810 ##$aOBLIGATOIRE R�f�rence du document pour lequel est propos� le nouveau Point d'acc�s Titre / Auteur, date" + "\n" +
		"810 ##$aDocument de r�f�rence permettant de justifier, d�finir, ... le concept propos� en Point d'acc�s Titre / Auteur, date");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerMusique ()
{ // Ce script permet de cr�er une notice de document sonore musical Ga
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aGax3" + "\n" +
		"013 ##$aISMN" + "\n" +
		"071 31$aNum�ro d'�diteur" + "\n" +
		"181 ##$P01$cprm" + "\n" + "182 ##$P01$cs" + "\n" +
		"183 ##$P01$aCode du type de support mat�riel" + "\n" +
		"200 1#$a@Titre$eCompl�ment du Titre$fCompositeur principal$gAutres (compositeurs, interpr�tes, instrumentistes...)" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance mat�rielle$cMention d'ill.$dDimensions$eMat�riel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNum�ro" + "\n" +
		"300 ##$aNote g�n�rale" + "\n" +
		"306 ##$aNote sur l'adresse bibliographique" + "\n" +
		"322 ##$aNote sur le g�n�rique" + "\n" +
		"323 ##$aNote sur les interpr�tes" + "\n" +
		"359 2#$vTomaison / Num�rotation de l'unit� physique$btable des mati�res de niveau 1$pNum�ro de page ou de plage$ctable des mati�res de niveau 2" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNum�ro" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif � l'oeuvre ou � l'expression$bPr�nom$4230" + "\n" +
		"701 #1$aNom Co-auteur$bPr�nom$4230" + "\n" +
		"702 #1$aNom Auteur relatif � la manifestation ou � l'item$bPr�nom$4Code de Fonction" + "\n" +
		"716 ##$aMarque commerciale - mention de responsabilit�$4Code de fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerSonore ()
{ // Ce script permet de cr�er une notice de document sonore non musical Na
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aNax3" + "\n" +
		"013 ##$aISMN" + "\n" +
		"071 31$aNum�ro d'�diteur" + "\n" +
		"181 ##$P01$csnd" + "\n" +
		"182 ##$P01$cs" + "\n" +
		"183 ##$P01$aCode du type de support mat�riel" + "\n" +
		"200 1#$a@Titre$eCompl�ment du Titre$fCompositeur principal$gAutres (compositeurs, interpr�tes, instrumentistes...)" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance mat�rielle$cMention d'ill.$dDimensions$eMat�riel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNum�ro" + "\n" +
		"300 ##$aNote g�n�rale" + "\n" +
		"306 ##$aNote sur l'adresse bibliographique" + "\n" +
		"322 ##$aNote sur le g�n�rique" + "\n" +
		"323 ##$aNote sur les interpr�tes" + "\n" +
		"359 2#$vTomaison / Num�rotation de l'unit� physique$btable des mati�res de niveau 1$pNum�ro de page ou de plage$ctable des mati�res de niveau 2" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNum�ro" + "\n" +
		"600 #1$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif � l'oeuvre ou � l'expression$bPr�nom$4230" + "\n" +
		"701 #1$aNom Co-auteur$bPr�nom$4230" + "\n" +
		"702 #1$aNom Auteur relatif � la manifestation ou � l'item$bPr�nom$4Code de Fonction" + "\n" +
		"716 ##$aMarque commerciale - mention de responsabilit�$4Code de fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20220525 : mise � jour MRX
// 20220622 : mise � jour MRX
function CAT_creerTheseElectroniqueReproduction ()
{ // Ce script permet de cr�er une notice de th�se �lectronique Oa (Reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"017 70$aDOI$2DOI" + "\n" +
		"029 ##$aFR$bNum�ro national de th�se (aaaaCODEnnnn)" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de th�se" + "\n" +
		"214 #2$a $c $d" + "\n" +
		"300 ##$a(s'il y a lieu)Th�se soutenue en co-tutelle" + "\n" +
		"311 ##$a(s'il y a lieu)Th�se soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'�cole doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'�quipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$zReproduction de$bTh�se d'Etat--Th�se de doctorat--Th�se de 3e cycle--Th�se d'universit�--Th�se de docteur-ing�nieur--Th�se d'exercice$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (pr�ciser le format)" + "\n" +
		"371 .#$a" + "\n" +
		"455 ##$t@Lien vers la th�se originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2rameau" + "\n" +
		"606 ##$aACCES SUJET - NOM COMMUN$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Directeur de th�se$bPr�nom$4727" + "\n" +
		"701 #1$aNom Pr�sident du jury$bPr�nom Pr�sident du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, �tablissement d'inscription, etc)$4985" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'acc�s est r�serv�, cr�er une E856)"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20220525 : mise � jour MRX
function CAT_creerTheseImprimeOriginelle ()
{ // Ce script permet de cr�er une notice de th�se imprim�e Aa (Document originel)corrige le 2013-09-03 MTE selon Assistance 4174
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$bNum�ro national de th�se (aaaaCODEnnnn)" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bm$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de th�se" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"300 ##$a(s'il y a lieu)Th�se soutenue en co-tutelle" + "\n" +
		"311 ##$a(s'il y a lieu)Th�se soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'�cole doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'�quipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$bTh�se d'Etat--Th�se de doctorat--Th�se de 3e cycle--Th�se d'universit�--Th�se de docteur-ing�nieur--Th�se d'exercice$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)Th�se confidentielle jusqu'au (date exacte) OU jusqu'en (ann�e)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2rameau" + "\n" +
		"606 ##$aACCES SUJET - NOM COMMUN$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Directeur de th�se$bPr�nom$4727" + "\n" +
		"701 #1$aNom Pr�sident du jury$bPr�nom Pr�sident du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, �tablissement d'inscription, etc)$4985"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20220525 : mise � jour MRX
function CAT_creerTheseImprimeReproduction ()
{ // Ce script permet de cr�er une notice de th�se imprim�e Aa (Reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$bNum�ro national de th�se (aaaaCODEnnnn)" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de th�se" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse du diffuseur$cNom diffuseur$dAnn�e de diffusion" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"300 ##$a(s'il y a lieu)Th�se soutenue en co-tutelle" + "\n" +
		"311 ##$a(s'il y a lieu)Th�se soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'�cole doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'�quipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie p.xxx-xxx. Index" + "\n" +
		"328 #0$zReproduction de$bTh�se d'Etat--Th�se de doctorat--Th�se de 3e cycle--Th�se d'universit�--Th�se de docteur-ing�nieur--Th�se d'exercice$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"455 ##$t@Lien vers la th�se originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Directeur de th�se$bPr�nom$4727" + "\n" +
		"701 #1$aNom Pr�sident du jury$bPr�nom Pr�sident du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, �tablissement d'inscription, etc)$4985"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerTheseImprimeEditionCommerciale ()
{ // Ce script permet de cr�er une notice de th�se imprim�e Aa (Edition commerciale)
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
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aNombre de vol. (nbr. de p. ou f.)$cMention d'ill.$dDimensions$eMat�riel d'accompagnement" + "\n" +
		"320 ##$aBibliographie p.xxx-xxx. Index" + "\n" +
		"328 #0$zTexte remani� de$bTh�se d'Etat--Th�se de doctorat--Th�se de 3e cycle--Th�se d'universit�--Th�se de docteur-ing�nieur--Th�se d'exercice$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"451 ##$t@Lien vers la th�se originelle sur le m�me support" + "\n" +
		"452 ##$t@Lien vers la th�se originelle sur un support diff�rent" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2fmesh" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerAudiovisuel ()
{ // Ce script permet de cr�er une notice de document audiovisuel Ba, choisir 181
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aBax3" + "\n" +
		"071 41$aNum�ro d'�diteur commercial" + "\n" +
		"073 #0$aCode-�-barres commercial" + "\n" +
		"181 ##$P01$ctdi ou tdm"+ "\n" +
		"182 ##$P01$cv" + "\n" +
		"183 ##$P01$avcc" + "\n" +
		"200 1#$a@Titre$eCompl�ment de Titre$f1re mention de responsabilit�$gMention de responsabilit� de fonction diff�rente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'�diteur$cNom de l'�diteur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance mat�rielle$cMention d'ill.$dDimensions$eMat�riel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNum�ro" + "\n" +
		"300 ##$aNote sur les versions linguistiques (ex: Sous-titres pour les sourds et les malentendants...)" + "\n" +
		"305 ##$aNote sur l'historique de l'oeuvre (ex: Enregistrement public au th��tre...)" + "\n" +
		"306 ##$aNote sur l'adresse bibliographique (ex: Copyright)" + "\n" +
		"307 ##$aFormat de l'image" + "\n" +
		"312 ##$aNote sur les titres associ�es (ex: D'apr�s le roman...)" + "\n" +
		"320 ##$aNote sur les documents annexes (ex: Filmographie, galeries photo, etc.)" + "\n" +
		"322 ##$aNote sur le g�n�rique" + "\n" +
		"323 ##$aNote sur les interpr�tes" + "\n" +
		"327  #$aNote de contenu" + "\n" +
		"334 ##$aNote sur les r�compenses" + "\n" +
		"517 ##$aTitres associ�es" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNum�ro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"700 #1$aNom du R�alisateur$bPr�nom du R�alisateur$4300" + "\n" +
		"701 #1$aNom Co-auteur$bPr�nom$4Code de Fonction" + "\n" +
		"702 #1$aNom Auteur relatif � la manifestation ou � l'item$bPr�nom$4Code de Fonction" + "\n" +
		"712 02$aNom Collectivit� auteur relatif � la manifestation ou � l'item$4Code de Fonction");
	application.activeWindow.codedData = true;
}


// 20180103 : Cr�ation
// 20200101 : modification TB 2020
function CAT_creerEchantillonAccompagne ()
{ //Ce script permet de cr�er une notice d'�chantillon avec mat�riel d'accompagnement
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
		"200 1#$a@Nom de l'�chantillon$e[�chantillon]$fProducteur de l'�chantillon" + "\n" +
		"214 #1$aLieu de production$d[20XX]" + "\n" +
		"215 ##$a1 �chantillon$cComposant de l'�chantillon$dDimensions de l'�chantillon (XX x XX x XX cm)- voir exemples sur GM $eLivret technique (xx p., xx cm)" + "\n" +
		"300 ##$aDescription de l'�chantillon et du livret technique si besoin" + "\n" +
		"345 ##$uSite web source de l'acquisition (FACULTATIF)" + "\n" +
		"463 ##$t@Titre du livret technique d'accompagnement" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$3027793079$2rameau" + "\n" +
		"710 02$a@Collectivit� productrice de l'�chantillon$4070" + "\n" +
		"830 ##$aV�rifier imp�rativement les donn�es cod�es en 101, 102, modifier les valeurs donn�es par d�faut, si besoin. Compl�ter la zone 117 en attribuant les codes pertinents par rapport � l'objet (voir la liste des codes sur le GM). Supprimer la L606 si aucune indexation utilisant un th�saurus local n'est envisag�e. Supprimer cette zone 830 avant de valider la notice." + "\n" +
		"L606 ##$aSujet$xEchantillons$2Nom du th�saurus local utilis�");
	application.activeWindow.codedData = true;
}

// 20180103 : Cr�ation
// 20200101 : modification TB 2020
function CAT_creerObjet ()
{ //Ce script permet de cr�er une notice d'objet
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
		"215 ##$a1 objet$cComposants de l'objet$dDimensions de l'objet (XX x XX x XX cm) - voir exemples sur le GM " + "\n" +
		"300 ##$aDescription de l'objet et de son usage" + "\n" +
		"345 ##$uSite web source de l'acquisition (FACULTATIF)" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yG�ographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"710 02$a@Collectivit� productrice de l'objet$4070" + "\n" +
		"830 ##$aV�rifier imp�rativement les donn�es cod�es en 101, 102, modifier les valeurs donn�es par d�faut, si besoin. Compl�ter la zone 117 en attribuant les codes pertinents par rapport � l'objet (voir la liste des codes sur le GM). Supprimer la L606 si aucune indexation utilisant un th�saurus local n'est envisag�e. Supprimer cette zone 830 avant de valider la notice." + "\n" +
		"L606 ##$aSujet$2Nom du th�saurus local utilis�"
	);
	application.activeWindow.codedData = true;
}

// 20180531 : Cr�ation
// 20200101 : modification TB 2020
function CAT_creerArticleImp ()
{ //Ce script permet de cr�er une notice d'article Archive
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAsx3" + "\n" +
		"100 0#$a20XX" + "\n" +
		"101 0#$afre" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$c0$d0$fy$gy" + "\n" +
		"200 1#$a@Titre de l'article$ecompl�ment de titre$f1e mention de responsabilit�$g2e mention de responsabilit�" + "\n" +
		"209 ##$btome ou volume$cann�e$dnum�ro ou fascicule$hx-x (ne pas indiquer p.)" + "\n" +
		"215 ##$a[nombre de pages]$cmention d'ill." + "\n" +
		"305 ##$aIn : Titre-cl� de la revue dont l'article est extrait, ISSN. - Vol., tomaison, n� de fascicule" + "\n" +
		"320 ##$aBibliographie ou index" + "\n" +
		"L606 ##$aSujet$2Nom du th�saurus local utilis�" + "\n" +
		"606 ##$aSujet$2rameau" + "\n" +
		"463 ##$t@Titre de la revue$vnum�ro/ann�e de la revue" + "\n" +
		"700 #1$aNom Auteur relatif � l'oeuvre ou � l'expression$bPr�nom$4code de fonction" + "\n" +
		"701 #1$aCo-auteur relatif � l'oeuvre ou � l'expression$bPr�nom$4code de fonction" + "\n" +
		"830 #$aSupprimer la L606 si aucune indexation utilisant un th�saurus local n'est envisag�e. Supprimer cette zone 830 avant de valider la notice."
	);
	application.activeWindow.codedData = true;
}

// 20200101 : Cr�ation
function CAT_creerPropositionFormeGenre ()
{ // Ce script permet de cr�er une proposition rameau Forme/Genre Tf3
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTf3" + "\n" +
		"280 ##$8frefre$9#y$aNouveau Point d'acc�s autoris� - Forme ou Genre Rameau propos�" + "\n" +
		"480 ##$8frefre$9#y$aVariante de point d'acc�s 1" + "\n" +
		"480 ##$8frefre$9#y$aVariante de point d'acc�s 2" + "\n" +
		"810 ##$aOBLIGATOIRE R�f�rence du document pour lequel est propos� le nouveau Point d'acc�s Titre / Auteur, date" + "\n" +
		"810 ##$aDocument de r�f�rence permettant de justifier, d�finir, ... le concept propos� en Point d'acc�s Titre / Auteur, date"
	);
	application.activeWindow.codedData = true;
}

// 20220603 : cr�ation MRX
// 20220622 : mise � jour MRX
function CAT_creerTheseRemanieeAuteur ()
{ // Ce script permet de cr�er une notice de th�se �lectronique Oa (version remani�e par l'auteur hors publication commerciale)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de th�se" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse de diffusion$cNom du diffuseur$dDate de diffusion" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$zTexte remani� de$bTh�se d'Etat--Th�se de doctorat--Th�se de 3e cycle--Th�se d'universit�--Th�se de docteur-ing�nieur--Th�se d'exercice$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (pr�ciser le format)" + "\n" +
		"45X ##$t@Lien vers la th�se originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"856 4#$qFormat$uAdresse URL$zAcc�s au texte int�gral"
	);
	application.activeWindow.codedData = true;
}

// 20220413 : Cr�ation
// 20220525 : Mise � jour MRX
// 20220622 : Mise � jour MRX
function CAT_creerMemoireElec ()
{ // Ce script permet de cr�er une notice de m�moire nativement �lectronique Oa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"029 ##$aFR$mNum�ro du m�moire" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de m�moire" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$bMention du travail universitaire et nature du dipl�me$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (pr�ciser le format)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Directeur de m�moire$bPr�nom$4003" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'acc�s est r�serv�, cr�er une E856)"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Cr�ation
// 20220622 : Mise � jour MRX
function CAT_creerMemoireElecReproduction ()
{ // Ce script permet de cr�er une notice de m�moire �lectronique Oa (reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"029 ##$aFR$mNum�ro du m�moire" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de m�moire" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse de diffusion$cNom du diffuseur$dDate de diffusion" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$zReproduction de$bMention du travail universitaire et nature du dipl�me$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (pr�ciser le format)" + "\n" +
		"455 ##$t@Lien vers le m�moire originel" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Directeur de m�moire$bPr�nom$4003" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'acc�s est r�serv�, cr�er une E856)"
	);
	application.activeWindow.codedData = true;
}

// 20220413 : Cr�ation
// 20220525 : Mise � jour MRX
function CAT_creerMemoireImpr ()
{ // Ce script permet de cr�er une notice de m�moire imprim� Aa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$mNum�ro du m�moire" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"106 ##$ar" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de m�moire" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$bMention du travail universitaire et nature du dipl�me$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)M�moire confidentiel jusqu'au (date exacte) OU jusqu'en (ann�e)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Directeur de m�moire$bPr�nom$4003" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"711 02$a@Etablissement de soutenance$4295"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Cr�ation
function CAT_creerMemoireImprReproduction ()
{ // Ce script permet de cr�er une notice de m�moire imprim� Aa (reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$mNum�ro du m�moire" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$fy$gy" + "\n" +
		"106 ##$ar" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de m�moire" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse de diffusion$cNom du diffuseur$dDate de diffusion" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$zReproduction de$bMention du travail universitaire et nature du dipl�me$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"455 ##$t@Lien vers le m�moire originel" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Directeur de m�moire$bPr�nom$4003" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"711 02$a@Etablissement de soutenance$4295"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Cr�ation
function CAT_creerHDRImprVO ()
{ // Ce script permet de cr�er une notice de HDR imprim� Aa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$oNum�ro de la HDR (num�ro de HDR)" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"106 ##$ar" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom de l'encadrant de la HDR" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$bHabilitation � diriger des recherches$cDiscipline (libell� complet)$eEtablissement (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)HDR confidentielle jusqu'au (date exacte) OU jusqu'en (ann�e)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Encadrant HDR$bPr�nom$4003" + "\n" +
		"701 #1$aNom Pr�sident du jury$bPr�nom Pr�sident du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre partenaire de recherche (composante, �tablissement d'inscription, etc)$4985"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Cr�ation
function CAT_creerHDRImprReproduction ()
{ // Ce script permet de cr�er une notice de HDR imprim�e Oa (Reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$oNum�ro de la HDR (num�ro de HDR)" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom de l'encadrant de HDR" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse du diffuseur$cNom diffuseur$dAnn�e de diffusion" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'�quipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie p.xxx-xxx. Index" + "\n" +
		"328 #0$zReproduction de$bHabilitation � diriger des recherches$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"455 ##$t@Lien vers la HDR originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Encadrant HDR$bPr�nom$4003" + "\n" +
		"701 #1$aNom Pr�sident du jury$bPr�nom Pr�sident du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, �tablissement d'inscription, etc)$4985"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Cr�ation
// 20220622 : Mise � jour MRX
function CAT_creerHDRElecVO ()
{ // Ce script permet de cr�er une notice de m�moire nativement �lectronique Oa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"029 ##$aFR$oNum�ro de la HDR (num�ro de HDR)" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom de l'encadrant de HDR" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$bHabilitation � diriger des recherches$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (pr�ciser le format)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Encadrant HDR$bPr�nom$4003" + "\n" +
		"701 #1$aNom Pr�sident du jury$bPr�nom Pr�sident du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre partenaire de recherche (composante, �tablissement d'inscription, etc)$4985" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'acc�s est r�serv�, cr�er une E856)"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Cr�ation
// 20220622 : Mise � jour MRX
function CAT_creerHDRElecReproduction ()
{ // Ce script permet de cr�er une notice de HDR �lectronique Oa (Reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"029 ##$aFR$oNum�ro de la HDR (num�ro de HDR)" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom de l'encadrant de HDR" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse de diffusion$cNom du diffuseur$dDate de diffusion" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$zReproduction de$bHabilitation � diriger des recherches$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (pr�ciser le format)" + "\n" +
		"455 ##$t@Lien vers la HDR originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Encadrant HDR$bPr�nom$4003" + "\n" +
		"701 #1$aNom Pr�sident du jury$bPr�nom Pr�sident du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre partenaire de recherche (composante, �tablissement d'inscription, etc)$4985" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'acc�s est r�serv�, cr�er une E856)"
	);
	application.activeWindow.codedData = true;
}

// 2022060325 : cr�ation MRX
function CAT_creerTheseImprPerdue ()
{ // Ce script permet de cr�er une notice de th�se imprim�e Aa perdue
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$bNum�ro national de th�se (aaaaCODEnnnn)" + "\n" +
		"035 ##$aTHOA[code court �tab]" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bm$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de th�se" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$a(si informations disponibles)x vol. (xxx p.)$dDimensions" + "\n" +
		"300 ##$a(s'il y a lieu)Th�se soutenue en co-tutelle" + "\n" +
		"303 ##$aNotice �labor�e � partir de la reproduction de la th�se : la version de soutenance n'existe plus. OU Notice �labor�e � partir de [mention des sources] : la version de soutenance n'existe plus.OU Notice �labor�e � partir de [mention de sources]. Le document qui a justifi� l'obtention du dipl�me n'existe plus." + "\n" +
		"311 ##$a(s'il y a lieu)Th�se soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'�cole doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'�quipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$bTh�se d'Etat--Th�se de doctorat--Th�se de 3e cycle--Th�se d'universit�--Th�se de docteur-ing�nieur--Th�se d'exercice$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)Th�se confidentielle jusqu'en (ann�e)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Directeur de th�se$bPr�nom$4727" + "\n" +
		"701 #1$aNom Pr�sident du jury$bPr�nom Pr�sident du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, �tablissement d'inscription, etc)$4985" + "\n" +
		"E316 ##$aExemplaire manquant (constat� en AAAA) OU Exemplaire manquant/incommunicable depuis AAAA, pour cause de ... OU Exemplaire manquant/incommunicable depuis AAAA, pour cause de .... Il n'existe pas de copie conforme (au contenu strictement identique) de la version de soutenance$ulien vers la notice Sudoc de la reproduction conforme OU de la version non corrig�e / remani�e / commercialis�e de la th�se$2Consulter la reproduction OU Consulter la version non corrig�e de la th�se OU Consulter la version commercialis�e de la th�se OU Consulter une version de la th�se remani�e par l'auteur"
	);
	application.activeWindow.codedData = true;
}

// 2022060325 : cr�ation MRX
function CAT_creerTheseImprNonDeposee ()
{ // Ce script permet de cr�er une notice de th�se imprim�e Aa non d�pos�e
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$bNum�ro national de th�se (aaaaCODEnnnn)" + "\n" +
		"035 ##$aTHOA[code court �tab]" + "\n" +
		"100 0#$aAnn�e de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bm$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eCompl�ment du titre$fAuteur$gsous la direction de Pr�nom Nom du directeur de th�se" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$a(si informations disponibles)x vol. (xxx p.)$dDimensions" + "\n" +
		"300 ##$a(s'il y a lieu)Th�se soutenue en co-tutelle" + "\n" +
		"303 ##$aNotice �labor�e � partir de la version non corrig�e de la th�se : la version de soutenance n'a pas �t� d�pos�e OU Description �tablie � partir de (pr�ciser les documents administratifs utilis�s pour �tablir la description)" + "\n" +
		"305 ##$a(s'il y a lieu) En l'absence de d�p�t de la version d�finitive de la th�se, la version non corrig�e fait office de d�p�t l�gal. OU (si th�se non d�pos�e) La version de soutenance n'existe pas. Le docteur n'a d�pos� aucun exemplaire de sa th�se pour archivage et communication." + "\n" +
		"311 ##$a(s'il y a lieu)Th�se soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'�cole doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'�quipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Pr�nom Nom (Pr�sident du jury) ; Pr�nom Nom, Pr�nom Nom (Membre(s) du jury) ; Pr�nom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx r�f." + "\n" +
		"328 #0$bTh�se d'Etat--Th�se de doctorat--Th�se de 3e cycle--Th�se d'universit�--Th�se de docteur-ing�nieur--Th�se d'exercice$cDiscipline (libell� complet)$eUniversit� (voir table des libell�s du Guide M�thodologique)$dAnn�e de soutenance" + "\n" +
		"330 ##$aR�sum� fran�ais$zfre" + "\n" +
		"330 ##$aR�sum� anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)Th�se confidentielle jusqu'en (ann�e)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eCompl�ment du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAcc�s sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots cl�s libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPr�nom$4070" + "\n" +
		"701 #1$aNom Directeur de th�se$bPr�nom$4727" + "\n" +
		"701 #1$aNom Pr�sident du jury$bPr�nom Pr�sident du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPr�nom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPr�nom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, �tablissement d'inscription, etc)$4985" + "\n" +
		"E316 ##$aExemplaire manquant : le docteur n'a jamais d�pos� la version corrig�e, valid�e, de sa th�se. OU Exemplaire manquant : le docteur n'a jamais d�pos� la version valid�e en soutenance de sa th�se. OU Exemplaire manquant : le docteur n'a jamais d�pos� sa th�se.$u(s'il y a lieu)lien vers la notice Sudoc de la version non corrig�e--commercialis�e--remani�e par l'auteur$2Consulter la version non corrig�e de la th�se OU Consulter la version remani�e et commercialis�e de la th�se OU Consulter la version de la th�se remani�e par l'auteur."
	);
	application.activeWindow.codedData = true;
}
