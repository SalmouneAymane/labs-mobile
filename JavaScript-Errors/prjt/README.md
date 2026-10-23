# Mini-projet : cinq erreurs JavaScript

Cette application de démonstration suit une organisation `backend/` et `frontend/` inspirée du dossier `lab-erreur-js/live` du [dépôt de référence](https://github.com/mesbahimohammedyassirsolicode-star/lab/tree/main/lab-erreur-js/live). Le code de ce dossier est une nouvelle implémentation pédagogique.
La copie des fichiers de référence est conservée séparément dans [`../live/`](../live/).

## Lancer le projet

Depuis la racine du dépôt, dans un terminal :

```powershell
php -S 127.0.0.1:8000 -t .\JavaScript-Errors\prjt
```

Puis ouvrir `http://127.0.0.1:8000/frontend/`.

Les cinq cartes de la page permettent de reproduire chaque erreur et d'afficher une correction. Le mini-projet fonctionne aussi pour ces démonstrations sans démarrer le backend; l'API de recettes nécessite le serveur PHP.

## Structure

- `frontend/index.html` : page avec les cinq scénarios et l'exemple de recettes.
- `frontend/main.js` : reproductions contrôlées et corrections.
- `frontend/styles.css` : styles de la page.
- `backend/api/api.php` : endpoint JSON de démonstration.
- `backend/classes/` : classe et dépôt de recettes.
- `backend/data/data.json` : données d'exemple.
