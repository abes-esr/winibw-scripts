// mis à jour le 2014-09-04 par MTE : ajout de tous les $b du 200 maintenant qu'ils sont contrôlés
// mis à jour le 2014-10-07 par MTE : remplacement des 200$b par 181 et si possible 182
// mis à jour le 2015-03-19 par IAN : mise à jour de la date dans le script CAT_creerExemplaireRetro, passée de 2014 à 2015
// mis à jour le 2015-04-24 par IAN : mise à jour de la date dans le script CAT_creer-ThesesImpEditionCommerciale, mentions subdivision de forme Thèses et écrits académiques ($3 ppn) enlevées des zones 606
// mis à jour le 2015-12-07 par SRY : CAT_creerTheseImprimeReproduction : supprimer 451 et 452
//                                   CAT_creerTheseImprimeEditionCommerciale : supprimer $3027253139 en zone 6XX remplacer 451, 452 et supprimer 455 et 456
//									 CAT_creerTheseElectroniqueReproduction : supprimer 451, 452 et 456
//									 CAT_creerPeriodique, CAT_creerCollection, CAT_creerPeriodElectr : supprimer 301
//									 CAT_creerExemplaireRetro : remplacement de la date 2015 par 2016
//									 CAT_creerTheseImprimeOriginelle: modification mentions zone 210
// mis à jour le 2016-02-08 par SRY : CAT_creerElectronique, CAT_creerPeriodElectr : 230,337,339
// mis à jour le 2016-02-22 par SRY : CAT_creerCollection : ajout zone 301
// mis à jour le 2016-11-14 par SRY :
// 				CAT_creerTheseElectroniqueReproduction : modification zone 702
//				CAT_creerCollectivite : ajout de la zone 150 $a et $b
//				CAT_creerElectronique : ajout zone 336 $a
// mis à jour le 2017-03-16 par SRY :
// 				Nouvelles consignes RDA FR 2017 (zones 183, 210, 219, 215
// mis à jour le 2018-01-03 par SRY : création de 2 scripts :
// 				CAT_creerEchantillonAccompagne et CAT_creerObjet
// mis à jour le 2018-05-31 par SRY : création de script :
// 				CAT_creerArticleImp
//				modification du vocabulaire (vedette matière transformé en point d'accès)
// mis à jour le 2020-01-01 par SRY : modification pour évolutions Unimarc
//				* création de script : CAT_creerPropositionFormeGenre - Ce script permet de créer une proposition rameau Forme/Genre Tf3
//				* Modificication des scripts suivants comme suit :
//				* remplacer 219 par 214 - suppression $x 600, 606 et 607 - ajout 608$a et $2 - modification libellé 700, 702, 710, 711 et 712
//				CAT_creerMonoIMP, CAT_creerElectronique, CAT_creerAudiovisuel, CAT_creerMultimedia, CAT_creerAtlas, CAT_creerPartition, CAT_creerMusique, CAT_creerSonore, CAT_creerEchantillonAccompagne, CAT_creerObjet, CAT_creerPeriodique, CAT_creerPeriodElectr, CAT_creerCollection, CAT_creerTheseImprimeOriginelle, CAT_creerTheseElectroniqueReproduction, CAT_creerTheseImprimeReproduction, CAT_creerTheseImprimeEditionCommerciale, CAT_creerArticleImp
// mis à jour le 2022-04-13 par LJ : création de deux scripts de création de mémoire nativement numérique
//				CAT_creerMemoireElec et CAT_creerMemoireImpr
// mis à jour le 2022-05-25 par MRX :
//		création de six scripts
//				CAT_creerHDRElecVO : création HDR nativement électronique
//				CAT_creerHDRImprVO : création HDR nativement imprimée
//				CAT_creerHDRElecReproduction : création reproduction électronique de HDR
//				CAT_creerHDRImprReproduction : création reproduction imprimée de HDR
//				CAT_creerMemoireElecReproduction : création reproduction électronique de mémoire
//				CAT_creerMemoireImprReproduction : création reproduction imprimée de mémoire
//		mise à jour de 5 scripts :
//				CAT_creerTheseImprimeOriginelle
//				CAT_creerTheseImprimeReproduction
//				CAT_creerTheseEclectroniqueReproduction
//				CAT_creerMemoireElec
//				CAT_creerMemoireImpr
// mis à jour le 2022-06-03 par MRX :
//		création de 3 scripts
//				CAT_creerTheseElecAutreVersionAuteur : création version remaniée d'une thèse
//				CAT_creerTheseImprNonDeposee : création thèse non déposée
//				CAT_creerTheseImprPerdue : création thèse perdue
// mise à jour le 2022-06-22 par MRX :
//				CAT_creerTheseEclectroniqueReproduction
//				CAT_creerHDRElecVO : création HDR nativement électronique
//				CAT_creerHDRElecReproduction : création reproduction électronique de HDR
//				CAT_creerMemoireElec
//				CAT_creerMemoireElecReproduction : création reproduction électronique de mémoire
//				CAT_creerTheseRemanieeAuteur : création version remaniée d'une thèse


