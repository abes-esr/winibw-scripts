//2014-10-09 : mte : mise à jour de la date
function CTL_affUsa ()
{// affiche tous les logins d'un ILN
application.activeWindow.command("af usa bib tou", false);
}

function CTL_localisationDuJour ()
{// affiche la liste des notices localisees aujourd'hui (pour mon RCR)
application.activeWindow.command("che sel auj", false);
}

function CTL_localisationAvecDate ()
{// affiche la liste des notices localisees sur la periode indiquee (pour mon RCR)
application.activeWindow.commandLine =  "CHE SEL <AAAA-MM-JJ> JUS <AAAA-MM-JJ>";
}

function CTL_creerAdresseDoublon ()
{// Cree l'adresse CAT pour recevoir les mail de detection de doublons (par RCR)
application.activeWindow.commandLine = "cre adr bib <RCR> cat";
}

function CTL_afficherAdresseDoublon ()
{// affiche l'adresse CAT pour recevoir les mail de detection de doublons (par RCR)
application.activeWindow.commandLine = "Aff adr bib <RCR> cat";
}

function CTL_modifierAdresseDoublon ()
{// Modifie l'adresse CAT pour recevoir les mail de detection de doublons (par RCR)
application.activeWindow.commandLine = "mod adr bib <RCR> cat";
}

function CTL_toutesMiseAJourSurAutorite ()
{// affiche les mises à jour (creation, modification, suppression) de tout le reseau sur les notices autorite (AUJ ou periode).
application.activeWindow.commandLine =  "SEL MIS DEP AUJ tno e";
}

function CTL_miseAJourPropreDuJour ()
{// affiche les mises ? jour (creation, modification, suppression) pour AUJOURD'HUI par RCR de l'etablissement (ILN) sur les notices bibliographiques et d'exemplaires.
application.activeWindow.commandLine =  "SEL MIS DEP AUJ par <ILN> tno t";
}

function CTL_miseAJourPropreDepuis ()
{// affiche les mises ? jour (creation, modification, suppression) ? partir d'une date indiquee par RCR de l'etablissement (ILN) sur les notices bibliographiques et d'exemplaires.
application.activeWindow.commandLine =  "SEL MIS DEP <JJ-MM-AAAA>  par <ILN> tno t";
}

function CTL_catalogueParRCR ()
{// affiche la liste des notices localisees par la bibliothèque indiquee. Il est possible d'affiner la recherche avec d'autres index ou des limitations.
application.activeWindow.commandLine =  "CHE RBC <N?RCR>";
}

function CTL_toutesMiseAjourILN ()
{// affiche toutes les mises ? jour (creation, modification, suppression des notices d'autorite, bibliographiques et d'exemplaires) de mon etablissement (AUJourd'hui ou periode <JJ-MM-AAA>)
application.activeWindow.commandLine =  "AFF MIS DEP AUJ";
}

function CTL_dedUnm ()
{// affiche les notices doublons liees par une zone 024 (commande sous contrôle des dedoublonneurs locaux)
	application.activeWindow.command("ded unm", false);
}
