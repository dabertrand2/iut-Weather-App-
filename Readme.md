
# iut-Weather-App

>Ce projet est une application mobile météo, realisé en React Native. 
>
>*Il n'est actuellement pas terminé et encore en cours de développement*.

## La page ***Home***

Elle représente une ***FlatList*** de villes en cliquant sur une ville, vous pourrai accéder grace a une ***StackNavigation*** aux détails de chaque ville.  

La ***FlatList*** utilise un composent pour afficher une villes, ce composent est lui meme constitué d'un composent.

## Les Navigations

Il y a deux types de navigation dans ce projet une ***StackNavigation*** et une ***TabNavigation***.

La ***TabNavigation*** permet d'accéder a la page Settings de l'application. 

>*Note : La page Setting est toujours en cours de développement.*

### Parties toujours en cours de développement:

>*Note : Pour cause de problèmes avec l'installation d'expo sur ma machine personnelle je n'ai pas pu tester les implementations ajoutées sur les commit du 09/04/2023.*

#### La parties Actions -> Reducers (avec API)

Je fais appel dans mes actions à une ***API Swagger*** pour avoir accès à la météo des différentes villes, j'utilise aussi une ***API Swagger*** pour récupérer les images correspondent aux types de météo.

Le ***Reducer*** lui contient ***AppReducer*** qui mes renvois soit les images des conditions météo soit les données météo des villes. 

*La lecture des données du store n'est pas encore au point*

#### La page de détails d'une ville (après le 09/04/2023)

L'image des contions météo a été ajouté


