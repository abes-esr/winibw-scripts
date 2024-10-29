//2014-10-09 : mte : mise à jour de la date
function CTL_affUsa ()
{// affiche tous les logins d'un ILN
application.activeWindow.command("af usa bib tou", false);
}

function CTL_localisationDuJour ()
{// affiche la liste des notices localisées aujourd'hui (pour mon RCR)
application.activeWindow.command("che sel auj", false);
}

function CTL_localisationAvecDate ()
{// affiche la liste des notices localisées sur la période indiquée (pour mon RCR)
application.activeWindow.commandLine =  "CHE SEL <AAAA-MM-JJ> JUS <AAAA-MM-JJ>";
}

function CTL_creerAdresseDoublon ()
{// Crée l'adresse CAT pour recevoir les mail de détection de doublons (par RCR)
application.activeWindow.commandLine = "cre adr bib <RCR> cat";
}

function CTL_afficherAdresseDoublon ()
{// affiche l'adresse CAT pour recevoir les mail de détection de doublons (par RCR)
application.activeWindow.commandLine = "Aff adr bib <RCR> cat";
}

function CTL_modifierAdresseDoublon ()
{// Modifie l'adresse CAT pour recevoir les mail de détection de doublons (par RCR)
application.activeWindow.commandLine = "mod adr bib <RCR> cat";
}

function CTL_toutesMiseAJourSurAutorite ()
{// affiche les mises à jour (création, modification, suppression) de tout le réseau sur les notices autorité (AUJ ou période).
application.activeWindow.commandLine =  "SEL MIS DEP AUJ tno e";
}

function CTL_miseAJourPropreDuJour ()
{// affiche les mises ? jour (création, modification, suppression) pour AUJOURD'HUI par RCR de l'établissement (ILN) sur les notices bibliographiques et d'exemplaires.
application.activeWindow.commandLine =  "SEL MIS DEP AUJ par <ILN> tno t";
}

function CTL_miseAJourPropreDepuis ()
{// affiche les mises ? jour (création, modification, suppression) ? partir d'une date indiquée par RCR de l'établissement (ILN) sur les notices bibliographiques et d'exemplaires.
application.activeWindow.commandLine =  "SEL MIS DEP <JJ-MM-AAAA>  par <ILN> tno t";
}

function CTL_catalogueParRCR ()
{// affiche la liste des notices localisées par la bibliothèque indiquée. Il est possible d'affiner la recherche avec d'autres index ou des limitations.
application.activeWindow.commandLine =  "CHE RBC <N?RCR>";
}

function CTL_toutesMiseAjourILN ()
{// affiche toutes les mises ? jour (création, modification, suppression des notices d'autorité, bibliographiques et d'exemplaires) de mon établissement (AUJourd'hui ou période <JJ-MM-AAA>)
application.activeWindow.commandLine =  "AFF MIS DEP AUJ";
}

function CTL_dedUnm ()
{// affiche les notices doublons liées par une zone 024 (commande sous contrôle des dédoublonneurs locaux)
	application.activeWindow.command("ded unm", false);
}
