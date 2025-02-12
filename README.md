# 🏡 Gestion des Résidences - Angular 16

Ce projet est une application Angular permettant de gérer des résidences et leurs appartements. Il met en œuvre un système de **navigation avancé** avec le **routage Angular**.

---

## 🚀 Objectifs du projet

- ✅ Créer des routes et naviguer entre différents composants
- ✅ Passer des paramètres via l’URL et les récupérer
- ✅ Gérer l’affichage dynamique des résidences et appartements
- ✅ Rediriger l’utilisateur en cas d’URL invalide

---

## 📂 Structure du projet

### 📁 **Composants principaux**
- `AppComponent` : Composant racine
- `HeaderComponent` : Barre de navigation
- `FooterComponent` : Pied de page
- `HomeComponent` : Page d'accueil
- `NotFoundComponent` : Page d'erreur 404

### 📁 **Gestion des résidences**
- `ResidencesComponent` : Liste des résidences
- `ResidenceDetailsComponent` : Détails d’une résidence
- `AddResidenceComponent` : Ajout et mise à jour d’une résidence

### 📁 **Gestion des appartements**
- `ApartmentsComponent` : Liste des appartements
- `ApartmentsByResidenceComponent` : Liste des appartements d’une résidence
- `AddApartmentComponent` : Ajout d’un appartement

---

## 🔧 **Installation et exécution**

### 1️⃣ Prérequis
- **Node.js** (version 18+ recommandée)
- **Angular CLI** (version 16)
  
### 2️⃣ Installation des dépendances
```sh
npm install