function CAT_ajout301()
{
	// permet d'ajouter une zone 301 ISSN
	// tous ces scripts ont ete mis a jour le 20110617 par MTE
	// selon les suggestions des formateurs relais
	application.activeWindow.title.insertText ("301 ##$aDemande de numérotation ISSN en cours");
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
	// permet d'ajouter un dollar 4730 éditeur
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
	// application.messageBox("Script inconnu ", "Ce script a été désactivé le 01/01/2020", "alert-icon");
}
function CAT_ajoutRessourcElec()
{
	// permet d'ajouter 181 Ressource électronique
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
	// permet d'ajouter 181Images animéees et 182 ?
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
	// permet d'ajouter 181 Musique imprimée
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
	// Exécute la commande comparant les notices liées par une zone 024
	application.activeWindow.command("ded unm", false);
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerAtlas()
{
	//Ce script permet de créer une notice d'atlas ou de carte Ka
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aKax3" + "\n" +
		"010 ##$AISBN$dPrix" + "\n" +
		"073 #0$aNuméro EAN" + "\n" +
		"181 ##$P01$ctxt" + "\n" + "182 ##$P01$cn" + "\n" +
		"181 ##$P02$ccri" + "\n" + "182 ##$P02$cn"+ "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 01#$a@Titre$eComplément de Titre$f1re mention de responsabilité$gMention de responsabilité de fonction différente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"206 ##$aEchelle" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance matérielle$cMention d'ill.$dDimensions$eMatériel d'accompagnement" + "\n" +
		"304 ##$aNote sur le titre" + "\n" +
		"305 ##$aNote sur l'édition" + "\n" +
		"315 ##$aEchelle de Cartes" + "\n" +
		"510 ##$a@Titre parallèle" + "\n" +
		"517 ##$a@Variante du Titre" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"607 ##$aGéographique$2rameau" + "\n" +
		"608 ##$3027497259$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif à l'oeuvre ou à l'expression$bPrénom$4180"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerCollection()
{
	//Ce script permet de créer une notice de collection imprimée Ad
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAdx3" + "\n" +
		"106 $aCaractéristiques physiques" + "\n" +
		"110 $aType de publication en série$bPériodicité$cRégularité" + "\n" +
		"200 1#$a@Titre propre$eComplément du Titre$f1re mention de responsabilité$gMention de responsabilité de fonction différente" + "\n" +
		"181 ##$P01$ctxt" + "\n" +"182 ##$P01$cn"+ "\n" +
		"183 ##$P01$anga" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"301 ##$aX volumes dans le Sudoc au AAAA-MM-JJ : pas de demande de numérotation ISSN" + "\n" +
		"326 ##$aCollection" + "\n" +
		"510 ##$a@Titre parallèle" + "\n" +
		"512 ##$a@Titre de couverture" + "\n" +
		"517 ##$a@Autres variantes du titre" + "\n" +
		"606 ##$aSujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"701 #1$aNom co-Auteur relatif à l'oeuvre ou à l'expression$4651"+ "\n" +
		"710 02$a@Nom Collectivité Auteur relatif à l'oeuvre ou à l'expression$4651" + "\n" +
		"711 02$a@Nom Collectivité co-Auteur relatif à l'oeuvre ou à l'expression$4651" + "\n" +
		"712 02$a@Nom Collecteur Auteur relatif à la manifestation ou à l'item$4Code de Fonction"
	);
	application.activeWindow.codedData = true;
}
function CAT_creerCollectivite()
{
	//Ce script permet de créer une notice d'autorité collectivité Tb5
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTb5" + "\n" +
		"106 ##$a0$b1$c0" + "\n" +
		"150 ##$aType de collectivité officielle (11 codes possibles, voir le GM)$bCode de congrès ou de conférence (valeur 0 ou 1)" + "\n" +
		"210   $90y$a@Nom de la collectivité$bnom de la collectivité subordonnée facultative$clocalisation facultative" + "\n" +
		"340 ##$aNote biographique (informations à justifier par des sources mentionnées en zone 810)" + "\n" +
		"410   $9#y$a@Nom de la collectivité$bnom de la collectivité subordonnée facultative$clocalisation facultative" + "\n" +
		"810 ##$aOBLIGATOIRE Référence du document pour lequel est créée la présente autorité Titre / Auteur, date" + "\n" +
		"810 ##$aDocument(s) de référence permettant d'établir les variantes éventuelles du nom 210 + 410, les informations biographiques 340, etc.$bCiter ici les informations trouvée dans la source Zone 810 répétable pour chaque source"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerElectronique()
{
	//Ce script permet de créer une notice de monographie électronique Oa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"010 ##$AISBN" + "\n" +
		"017 70$aDOI$2DOI" + "\n" +
		"181 ##$P01$c..."+ "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eComplément du Titre$f1re mention de responsabilité$gMention de responsabilité de fonction différente" + "\n" +
		"214 #2$a $c $d" + "\n" +
		"225  #$a@Titre de la Collection électronique$xISSN$vNuméro" + "\n" +
		"305 ##$aNote " + "\n" +
		"320 ##$aNote sur bibliographies et index" + "\n" +
		"336 ##$aNote sur le type de ressource électronique" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format XXX" + "\n" +
		"339 ##$aFormat de la ressource$ddate de publication" + "\n" +
		"371 .#$a" + "\n" +
		"410 ##$t@Lien au titre de la Collection électronique$vNuméro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"607 ##$aNom géographique$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif à l'oeuvre ou à l'expression$bPrénom$4070"  + "\n" +
		"712 02$a@Nom Collectivité auteur relatif à la manifestation ou à l'item$4Code de Fonction"  + "\n" +
		"856 4#$qFormat du fichier$uURL"
	);
	application.activeWindow.codedData = true;
}
function CAT_creerEtatDeCollection()
{
	//JVK 20221011 - Déboggage les fonctions de création doivent contenir la commande cree avant l'insertion des zones
	//application.activeWindow.codedData = false;
	//application.activeWindow.command("cre", false);
	//Ce script permet de créer un état de collection ouvert
	application.activeWindow.title.insertText(
		"e01 $bxO" + "\n" +
		"930 ##$aCote$jCode PEB" + "\n" +
		"955 41$fSérieDébut$dVolumeDébut$eNuméroDébut$bJourDébut$cMoisDébut$aAnnéeDébut$pSérieFin$nvolumeFin$oNuméroFin$lJourFin$mMoisFin$kAnnéeFin$0 $aAnnéeDébut-$4Commentaires(Texte libre)$7Mention de lacune"
	);
}
function CAT_creerEtatDeCollectionCR()
{
	//JVK 20221011 - Déboggage les fonctions de création doivent contenir la commande cree avant l'insertion des zones
	//application.activeWindow.codedData = false;
	//application.activeWindow.command("cre", false);
	//Ce script permet de créer un état de collection ouvert - Format des centres régionaux
	application.activeWindow.title.insertText(
		"e01 $bxO" + "\n" +
		"C01 ##$bRCR$aCote$jCode PEB" + "\n" +
		"E01 41$fSérieDébut$dVolumeDébut$eNuméroDébut$bJourDébut$cMoisDébut$aAnnéeDébut$pSérieFin$nvolumeFin$oNuméroFin$lJourFin$mMoisFin$kAnnéeFin$0 $aAnnéeDébut-$4Commentaire (texte libre)$7Mention de lacune"
	);
}
function CAT_creerExemplaireRetro ()
{ // Ce script permet de créer un exemplaire avec la mention retro en 991, maj par MTE le 2013-08-29
	//application.activeWindow.codedData = false;
	//JVK 20221011 - Correction des commandes wini pour creation
	//application.activeWindow.command("cre", false);
	//application.activeWindow.title.endOfBuffer(false);
	application.activeWindow.title.insertText(
		"e01 $bx" + "\n" +
		"ATTENTION EFFACEZ LES LIGNES INUTILES A L'EXEMPLAIRE CREE" + "\n" +
		"930 ##$aCote$jCode PEB" + "\n" +
		"991 ##$aRETRO-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE SAI$b[Informations nécessaires à la bibliothèque ou au prestataire]" + "\n" +
		"991 ##$aRETRO-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE DER$b[Informations nécessaires à la bibliothèque ou au prestataire]" + "\n" +
		"991 ##$aRETRO-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-LOC$b[Informations nécessaires à la bibliothèque ou au prestataire]" + "\n" +"\n" +
		"991 ##$aCatalogage rétrospectif-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE SAI$b[Informations nécessaires à la bibliothèque ou au prestataire]" + "\n" +
		"991 ##$aCatalogage rétrospectif-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-CRE DER$b[Informations nécessaires à la bibliothèque ou au prestataire]" + "\n" +
		"991 ##$aCatalogage rétrospectif-2016-FINANCEMENT ABES-[Nom du prestataire]-[Code du catalogueur]-LOC$b[Informations nécessaires à la bibliothèque ou au prestataire]"
	);
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerMonoIMP ()
{ // Ce script permet de créer une notice de monographie imprimée Aa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"010 ##$AISBN" + "\n" +
		"073 #0$aNuméro EAN" + "\n" +
		"181 ##$P01$ctxt ou tct"+ "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du Titre$f1re mention de responsabilité$gMention de responsabilité de fonction différente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aNombre de vol. (nbr. de p. ou f.)$cMention d'ill.$dDimensions$eMatériel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNuméro" + "\n" +
		"300 ##$aNote générale" + "\n" +
		"305 ##$aNote sur l'édition" + "\n" +
		"320 ##$aNote sur les Bibliographies et Index" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNuméro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif à l'oeuvre ou à l'expression$bPrénom$4070" + "\n" +
		"701 #1$aNom Co-auteur$bPrénom$4070" + "\n" +
		"702 #1$aNom Auteur relatif à la manifestation ou à l'item$bPrénom$4Code de Fonction" + "\n" +
		"712 02$a@Nom Collectivité auteur relatif à la manifestation ou à l'item$4Code de Fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerMultimedia ()
{ // Ce script permet de créer une notice de document multimedia Za
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aZax" + "\n" +
		"010 ##$AISBN" + "\n" +
		"073 #0$aNuméro EAN" + "\n" +
		"181 ##$P01$cCode du type de contenu"  + "\n" +
		"182 ##$P01$cCode du type de médiation"  + "\n" +
		"183 ##$P01$aCode du type de support matériel" + "\n" +
		"181 ##$P02$cCode du type de contenu"  + "\n" +
		"182 ##$P02$cCode du type de médiation"  + "\n" +
		"183 ##$P02$aCode du type de support matériel" + "\n" +
		"200 1#$a@Titre$eComplément du Titre$f1re mention de responsabilité$gMention de responsabilité de fonction différente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance matérielle$cMention d'ill.$dDimensions$eMatériel d'accompagnement" + "\n" +
		"215 ##$aImportance matérielle$cMention d'ill.$dFormat$eMatériel d'accompagnement(2ème support).." + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNuméro" + "\n" +
		"300 ##$aNote générale" + "\n" +
		"305 ##$aNote sur l'édition" + "\n" +
		"307 ##$aNote sur la collation" + "\n" +
		"320 ##$aNote sur les Bibliographies et Index" + "\n" +
		"336 ##$aNote sur le type de fichier informatique" + "\n" +
		"337 ##$aNote sur les détails techniques (fichiers informatiques)" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNuméro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif à l'oeuvre ou à l'expression$bPrénom$4070" + "\n" +
		"701 #1$aNom Co-auteur$bPrénom$4070" + "\n" +
		"702 #1$aNom Auteur relatif à la manifestation ou à l'item$bPrénom$4Code de Fonction");
	application.activeWindow.codedData = true;
}

function CAT_creerNoticeRCR ()
{ // Ce script permet de créer une notice de RCR Tw
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTw6" + "\n" +
		"R100 $aNom Tutelle$bSous division$cQualificatif géographique" + "\n" +
		"R110 $aOrganisme affiliation " + "\n" +
		"R120 $aNom complet développé de l'établissement$bSous-division$cQualificatif géographique" + "\n" +
		"R121 $aIntitulé du CADIST" + "\n" +
		"R122 $aAutre nom de l'établissement (sigle, abréviations et autres)" + "\n" +
		"R130 $aCode du type d'établissement" + "\n" +
		"R140 $aNuméro RCR" + "\n" +
		"R150 $aParticipation à un réseau documentaire autre que le Sudoc" + "\n" +
		"R160 $aNote sur l'identification de l'établissement" + "\n" +
		"R200 $0Nom de l'établissement$aAdresse Physique$bMention Complémentaire$cMention Complémentaire$dLieu-dit$eCode postal$fVille$gCedex" + "\n" +
		"R201 $0Nom de l'établissement$bAdresse Postale$cMention Complémentaire$cMention Complémentaire$dLieu-dit$eCode postal$fVille$gCedex" + "\n" +
		"R210 $aTéléphone Renseignements$bTéléphone Service de PRET" + "\n" +
		"R211 $aFax" + "\n" +
		"R220 $aAdresse Web de la bibliothèque$bAdresse Web du Catalogue en Ligne$dAdresse électronique du service de renseignements" + "\n" +
		"R230 $aAdresse électronique PIB(ccfr)$bAdresse électronique PEB(Sudoc)" + "\n" +
		"R240 $aAutre adresse électronique" + "\n" +
		"R250 $aPrécision sur la localisation" + "\n" +
		"R300 $aAnnée création de l'établissement:AAAA" + "\n" +
		"R305 $aNom précédent de l'établissement" + "\n" +
		"R310 $aHistorique" + "\n" +
		"R410 $aNom des Organismes associés$bNature des liens$cN°RCR$3N°PPN de la notice liée$eCode CR Sudoc-PS$yN°ILN_XXX " + "\n" +
		"R440 $aNote sur les organismes associés" + "\n" +
		"R500 $aOuvertures" + "\n" +
		"R510 $aFermetures" + "\n" +
		"R520 $aConditions d'accès" + "\n" +
		"R530 $aNotes particulières sur l'accès" + "\n" +
		"R610 $aCode Dewey$bPoint d'accès autorisé - nom commun Rameau" + "\n" +
		"R620 $aDescription de la collection" + "\n" +
		"R800 $aAccès à des Bases de données [Oui/Non]$bNom des BDD$cConditions d'utilisation" + "\n" +
		"R810 $aRenseignement Bibliographiques Par téléphone [Oui/Non]$bpar Courrier [Oui/Non]$cpar Fax [Oui/Non]$dpar Messagerie [Oui/Non]$eConditions" + "\n" +
		"R820 $aRéservation de documents [Oui/Non]$bTypes de doc.$cConditions" + "\n" +
		"R830 $aBibliographies [Oui/Non]$bConditions" + "\n" +
		"R840 $aPhotocopie [Oui/Non]$bMicrofilmage [Oui/Non]$cMicrofichage [Oui/Non]$dNumérisation [Oui/Non]$eAutres Services de reproduction$fPrécisions$gConditions" + "\n" +
		"R850 $aPeb [Oui/Non]$bConditions" + "\n" +
		"R860 $aConsultation sur Place [Oui/Non]$bPrêt à Domicile [Oui/Non]$cConditions" + "\n" +
		"R870 $aPortage à domicile [Oui/Non]$bConditions" + "\n" +
		"R880 $aAutres services$bConditions" + "\n" +
		"R890 $aNotes sur les services proposés" + "\n" +
		"R901 $aParticipation à un réseau documentaire$bAutre réseau" + "\n" +
		"R910 $aClassification utilisée" + "\n" +
		"R920 $aNotes sur Catalogues spécifiques" + "\n" +
		"R930 $aDocumentation de l'établissement" + "\n" +
		"R940 $aPublications de l'établissement" + "\n" +
		"R950 $aSudoc" + "\n" +
		"R960 $aDocuments consultables sur l'établissement" + "\n" +
		"R970 $aSystème d'information" + "\n" +
		"R980 $aEquipement spéciaux (handicapés)" + "\n" +
		"R999 $aInformations complémentaires (ex:Caféteria)");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerPartition ()
{ // Ce script permet de créer une notice de partition Ma
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aMax3" + "\n" +
		"013 ##$aISMN" + "\n" +
		"071 31$aNuméro d'éditeur" + "\n" +
		"181 ##$P01$cntm" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du Titre$f1re mention de responsabilité$gMention de responsabilité de fonction différente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"208 ##$aMention spécifique de musique imprimée (Format)$dMention spécifique parallèle de musique imprimée" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance matérielle$cMention d'ill.$dDimensions$eMatériel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNuméro" + "\n" +
		"300 ##$aNote générale" + "\n" +
		"305 ##$aNote sur l'édition" + "\n" +
		"320 ##$aNote sur les Bibliographies et Index" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNuméro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$3027244601$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif à l'oeuvre ou à l'expression$bPrénom$4230" + "\n" +
		"701 #1$aNom Co-auteur$bPrénom$4230" + "\n" +
		"702 #1$aNom Auteur relatif à la manifestation ou à l'item$bPrénom$4Code de Fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerPeriodique ()
{ // Ce script permet de créer une notice de périodique imprimé Ab
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAbx3" + "\n" +
		"181 ##$P01$ctxt"+ "\n" +"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre propre$eComplément du Titre$f1re mention de responsabilité$gMention de responsabilité de fonction différente" + "\n" +
		"207 #0$aNumérotation : indication de date et de volume" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance matérielle$cMention d'ill.$dDimensions$eMatériel d'accompagnement" + "\n" +
		"326 ##$aPériodicité$bDates" + "\n" +
		"421 ##$t@Titre Supplément" + "\n" +
		"422 ##$t@Titre Publication-mère du supplément" + "\n" +
		"430 ##$t@Titre Suite de" + "\n" +
		"440 ##$t@Titre Devient" + "\n" +
		"451 ##$t@Titre Autre édition sur le même support" + "\n" +
		"452 ##$t@Titre Autre édition sur un autre support" + "\n" +
		"517 ##$a@Autres variantes du titre" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"710 02$a@Nom Collectivité Auteur relatif à l'oeuvre ou à l'expression$4651" + "\n" +
		"711 02$a@Nom Collectivité co-Auteur relatif à l'oeuvre ou à l'expression$4651" + "\n" +
		"712 02$a@Nom Collecteur Auteur relatif à la manifestation ou à l'item$4Code de Fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerPeriodElectr ()
{ // Ce script permet de créer une notice de périodique électronique Ob
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aObx" + "\n" +
		"106 $az" + "\n" +
		"181 ##$P01$ctxt"+ "\n" + "182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre propre$eComplément du Titre$f1re mention de responsabilité$gMention de responsabilité de fonction différente" + "\n" +
		"207 #0$aNumérotation : indication de date et de volume" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication" + "\n" +
		"326 ##$aPériodicité$bDates" + "\n" +
		"336 ##$a" + "\n" +
		"371 .#$a" + "\n" +
		"421 ##$t@Titre Supplément" + "\n" +
		"422 ##$t@Titre Publication-mère du supplément" + "\n" +
		"430 ##$t@Titre Suite de" + "\n" +
		"440 ##$t@Titre Devient" + "\n" +
		"451 ##$t@Titre Autre édition sur le même support" + "\n" +
		"452 ##$t@Titre Autre édition sur un autre support" + "\n" +
		"517 ##$a@Autres variantes du titre" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"710 02$a@Nom Collectivité Auteur relatif à l'oeuvre ou à l'expression$4651" + "\n" +
		"711 02$a@Nom Collectivité co-Auteur relatif à l'oeuvre ou à l'expression$4651" + "\n" +
		"712 02$a@Nom Collecteur Auteur relatif à la manifestation ou à l'item$4Code de Fonction" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'accès est réservé, créer une E856)");
	application.activeWindow.codedData = true;
}


function CAT_creerPersonnephysique ()
{ // Ce script permet de créer une notice d'autorité personne physique Tp5
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTp5" + "\n" +
		"106 ##$a0$b1$c0"+ "\n" +
		"200 # $90y$aNom de famille$bPrénom$fannées d'existence AAAA-AAAA" + "\n" +
		"340 ##$aNote biographique (informations à justifier par des sources mentionnées en zone 810)" + "\n" +
		"400 # $9#y$aNom de famille$bPrénom = Renvoi(s) facultatif(s)" + "\n" +
		"810 ##$aOBLIGATOIRE Référence du document pour lequel est créée la présente autorité Titre / Auteur, date" + "\n" +
		"810 ##$aDocument(s) de référence permettant d'établir les variantes éventuelles du nom 200 + 400, les informations biographiques 340, etc.$bCiter ici les informations trouvée dans la source Zone 810 répétable pour chaque source");
	application.activeWindow.codedData = true;
}

function CAT_creerPropositionRameau ()
{ // Ce script permet de créer une proposition rameau Td3
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTd3" + "\n" +
		"250 ##$8frefre$9#y$aNouveau Point d'accès autorisé - nom commun Rameau proposé" + "\n" +
		"450 ##$8frefre$9#y$aVariante de point d'accès 1" + "\n" +
		"450 ##$8frefre$9#y$aVariante de point d'accès 2" + "\n" +
		"810 ##$aOBLIGATOIRE Référence du document pour lequel est proposé le nouveau Point d'accès Titre / Auteur, date" + "\n" +
		"810 ##$aDocument de référence permettant de justifier, définir, ... le concept proposé en Point d'accès Titre / Auteur, date");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerMusique ()
{ // Ce script permet de créer une notice de document sonore musical Ga
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aGax3" + "\n" +
		"013 ##$aISMN" + "\n" +
		"071 31$aNuméro d'éditeur" + "\n" +
		"181 ##$P01$cprm" + "\n" + "182 ##$P01$cs" + "\n" +
		"183 ##$P01$aCode du type de support matériel" + "\n" +
		"200 1#$a@Titre$eComplément du Titre$fCompositeur principal$gAutres (compositeurs, interprètes, instrumentistes...)" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance matérielle$cMention d'ill.$dDimensions$eMatériel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNuméro" + "\n" +
		"300 ##$aNote générale" + "\n" +
		"306 ##$aNote sur l'adresse bibliographique" + "\n" +
		"322 ##$aNote sur le générique" + "\n" +
		"323 ##$aNote sur les interprètes" + "\n" +
		"359 2#$vTomaison / Numérotation de l'unité physique$btable des matières de niveau 1$pNuméro de page ou de plage$ctable des matières de niveau 2" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNuméro" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif à l'oeuvre ou à l'expression$bPrénom$4230" + "\n" +
		"701 #1$aNom Co-auteur$bPrénom$4230" + "\n" +
		"702 #1$aNom Auteur relatif à la manifestation ou à l'item$bPrénom$4Code de Fonction" + "\n" +
		"716 ##$aMarque commerciale - mention de responsabilité$4Code de fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerSonore ()
{ // Ce script permet de créer une notice de document sonore non musical Na
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aNax3" + "\n" +
		"013 ##$aISMN" + "\n" +
		"071 31$aNuméro d'éditeur" + "\n" +
		"181 ##$P01$csnd" + "\n" +
		"182 ##$P01$cs" + "\n" +
		"183 ##$P01$aCode du type de support matériel" + "\n" +
		"200 1#$a@Titre$eComplément du Titre$fCompositeur principal$gAutres (compositeurs, interprètes, instrumentistes...)" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance matérielle$cMention d'ill.$dDimensions$eMatériel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNuméro" + "\n" +
		"300 ##$aNote générale" + "\n" +
		"306 ##$aNote sur l'adresse bibliographique" + "\n" +
		"322 ##$aNote sur le générique" + "\n" +
		"323 ##$aNote sur les interprètes" + "\n" +
		"359 2#$vTomaison / Numérotation de l'unité physique$btable des matières de niveau 1$pNuméro de page ou de plage$ctable des matières de niveau 2" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNuméro" + "\n" +
		"600 #1$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom Auteur relatif à l'oeuvre ou à l'expression$bPrénom$4230" + "\n" +
		"701 #1$aNom Co-auteur$bPrénom$4230" + "\n" +
		"702 #1$aNom Auteur relatif à la manifestation ou à l'item$bPrénom$4Code de Fonction" + "\n" +
		"716 ##$aMarque commerciale - mention de responsabilité$4Code de fonction");
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20220525 : mise à jour MRX
// 20220622 : mise à jour MRX
function CAT_creerTheseElectroniqueReproduction ()
{ // Ce script permet de créer une notice de thèse électronique Oa (Reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"017 70$aDOI$2DOI" + "\n" +
		"029 ##$aFR$bNuméro national de thèse (aaaaCODEnnnn)" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de thèse" + "\n" +
		"214 #2$a $c $d" + "\n" +
		"300 ##$a(s'il y a lieu)Thèse soutenue en co-tutelle" + "\n" +
		"311 ##$a(s'il y a lieu)Thèse soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'école doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'équipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$zReproduction de$bThèse d'Etat--Thèse de doctorat--Thèse de 3e cycle--Thèse d'université--Thèse de docteur-ingénieur--Thèse d'exercice$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (préciser le format)" + "\n" +
		"371 .#$a" + "\n" +
		"455 ##$t@Lien vers la thèse originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2rameau" + "\n" +
		"606 ##$aACCES SUJET - NOM COMMUN$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Directeur de thèse$bPrénom$4727" + "\n" +
		"701 #1$aNom Président du jury$bPrénom Président du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, établissement d'inscription, etc)$4985" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'accès est réservé, créer une E856)"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20220525 : mise à jour MRX
function CAT_creerTheseImprimeOriginelle ()
{ // Ce script permet de créer une notice de thèse imprimée Aa (Document originel)corrige le 2013-09-03 MTE selon Assistance 4174
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$bNuméro national de thèse (aaaaCODEnnnn)" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bm$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de thèse" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"300 ##$a(s'il y a lieu)Thèse soutenue en co-tutelle" + "\n" +
		"311 ##$a(s'il y a lieu)Thèse soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'école doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'équipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$bThèse d'Etat--Thèse de doctorat--Thèse de 3e cycle--Thèse d'université--Thèse de docteur-ingénieur--Thèse d'exercice$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)Thèse confidentielle jusqu'au (date exacte) OU jusqu'en (année)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2rameau" + "\n" +
		"606 ##$aACCES SUJET - NOM COMMUN$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Directeur de thèse$bPrénom$4727" + "\n" +
		"701 #1$aNom Président du jury$bPrénom Président du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, établissement d'inscription, etc)$4985"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
// 20220525 : mise à jour MRX
function CAT_creerTheseImprimeReproduction ()
{ // Ce script permet de créer une notice de thèse imprimée Aa (Reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$bNuméro national de thèse (aaaaCODEnnnn)" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de thèse" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse du diffuseur$cNom diffuseur$dAnnée de diffusion" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"300 ##$a(s'il y a lieu)Thèse soutenue en co-tutelle" + "\n" +
		"311 ##$a(s'il y a lieu)Thèse soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'école doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'équipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie p.xxx-xxx. Index" + "\n" +
		"328 #0$zReproduction de$bThèse d'Etat--Thèse de doctorat--Thèse de 3e cycle--Thèse d'université--Thèse de docteur-ingénieur--Thèse d'exercice$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"455 ##$t@Lien vers la thèse originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Directeur de thèse$bPrénom$4727" + "\n" +
		"701 #1$aNom Président du jury$bPrénom Président du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, établissement d'inscription, etc)$4985"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerTheseImprimeEditionCommerciale ()
{ // Ce script permet de créer une notice de thèse imprimée Aa (Edition commerciale)
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
		"200 1#$a@Titre$eComplément du titre$fAuteur" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aNombre de vol. (nbr. de p. ou f.)$cMention d'ill.$dDimensions$eMatériel d'accompagnement" + "\n" +
		"320 ##$aBibliographie p.xxx-xxx. Index" + "\n" +
		"328 #0$zTexte remanié de$bThèse d'Etat--Thèse de doctorat--Thèse de 3e cycle--Thèse d'université--Thèse de docteur-ingénieur--Thèse d'exercice$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"451 ##$t@Lien vers la thèse originelle sur le même support" + "\n" +
		"452 ##$t@Lien vers la thèse originelle sur un support différent" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2fmesh" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070"
	);
	application.activeWindow.codedData = true;
}

// 20170316 : modification RDA FR 2017
// 20200101 : modification TB 2020
function CAT_creerAudiovisuel ()
{ // Ce script permet de créer une notice de document audiovisuel Ba, choisir 181
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aBax3" + "\n" +
		"071 41$aNuméro d'éditeur commercial" + "\n" +
		"073 #0$aCode-à-barres commercial" + "\n" +
		"181 ##$P01$ctdi ou tdm"+ "\n" +
		"182 ##$P01$cv" + "\n" +
		"183 ##$P01$avcc" + "\n" +
		"200 1#$a@Titre$eComplément de Titre$f1re mention de responsabilité$gMention de responsabilité de fonction différente" + "\n" +
		"205 ##$aEdition" + "\n" +
		"214 #0$aLieu de publication$bAdresse de l'éditeur$cNom de l'éditeur$dDate de publication [CONSULTER LE GUIDE METHODOLOGIQUE POUR LE BON USAGE DES INDICATEURS ET SOUS-ZONES NECESSAIRES SELON LE TYPE DE MENTION]" + "\n" +
		"215 ##$aImportance matérielle$cMention d'ill.$dDimensions$eMatériel d'accompagnement" + "\n" +
		"225  #$a@Titre de la Collection$xISSN$vNuméro" + "\n" +
		"300 ##$aNote sur les versions linguistiques (ex: Sous-titres pour les sourds et les malentendants...)" + "\n" +
		"305 ##$aNote sur l'historique de l'oeuvre (ex: Enregistrement public au théâtre...)" + "\n" +
		"306 ##$aNote sur l'adresse bibliographique (ex: Copyright)" + "\n" +
		"307 ##$aFormat de l'image" + "\n" +
		"312 ##$aNote sur les titres associées (ex: D'après le roman...)" + "\n" +
		"320 ##$aNote sur les documents annexes (ex: Filmographie, galeries photo, etc.)" + "\n" +
		"322 ##$aNote sur le générique" + "\n" +
		"323 ##$aNote sur les interprètes" + "\n" +
		"327  #$aNote de contenu" + "\n" +
		"334 ##$aNote sur les récompenses" + "\n" +
		"517 ##$aTitres associées" + "\n" +
		"410 ##$t@Lien au titre de la Collection$vNuméro" + "\n" +
		"600 # $aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"700 #1$aNom du Réalisateur$bPrénom du Réalisateur$4300" + "\n" +
		"701 #1$aNom Co-auteur$bPrénom$4Code de Fonction" + "\n" +
		"702 #1$aNom Auteur relatif à la manifestation ou à l'item$bPrénom$4Code de Fonction" + "\n" +
		"712 02$aNom Collectivité auteur relatif à la manifestation ou à l'item$4Code de Fonction");
	application.activeWindow.codedData = true;
}


// 20180103 : Création
// 20200101 : modification TB 2020
function CAT_creerEchantillonAccompagne ()
{ //Ce script permet de créer une notice d'échantillon avec matériel d'accompagnement
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
		"200 1#$a@Nom de l'échantillon$e[échantillon]$fProducteur de l'échantillon" + "\n" +
		"214 #1$aLieu de production$d[20XX]" + "\n" +
		"215 ##$a1 échantillon$cComposant de l'échantillon$dDimensions de l'échantillon (XX x XX x XX cm)- voir exemples sur GM $eLivret technique (xx p., xx cm)" + "\n" +
		"300 ##$aDescription de l'échantillon et du livret technique si besoin" + "\n" +
		"345 ##$uSite web source de l'acquisition (FACULTATIF)" + "\n" +
		"463 ##$t@Titre du livret technique d'accompagnement" + "\n" +
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$3027793079$2rameau" + "\n" +
		"710 02$a@Collectivité productrice de l'échantillon$4070" + "\n" +
		"830 ##$aVérifier impérativement les données codées en 101, 102, modifier les valeurs données par défaut, si besoin. Compléter la zone 117 en attribuant les codes pertinents par rapport à l'objet (voir la liste des codes sur le GM). Supprimer la L606 si aucune indexation utilisant un thésaurus local n'est envisagée. Supprimer cette zone 830 avant de valider la notice." + "\n" +
		"L606 ##$aSujet$xEchantillons$2Nom du thésaurus local utilisé");
	application.activeWindow.codedData = true;
}

// 20180103 : Création
// 20200101 : modification TB 2020
function CAT_creerObjet ()
{ //Ce script permet de créer une notice d'objet
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
		"606 ##$aSujet$xSubdivision de sujet$yGéographique$zChronologique$2rameau" + "\n" +
		"608 ##$aIndexation Forme ou Genre Rameau$2rameau" + "\n" +
		"710 02$a@Collectivité productrice de l'objet$4070" + "\n" +
		"830 ##$aVérifier impérativement les données codées en 101, 102, modifier les valeurs données par défaut, si besoin. Compléter la zone 117 en attribuant les codes pertinents par rapport à l'objet (voir la liste des codes sur le GM). Supprimer la L606 si aucune indexation utilisant un thésaurus local n'est envisagée. Supprimer cette zone 830 avant de valider la notice." + "\n" +
		"L606 ##$aSujet$2Nom du thésaurus local utilisé"
	);
	application.activeWindow.codedData = true;
}

// 20180531 : Création
// 20200101 : modification TB 2020
function CAT_creerArticleImp ()
{ //Ce script permet de créer une notice d'article Archive
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAsx3" + "\n" +
		"100 0#$a20XX" + "\n" +
		"101 0#$afre" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$c0$d0$fy$gy" + "\n" +
		"200 1#$a@Titre de l'article$ecomplément de titre$f1e mention de responsabilité$g2e mention de responsabilité" + "\n" +
		"209 ##$btome ou volume$cannée$dnuméro ou fascicule$hx-x (ne pas indiquer p.)" + "\n" +
		"215 ##$a[nombre de pages]$cmention d'ill." + "\n" +
		"305 ##$aIn : Titre-clé de la revue dont l'article est extrait, ISSN. - Vol., tomaison, n° de fascicule" + "\n" +
		"320 ##$aBibliographie ou index" + "\n" +
		"L606 ##$aSujet$2Nom du thésaurus local utilisé" + "\n" +
		"606 ##$aSujet$2rameau" + "\n" +
		"463 ##$t@Titre de la revue$vnuméro/année de la revue" + "\n" +
		"700 #1$aNom Auteur relatif à l'oeuvre ou à l'expression$bPrénom$4code de fonction" + "\n" +
		"701 #1$aCo-auteur relatif à l'oeuvre ou à l'expression$bPrénom$4code de fonction" + "\n" +
		"830 #$aSupprimer la L606 si aucune indexation utilisant un thésaurus local n'est envisagée. Supprimer cette zone 830 avant de valider la notice."
	);
	application.activeWindow.codedData = true;
}

// 20200101 : Création
function CAT_creerPropositionFormeGenre ()
{ // Ce script permet de créer une proposition rameau Forme/Genre Tf3
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre e", false);
	application.activeWindow.title.insertText(
		"008 $aTf3" + "\n" +
		"280 ##$8frefre$9#y$aNouveau Point d'accès autorisé - Forme ou Genre Rameau proposé" + "\n" +
		"480 ##$8frefre$9#y$aVariante de point d'accès 1" + "\n" +
		"480 ##$8frefre$9#y$aVariante de point d'accès 2" + "\n" +
		"810 ##$aOBLIGATOIRE Référence du document pour lequel est proposé le nouveau Point d'accès Titre / Auteur, date" + "\n" +
		"810 ##$aDocument de référence permettant de justifier, définir, ... le concept proposé en Point d'accès Titre / Auteur, date"
	);
	application.activeWindow.codedData = true;
}

// 20220603 : création MRX
// 20220622 : mise à jour MRX
function CAT_creerTheseRemanieeAuteur ()
{ // Ce script permet de créer une notice de thèse électronique Oa (version remaniée par l'auteur hors publication commerciale)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de thèse" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse de diffusion$cNom du diffuseur$dDate de diffusion" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$zTexte remanié de$bThèse d'Etat--Thèse de doctorat--Thèse de 3e cycle--Thèse d'université--Thèse de docteur-ingénieur--Thèse d'exercice$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (préciser le format)" + "\n" +
		"45X ##$t@Lien vers la thèse originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"856 4#$qFormat$uAdresse URL$zAccès au texte intégral"
	);
	application.activeWindow.codedData = true;
}

// 20220413 : Création
// 20220525 : Mise à jour MRX
// 20220622 : Mise à jour MRX
function CAT_creerMemoireElec ()
{ // Ce script permet de créer une notice de mémoire nativement électronique Oa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"029 ##$aFR$mNuméro du mémoire" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de mémoire" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$bMention du travail universitaire et nature du diplôme$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (préciser le format)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Directeur de mémoire$bPrénom$4003" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'accès est réservé, créer une E856)"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Création
// 20220622 : Mise à jour MRX
function CAT_creerMemoireElecReproduction ()
{ // Ce script permet de créer une notice de mémoire électronique Oa (reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"029 ##$aFR$mNuméro du mémoire" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de mémoire" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse de diffusion$cNom du diffuseur$dDate de diffusion" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$zReproduction de$bMention du travail universitaire et nature du diplôme$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (préciser le format)" + "\n" +
		"455 ##$t@Lien vers le mémoire originel" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Directeur de mémoire$bPrénom$4003" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'accès est réservé, créer une E856)"
	);
	application.activeWindow.codedData = true;
}

// 20220413 : Création
// 20220525 : Mise à jour MRX
function CAT_creerMemoireImpr ()
{ // Ce script permet de créer une notice de mémoire imprimé Aa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$mNuméro du mémoire" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"106 ##$ar" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de mémoire" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$bMention du travail universitaire et nature du diplôme$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)Mémoire confidentiel jusqu'au (date exacte) OU jusqu'en (année)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Directeur de mémoire$bPrénom$4003" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"711 02$a@Etablissement de soutenance$4295"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Création
function CAT_creerMemoireImprReproduction ()
{ // Ce script permet de créer une notice de mémoire imprimé Aa (reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$mNuméro du mémoire" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$fy$gy" + "\n" +
		"106 ##$ar" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de mémoire" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse de diffusion$cNom du diffuseur$dDate de diffusion" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$zReproduction de$bMention du travail universitaire et nature du diplôme$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"455 ##$t@Lien vers le mémoire originel" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Directeur de mémoire$bPrénom$4003" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"711 02$a@Etablissement de soutenance$4295"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Création
function CAT_creerHDRImprVO ()
{ // Ce script permet de créer une notice de HDR imprimé Aa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$oNuméro de la HDR (numéro de HDR)" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"106 ##$ar" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom de l'encadrant de la HDR" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$bHabilitation à diriger des recherches$cDiscipline (libellé complet)$eEtablissement (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)HDR confidentielle jusqu'au (date exacte) OU jusqu'en (année)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Encadrant HDR$bPrénom$4003" + "\n" +
		"701 #1$aNom Président du jury$bPrénom Président du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre partenaire de recherche (composante, établissement d'inscription, etc)$4985"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Création
function CAT_creerHDRImprReproduction ()
{ // Ce script permet de créer une notice de HDR imprimée Oa (Reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$oNuméro de la HDR (numéro de HDR)" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom de l'encadrant de HDR" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse du diffuseur$cNom diffuseur$dAnnée de diffusion" + "\n" +
		"215 ##$ax vol. (xxx p.)$dDimensions" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'équipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie p.xxx-xxx. Index" + "\n" +
		"328 #0$zReproduction de$bHabilitation à diriger des recherches$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"455 ##$t@Lien vers la HDR originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Encadrant HDR$bPrénom$4003" + "\n" +
		"701 #1$aNom Président du jury$bPrénom Président du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, établissement d'inscription, etc)$4985"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Création
// 20220622 : Mise à jour MRX
function CAT_creerHDRElecVO ()
{ // Ce script permet de créer une notice de mémoire nativement électronique Oa
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"029 ##$aFR$oNuméro de la HDR (numéro de HDR)" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$b7$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom de l'encadrant de HDR" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$bHabilitation à diriger des recherches$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (préciser le format)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Encadrant HDR$bPrénom$4003" + "\n" +
		"701 #1$aNom Président du jury$bPrénom Président du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre partenaire de recherche (composante, établissement d'inscription, etc)$4985" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'accès est réservé, créer une E856)"
	);
	application.activeWindow.codedData = true;
}

// 20220525 : Création
// 20220622 : Mise à jour MRX
function CAT_creerHDRElecReproduction ()
{ // Ce script permet de créer une notice de HDR électronique Oa (Reproduction)
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aOax3" + "\n" +
		"029 ##$aFR$oNuméro de la HDR (numéro de HDR)" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bv$ba$c0$d0$fy$gy" + "\n" +
		"135 ##$ad$br" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cc" + "\n" +
		"183 ##$P01$aceb" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom de l'encadrant de HDR" + "\n" +
		"214 #2$aLieu de diffusion$bAdresse de diffusion$cNom du diffuseur$dDate de diffusion" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$zReproduction de$bHabilitation à diriger des recherches$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"337 ##$aUn logiciel capable de lire un fichier au format (préciser le format)" + "\n" +
		"455 ##$t@Lien vers la HDR originelle" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Encadrant HDR$bPrénom$4003" + "\n" +
		"701 #1$aNom Président du jury$bPrénom Président du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre partenaire de recherche (composante, établissement d'inscription, etc)$4985" + "\n" +
		"856 4#$qFormat$uAdresse URL (si l'accès est réservé, créer une E856)"
	);
	application.activeWindow.codedData = true;
}

// 2022060325 : création MRX
function CAT_creerTheseImprPerdue ()
{ // Ce script permet de créer une notice de thèse imprimée Aa perdue
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$bNuméro national de thèse (aaaaCODEnnnn)" + "\n" +
		"035 ##$aTHOA[code court étab]" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bm$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de thèse" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$a(si informations disponibles)x vol. (xxx p.)$dDimensions" + "\n" +
		"300 ##$a(s'il y a lieu)Thèse soutenue en co-tutelle" + "\n" +
		"303 ##$aNotice élaborée à partir de la reproduction de la thèse : la version de soutenance n'existe plus. OU Notice élaborée à partir de [mention des sources] : la version de soutenance n'existe plus.OU Notice élaborée à partir de [mention de sources]. Le document qui a justifié l'obtention du diplôme n'existe plus." + "\n" +
		"311 ##$a(s'il y a lieu)Thèse soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'école doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'équipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$bThèse d'Etat--Thèse de doctorat--Thèse de 3e cycle--Thèse d'université--Thèse de docteur-ingénieur--Thèse d'exercice$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)Thèse confidentielle jusqu'en (année)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Directeur de thèse$bPrénom$4727" + "\n" +
		"701 #1$aNom Président du jury$bPrénom Président du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, établissement d'inscription, etc)$4985" + "\n" +
		"E316 ##$aExemplaire manquant (constaté en AAAA) OU Exemplaire manquant/incommunicable depuis AAAA, pour cause de ... OU Exemplaire manquant/incommunicable depuis AAAA, pour cause de .... Il n'existe pas de copie conforme (au contenu strictement identique) de la version de soutenance$ulien vers la notice Sudoc de la reproduction conforme OU de la version non corrigée / remaniée / commercialisée de la thèse$2Consulter la reproduction OU Consulter la version non corrigée de la thèse OU Consulter la version commercialisée de la thèse OU Consulter une version de la thèse remaniée par l'auteur"
	);
	application.activeWindow.codedData = true;
}

// 2022060325 : création MRX
function CAT_creerTheseImprNonDeposee ()
{ // Ce script permet de créer une notice de thèse imprimée Aa non déposée
	application.activeWindow.codedData = false;
	application.activeWindow.command("cre", false);
	application.activeWindow.title.insertText(
		"008 $aAax3" + "\n" +
		"029 ##$aFR$bNuméro national de thèse (aaaaCODEnnnn)" + "\n" +
		"035 ##$aTHOA[code court étab]" + "\n" +
		"100 0#$aAnnée de soutenance" + "\n" +
		"101 0#$afre$dfre$deng" + "\n" +
		"102 ##$aFR" + "\n" +
		"104 ##$ak$by$cy$dba$e0$ffre" + "\n" +
		"105 ##$bm$ba$c0$d0$e1$fy$gy" + "\n" +
		"181 ##$P01$ctxt" + "\n" +
		"182 ##$P01$cn" + "\n" +
		"183 ##$P01$anga" + "\n" +
		"200 1#$a@Titre$eComplément du titre$fAuteur$gsous la direction de Prénom Nom du directeur de thèse" + "\n" +
		"214 #1$dDate de production" + "\n" +
		"215 ##$a(si informations disponibles)x vol. (xxx p.)$dDimensions" + "\n" +
		"300 ##$a(s'il y a lieu)Thèse soutenue en co-tutelle" + "\n" +
		"303 ##$aNotice élaborée à partir de la version non corrigée de la thèse : la version de soutenance n'a pas été déposée OU Description établie à partir de (préciser les documents administratifs utilisés pour établir la description)" + "\n" +
		"305 ##$a(s'il y a lieu) En l'absence de dépôt de la version définitive de la thèse, la version non corrigée fait office de dépôt légal. OU (si thèse non déposée) La version de soutenance n'existe pas. Le docteur n'a déposé aucun exemplaire de sa thèse pour archivage et communication." + "\n" +
		"311 ##$a(s'il y a lieu)Thèse soutenue sur un ensemble de travaux" + "\n" +
		"314 ##$aEcole(s) doctorale(s) : Nom de l'école doctorale" + "\n" +
		"314 ##$aPartenaire(s) de recherche : Nom du Laboratoire (Laboratoire) ; Nom de l'équipe de recherche (Equipe de recherche) ; Nom de l'entreprise (Entreprise) ; Nom de la fondation (Fondation) ; Nom d'un autre partenaire (Expliciter le type de partenaire)" + "\n" +
		"314 ##$aAutre(s) contribution(s) : Prénom Nom (Président du jury) ; Prénom Nom, Prénom Nom (Membre(s) du jury) ; Prénom Nom (Rapporteur(s))" + "\n" +
		"320 ##$aBibliographie : xxx réf." + "\n" +
		"328 #0$bThèse d'Etat--Thèse de doctorat--Thèse de 3e cycle--Thèse d'université--Thèse de docteur-ingénieur--Thèse d'exercice$cDiscipline (libellé complet)$eUniversité (voir table des libellés du Guide Méthodologique)$dAnnée de soutenance" + "\n" +
		"330 ##$aRésumé français$zfre" + "\n" +
		"330 ##$aRésumé anglais$zeng" + "\n" +
		"371 ##$a(s'il y a lieu)Thèse confidentielle jusqu'en (année)" + "\n" +
		"541 ##$a@Titre traduit en anglais$eComplément du Titre$zeng" + "\n" +
		"600 ##$aPersonne$xSubdivision de sujet$zChronologique$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$2rameau" + "\n" +
		"606 ##$aAccès sujet - nom commun$3040839486$2fmesh" + "\n" +
		"608 ##$3027253139$2rameau" + "\n" +
		"610 0#$aMots clés libres$z" + "\n" +
		"686 ##$aCode TEF$2TEF" + "\n" +
		"700 #1$aNom Auteur$bPrénom$4070" + "\n" +
		"701 #1$aNom Directeur de thèse$bPrénom$4727" + "\n" +
		"701 #1$aNom Président du jury$bPrénom Président du jury$4956" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Membre du jury$bPrénom Membre du jury$4555" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"701 #1$aNom Rapporteur$bPrénom Rapporteur$4958" + "\n" +
		"711 02$a@Etablissement de soutenance$4295" + "\n" +
		"711 02$a@Etablissement de cotutelle$4995" + "\n" +
		"711 02$a@Ecole doctorale$4996" + "\n" +
		"711 02$a@Laboratoire$4981" + "\n" +
		"711 02$a@Autre type de partenaire (composante, institut, établissement d'inscription, etc)$4985" + "\n" +
		"E316 ##$aExemplaire manquant : le docteur n'a jamais déposé la version corrigée, validée, de sa thèse. OU Exemplaire manquant : le docteur n'a jamais déposé la version validée en soutenance de sa thèse. OU Exemplaire manquant : le docteur n'a jamais déposé sa thèse.$u(s'il y a lieu)lien vers la notice Sudoc de la version non corrigée--commercialisée--remaniée par l'auteur$2Consulter la version non corrigée de la thèse OU Consulter la version remaniée et commercialisée de la thèse OU Consulter la version de la thèse remaniée par l'auteur."
	);
	application.activeWindow.codedData = true;
}
