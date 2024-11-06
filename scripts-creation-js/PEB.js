//2014-10-09 : mte : mise à jour de la date
function PEB_AffBibPre ()
{// PEB commande Afficher paramètres fournisseur de prêts
application.activeWindow.command("aff bib pre", false);
}

function PEB_AffBibCop ()
{// PEB commande Afficher paramètres fournisseur de reproductions
application.activeWindow.command("aff bib cop", false);
}

function PEB_AffBibPeb ()
{// PEB commande Afficher paramètres demandeurs
application.activeWindow.command("aff bib peb", false);
}

function PEB_AffAdrBib ()
{// PEB commande Afficher adresse bibliothèque
application.activeWindow.commandLine("aff adr bib", false);
}

function PEB_AffTit ()
{// PEB commande Afficher liste par titre
application.activeWindow.command("aff eta tit", false);
}

function PEB_AffOb ()
{// PEB commande Afficher en mode OB
application.activeWindow.command("aff ob", false);
}

function PEB_StoDemande ()
{// PEB commande Annuler la dernière demande envoy?e
application.activeWindow.command("sto a*", false);
}

function PEB_SelEnrDepAuj ()
{// PEB commande Selectionner les demandes envoyees aujourd'hui
application.activeWindow.command("sel enr dep auj", false);
}

function PEB_SelEnrAtt ()
{// PEB commande Selectionner les demandes preliminaires re?ues
application.activeWindow.command("sel enr att", false);
}

function PEB_AffDemande ()
{// PEB commande Afficher la dernière demande traitee
application.activeWindow.command("aff a*", false);
}

function PEB_impdemande ()
{// PEB commande imprimer
application.activeWindow.command("imp a*", false);
}

function PEB_impEtaFor ()
{// PEB commande imprimer pour passer à l'etat lu
application.activeWindow.commandLine = "imp ETA 1- FOR";
}

function PEB_selEnrEta ()
{// PEB commande recherche demandes envoyees
application.activeWindow.command("sel enr eta", false);
}

function PEB_selRecNou ()
{// PEB commande sel rec nou
application.activeWindow.command("sel rec nou", false);
}

function PEB_selRepEta ()
{// PEB commande Formulaire de recherche fournisseur
application.activeWindow.command("sel rep eta", false);
}

function PEB_SelEnrPos ()
{// PEB commande afficher reponses positives
application.activeWindow.command("sel enr pos", false);
}

function PEB_selRes ()
{// PEB commande afficher reponses negatives
application.activeWindow.command("sel res", false);
}

function PEB_stoEta ()
{// PEB commande passer à l'etat final les reponses negatives
application.activeWindow.commandLine = "sto eta 1-";
}



