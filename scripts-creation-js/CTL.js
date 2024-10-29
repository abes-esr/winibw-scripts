//2014-10-09 : mte : mise � jour de la date
function CTL_affUsa ()
{// affiche tous les logins d'un ILN
application.activeWindow.command("af usa bib tou", false);
}

function CTL_localisationDuJour ()
{// affiche la liste des notices localis�es aujourd'hui (pour mon RCR)
application.activeWindow.command("che sel auj", false);
}

function CTL_localisationAvecDate ()
{// affiche la liste des notices localis�es sur la p�riode indiqu�e (pour mon RCR)
application.activeWindow.commandLine =  "CHE SEL <AAAA-MM-JJ> JUS <AAAA-MM-JJ>";
}

function CTL_creerAdresseDoublon ()
{// Cr�e l'adresse CAT pour recevoir les mail de d�tection de doublons (par RCR)
application.activeWindow.commandLine = "cre adr bib <RCR> cat";
}

function CTL_afficherAdresseDoublon ()
{// affiche l'adresse CAT pour recevoir les mail de d�tection de doublons (par RCR)
application.activeWindow.commandLine = "Aff adr bib <RCR> cat";
}

function CTL_modifierAdresseDoublon ()
{// Modifie l'adresse CAT pour recevoir les mail de d�tection de doublons (par RCR)
application.activeWindow.commandLine = "mod adr bib <RCR> cat";
}

function CTL_toutesMiseAJourSurAutorite ()
{// affiche les mises � jour (cr�ation, modification, suppression) de tout le r�seau sur les notices autorit� (AUJ ou p�riode).
application.activeWindow.commandLine =  "SEL MIS DEP AUJ tno e";
}

function CTL_miseAJourPropreDuJour ()
{// affiche les mises ? jour (cr�ation, modification, suppression) pour AUJOURD'HUI par RCR de l'�tablissement (ILN) sur les notices bibliographiques et d'exemplaires.
application.activeWindow.commandLine =  "SEL MIS DEP AUJ par <ILN> tno t";
}

function CTL_miseAJourPropreDepuis ()
{// affiche les mises ? jour (cr�ation, modification, suppression) ? partir d'une date indiqu�e par RCR de l'�tablissement (ILN) sur les notices bibliographiques et d'exemplaires.
application.activeWindow.commandLine =  "SEL MIS DEP <JJ-MM-AAAA>  par <ILN> tno t";
}

function CTL_catalogueParRCR ()
{// affiche la liste des notices localis�es par la biblioth�que indiqu�e. Il est possible d'affiner la recherche avec d'autres index ou des limitations.
application.activeWindow.commandLine =  "CHE RBC <N?RCR>";
}

function CTL_toutesMiseAjourILN ()
{// affiche toutes les mises ? jour (cr�ation, modification, suppression des notices d'autorit�, bibliographiques et d'exemplaires) de mon �tablissement (AUJourd'hui ou p�riode <JJ-MM-AAA>)
application.activeWindow.commandLine =  "AFF MIS DEP AUJ";
}

function CTL_dedUnm ()
{// affiche les notices doublons li�es par une zone 024 (commande sous contr�le des d�doublonneurs locaux)
	application.activeWindow.command("ded unm", false);
}
