# README - Fonctionnement du programme de synchronisation WinIBW 3

Ce programme est une application Java (interface Swing) qui telecharge depuis GitHub
les scripts WinIBW d'une branche donnee et les copie dans des repertoires locaux.

Ce programme est fonctionnel pour **WinIBW 3**.

## Comment ca fonctionne

1. Au demarrage, l'application recupere la liste des branches du depot `abes-esr/winibw-scripts`.
2. La branche `develop` est selectionnee par defaut si elle existe.
3. L'utilisateur renseigne ou valide 3 repertoires locaux :
   - scripts de creation (`scripts-creation-js`)
   - scripts de transformation (`scripts-transformation-js-et-xul`)
   - fichier(s) de preference (`scripts-fichier-de-pref`)
4. En cliquant sur **Synchroniser**, l'application appelle l'API GitHub pour chaque dossier distant.
5. Chaque fichier trouve est telecharge via son `download_url` puis copie en local.

## Comportement de synchronisation

- Les fichiers distants sont copies localement avec le meme nom.
- Si un fichier existe deja en local, il est ecrase.
- Les fichiers supprimes sur GitHub ne sont pas supprimes localement.
- Les erreurs de telechargement/ecriture sont affichees dans la zone de log.

## Les 3 chemins locaux (par defaut)

Ces chemins sont les repertoires locaux de destination, dans lesquels les fichiers
distants sont copies.

- `C:\oclcpica\WinIBW30\scripts`
  (destination de `scripts-creation-js`)
- `C:\oclcpica\WinIBW30\chrome\ibw\content\xul`
  (destination de `scripts-transformation-js-et-xul`)
- `C:\oclcpica\WinIBW30\defaults\pref`
  (destination de `scripts-fichier-de-pref`)

Ils sont modifiables dans l'interface avant de cliquer sur **Synchroniser**.

## Prerequis

- Java 11
- Acces reseau a `api.github.com` et `raw.githubusercontent.com`

## Compilation

Voir le fichier [compilerProgrammeInstruction.txt](./compilerProgrammeInstruction.txt).

