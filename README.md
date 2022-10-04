# winibw-scripts
Scripts utilisateurs WinIBW

Pour ajouter un des scripts du dépôt, il faut éditer le fichier : C:\oclcpica\WinIBW30\Profiles\<nom_utilisateur>\winibw.vbs sur votre poste, contenant WinIBW.

# Logiciels de synchronisation des scripts

- Téléchargez les logiciels de synchronisation :
- Logiciel de synchronisation des scripts de création : https://cloud.abes.fr/index.php/s/fdg3ZWR3SNq5s6W
- Logiciel de synchronisation des scripts de transformation : https://cloud.abes.fr/index.php/s/9scoPa8bpsdMnSX
- Dézippez le dossier puis lancer comme ci-dessous le programme (exemple avec celui des fichiers xul + js)

![img.png](medias/img.png)

- Cliquez sur synchroniser (en utilisant la branche éventuelle qui vous sera spécifiée, par défaut develop)

![img_1.png](medias/img_1.png)

- Dans le cas ci-dessus cela mettra automatiquement à jour vos scripts de transformation situés dans le répertoire 
- C:\oclcpica\WinIBW30\chrome\ibw\content\xul
- Les fichiers existants de même nom seront écrasés automatiquement la MAJ est automatique

# emplacement des versions de winibw (hors self service wapt)
P:\SUDOC\logiciels_Pica\WinIBW\WinIBW3\

actuelle

P:\SUDOC\logiciels_Pica\WinIBW\WinIBW3\WinIBW3_2_5\prod -> version 3.2.5.5

# attention emplacement spécifique des scripts [ancienne procédure ne plus tenir compte]

Quand à la synchronisation, vous avez des fichier XXXXXX.js accompagné d'un fichier XXXXXX.xul, pensez à couper coller ces fichiers 
à partir de (repertoire d'origine) -> C:\oclcpica\WinIBW30\scripts\
vers (répertoire de destination) -> C:\oclcpica\WinIBW30\chrome\ibw\content\xul

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

Winibw utilise par défaut un encodage en iso-8859-1. Pour éviter d'avoir des caractères parasites lors du lancement des fonctions qui s'affichent, il convient de controler lors de la modification en local de vos fichier et avant tout push sur le dépôt de bien avoir encodé les scripts en iso-8859-1. Pour ce faire, vous pouvez utilisez l'outil graphique File Encoding Checker.

- Téléchargement de File Encoding CHecker pour Windows : https://github.com/amrali-eg/EncodingChecker/raw/master/App/EncodingChecker.exe

Utilisation de l'outil :
- Lancer le le logiciel et placez vous dans le repertoire contenant vos scripts
- Dans Select valid characters sets cochez iso-8859-1  et pour Concvert to : iso-8869-1, cochez la case Select / deselect all, puis cliquez sur le bouton convert
![image](https://user-images.githubusercontent.com/19894885/193787576-e68238e6-cef7-49d0-a1fd-57e5fd39de1b.png)
- L'ensemble de vos fichiers sont passés au bon encodage
![image](https://user-images.githubusercontent.com/19894885/193787708-c59faa0d-0844-4c69-83d8-2c7c542f4ba2.png)
- Relancez winibw et testez un script par exemple celui-ci : CAT creer atlas, qui est dans le fichier CAT.js

![image](https://user-images.githubusercontent.com/19894885/193789766-a379b909-58e9-458f-8a7f-cdd36c5b81a0.png)
Donnera
![image](https://user-images.githubusercontent.com/19894885/193789919-9589a884-afc6-4706-a0cc-1c4614fb4b87.png)

![image](https://user-images.githubusercontent.com/19894885/193789981-7f13bad6-dfbe-4ff7-a029-bcb4b100f896.png)
Donnera





- Vous pouvez dans un terminal utiliser la commande suivante pour détecter l'encodage de l'ensemble des fichiers d'un repertoire
![image](https://user-images.githubusercontent.com/19894885/193788244-7f3ae3b8-fe72-4555-9d68-0d9429787f54.png)
- Notez que la différence ici et que le charset qui vous est donné est l'encodage à partir de la détection des caractère du fichier dans son contenu et non du BOM du fichier. 
- AbesCopyRecord.js avec un é fin de ligne 6 donnera
![image](https://user-images.githubusercontent.com/19894885/193788701-c3335922-be66-4442-8d9c-702b3d0886ed.png)
![image](https://user-images.githubusercontent.com/19894885/193788763-ab37e944-8889-4d67-8e12-ab7969435bdf.png)
- AbesCopyRecord.js avec un e fin de ligne 6 (ce qui signifie qu'il n'y a dans ce cas la aucun autre accent nul part dans le fichier) donnera
![image](https://user-images.githubusercontent.com/19894885/193788886-80b80f17-05e3-47b9-9132-a8c61dc0a024.png)
![image](https://user-images.githubusercontent.com/19894885/193788964-a49f8630-e9da-4b77-8022-2be1f1cf396a.png)

Donc, **toujours utiliser iso-8859-1 qui est au dessus de us-ascii et comprends les caractères latins**.
