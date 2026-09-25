// ===== Vue.js Application =====
const { createApp } = Vue;

// API Configuration
// Messages + participants : toujours sur PythonAnywhere
const API_BASE_URL = 'https://bihane985.pythonanywhere.com';
// Photos : PythonAnywhere
// Pour tester en local, remettre 'http://localhost:5000' (backend/app.py, port 5000)
const API_PHOTOS_URL = 'https://bihane985.pythonanywhere.com';

createApp({
    data() {
        return {
            // Hero Section
            title: "Bihane a 30 ans ! 🎂",
            subtitle: "Venez célébrer avec moi cette journée spéciale",
            
            // Event Details
            eventDate: "Samedi 24 Octobre 2026",
            eventLocation: "Auberge du Thélème, Beaumont (07170), Ardèche",
            eventTime: "19h",
            
            // Info Section
            eventInfo: `
                <strong>C'est parti pour mes 30 ans !</strong><br><br>
                Nous nous retrouvons pour une soirée festive et conviviale à l'Auberge du Thélème.
                Au programme : bon repas, bonne ambiance, et surtout de bons moments partagés avec ceux qui comptent.
                <br><br>
                <strong>Dress code :</strong> Élégant décontracté – venez comme vous êtes, l'important c'est d'être là !
            `,
            
            accessInfo: `
                <strong>En voiture :</strong><br>
                L'Auberge du Thélème se situe à Beaumont (07170) en Ardèche, dans le sud du département.<br>
                Coordonnées GPS : 44.537781° N, 4.168042° E<br>
                Parking disponible sur place gratuitement.
                <br>
                Nous vous conseillons le covoiturage pour plus de flexibilité !
            `,
            
            menuInfo: `
                <strong>Cap sur La Réunion !</strong><br><br>
                <strong>🥟 Apéritif</strong><br>
                Samoussas, bouchons et autres petits délices créoles.
                <br><br>
                <strong>🍛 Plat</strong><br>
                Rougail saucisse, riz et grains, comme là-bas.
                <br><br>
                <strong>🍹 Boissons</strong><br>
                Punch et marquisette pour l'apéritif, champagne et vin pour la suite.
                <br><br>
                <strong>🎂 Dessert</strong><br>
                Le gâteau d'anniversaire, évidemment !
            `,
            
            giftsInfo: `
                <strong>Votre présence est le plus beau des cadeaux !</strong><br><br>
                Si vous souhaitez absolument m'offrir quelque chose, une enveloppe ou un petit cadeau 
                symbolique seront les bienvenus. Mais vraiment, ce qui compte c'est de partager 
                ce moment avec vous.
                <br><br>
                <em>"Le bonheur, c'est de se retrouver, de se rassembler, de se souvenir des bons moments."</em>
            `,
            
            // Accommodations
            accommodations: [
                {
                    name: "Auberge du Thélème",
                    type: "Auberge-restaurant avec chambres",
                    distance: "À Beaumont (sur place)",
                    price: "Sur demande",
                    website: "https://letheleme.fr/",
                    booking: "https://www.google.com/maps/?q=44.537781,4.168042",
                    phone: "+33 4 75 39 43 08"
                },
                {
                    name: "La Petite Cour Verte",
                    type: "Chambres d'hôtes 4 étoiles",
                    distance: "À Beaumont",
                    price: "À partir de 90€/nuit (2 nuits minimum)",
                    website: "https://www.lapetitecourverte.com/",
                    booking: "https://www.google.com/maps/search/?api=1&query=La+Petite+Cour+Verte,+Beaumont,+Ardèche",
                    phone: "+33 4 75 39 58 88"
                },
                {
                    name: "Gîtes La Roche",
                    type: "Gîtes ruraux",
                    distance: "À Beaumont",
                    price: "À partir de 85€/nuit",
                    website: "https://www.giteslaroche.fr/",
                    booking: "https://www.google.com/maps/search/?api=1&query=Gîtes+La+Roche,+Beaumont,+Ardèche",
                    phone: "+33 4 75 39 44 93"
                },
                {
                    name: "Gîte Le Mas Lamel",
                    type: "Gîte labellisé Gîtes de France",
                    distance: "À Beaumont",
                    price: "Sur demande",
                    website: "https://www.gites-de-france-ardeche.com/location-Gite-Beaumont-07G29700.html",
                    booking: "https://www.google.com/maps/search/?api=1&query=Gîte+Le+Mas+Lamel,+Beaumont,+Ardèche",
                    phone: "+33 4 75 64 70 70"
                },
                {
                    name: "Gîte Le Pélou",
                    type: "Gîte labellisé Gîtes de France",
                    distance: "À Beaumont",
                    price: "Sur demande",
                    website: "https://www.gites-de-france-ardeche.com/location-Gite-Beaumont-07G29703.html",
                    booking: "https://www.google.com/maps/search/?api=1&query=Gîte+Le+Pélou,+Beaumont,+Ardèche",
                    phone: "+33 4 75 39 90 04"
                },
                {
                    name: "Moulin Deleuze",
                    type: "Chambres d'hôtes",
                    distance: "Val de Bolze (à proximité)",
                    price: "À partir de 75€/nuit",
                    website: null,
                    booking: "https://www.google.com/maps/search/?api=1&query=Moulin+Deleuze,+Val+de+Bolze,+Ardèche",
                    phone: "+33 6 78 66 77 73"
                },
                {
                    name: "Hôtel de l'Europe",
                    type: "Hôtel 2 étoiles",
                    distance: "À Joyeuse (~15 min de Beaumont)",
                    price: "À partir de 70€/nuit",
                    website: "https://www.ardeche-hotel-europe-joyeuse.com/",
                    booking: "https://www.google.com/maps/search/?api=1&query=Hôtel+de+l'Europe,+Joyeuse,+Ardèche",
                    phone: "+33 4 75 39 51 26"
                }
            ],
            
            // Contact Info
            contactEmail: "bihane.leport@gmail.com",
            contactPhone: "06 46 40 08 98",
            
            // Forum
            forumMessages: [],
            newMessagePrenom: '',
            newMessageText: '',
            showForumModal: false,
            
            // Participants
            participants: [],
            newParticipantNom: '',
            newParticipantPrenom: '',
            showParticipantsModal: false,
            
            // Success Modal
            showSuccessModal: false,
            successMessage: '',
            
            // Signalement menu
            showMenuMessageModal: false,
            menuMessagePrenom: '',
            menuMessageContact: '',
            menuMessageText: '',
            isSendingMenuMessage: false,
            
            // Photos
            photos: [],
            photosTotal: 0,
            allPhotos: [],
            showAllPhotosModal: false,
            isLoadingAllPhotos: false,
            viewerIndex: null,
            touchStartX: 0,
            touchStartY: 0,
            photoFile: null,
            photoPreview: null,
            isSendingPhoto: false,
            showPhotosModal: false
        };
    },
    
    computed: {
        isMenuMessageDisabled() {
            return !this.menuMessagePrenom.trim()
                || !this.menuMessageText.trim()
                || this.isSendingMenuMessage;
        }
    },
    
    methods: {
        // Scroll to top function
        scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        },
        
        // Forum methods
        openForum() {
            this.showForumModal = true;
        },
        closeForum() {
            this.showForumModal = false;
        },
        
        // Participants methods
        openParticipants() {
            this.showParticipantsModal = true;
        },
        closeParticipants() {
            this.showParticipantsModal = false;
        },
        
        // Success Modal methods
        showSuccess(message) {
            this.successMessage = message;
            this.showSuccessModal = true;
            setTimeout(() => {
                this.showSuccessModal = false;
            }, 3000);
        },
        closeSuccess() {
            this.showSuccessModal = false;
        },
        
        // ===== Signalement menu =====
        openMenuMessage() {
            this.showMenuMessageModal = true;
        },
        closeMenuMessage() {
            this.showMenuMessageModal = false;
        },
        
        async sendMenuMessage() {
            if (this.isMenuMessageDisabled) return;
            
            this.isSendingMenuMessage = true;
            try {
                const response = await fetch(`${API_BASE_URL}/set-menu-message`, {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        prenom: this.menuMessagePrenom.trim(),
                        contact: this.menuMessageContact.trim(),
                        message: this.menuMessageText.trim()
                    })
                });
                const data = await response.json();
                if (data.success) {
                    this.showSuccess("Message bien reçu, merci ! Je transmets à l’auberge et je reviens vers vous.");
                    this.menuMessagePrenom = '';
                    this.menuMessageContact = '';
                    this.menuMessageText = '';
                    this.closeMenuMessage();
                } else {
                    this.showSuccess('Erreur : ' + (data.error || 'Inconnu'));
                }
            } catch (error) {
                console.error('Erreur envoi message menu:', error);
                this.showSuccess('Erreur de connexion au serveur');
            } finally {
                this.isSendingMenuMessage = false;
            }
        },
        
        // Photos Modal methods
        openPhotosModal() {
            this.showPhotosModal = true;
        },
        closePhotosModal() {
            this.showPhotosModal = false;
        },
        
        // Photos methods
        // Galerie et appareil photo : dans les deux cas l'envoi part tout seul
        handlePhotoUpload(event) {
            this.setPhotoFile(event.target.files[0]);
        },

        handlePhotoCapture(event) {
            this.setPhotoFile(event.target.files[0]);
        },

        setPhotoFile(file) {
            if (!file) return;
            this.photoFile = file;
            // Libere l'apercu precedent pour ne pas accumuler d'objets en memoire
            if (this.photoPreview) URL.revokeObjectURL(this.photoPreview);
            this.photoPreview = URL.createObjectURL(file);
            this.sendPhoto();
        },

        clearPhoto() {
            if (this.photoPreview) URL.revokeObjectURL(this.photoPreview);
            this.photoPreview = null;
            this.photoFile = null;
            this.resetPhotoInputs();
        },

        // Remet les deux champs fichier a zero, sinon reselectionner
        // la meme photo ne declenche pas l'evenement change
        resetPhotoInputs() {
            ['photo-upload', 'photo-camera'].forEach(id => {
                const input = document.getElementById(id);
                if (input) input.value = '';
            });
        },
        
        async fetchPhotos() {
            try {
                const response = await fetch(`${API_PHOTOS_URL}/get-photos`);
                const data = await response.json();
                if (data.success) {
                    this.photos = data.photos || [];
                    this.photosTotal = data.total || this.photos.length;
                } else {
                    this.photos = [];
                    this.photosTotal = 0;
                    console.error('Erreur récup photos:', data.error);
                }
            } catch (error) {
                console.error('Erreur réseau:', error);
                this.photos = [];
                this.photosTotal = 0;
            }
        },

        // ===== Galerie complète =====

        async openAllPhotos() {
            this.showAllPhotosModal = true;
            this.isLoadingAllPhotos = true;
            try {
                const response = await fetch(`${API_PHOTOS_URL}/get-photos?limit=all`);
                const data = await response.json();
                this.allPhotos = data.success ? (data.photos || []) : [];
                if (data.success) this.photosTotal = data.total || this.allPhotos.length;
            } catch (error) {
                console.error('Erreur récup galerie:', error);
                this.allPhotos = [];
            } finally {
                this.isLoadingAllPhotos = false;
            }
        },

        closeAllPhotos() {
            this.showAllPhotosModal = false;
            this.viewerIndex = null;
        },

        // ===== Visionneuse =====

        openViewer(index) {
            this.viewerIndex = index;
        },

        closeViewer() {
            this.viewerIndex = null;
        },

        // Le modulo fait boucler la galerie : après la dernière on revient à la première
        nextPhoto() {
            if (this.allPhotos.length === 0) return;
            this.viewerIndex = (this.viewerIndex + 1) % this.allPhotos.length;
        },

        prevPhoto() {
            if (this.allPhotos.length === 0) return;
            this.viewerIndex = (this.viewerIndex - 1 + this.allPhotos.length) % this.allPhotos.length;
        },

        onViewerTouchStart(event) {
            this.touchStartX = event.changedTouches[0].clientX;
            this.touchStartY = event.changedTouches[0].clientY;
        },

        onViewerTouchEnd(event) {
            const deltaX = event.changedTouches[0].clientX - this.touchStartX;
            const deltaY = event.changedTouches[0].clientY - this.touchStartY;
            // On ignore les gestes trop courts, et ceux plus verticaux
            // qu'horizontaux (l'utilisateur fait défiler, il ne navigue pas)
            if (Math.abs(deltaX) < 50 || Math.abs(deltaX) < Math.abs(deltaY)) return;
            if (deltaX < 0) {
                this.nextPhoto();
            } else {
                this.prevPhoto();
            }
        },

        // Flèches et Échap pendant que la visionneuse est ouverte
        onViewerKeydown(event) {
            if (this.viewerIndex === null) return;
            if (event.key === 'ArrowRight') this.nextPhoto();
            else if (event.key === 'ArrowLeft') this.prevPhoto();
            else if (event.key === 'Escape') this.closeViewer();
        },
        
        async sendPhoto() {
            // isSendingPhoto empeche un double envoi si on reclique pendant l'upload
            if (!this.photoFile || this.isSendingPhoto) {
                return;
            }

            this.isSendingPhoto = true;

            const formData = new FormData();
            formData.append('photo', this.photoFile);

            try {
                const response = await fetch(`${API_PHOTOS_URL}/set-photo`, {
                    method: 'POST',
                    body: formData
                });

                const data = await response.json();
                if (data.success) {
                    this.showSuccess('Photo envoyée, merci !');
                    this.clearPhoto();
                    this.closePhotosModal();
                    // On relit la liste cote serveur : c'est lui qui decide
                    // quelles sont les 3 dernieres photos
                    await this.fetchPhotos();
                } else {
                    this.showSuccess('Erreur : ' + (data.error || 'Inconnu'));
                }
            } catch (error) {
                console.error('Erreur envoi photo:', error);
                this.showSuccess('Erreur de connexion au serveur');
            } finally {
                this.isSendingPhoto = false;
            }
        },
        async fetchParticipants() {
            try {
                const response = await fetch(`${API_BASE_URL}/get-participants`);
                const data = await response.json();
                this.participants = data.participants || [];
            } catch (error) {
                console.error('Erreur lors de la récupération des participants:', error);
            }
        },
        
        async sendParticipant() {
            if (!this.newParticipantNom.trim() || !this.newParticipantPrenom.trim()) {
                return;
            }
            try {
                const response = await fetch(`${API_BASE_URL}/set-participant`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        nom: this.newParticipantNom.trim(),
                        prenom: this.newParticipantPrenom.trim(),
                        email: 'inscrit@inscrit.com'
                    })
                });
                const data = await response.json();
                if (data.success) {
                    this.participants.push(data.participant);
                    this.showSuccess(`Inscription validée, ${this.newParticipantPrenom} !`);
                    this.newParticipantNom = '';
                    this.newParticipantPrenom = '';
                }
            } catch (error) {
                console.error('Erreur lors de l\'envoi du participant:', error);
            }
        },
        
        async fetchMessages() {
            try {
                const response = await fetch(`${API_BASE_URL}/get-messages`);
                const data = await response.json();
                this.forumMessages = data.messages || [];
            } catch (error) {
                console.error('Erreur lors de la récupération des messages:', error);
            }
        },
        
        async sendMessage() {
            if (!this.newMessagePrenom.trim() || !this.newMessageText.trim()) {
                return;
            }
            try {
                const response = await fetch(`${API_BASE_URL}/set-message`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        prenom: this.newMessagePrenom.trim(),
                        message: this.newMessageText.trim()
                    })
                });
                const data = await response.json();
                if (data.success) {
                    this.forumMessages.push(data.message);
                    this.showSuccess('Message envoyé !');
                    this.newMessagePrenom = '';
                    this.newMessageText = '';
                }
            } catch (error) {
                console.error('Erreur lors de l\'envoi du message:', error);
            }
        }
    },
    
    mounted() {
        // Mobile menu toggle
        const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
        const mobileNavOverlay = document.getElementById('mobile-nav-overlay');
        if (mobileMenuToggle && mobileNavOverlay) {
            mobileMenuToggle.addEventListener('click', () => {
                mobileMenuToggle.classList.toggle('active');
                mobileNavOverlay.classList.toggle('active');
            });
        }
        
        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileNavOverlay && mobileNavOverlay.classList.contains('active')) {
                    mobileMenuToggle.classList.remove('active');
                    mobileNavOverlay.classList.remove('active');
                }
            });
        });
        
        // Add smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    const navHeight = 80; // Hauteur de la navbar
                    const targetPosition = target.offsetTop - navHeight;
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
        
        // Highlight active nav link on scroll
        const sections = document.querySelectorAll('section[id]');
        const navLinks = document.querySelectorAll('.nav-link');
        
        window.addEventListener('scroll', () => {
            let current = '';
            let closestDistance = Infinity;
            const scrollCenter = window.pageYOffset + window.innerHeight / 2;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                const sectionCenter = sectionTop + sectionHeight / 2;
                const distance = Math.abs(sectionCenter - scrollCenter);
                
                if (distance < closestDistance) {
                    closestDistance = distance;
                    current = section.getAttribute('id');
                }
            });
            
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
        
        // Navigation clavier de la visionneuse
        window.addEventListener('keydown', this.onViewerKeydown);
        
        // Load forum messages, participants and photos on startup
        this.fetchMessages();
        this.fetchParticipants();
        this.fetchPhotos();
        
        // Add loaded class for animations
        document.documentElement.classList.add('loaded');
    }
}).mount('#app');
