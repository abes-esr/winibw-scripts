# Recuperer l'outil de synchronisation WinIBW

Ce document explique comment recuperer sur son poste le logiciel de synchronisation des scripts WinIBW, puis lancer une premiere mise a jour.

## Telechargement

L'outil est disponible ici :

https://cloud.abes.fr/index.php/s/tNQrMBDMQkMgen3

## Installation locale

1. Telecharger l'archive depuis le lien ci-dessus.
2. Dezipper l'archive dans un dossier local de votre choix.
3. Ouvrir le dossier extrait.
4. Lancer l'executable `winibw-synchro-scripts-client-*.exe`.

## Premiere synchronisation

1. Dans le champ `Branche distante`, selectionner la branche a utiliser.
2. En usage normal, selectionner `master`.
3. Cliquer sur `Synchroniser`.
4. Attendre la fin de la mise a jour.
5. Redemarrer WinIBW.

## Remarques

- L'outil recupere automatiquement les scripts presents sur le depot GitHub.
- Les fichiers de scripts deja presents en local sont mis a jour automatiquement lors de la synchronisation.
- Si une branche de test vous est communiquee pour une recette, selectionner cette branche a la place de `master`.
