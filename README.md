# winibw-scripts
Scripts utilisateurs WinIBW

Pour ajouter un des scripts du dépôt, il faut éditer le fichier : C:\oclcpica\WinIBW30\Profiles\<nom_utilisateur>\winibw.vbs sur votre poste, contenant WinIBW.

# attention emplacement spécifique des scripts

Quand à la synchronisation, vous avez des fichier XXXXXX.js accompagné d'un fichier XXXXXX.xul, pensez à couper coller ces fichiers 
à partir de (repertoire d'origine) -> C:\oclcpica\WinIBW30\scripts\
vers (répertoire de destination) -> C:\oclcpica\WinIBW30\chrome\ibw\content\xul

# tache à faire (détecté le 05/01/22)

Modifier le programme pour lors de la synchronisation faire transiter les scripts xul vers le répertoire xul et non le repertoire script
