# winibw-scripts

- Important : winibw ne supporte pas les caractères accentués dans les scripts. **Privilégier systématiquement les caractères unicode dans les scripts**.
- En cas de rechargement des scripts, penser a recréer et supprimer ses raccourcis crées dans son winibw.
- Ne pas mettre de caractères accentués dans les fichiers, mais à la place les séquences d'échappement Unicode (ou le caractère sans accent correspondant)

# comment cela fonctionne : dans votre explorateur de fichier windows la ou est installé winibw
- le fichier : C:\oclcpica\WinIBW30\Profiles\<nom_utilisateur>\winibw.vbs contient les fonctions pré-enregistrées (via play stop sur l'interface de winibw)
- le fichier : C:\oclcpica\WinIBW30\defaults\pref\setup.js contient la liste des fichiers de scripts présents dans vos repertoires (mentionnées après) à référencer pour les utiliser
- le dossier : C:\oclcpica\WinIBW30\scripts contient les scripts de création. 
- le dossier : C:\oclcpica\WinIBW30\chrome\ibw\content\xul contient les scripts de tranformation (ils contiennent une boite de dialogue qui s'affiche dans winibw (fichier xul) accompagné d'un fichier qui lance les traitements (fichier js)

# Logiciels de synchronisation des scripts

- Télécharger le logiciel de synchronisation : https://cloud.abes.fr/index.php/s/tNQrMBDMQkMgen3
- Dézippez le dossier puis lancer comme ci-dessous le programme

- Cliquez sur synchroniser (en utilisant la branche éventuelle qui vous sera spécifiée, par défaut develop)

- Dans le cas ci-dessus cela mettra automatiquement à jour vos scripts.
- Les fichiers existants de même nom seront écrasés automatiquement la MAJ est automatique

# Attention : règles particulières de programmation des scripts (WINIBW3, janvier 2023)

- Les scripts ne peuvent pas utiliser l'ECMAScript 6 de 2015.
- let n'est pas autorisé, uniquement var
- les structures de données complexes comme les map ne fonctionnent pas, y privilégier systématiquement des tableaux simples (Array[])
- eviter la programmation fonctionnelle

# Encodage des scripts : iso-8859-1

- Pour que les scripts soient executés sans problème d'encodage ils doivent etre encodés au format iso-8859-1 sur le dépôt.
- toujours privilégier les caractères au format unicode dans les scripts

# emplacement des versions de winibw (hors self service wapt)
P:\SUDOC\logiciels_Pica\WinIBW\WinIBW3\

actuelle

P:\SUDOC\logiciels_Pica\WinIBW\WinIBW3\WinIBW3_2_5\prod -> version 3.2.5.5

emplacement de winibw 4
- la version 4.4 ne supporte pas le https, la 4.5.1 le supporte

P:\SUDOC\logiciels_Pica\WinIBW\WinIBW4\WinIBW4 v4.5.1.101 Abes test\

## débogage

Afficher une zone

Dans les fichiers de scripts js, faire par exemple pour afficher la zone 003

```js
var resultat = application.activeWindow.title.findTag("003", 0, false, true, true);
prompts.alert(null, "resultat", resultat);
```

Important : si prompts.alert ne fonctionne pas et fait planter winibw utiliser uniquement 

```js
alert(variable) ou alert("message" + variable)
```

Afficher un message (pour voir si le code s'execute et passe à un endroit)

```js
prompts.alert(null, "passeici", "ce qui s'affichera à l'écran" + variableEventuelle + "de l'affichage texte à nouveau");
```

La variable en troisième paramètre

Ajout de zone (à vérifier)

```js
// ajout de "103 ##$a\n"
application.activeWindow.title.endOfBuffer(false);
application.activeWindow.title.insertText("103 ##$a\n");

function supprimer(zone)
{
	application.activeWindow.title.startOfBuffer (false);
	var res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	while (res != "")
	{
		application.activeWindow.title.deleteLine(1);
		res = application.activeWindow.title.findTag (zone, 0, true, true, false);
	}
}
function ajouter(zone)
{
	application.activeWindow.title.endOfBuffer (false);
	application.activeWindow.title.insertText (zone + "\n");
}
```

# winibw-sync

Winibw sync est un outil permettant de synchroniser des script distants présents sur le dépôt github sur les postes en local des utilisateurs ou se situent leur installation classique de leur winibw local
(voir guide utilisation et compilation du programme) situé dans le répertoire documentation pour apporter si nécessaire des modifications logicielles

# Encodage des scripts du dépôt

Winibw 3 utilise par défaut un encodage en iso-8859-1. Pour éviter d'avoir des caractères parasites lors du lancement des fonctions qui s'affichent, passez tous vos caractères dans vos fichier de script en format unicode.
