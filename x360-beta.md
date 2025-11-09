# I. Préparation de la clé USB
## Prérequis : 
- La dernière version de [ABadAvatar](https://github.com/shutterbug2000/ABadAvatar/releases/download/vPB1.0/ABadAvatar-publicbeta1.0.zip)
- Une clé USB vierge de 2Gb ou plus. 
- La dernière version de BadBuilder : [version x86](https://github.com/Pdawg-bytes/BadBuilder/releases/download/v0.31/BadBuilder-x86.exe), [version x64](https://github.com/Pdawg-bytes/BadBuilder/releases/download/v0.31/BadBuilder-AMD64.exe)
- La dernière version du dashboard [Aurora](https://phoenix.xboxunity.net/downloads/Aurora%200.7b.2%20-%20Release%20Package.rar) 

1. Insérez la clé USB dans votre console, allez dans Paramètres -> Stockage et sélectionnez votre clé USB et formatez-la. 
2. Retirez la clé USB de la console puis insérez la dans votre ordinateur. 
3. Exécutez le ``.exe`` de BadBuilder. 
4. Appuyez sur Entrée sur "Build exploit USB"
5. Sélectionnez votre clé USB, précédemment formatée sur la Xbox 360.
6. Appuyez sur la touche Y. 
7. Appuyez sur ENTER. 
8. Lorsqu'il est écrit "Which program should be launched by BadUpdate", sélectionnez "XeUnshackle".
9. Lorsqu'il est écrit "Would you like to add homebrew programs", appuyez sur N.
10. Extrayez le ``.rar`` du dashboard Aurora. 
11. Créez un dossier "Homebrew" sur votre clé USB et glissez tout le contenu du ``.rar`` Aurora dans ce dossier "Homebrew".
12. Dans le dossier "Homebrew", vous aurez un fichier ``Aurora.xex``, faites clic-droit et sélectionnez "Copier en tant que chemin d'accès". 
13. Allez à la racine de la clé USB et ouvrez le fichier ``launch.ini``, rendez vous à la ligne 37 et devant ``Default =``, faite CTRL + V, cela va copier le chemin de votre exécutable Aurora. 
14. Remplacez la lettre de lecteur du chemin par "Usb".
Par exemple si vous avez "E:\Homebrew\Aurora.xex", remplacez le "E" par "Usb", comme ceci ; "Usb:\Homebrew\Aurora.xex".
15. Sauvegardez le fichier (CTRL + S).
16. Ouvrez le fichier ``.zip`` de ABadAvatar. 
17. Sélectionnez les dossiers "BadUpdatePayload" et "Content" et placez-les à la racine de la clé USB. Windows vous demandera si vous voulez remplacer les fichiers déjà existants, faites "Oui".

Il ne vous reste plus qu'à allumer votre console, appuyer sur Back sur l'écran de XeUnshackle et vous arriverez sur Aurora.
