# Plan de projet — GW2 Builds (Nuxt 4 + MariaDB + Prisma)

## 1) Initialisation du projet
- **1.1** [x] Créer le repo et l’arborescence de base (Nuxt 4 + TypeScript)
- **1.2** [x] Configurer Tailwind CSS (thème visuel sobre, dark par défaut)
- **1.3** [x] Mettre en place les variables d’environnement (`.env`) et les constantes globales
- **1.4** [x] Mettre en place le routing de base Nuxt (pages `/`, `/login`, `/register`, `/me`)
- **1.5** [x] Ajouter un layout global (header minimal, container centré)

## 2) Base de données & ORM
- **2.1** [x] Démarrer un conteneur MariaDB en local (docker-compose)
- **2.2** [x] Installer et configurer Prisma dans le projet
- **2.3** [x] Définir le schéma Prisma : `User` et `Build`
- **2.4** [x] Générer le client Prisma et exécuter les migrations
- **2.5** [x] Préparer un script de seed minimal (compte test + builds factices)
- **2.6** [x] Mettre en place la connexion DB côté serveur Nuxt (client Prisma réutilisable)

## 3) Authentification & Sessions
- **3.1** [x] Créer la route API `POST /api/auth/register` (username + password hash)
- **3.2** [x] Créer la route API `POST /api/auth/login` (vérification et création de session)
- **3.3** [x] Stocker la session côté serveur (JWT signé ou token stocké en DB)
- **3.4** [x] Retourner un cookie HttpOnly sécurisé
- **3.5** [x] Créer la route `GET /api/auth/me` pour récupérer l’utilisateur courant
- **3.6** [x] Middleware serveur protégé pour les routes privées
- **3.7** [x] Middleware côté pages Nuxt pour rediriger si pas connecté (ex: `/me` → `/login`)

## 4) Pages publiques et navigation
- **4.1** [x] Page d’accueil `/`
  - Récupérer et afficher les derniers builds publics (API `GET /api/builds/latest`)
  - Boutons "voir profil" / "copier le build"
- **4.2** [x] Page publique utilisateur `/u/:username`
  - Afficher tous les builds publics de cet utilisateur
  - Lecture seule, aucune action d’édition
  - Balises meta / OpenGraph pour le partage Discord
- **4.3** [x] Page détail build `/build/:id`
  - Afficher un build précis (public uniquement ou propriétaire authentifié)
  - Bouton "copier le code d’archétype"
  - Meta tags individuels pour partager le build direct

## 5) Espace utilisateur connecté
- **5.1** Page `/me`
  - Lister tous les builds du user (publics + privés)
  - Bouton "Créer un build"
  - Filtrage local côté client (par profession, rôle, texte libre)
- **5.2** Page `/new-build`
  - Formulaire création build :
    - nom/titre
    - profession
    - rôle
    - code GW2 (string base64 `[&DQgnNTI1TC...==]`)
    - toggle public/privé
  - Soumission vers `POST /api/builds/create`
- **5.3** Page `/edit-build/:id` (optionnel v1 ou v2)
  - Formulaire d’édition si owner = user courant
  - Protection serveur : refuser toute édition si pas owner

## 6) API Builds
- **6.1** `GET /api/builds/latest`
  Retourner les X derniers builds publics ordonnés par date desc
  Index `(public, createdAt)` côté DB
- **6.2** `GET /api/users/[username]/builds`
  Retourner uniquement les builds publics de ce user
- **6.3** `GET /api/builds/[id]`
  Retourner le build si public OU si propriétaire
- **6.4** `GET /api/me/builds`
  Retourner tous les builds du user courant (public + privé)
- **6.5** `POST /api/builds/create`
  Créer un build lié à l’utilisateur courant
- **6.6** `POST /api/builds/update/:id` *(plus tard)*
  Modifier un build si owner
- **6.7** `POST /api/builds/delete/:id` *(plus tard)*
  Supprimer un build si owner

## 7) Filtrage local & UX de recherche
- **7.1** Définir les champs filtrables dans l’UI (profession, rôle, texte libre)
- **7.2** Stocker la liste brute des builds `/me` dans un state local (Pinia/composable)
- **7.3** Appliquer les filtres côté client sans re-fetch
- **7.4** Ajouter une barre de recherche et des tags cliquables (ex: "Power DPS", "Heal")
- **7.5** Gérer l’ordre d’affichage (par défaut : le plus récent en haut)

## 8) Design & identité visuelle
- **8.1** Installer Tailwind + config dark mode par défaut
- **8.2** Définir une palette sobre inspirée GW2 (rouge profond / gris acier / touches or)
- **8.3** Construire des composants UI réutilisables :
  - `CardBuild`
  - `BadgeProfession`
  - `PrivacyTag` (Public / Privé)
  - `Header` / `Nav` minimal
  - `Button` primaire / secondaire
- **8.4** Ajouter `useHead()` / SEO / balises OpenGraph sur les pages publiques
- **8.5** Gérer le responsive (desktop d’abord, lecture mobile ensuite)

## 9) Sécurité & validation
- **9.1** Hash des mots de passe (bcrypt)
- **9.2** Validation serveur de tous les inputs (Zod côté API)
- **9.3** Vérification propriétaire avant édition/suppression d’un build
- **9.4** Cookies HttpOnly + `SameSite` correct
- **9.5** Empêcher l’énumération d’utilisateurs (erreurs login génériques)
- **9.6** Limiter la taille des champs (title, role, etc.)
- **9.7** Échapper les champs texte affichés (prévention XSS)

## 10) Dockerisation & environnement
- **10.1** Créer le `docker-compose.yml` :
  - service `app` (Nuxt 4 en mode Node server)
  - service `db` (MariaDB)
  - réseau privé interne
  - volume pour les données MariaDB
- **10.2** Gérer les variables d’env Docker (`DATABASE_URL`, secret JWT, etc.)
- **10.3** Ajouter un Dockerfile prod pour Nuxt (build + run)
- **10.4** Script de migration Prisma dans l’entrypoint (`prisma migrate deploy` au démarrage)

## 11) Déploiement
- **11.1** Choisir le serveur cible (VPS, etc.)
- **11.2** Lancer docker-compose en prod
- **11.3** Ajouter un reverse proxy HTTPs (Traefik ou nginx) devant `app`
- **11.4** Forcer HTTPS / cookies sécurisés en prod
- **11.5** Sauvegardes MariaDB programmées via `mysqldump` (cron, rotation)
- **11.6** Vérifier les meta tags Discord sur `/u/:username` et `/build/:id`

## 12) (Optionnel + évolutif futur)
- **12.1** Import automatique d’un code d’archétype GW2 et parsing du build
- **12.2** Système de tags perso / favoris / "meta WvW", "open world", etc.
- **12.3** Notation ou like public sur les builds
- **12.4** Export du build en format GW2 (bouton "Copier le code")
- **12.5** Mode lecture anonyme ultra léger (sans JS)
- **12.6** Pagination / lazy load sur `/` quand beaucoup de builds
