# Site Anniversaire - Bihane a 30 ans ! 🎉

Un site web informatif pour l'anniversaire de Bihane, créé avec Vue.js 3, responsive (mobile et desktop), avec un design épuré et des couleurs vives.

## Structure du projet

```
Anniv_du_B/
├── index.html    # Page principale
├── style.css    # Styles CSS avec variables et responsive design
├── script.js    # Logique Vue.js avec les données
├── .gitignore   # Fichiers à ignorer
└── README.md    # Ce fichier
```

## Utilisation

### Pour visualiser le site localement

1. **Méthode 1 : Ouvrir directement dans le navigateur**
   - Double-cliquez sur `index.html` dans votre explorateur de fichiers
   - Le site s'ouvrira directement dans votre navigateur par défaut

2. **Méthode 2 : Utiliser un serveur local**
   ```bash
   # Si vous avez Python installé
   python -m http.server 8000
   
   # Puis ouvrez dans votre navigateur :
   # http://localhost:8000
   ```

3. **Méthode 3 : Utiliser VS Code avec Live Server**
   - Installez l'extension "Live Server"
   - Ouvrez le dossier dans VS Code
   - Cliquez sur "Go Live" dans la barre d'outils

### Pour héberger le site en ligne

Vous pouvez héberger ce site gratuitement sur :
- **GitHub Pages** (recommandé)
- **Netlify Drop** (glisser-déposer le dossier)
- **Vercel**
- **Surge.sh**

## Personnalisation

### Modifier les informations principales

Éditez le fichier `script.js` et modifiez les propriétés dans la section `data()` :

```javascript
data() {
    return {
        title: "Bihane a 30 ans ! 🎂",
        subtitle: "Venez célébrer avec moi cette journée spéciale",
        eventDate: "24 Octobre 2026",
        eventLocation: "Auberge du Thélème, Beaumont (Ardèche)",
        eventTime: "À partir de 19h30",
        contactEmail: "bihane@example.com",
        contactPhone: "+33 6 00 00 00 00"
    };
}
```

### Modifier les informations détaillées

Dans `script.js`, modifiez les propriétés HTML :

```javascript
eventInfo: `
    <strong>C'est parti pour mes 30 ans !</strong><br><br>
    Nous nous retrouvons pour une soirée festive...
`,
accessInfo: `
    <strong>En voiture :</strong><br>
    L'Auberge du Thélème se situe à Beaumont...<br>
    ...
`,
giftsInfo: `
    <strong>Votre présence est le plus beau des cadeaux !</strong><br><br>
    ...
`
```

### Modifier les hébergements

Dans `script.js`, modifiez le tableau `accommodations` :

```javascript
accommodations: [
    {
        name: "Hôtel Le Castellas",
        type: "Hôtel 3 étoiles",
        distance: "À 5 km de Beaumont",
        price: "À partir de 75€/nuit",
        website: "https://www.lecastellas.com",
        booking: "https://www.booking.com/hotel/fr/le-castellas",
        phone: "+33475300000"
    },
    // Ajoutez ou modifiez des hébergements ici
]
```

### Modifier la carte Google Maps

Dans `index.html`, trouvez la section `<iframe>` et modifiez l'URL `src` :

```html
<iframe 
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2929.5!2d4.5!3d44.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDTCsDMwJzAwLjAiTiA0wrAwMyczMC4wIkU!5e0!3m2!1sfr!2sfr!4v1234567890" 
    ...
></iframe>
```

Pour générer une nouvelle URL de carte :
1. Allez sur [Google Maps](https://www.google.com/maps)
2. Recherchez "Auberge du Thélème, Beaumont, Ardèche"
3. Cliquez sur "Partager" → "Intégrer une carte"
4. Copiez le code iframe et remplacez l'URL `src`

### Modifier les couleurs

Dans `style.css`, modifiez les variables CSS au début du fichier :

```css
:root {
    /* Primary Colors - Vives et joyeuses */
    --primary: #FF1493;      /* Rose profond */
    --primary-light: #FF69B4; /* Rose clair */
    --secondary: #20B2AA;    /* Turquoise */
    --accent: #FFD700;       /* Or */
    /* ... */
}
```

### Modifier les polices

Dans `index.html`, modifiez l'import de Google Fonts :

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Vous pouvez choisir d'autres polices sur [Google Fonts](https://fonts.google.com/)

## Fonctionnalités incluses

✅ **Design responsive** - Adapte automatiquement mobile, tablette et desktop
✅ **Couleurs vives** - Rose, turquoise et or pour une ambiance festive
✅ **Design épuré** - Interface propre et moderne
✅ **Sections complètes** :
   - Hero avec informations de l'événement
   - Informations pratiques
   - Hébergements à proximité avec liens
   - Carte Google Maps
   - Contact
✅ **Animations** - Effets de fade-in, bounce et transitions fluides
✅ **Bouton retour en haut** - Pour faciliter la navigation
✅ **Pas de backend** - Site 100% statique, hébergement simple

## Technologies utilisées

- **Vue.js 3** (via CDN) - Framework JavaScript réactif
- **CSS3** - Styles modernes avec variables CSS et Flexbox/Grid
- **Google Fonts** - Typographie Poppins
- **Google Maps Embed API** - Carte interactive

## Conseils pour la production

1. **Mettez à jour les liens d'hébergement** avec de vrais établissements à Beaumont (Ardèche)
2. **Vérifiez les coordonnées GPS** pour la carte Google Maps
3. **Testez sur mobile** avant de partager le lien
4. **Personnalisez les informations** selon vos besoins

## Licence

Ce projet est créé pour un usage personnel. Libre à vous de le modifier et le partager.

---

Créé avec ❤️ pour célébrer les 30 ans de Bihane !
