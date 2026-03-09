# Cartographie des scripts WinIBW

## Perimetre

Ce document couvre les scripts dans :

- `scripts-creation-js`
- `scripts-transformation-js-et-xul`
- `scripts-fichier-de-pref`

Pour chaque script :

- role global du script ;
- fonctions ;
- parametres de chaque fonction ;
- traitement realise par chaque fonction.

---

## 1) scripts-creation-js

### 1.1 `AbesCopyRecord.js`

**Role du script**  
Affiche une aide de copie de notice.

| Fonction | Parametres | Traitement |
|---|---|---|
| `CopyRecord()` | Aucun | Affiche un message demandant d'utiliser `F5` pour copier une notice. |

### 1.2 `AFF.js`

**Role du script**  
Raccourcis d'affichage WinIBW (`AFF`).

| Fonction | Parametres | Traitement |
|---|---|---|
| `AFF_S()` | Aucun | Lance `aff s`. |
| `AFF_OJ()` | Aucun | Lance `aff oj`. |
| `AFF_OB()` | Aucun | Lance `aff ob`. |
| `AFF_KZone()` | Aucun | Pre-remplit la ligne de commande avec `aff K:`. |
| `AFF_I()` | Aucun | Lance `aff i`. |
| `AFF_Unma()` | Aucun | Lance `aff unma`. |
| `AFF_Unm()` | Aucun | Lance `aff unm`. |
| `AFF_U()` | Aucun | Lance `aff u`. |
| `hackSystemVariables()` | Aucun | Parcourt des variables systeme `P3V..` (usage debug/interne). |

### 1.3 `appui.js`

**Role du script**  
Workflow Base d'Appui -> Sudoc : recherche de lien et copie de notice.

| Fonction | Parametres | Traitement |
|---|---|---|
| `searchLink(doExact)` | `doExact` : recherche exacte (`true`) ou tronquee (`false`) | Controle le contexte, bascule sur la base d'appui, execute la commande de recherche de lien, puis gere le retour et les messages. |
| `searchLinkInAppui()` | Aucun | Wrapper de `searchLink(false)`. |
| `searchLinkExactInAppui()` | Aucun | Wrapper de `searchLink(true)`. |
| `copyRecordToSudoc()` | Aucun | Propose le mode de copie, copie la notice et applique les suppressions/ajouts de zones selon le cas. |
| `suptag(tag)` | `tag` : prefixe/numero de zone a supprimer | Supprime toutes les occurrences de zone correspondant au tag. |
| `AbesCopyNotice()` | Aucun | Copie la notice courante dans une nouvelle notice Sudoc. |
| `switchToSudoc()` | Aucun | Execute `\\bes 1.1` et referme la fenetre technique de bascule. |

### 1.4 `CAT.js`

**Role du script**  
Bibliotheque principale de macros de creation et de pre-remplissage de notices.

| Fonction | Parametres | Traitement |
|---|---|---|
| `CAT_ajout301()` | Aucun | Ajoute une zone `301`. |
| `CAT_ajout305()` | Aucun | Ajoute une zone `305`. |
| `CAT_ajoutDollar4Aut()` | Aucun | Ajoute `$4070`. |
| `CAT_ajoutDollar4Pref()` | Aucun | Ajoute `$4080`. |
| `CAT_ajoutDollar4Ill()` | Aucun | Ajoute `$4440`. |
| `CAT_ajoutDollar4Trad()` | Aucun | Ajoute `$4730`. |
| `CAT_ajoutDollar4Ed()` | Aucun | Ajoute `$4340`. |
| `CAT_ajoutRameau()` | Aucun | Ajoute `$2rameau`. |
| `CAT_ajoutFMeSH()` | Aucun | Ajoute `$2fmesh`. |
| `CAT_ajoutTexteImprime()` | Aucun | Ajoute les zones/support de texte imprime (`181/182/183`). |
| `CAT_ajoutRessourcElec()` | Aucun | Ajoute les zones support ressource electronique (`181/182`). |
| `CAT_ajoutCarte()` | Aucun | Ajoute les zones support carte (`181/182`). |
| `CAT_ajoutSon()` | Aucun | Ajoute les zones support sonore (`181/182`). |
| `CAT_ajoutImagesAnimees()` | Aucun | Ajoute la zone de support image animee. |
| `CAT_ajoutImageFixe()` | Aucun | Ajoute les zones support image fixe (`181/182`). |
| `CAT_ajoutTexteManuscrit()` | Aucun | Ajoute les zones support manuscrit (`181/182`). |
| `CAT_ajoutMicroforme()` | Aucun | Ajoute les zones support microforme (`181/182`). |
| `CAT_ajoutBraille()` | Aucun | Ajoute les zones support braille (`181/182`). |
| `CAT_ajoutMusiqueImprimee()` | Aucun | Ajoute les zones support musique imprimee (`181/182`). |
| `CAT_ajoutMusiqueBraille()` | Aucun | Ajoute les zones support musique braille (`181/182`). |
| `CAT_ajoutObjet()` | Aucun | Ajoute les zones support objet (`181/182`). |
| `CAT_ajout320()` | Aucun | Ajoute une zone `320`. |
| `CAT_dedoublonnageDED()` | Aucun | Lance la commande `ded unm`. |
| `CAT_creerAtlas()` | Aucun | Cree un gabarit de notice Atlas/Carte. |
| `CAT_creerCollection()` | Aucun | Cree un gabarit de notice Collection. |
| `CAT_creerCollectivite()` | Aucun | Cree une notice d'autorite collectivite. |
| `CAT_creerElectronique()` | Aucun | Cree une notice de monographie electronique. |
| `CAT_creerEtatDeCollection()` | Aucun | Insere un modele d'etat de collection standard. |
| `CAT_creerEtatDeCollectionCR()` | Aucun | Insere un modele d'etat de collection centre regional. |
| `CAT_creerExemplaireRetro()` | Aucun | Insere un modele d'exemplaire retro. |
| `CAT_creerMonoIMP()` | Aucun | Cree une notice de monographie imprimee. |
| `CAT_creerMultimedia()` | Aucun | Cree une notice multimedia. |
| `CAT_creerNoticeRCR()` | Aucun | Cree une notice RCR/etablissement. |
| `CAT_creerPartition()` | Aucun | Cree une notice de partition musicale. |
| `CAT_creerPeriodique()` | Aucun | Cree une notice de periodique imprime. |
| `CAT_creerPeriodElectr()` | Aucun | Cree une notice de periodique electronique. |
| `CAT_creerPersonnephysique()` | Aucun | Cree une autorite personne physique. |
| `CAT_creerPropositionRameau()` | Aucun | Cree une proposition Rameau (nom commun). |
| `CAT_creerMusique()` | Aucun | Cree une notice de document musical. |
| `CAT_creerSonore()` | Aucun | Cree une notice de document sonore. |
| `CAT_creerTheseElectroniqueReproduction()` | Aucun | Cree une notice de these electronique de reproduction. |
| `CAT_creerTheseImprimeOriginelle()` | Aucun | Cree une notice de these imprimee originelle. |
| `CAT_creerTheseImprimeReproduction()` | Aucun | Cree une notice de these imprimee de reproduction. |
| `CAT_creerTheseImprimeEditionCommerciale()` | Aucun | Cree une notice de these imprimee edition commerciale. |
| `CAT_creerAudiovisuel()` | Aucun | Cree une notice audiovisuelle. |
| `CAT_creerEchantillonAccompagne()` | Aucun | Cree une notice echantillon + accompagnement. |
| `CAT_creerObjet()` | Aucun | Cree une notice d'objet. |
| `CAT_creerArticleImp()` | Aucun | Cree une notice d'article imprime. |
| `CAT_creerPropositionFormeGenre()` | Aucun | Cree une proposition Rameau forme/genre. |

