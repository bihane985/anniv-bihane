// ===== Vue.js Application =====
const { createApp } = Vue;

// API Configuration
const API_BASE_URL = 'https://bihane985.pythonanywhere.com';

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
                <em>Les informations sur le menu sont à venir...</em>
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
            newParticipantEmail: '',
            showParticipantsModal: false
        };
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
            if (!this.newParticipantNom.trim() || !this.newParticipantPrenom.trim() || !this.newParticipantEmail.trim()) {
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
                        email: this.newParticipantEmail.trim()
                    })
                });
                const data = await response.json();
                if (data.success) {
                    this.participants.push(data.participant);
                    this.newParticipantNom = '';
                    this.newParticipantPrenom = '';
                    this.newParticipantEmail = '';
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
                    target.scrollIntoView({
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
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 150;
                if (window.pageYOffset >= sectionTop) {
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
        
        // Load forum messages and participants on startup
        this.fetchMessages();
        this.fetchParticipants();
        
        // Add loaded class for animations
        document.documentElement.classList.add('loaded');
    }
}).mount('#app');
