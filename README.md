# ReSourcesRelationnelles 

**CESI Alternance**  
*Projet pédagogique*  
Le projet « (RE)Sources Relationnelles est une simulation d’un projet qui pourrait être porté par le Ministère des Solidarités et de la Santé à destination des citoyens afin de proposer une plateforme de sources, ressources, et d’échanges. 

## Installation
Avant de déployer le projet mobile, il faut installer les webservices.  
Pour installer les webservices : [Cliquez ici](https://github.com/Charlinehe/ReSourcesRelationnellesApi "ReSourcesRelationnellesApi")


### Récupérer le projet 
```
git clone https://github.com/Charlinehe/ReSourcesRelationnellesMobile
```

### Installer les dépendances
_Pour installer Node : [Cliquez ici](https://nodejs.org/)_
```
cd chemin/vers/projet
npm  install
```

### Variables locale
* Pour renseigner les variables locales, modifier le fichier **./ReSourceRelationnellesMobile/src/config.js ** 
* Récupérez l’adresse IP de l’API

Pour récupérer l'adresse ip locale :

* Windows :
```
ipconfig
```

* Linux
```
ip a
```

Renseignez également le port de l’API (3005 par défaut)

Exemple : 
```
IP_ADDRESS: "192.168.1.139",
PORT: "3005"
```
:warning: *Ne pas oublier de lancer l'api*

### Lancer le projet
```
expo start
```

### Installer l’application expo Go sur mobile
Cette étape n’est nécessaire que si vous souhaitez déployer l’application sur un téléphone.
* [Android](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=fr&gl=US "Expo Go")
* [IOS](https://apps.apple.com/fr/app/expo-client/id982107779 "Expo Go")


### Installer l’application sur un émulateur
Si vous souhaitez utiliser un émulateur, il est nécessaire d’effectuer l’installation d’android studio. 

Se référer à la documentation officielle : [cliquer ici](https://developer.android.com/studio "Android Studio")