### 1.5 `CHE.js`

**Role du script**  
Raccourcis de recherche (`CHE`).

| Fonction | Parametres | Traitement |
|---|---|---|
| `CHE_baseProduction()` | Aucun | Lance `che`. |
| `CHE_basesExternes()` | Aucun | Lance `DIS CHE`. |

### 1.6 `config_abes.js`

**Role du script**  
Configuration ABES (`gConfig`) des scripts standards.

| Fonction | Parametres | Traitement |
|---|---|---|
| `insertRequiredTags()` | Aucun | Hook de post-creation (pas d'action dans cette version). |
| `needSystemSwitch()` | Aucun | Retourne `true` si un switch de systeme est necessaire avant copie. |
| `setSyntaxColour()` | Aucun | Configure les couleurs de syntaxe des sous-zones/champs. |

### 1.7 `Correspondants.js`

**Role du script**  
Exporte des adresses mail de correspondants catalogage.

| Fonction | Parametres | Traitement |
|---|---|---|
| `nouvFichier()` | Aucun | Fabrique un objet `nsILocalFile`. |
| `nouvFichierSortie()` | Aucun | Fabrique un `nsIFileOutputStream`. |
| `nouvFichierEntree()` | Aucun | Fabrique un `nsIFileInputStream`. |
| `Correspondants()` | Aucun | Pilote selection fichier, lecture notices/localisations et ecriture du rapport. |

### 1.8 `creexe.js`

**Role du script**  
Creation automatique d'exemplaire (`e01..e99`).

| Fonction | Parametres | Traitement |
|---|---|---|
| `CreexeNumero()` | Aucun | Controle le contexte de notice puis cree le premier exemplaire libre. |

### 1.9 `CTL.js`

**Role du script**  
Raccourcis de controles/suivis (`CTL`).

| Fonction | Parametres | Traitement |
|---|---|---|
| `CTL_affUsa()` | Aucun | Lance `af usa bib tou`. |
| `CTL_localisationDuJour()` | Aucun | Lance `che sel auj`. |
| `CTL_localisationAvecDate()` | Aucun | Pre-remplit `CHE SEL ... JUS ...`. |
| `CTL_creerAdresseDoublon()` | Aucun | Pre-remplit `cre adr bib <RCR> cat`. |
| `CTL_afficherAdresseDoublon()` | Aucun | Pre-remplit `Aff adr bib <RCR> cat`. |
| `CTL_modifierAdresseDoublon()` | Aucun | Pre-remplit `mod adr bib <RCR> cat`. |
| `CTL_toutesMiseAJourSurAutorite()` | Aucun | Pre-remplit `SEL MIS DEP AUJ tno e`. |
| `CTL_miseAJourPropreDuJour()` | Aucun | Pre-remplit `SEL MIS DEP AUJ par <ILN> tno t`. |
| `CTL_miseAJourPropreDepuis()` | Aucun | Pre-remplit `SEL MIS DEP <date> par <ILN> tno t`. |
| `CTL_catalogueParRCR()` | Aucun | Pre-remplit `CHE RBC <RCR>`. |
| `CTL_toutesMiseAjourILN()` | Aucun | Pre-remplit `AFF MIS DEP AUJ`. |
| `CTL_dedUnm()` | Aucun | Lance `ded unm`. |

### 1.10 `Nettoyage_Notice.js`

**Role du script**  
Placeholder vide (pas de code executable).

| Fonction | Parametres | Traitement |
|---|---|---|
| _Aucune_ | - | Fichier reserve a un futur script. |

### 1.11 `PEB.js`

**Role du script**  
Raccourcis de commandes PEB.

| Fonction | Parametres | Traitement |
|---|---|---|
| `PEB_AffBibPre()` | Aucun | Lance `aff bib pre`. |
| `PEB_AffBibCop()` | Aucun | Lance `aff bib cop`. |
| `PEB_AffBibPeb()` | Aucun | Lance `aff bib peb`. |
| `PEB_AffAdrBib()` | Aucun | Lance `aff adr bib`. |
| `PEB_AffTit()` | Aucun | Lance `aff eta tit`. |
| `PEB_AffOb()` | Aucun | Lance `aff ob`. |
| `PEB_StoDemande()` | Aucun | Lance `sto a*`. |
| `PEB_SelEnrDepAuj()` | Aucun | Lance `sel enr dep auj`. |
| `PEB_SelEnrAtt()` | Aucun | Lance `sel enr att`. |
| `PEB_AffDemande()` | Aucun | Lance `aff a*`. |
| `PEB_impdemande()` | Aucun | Lance `imp a*`. |
| `PEB_impEtaFor()` | Aucun | Pre-remplit `imp ETA 1- FOR`. |
| `PEB_selEnrEta()` | Aucun | Lance `sel enr eta`. |
| `PEB_selRecNou()` | Aucun | Lance `sel rec nou`. |
| `PEB_selRepEta()` | Aucun | Lance `sel rep eta`. |
| `PEB_SelEnrPos()` | Aucun | Lance `sel enr pos`. |
| `PEB_selRes()` | Aucun | Lance `sel res`. |
| `PEB_stoEta()` | Aucun | Pre-remplit `sto eta 1-`. |

### 1.12 `Setup_CAT_transfoPeriodImpPeriodElec.js`

**Role du script**  
Lanceur de dialogue XUL pour conversion periodique imprime -> electronique.

| Fonction | Parametres | Traitement |
|---|---|---|
| `open_xul_dialog(theUrl, theFeatures, theArguments)` | `theUrl` : URL XUL ; `theFeatures` : options fenetre ; `theArguments` : arguments transmis | Ouvre une fenetre XUL modale via `nsIWindowWatcher`. |
| `CAT_transfoPeriodImpPeriodElec()` | Aucun | Ouvre `CAT_transfoPeriodImpPeriodElec.xul`. |

### 1.13 `Setup_CAT_transfoTheseImpTheseElec.js`

**Role du script**  
Lanceur du dialogue XUL these imprimee -> these electronique.

| Fonction | Parametres | Traitement |
|---|---|---|
| `open_xul_dialog(theUrl, theFeatures, theArguments)` | `theUrl`, `theFeatures`, `theArguments` | Ouvre une fenetre XUL modale. |
| `CAT_transfoTheseImpTheseElec()` | Aucun | Ouvre `CAT_transfoTheseImpTheseElec.xul`. |

### 1.14 `Setup_CAT_transfoTheseImpTheseMicr.js`

**Role du script**  
Lanceur du dialogue XUL these imprimee -> microfiche.

| Fonction | Parametres | Traitement |
|---|---|---|
| `open_xul_dialog(theUrl, theFeatures, theArguments)` | `theUrl`, `theFeatures`, `theArguments` | Ouvre une fenetre XUL modale. |
| `CAT_transfoTheseImpTheseMicr()` | Aucun | Ouvre `CAT_transfoTheseImpTheseMicr.xul`. |

### 1.15 `Setup_Changer_Contenus_Notices.js`

**Role du script**  
Lanceur du dialogue XUL de traitement en lot.

| Fonction | Parametres | Traitement |
|---|---|---|
| `open_xul_dialog(theUrl, theFeatures, theArguments)` | `theUrl`, `theFeatures`, `theArguments` | Ouvre une fenetre XUL modale. |
| `Changer_Contenus_Notices()` | Aucun | Ouvre `Changer_Contenus_Notices.xul`. |

### 1.16 `Setup_ControleSyntaxe60X.js`

**Role du script**  
Lanceur du dialogue XUL de controle syntaxique des 60X.

| Fonction | Parametres | Traitement |
|---|---|---|
| `open_xul_dialog(theUrl, theFeatures, theArguments)` | `theUrl`, `theFeatures`, `theArguments` | Ouvre une fenetre XUL modale. |
| `ControleSyntaxe60X()` | Aucun | Ouvre `ControleSyntaxe60X.xul`. |

### 1.17 `Setup_conversionAlaIsoArabe.js`

**Role du script**  
Lanceur du dialogue XUL ALA -> ISO (arabe).

| Fonction | Parametres | Traitement |
|---|---|---|
| `open_xul_dialog(theUrl, theFeatures, theArguments)` | `theUrl`, `theFeatures`, `theArguments` | Ouvre une fenetre XUL modale. |
| `conversionAlaIsoArabe()` | Aucun | Ouvre `conversionAlaIsoArabe.xul`. |

### 1.18 `Setup_conversionAlaIsoCyrillique.js`

**Role du script**  
Lanceur du dialogue XUL ALA -> ISO (cyrillique).

| Fonction | Parametres | Traitement |
|---|---|---|
| `open_xul_dialog(theUrl, theFeatures, theArguments)` | `theUrl`, `theFeatures`, `theArguments` | Ouvre une fenetre XUL modale. |
| `conversionAlaIsoCyrillique()` | Aucun | Ouvre le dialogue XUL cyrillique. |

### 1.19 `standard.js`

**Role du script**  
Petites actions utilitaires WinIBW.

| Fonction | Parametres | Traitement |
|---|---|---|
| `pressButtonOne()` | Aucun | Simule clic bouton `1`. |
| `pressButtonAide()` | Aucun | Simule clic bouton `Aide`. |
| `TestLNK()` | Aucun | Lance une commande de test `\\LNK ...`. |

### 1.20 `standard_copy.js`

**Role du script**  
Mecanisme standard ABES de copie de notice.

| Fonction | Parametres | Traitement |
|---|---|---|
| `picaCopyRecord()` | Aucun | Orchestration complete de copie et nettoyage de zones selon scenario. |
| `suptag(tag)` | `tag` : zone/prefixe de zone | Supprime toutes les occurrences de la zone cible. |
| `remplacerValeurZone700(tag)` | `tag` : zone 7xx a traiter | Normalise `$4` des 7xx sur 3 caracteres. |
| `PatrickCopyNotice()` | Aucun | Copie technique de la notice vers une nouvelle notice. |
| `switchToSudoc()` | Aucun | Re-bascule vers Sudoc (`\\bes 1.1`). |

### 1.21 `standard_create.js`

**Role du script**  
Creation standard de notices par gabarit.

| Fonction | Parametres | Traitement |
|---|---|---|
| `doCreate(type, content)` | `type` : type de document ; `content` : gabarit texte de notice | Prepare le contexte WinIBW, cree la notice et injecte le gabarit. |
| `picaCreateAtlas()` | Aucun | Wrapper de `doCreate` pour Atlas. |
| `picaCreateAudiovisuel()` | Aucun | Wrapper de `doCreate` pour Audiovisuel. |
| `picaCreateElectronique()` | Aucun | Wrapper de `doCreate` pour Electronique. |
| `picaCreateMonograph()` | Aucun | Wrapper de `doCreate` pour Monographie. |
| `picaCreateMultimedia()` | Aucun | Wrapper de `doCreate` pour Multimedia. |
| `picaCreatePartition()` | Aucun | Wrapper de `doCreate` pour Partition. |
| `picaCreatePeriodique()` | Aucun | Wrapper de `doCreate` pour Periodique. |
| `picaCreateSonore()` | Aucun | Wrapper de `doCreate` pour Sonore. |

### 1.22 `standard_kill.js`

**Role du script**  
Workflow de correction de liens et demande de kill de PPN.

| Fonction | Parametres | Traitement |
|---|---|---|
| `selectCorrectPPN()` | Aucun | Sauvegarde le PPN courant comme PPN correct. |
| `selectIncorrectPPN()` | Aucun | Sauvegarde le PPN courant comme PPN errone. |
| `requestKill()` | Aucun | Injecte la demande de suppression/fusion dans la notice. |
| `correctLinks()` | Aucun | Parcourt un lot de notices et remplace PPN errone par PPN correct. |
| `isValidPPN(ppn)` | `ppn` : PPN a valider | Valide le format du PPN via regex. |
| `simpleMessage(strId)` | `strId` : identifiant message | Affiche un message localise. |
| `picaSelectCorrectPPN()` | Aucun | Wrapper de `selectCorrectPPN`. |
| `picaSelectWrongPPN()` | Aucun | Wrapper de `selectIncorrectPPN`. |
| `picaRequestKill()` | Aucun | Wrapper de `requestKill`. |
| `picaCorrectLinks()` | Aucun | Wrapper de `correctLinks`. |

### 1.23 `standard_linking.js`

**Role du script**  
Recherche et collage de liens bibliographiques.

| Fonction | Parametres | Traitement |
|---|---|---|
| `searchLink(bExact)` | `bExact` : recherche exacte ou non | Construit/execute la commande `\\LNK` et stocke l'etat pour collage. |
| `pasteLink()` | Aucun | Colle le PPN trouve dans la notice d'origine. |
| `initialize()` | Aucun | Controle preconditions et memorise l'etat des fenetres. |
| `restoreWindows()` | Aucun | Restaure le snapshot des fenetres WinIBW. |
| `cleanup()` | Aucun | Reinitialise l'etat interne de l'objet de linking. |
| `picaSearchLink()` | Aucun | Wrapper recherche non exacte. |
| `picaSearchLinkExact()` | Aucun | Wrapper recherche exacte. |
| `picaPasteLink()` | Aucun | Wrapper collage de lien. |

### 1.24 `standard_script_abes1.js`

**Role du script**  
Transformations these electronique -> these imprimee (reproduction / edition commerciale).

| Fonction | Parametres | Traitement |
|---|---|---|
| `CAT_TransfoTheseElecTheseImp()` | Aucun | Point d'entree : choix du scenario puis orchestration complete. |
| `AReproTheseOaAa()` | Aucun | Applique les regles de transformation en mode reproduction. |
| `modifier181(tag)` | `tag` : zone cible | Verifie/ajuste la zone 181. |
| `xpicaCopyRecord()` | Aucun | Duplique la notice courante dans une nouvelle notice. |
| `suptag(tag)` | `tag` : zone/prefixe | Supprime toutes les occurrences de zone. |
| `ACommerceTheseOaAa()` | Aucun | Applique les regles de transformation edition commerciale. |
| `modifierRemplacer(zone, ancientexte, nouveautexte)` | `zone` : zone cible ; `ancientexte` : texte source ; `nouveautexte` : texte remplacement | Remplace du contenu dans toutes les occurrences de la zone. |
| `remplacerValeurZone700(tag)` | `tag` : zone 7xx | Normalise les codes `$4` en 3 caracteres. |

### 1.25 `standard_script_abes2.js`

**Role du script**  
Transformations monographies imprimee/electronique (patrimoniale / ebook).

| Fonction | Parametres | Traitement |
|---|---|---|
| `CAT_TransfoImpElec()` | Aucun | Point d'entree avec choix du scenario de transformation. |
| `transfoMonoElecEBookMonoImp()` | Aucun | Copie puis transforme ebook electronique vers imprime. |
| `modifierNoticeElecEBook(ancienPpn)` | `ancienPpn` : PPN source | Applique les regles de conversion de la notice copiee. |
| `transfoMonoImpMonoElecPatrim()` | Aucun | Copie puis transforme imprime vers electronique patrimoniale. |
| `transfoMonoImpMonoElecEBook()` | Aucun | Copie puis transforme imprime vers electronique ebook. |
| `xpicaCopyRecord()` | Aucun | Duplique la notice courante. |
| `modifierNoticePatrim(ancienPpn)` | `ancienPpn` : PPN source | Applique le gabarit patrimonial electronique. |
| `modifierNoticeEBook(ancienPpn)` | `ancienPpn` : PPN source | Applique le gabarit ebook electronique. |
| `onLoad()` | Aucun | Hook d'ouverture de dialogue. |
| `onCancel()` | Aucun | Hook d'annulation de dialogue. |
| `recupererPpnEnCours()` | Aucun | Recupere le PPN de la notice active. |
| `ajouterLigne(ligneAAjouterIncluantLeNumeroDeZone)` | `ligneAAjouterIncluantLeNumeroDeZone` : ligne complete | Ajoute une ligne en fin de notice. |
| `ajouterLigneSiZoneInexistante(numeroDeZone, ligneAAjouter)` | `numeroDeZone` : zone testee ; `ligneAAjouter` : ligne a inserer | Insere la ligne seulement si la zone est absente. |
| `modifierLeContenuDeLaZone(numeroDeZone, chaineDeContenuARemplacer, chaineDeContenuQuiRemplacera)` | `numeroDeZone` : zone cible ; `chaineDeContenuARemplacer` : texte source ; `chaineDeContenuQuiRemplacera` : texte destination | Remplace du contenu dans la zone cible. |
| `supprimerToutesLesZonesNumero(numeroDeLaZone)` | `numeroDeLaZone` : zone a supprimer | Supprime toutes les occurrences de la zone. |
| `suppressionDeLignePuisInsertionDeLigne(numeroDeZoneDeLaLigneASupprimer, ligneAInsererALaPlace)` | `numeroDeZoneDeLaLigneASupprimer` : zone a retirer ; `ligneAInsererALaPlace` : ligne de remplacement | Remplace la zone par une nouvelle ligne. |
| `controlePresenceZone(zone)` | `zone` : zone cherchee | Retourne un indicateur de presence de zone. |
| `controlePresenceSousZone(zone, souszone)` | `zone` : zone ; `souszone` : pattern sous-zone | Controle la presence d'une sous-zone. |
| `controlePresenceContenuSurLigne(zone, contenuPresentDansLaLigneAVerifier)` | `zone` : zone ; `contenuPresentDansLaLigneAVerifier` : texte cherche | Controle la presence d'un contenu texte sur la zone. |
| `remplacementZoneParAutreZoneEnConservantContenuDeLaLigne(ancienneZone, nouvelleZone)` | `ancienneZone` : zone source ; `nouvelleZone` : zone destination | Renomme la zone en conservant son contenu. |
| `remplacerValeurZone700(tag)` | `tag` : zone 7xx | Normalise les `$4` des zones 7xx. |

### 1.26 `standard_script_abes3.js`

**Role du script**  
Integration AlgoTheses (collecte PPN, construction URL, ouverture rapports).

| Fonction | Parametres | Traitement |
|---|---|---|
| `AlgoTheses()` | Aucun | Verifie le contexte, collecte les PPN et ouvre les rapports AlgoTheses. |
| `_includes(input, search_value)` | `input` : liste ; `search_value` : valeur cherchee | Teste la presence d'une valeur dans une liste. |
| `_should_mount()` | Aucun | Verifie si l'execution est autorisee dans le contexte courant. |
| `_get_ppn()` | Aucun | Recupere le PPN de la notice courante. |
| `_collect_ppn()` | Aucun | Extrait les PPN depuis un lot de resultats (avec filtrage). |
| `_parse_search_result(input)` | `input` : ligne resultat brute | Parse une ligne de resultat en objet exploitable. |
| `__get_report(url)` | `url` : URL du rapport | Ouvre l'URL du rapport dans le navigateur. |
| `__urlBuilder(param_name, param_value)` | `param_name` : nom du parametre ; `param_value` : valeur | Construit les URL d'appel API. |
| `__chunk(input, chunk_size)` | `input` : liste ; `chunk_size` : taille de paquet | Decoupe une liste en sous-listes. |

### 1.27 `standard_utility.js`

**Role du script**  
Bibliotheque utilitaire commune (I/O, prompts, materiaux, liens, i18n).

| Fonction | Parametres | Traitement |
|---|---|---|
| `newFileInput()` | Aucun | Cree un lecteur de fichier scriptable. |
| `newFileOutput()` | Aucun | Cree un writer de fichier scriptable. |
| `newPrompter()` | Aucun | Cree un utilitaire de prompts. |
| `doCmdShowFull(bExtraWindow)` | `bExtraWindow` : ouvre en fenetre supplementaire si vrai | Lance la commande d'affichage complet de notice. |
| `getEditMaterialType()` | Aucun | Lit le type materiel en mode edition. |
| `getMaterialType()` | Aucun | Retourne le type materiel courant (edition ou affichage). |
| `isAuthority(strMaterialType)` | `strMaterialType` : type materiel | Retourne si le type est une autorite (`T...`). |
| `mustAppendToTag()` | Aucun | Indique si le lien doit etre ajoute a la zone au lieu de remplacer. |
| `buildInsertString(bAuthority, strPPN)` | `bAuthority` : cible autorite ; `strPPN` : PPN | Construit la chaine de lien a inserer. |
| `insertLink(strMaterialType, strPPN)` | `strMaterialType` : type doc ; `strPPN` : PPN | Insere effectivement le lien dans la zone active. |
| `buildLinkCommand(bExact, strMaterialType, strSearchTerm)` | `bExact` : exact/non exact ; `strMaterialType` : type doc ; `strSearchTerm` : terme recherche | Construit la commande WinIBW `\\LNK`. |
| `formatMessage(strId)` | `strId` : identifiant message | Formate un message i18n (avec arguments variables). |
| `getMessage(strId)` | `strId` : identifiant message | Retourne un message i18n brut. |
| `stringBundle()` | Aucun | Initialise/cache le bundle de messages localises. |
| `confirm(title, text)` | `title` : titre boite ; `text` : texte question | Affiche une confirmation Oui/Non. |
| `open_xul_dialog(theUrl, theFeatures, theArguments)` | `theUrl`, `theFeatures`, `theArguments` | Ouvre une fenetre XUL modale et remet WinIBW au premier plan. |

### 1.28 `toto.js`

**Role du script**  
Script de test (top-level).

| Fonction | Parametres | Traitement |
|---|---|---|
| _Aucune_ | - | Simule un clic sur `Aide` puis remplit `commandLine` avec `che test`. |

### 1.29 `Translitteration.js`

**Role du script**  
Translitteration/duplication de zones avec couples `$6/$7`, dont mode armenien.

| Fonction | Parametres | Traitement |
|---|---|---|
| `Translitteration()` | Aucun | Point d'entree : choisit source/cible, controle contraintes, lance le traitement principal. |
| `traite(cible, source)` | `cible` : code ecriture destination ; `source` : code ecriture source | Parcourt les zones cibles et cree les lignes translitterees associees. |
| `TranslitterationArmenien()` | Aucun | Gere le cas armenien (convertisseurs dedies ou traitement externe). |
| `isoToUni(chn)` | `chn` : texte ISO | Convertit ISO -> Unicode armenien. |
| `uniToIso(chn)` | `chn` : texte Unicode armenien | Convertit Unicode armenien -> ISO. |
| `traitementexterne(source, cible)` | `source` : ecriture source ; `cible` : ecriture cible | Applique le traitement de translitteration armenien sur les zones. |

### 1.30 `TRI.js`

**Role du script**  
Raccourcis de tri.

| Fonction | Parametres | Traitement |
|---|---|---|
| `TRI_titreAaZ()` | Aucun | Lance `TRI TCO`. |
| `TRI_titreZaA()` | Aucun | Lance `TRI TCO -`. |
| `TRI_auteurAaZ()` | Aucun | Lance `TRI AUT`. |
| `TRI_auteurZaA()` | Aucun | Lance `TRI AUT -`. |
| `TRI_dateAncienaRecent()` | Aucun | Lance `TRI APU`. |
| `TRI_dateRecentaAncien()` | Aucun | Lance `TRI APU -`. |
| `TRI_AutoriteAaZ()` | Aucun | Lance `TRI VED`. |
| `TRI_AutoriteZaA()` | Aucun | Lance `TRI VED -`. |

### 1.31 `url_checker.js`

**Role du script**  
Lanceur de controle d'URL.

| Fonction | Parametres | Traitement |
|---|---|---|
| `validateURLs()` | Aucun | Ouvre le dialogue de validation d'URL en mode standard. |
| `checkBrokenLinks()` | Aucun | Ouvre le dialogue en mode controle des liens casses. |

---

## 2) scripts-transformation-js-et-xul

### 2.1 `CAT_transfoPeriodImpPeriodElec.js`

**Role du script**  
Copie une notice de periodique imprime puis la transforme en periodique electronique.

| Fonction | Parametres | Traitement |
|---|---|---|
| `transfoPeriodImpPeriodElec()` | Aucun | Orchestration complete : recupere PPN, copie notice, applique transformations. |
| `onLoad()` | Aucun | Hook ouverture dialogue. |
| `onCancel()` | Aucun | Hook annulation dialogue. |
| `picaCopyRecord()` | Aucun | Duplique la notice courante. |
| `modifierNotice(ancienPpn)` | `ancienPpn` : PPN source | Applique les suppressions/ajouts/remplacements de zones. |
| `supprimerRemplacer210Par214(zone)` | `zone` : zone `210` a convertir | Supprime les `210` et injecte les `214` reconstruites. |
| `renvoieNouvelle214(chaine)` | `chaine` : contenu d'une `210` | Retourne la nouvelle ligne `214`. |
| `ajouter(zone)` | `zone` : ligne/zone a inserer | Ajoute une zone en fin de notice. |
| `supprimer(zone)` | `zone` : numero de zone | Supprime toutes les occurrences de la zone. |
| `chercherZoneEtSupprimerLigneAssocieePuisInsererLigne(numeroDeZone, nouvelleLigneAInserer)` | `numeroDeZone` : zone cible ; `nouvelleLigneAInserer` : ligne de remplacement | Remplace toutes les occurrences d'une zone par une ligne donnee. |
| `recuperationContenuDeLigneZoneNonInclusePourLaZone(numeroDeZone)` | `numeroDeZone` : zone cible | Retourne le contenu de la zone sans etiquette. |
| `recuperationContenuDeLigneZoneInclusePourLaZone(numeroDeZone)` | `numeroDeZone` : zone cible | Retourne la ligne complete de zone (etiquette incluse). |
| `remplacerValeurZone700(tag)` | `tag` : zone 7xx | Normalise les codes `$4` des 7xx. |
| `remplacementSousZone(zone, ancientexte, nouveautexte)` | `zone` : zone cible ; `ancientexte` : texte source ; `nouveautexte` : texte destination | Remplace le texte source par le texte destination dans la zone. |
| `controlecontenusouszone(zone, souszone, contenudelasouszone)` | `zone` : zone ; `souszone` : sous-zone ; `contenudelasouszone` : contenu attendu | Verifie la presence d'un contenu dans une sous-zone. |
| `recupererPpn()` | Aucun | Lit le PPN courant via variable WinIBW. |

### 2.2 `CAT_transfoTheseImpTheseElec.js`

**Role du script**  
Copie une these imprimee et la transforme en these electronique.

| Fonction | Parametres | Traitement |
|---|---|---|
| `onLoad()` | Aucun | Hook ouverture dialogue. |
| `onCancel()` | Aucun | Hook annulation dialogue. |
| `picaCopyRecord()` | Aucun | Duplique la notice courante. |
| `modifier181()` | Aucun | Ajoute/normalise la zone 181 si necessaire. |
| `modifierRemplacer(zone, ancientexte, nouveautexte)` | `zone`, `ancientexte`, `nouveautexte` | Remplace du contenu texte dans une zone. |
| `modifier105()` | Aucun | Ajuste la zone `105` selon regles de conversion. |
| `modifier328()` | Aucun | Reforme les zones `328` en mode reproduction. |
| `supprimerRemplacer(ancienneZone, nouvelleZone)` | `ancienneZone` : zone a retirer ; `nouvelleZone` : ligne/zone a inserer | Remplace une zone par une autre. |
| `supprimer(zone)` | `zone` : numero de zone | Supprime toutes les occurrences de zone. |
| `ajouter(zone)` | `zone` : ligne/zone a inserer | Ajoute une zone. |
| `remplacerValeurZone700(tag)` | `tag` : zone 7xx | Normalise les `$4` des 7xx. |
| `modifierNotice(ancienPpn)` | `ancienPpn` : PPN source | Applique la transformation metier complete. |
| `recupererPpn()` | Aucun | Lit le PPN courant. |
| `transfoTheseImpTheseElec()` | Aucun | Orchestration globale du traitement. |

### 2.3 `CAT_transfoTheseImpTheseMicr.js`

**Role du script**  
Copie une these imprimee et la transforme en these microfiche.

| Fonction | Parametres | Traitement |
|---|---|---|
| `onLoad()` | Aucun | Hook ouverture dialogue. |
| `onCancel()` | Aucun | Hook annulation dialogue. |
| `picaCopyRecord()` | Aucun | Duplique la notice courante. |
| `modifier181()` | Aucun | Ajoute/normalise la zone 181. |
| `modifierRemplacer(zone, ancientexte, nouveautexte)` | `zone`, `ancientexte`, `nouveautexte` | Remplace du contenu texte cible. |
| `modifier328()` | Aucun | Reforme la zone 328 pour microfiche/reproduction. |
| `supprimerRemplacer(ancienneZone, nouvelleZone)` | `ancienneZone`, `nouvelleZone` | Remplace une zone par une autre ligne. |
| `supprimer(zone)` | `zone` : zone a supprimer | Supprime les occurrences de zone. |
| `ajouter(zone)` | `zone` : zone/ligne a ajouter | Ajoute une zone. |
| `remplacerValeurZone700(tag)` | `tag` : zone 7xx | Normalise les `$4` des 7xx. |
| `modifierNotice(ancienPpn)` | `ancienPpn` : PPN source | Applique toute la transformation imprime -> microfiche. |
| `recupererPpn()` | Aucun | Lit le PPN courant. |
| `transfoTheseImpTheseMicr()` | Aucun | Orchestration globale du traitement. |

### 2.4 `Changer_Contenus_Notices.js`

**Role du script**  
Traitement en lot de notices (exemple : ajout/suppression de zones).

| Fonction | Parametres | Traitement |
|---|---|---|
| `newFileInput()` | Aucun | Fabrique un lecteur de fichier scriptable. |
| `newFileOutput()` | Aucun | Fabrique un writer de fichier scriptable. |
| `newPrompter()` | Aucun | Fabrique un utilitaire de prompts. |
| `nouv_Fichier_Sortie()` | Aucun | Fabrique un flux de sortie fichier Mozilla. |
| `onLoad()` | Aucun | Initialise le dialogue de traitement. |
| `onAccept()` | Aucun | Boucle sur les notices du lot et lance le traitement. |
| `Traitement()` | Aucun | Exemple de transformation : ajoute `183`, supprime `102`. |
| `onCancel()` | Aucun | Hook annulation. |
| `supprimer(zone)` | `zone` : zone a supprimer | Supprime les occurrences de zone. |
| `ajouter(zone)` | `zone` : zone/ligne a ajouter | Ajoute une zone. |

### 2.5 `ControleSyntaxe60X.js`

**Role du script**  
Controle la coherence syntaxique/autorite des zones 60X.

| Fonction | Parametres | Traitement |
|---|---|---|
| `onLoad()` | Aucun | Hook ouverture dialogue. |
| `onCancel()` | Aucun | Hook annulation dialogue. |
| `btnLancer_click()` | Aucun | Lance le pipeline complet de controles 60X. |
| `initTab(tag, occurrence)` | `tag` : zone ; `occurrence` : index occurrence | Charge les informations d'autorite utiles aux controles. |
| `lienNoticesAutorite(zone, tag, occurrence)` | `zone` : ligne de zone ; `tag` : etiquette ; `occurrence` : index | Verifie la presence/coherence des liens autorites. |
| `autoriteIncompatible(zone, tag, occurrence)` | `zone`, `tag`, `occurrence` | Verifie la compatibilite entre zone et type d'autorite. |
| `etiquetteCoherente(zone, tag, occurrence)` | `zone`, `tag`, `occurrence` | Verifie la coherence etiquette 60X vs vedette. |
| `ordreAutorites(zone, tag, occurrence)` | `zone`, `tag`, `occurrence` | Controle ordre/position des autorites. |
| `newCopyRecord()` | Aucun | Cree une copie de travail de la notice pour inspection. |

### 2.6 `conversionAlaIsoArabe.js`

**Role du script**  
Conversion de translitteration arabe ALA -> ISO/Unicode.

| Fonction | Parametres | Traitement |
|---|---|---|
| `convertirCaractereAlaVersIso(caract)` | `caract` : caractere ou sequence ALA | Retourne l'equivalent ISO/Unicode. |
| `renvoieZonesATraiterParDefaut()` | Aucun | Retourne la liste par defaut des zones a traiter. |
| `renvoieZonesATraiterChoisies(chaineZones)` | `chaineZones` : zones saisies (ex: `200,700`) | Retourne la liste utilisateur des zones. |
| `renvoieZonesATraiter()` | Aucun | Choisit la liste finale selon l'option UI active. |
| `convertirChaineAlaVersIso(chaine)` | `chaine` : texte ALA | Convertit toute la chaine en ISO/Unicode. |
| `aConvertir(res)` | `res` : contenu de zone | Indique si la zone doit etre convertie. |
| `convertirChaine(res)` | `res` : contenu de zone | Convertit totalement ou partiellement la zone. |
| `convertirZone(zone, application)` | `zone` : etiquette de zone ; `application` : objet application WinIBW | Parcourt toutes les occurrences de la zone et applique conversion. |
| `btnLancer_click()` | Aucun | Lance la conversion de toutes les zones retenues. |
| `radToutesZones_click()` | Aucun | Active le mode \"toutes zones\". |
| `radZonesChoisies_click()` | Aucun | Active le mode \"zones choisies\". |
| `onLoad()` | Aucun | Hook ouverture dialogue. |
| `onCancel()` | Aucun | Hook annulation dialogue. |

---

## 3) scripts-fichier-de-pref

### 3.1 `setup.js`

**Role du script**  
Configuration globale WinIBW (preferences UI/commandes/scripts/regex).

| Fonction | Parametres | Traitement |
|---|---|---|
| _Aucune_ | - | Fichier de preferences uniquement (variables et reglages), pas de fonction declaree. |

---

## 4) Fichiers XUL (UI)

Ces fichiers ne declarent pas de fonctions JavaScript metier, mais branchent des handlers (`onLoad`, `onCancel`, bouton `Lancer`) vers les scripts `.js` :

- `scripts-transformation-js-et-xul/CAT_transfoPeriodImpPeriodElec.xul`
- `scripts-transformation-js-et-xul/CAT_transfoTheseImpTheseElec.xul`
- `scripts-transformation-js-et-xul/CAT_transfoTheseImpTheseMicr.xul`
- `scripts-transformation-js-et-xul/Changer_Contenus_Notices.xul`
- `scripts-transformation-js-et-xul/ControleSyntaxe60X.xul`
- `scripts-transformation-js-et-xul/conversionAlaIsoArabe.xul`
