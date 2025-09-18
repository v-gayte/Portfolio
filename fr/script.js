document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.navbar a');
    const themeToggle = document.getElementById('theme-toggle');

    const pages = {
        accueil: `
            <section>
                <h2>À propos de moi</h2>
                <p>Étudiant en informatique, je m’intéresse au développement logiciel et aux réseaux.</p>
                <p>J’étudie et pratique différents langages comme PHP pour le web, Python pour la création d’outils et l’automatisation, ainsi que C# pour des applications professionnelles.</p>
                <p>Je développe également mes compétences en réseaux et infrastructures, avec une attention particulière portée à la sécurité et aux performances.
                Curieux et motivé, je cherche à progresser en explorant de nouveaux projets et en mettant en pratique ce que j’apprends.</p> 
                <p>Mon objectif est de continuer à élargir mes compétences et de contribuer à des solutions utiles et efficaces.</p>            
            </section>
        `,
        projets: `
            <section>
                <h2>Projets</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <h3>Mélangeur de fichiers</h3>
                        <p>Application Python permettant de mélanger les fichiers d’un dossier via une interface graphique.</p>
                        <div class="project-tags">
                            <span>Python</span><span>Tkinter</span><span>OS</span>
                        </div>
                        <a class="project-btn" href="https://github.com/v-gayte/file_randomizer" target="_blank">Voir sur GitHub</a>
                    </div>
                    <div class="project-card">
                        <h3>Application de suivi sportif</h3>
                        <p>Outil Python permettant de suivre ses exercices sportifs à travers une interface ludique.</p>
                        <div class="project-tags">
                            <span>Python</span><span>JSON</span><span>Customtkinter</span>
                        </div>
                        <a class="project-btn" href="https://github.com/v-gayte/Calisthenics_app" target="_blank">Voir sur GitHub</a>
                    </div>
                    <div class="project-card">
                        <h3>Site web de recherche de stage</h3>
                        <p>Site web facilitant la mise en relation entre entreprises et étudiants pour la recherche de stage, développé avec le framework Laravel.</p>
                        <div class="project-tags">
                            <span>PHP</span><span>Laravel</span><span>JavaScript</span><span>HTML</span><span>CSS</span>
                        </div>
                        <a class="project-btn" href="https://github.com/viacomeb/ProjetWeb" target="_blank">Voir sur GitHub</a>
                    </div>
                    <div class="project-card">
                        <h3>Jeu de la vie</h3>
                        <p>Implémentation du jeu de la vie en C++ via la programmation orientée objet.</p>
                        <div class="project-tags">
                            <span>C++</span><span>Orienté Objet</span>
                        </div>
                        <a class="project-btn" href="https://github.com/v-gayte/Le_jeu_de_la_vie" target="_blank">Voir sur GitHub</a>
                    </div>
                </div>
            </section>
        `,
        experience: `
            <section>
    <h2>Expérience</h2>
    <div class="exp-sections">
        <div>
            <h3>Expérience professionnelle</h3>
            <ul class="timeline">
                <li>
                    <div class="timeline-point"></div>
                    <div class="timeline-content">
                        <strong>Avril 2025 - Juillet 2025</strong> - Stage Développeur chez TDI (Transfert Développement Informatique)<br>
                        Migration et optimisation de bibliothèques DLL en C# sous .NET 8.
                        <ul>
                            <li>Responsable de la migration des bibliothèques vers la dernière version du moteur interne</li>
                            <li>Amélioration de la compatibilité, des performances et de la maintenabilité du code</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
        <div>
            <h3>Formation</h3>
            <ul class="timeline">
                <li>
                    <div class="timeline-point"></div>
                    <div class="timeline-content">
                        <strong>2025 - Présent</strong> - CESI Lyon, Cycle Ingénieur Informatique (section anglophone)<br>
                        <p><strong>Projets réalisés :</strong></p>
                        <ul>
                            <li><u>Algorithmes avancés et combinatoire</u> : Conception et analyse</li>
                            <li><u>IA et machine learning</u> : Développement d'une IA pour automatiser des tâches basiques</li>
                            <li><u>Systèmes d'information et sécurité</u> : Méthodes de protection, audit et sécurisation</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="timeline-point"></div>
                    <div class="timeline-content">
                        <strong>2023 - 2025</strong> - CESI Lyon, Cycle préparatoire<br>
                        <p><strong>Projets réalisés :</strong></p>
                        <ul>
                            <li><u>Système embarqué (C/C++)</u> : Création et développement d'une station météo via capteurs sur une Arduino</li>
                            <li><u>Programmation orientée objet (C++)</u> : Implémentation du jeu de la vie</li>
                            <li><u>Systèmes et réseaux</u> : Dimensionnement et mise en place de réseaux à différentes échelles</li>
                            <li><u>Développement Web (HTML, CSS, JS, Laravel, SQL)</u> : Développement et déploiement d'un site de recherche de stage avec gestion de profils</li>
                            <li><u>Traitement du signal (Python)</u> : Implémentation d'un programme de communication et d'encodage via onde radio</li>
                            <li><u>Modélisation de base de données</u> : Conception d'une base de données pour un réseau de capteurs</li>
                            <li><u>Électronique</u> : Création d'un coffre-fort avec différents niveaux de sécurité grâce à une Arduino</li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div class="timeline-point"></div>
                    <div class="timeline-content">
                        <p><strong>2020 - 2023</strong> - Baccalauréat Général, Lycée Notre Dame de Bellegarde</p>
                        <ul>
                            <li>Spécialités : Mathématiques, Numérique et Sciences Informatiques (NSI)</li>
                            <li>Option : Mathématiques expertes</li>
                            <li>Mention : Bien</li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    <div style="text-align:center; margin-top:2.5rem;">
        <a href="../images/cv.pdf" class="project-btn" download>Télécharger mon CV (PDF)</a>
    </div>
</section>

        `,
        connect: `
            <section>
                <h2>Contactez-moi</h2>
                <p>Actuellement étudiant et toujours à la recherche de stages ou de nouvelles opportunités, je suis enthousiaste à l’idée de découvrir des projets stimulants et d’échanger avec des professionnels du secteur.</p>
                <p>Si vous souhaitez collaborer, partager des conseils ou simplement discuter de vos projets, n’hésitez pas à me contacter par email à <a href="mailto:virgil.gayte@gmail.com">virgil.gayte@gmail.com</a> ou via le formulaire ci-dessous.</p>
                <p>Au plaisir de vous lire et d’échanger avec vous !</p>
                <form 
                    id="contact-form" 
                    class="contact-form"
                    action="https://formspree.io/f/xvgbllgd"
                    method="POST"
                >
                    <div class="form-row">
                        <div class="form-group">
                            <label for="user_name">Nom :</label>
                            <input type="text" id="user_name" name="user_name" required>
                        </div>
                        <div class="form-group">
                            <label for="user_email">Adresse mail :</label>
                            <input type="email" id="user_email" name="user_email" required>
                        </div>
                    </div>
                    <label for="subject">Sujet :</label>
                    <input type="text" id="subject" name="subject" required>

                    <label for="message">Message :</label>
                    <textarea id="message" name="message" rows="5" style="resize: none;" required></textarea>

                    <button type="submit" class="btn-submit">Envoyer</button>
                </form>
            </section>
        `
    };

    function navigate(page) {
        main.innerHTML = pages[page] || pages.accueil;
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === page));
        main.focus();
        window.scrollTo(0, 0); // Remonter en haut de la page lors du changement de section
    }

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            navigate(link.dataset.page);
        });
    });

    // Mode sombre
    themeToggle.addEventListener('change', () => {
        const isDark = themeToggle.checked;
        document.body.classList.toggle('dark', isDark);
        themeToggle.setAttribute('aria-checked', isDark);
    });

    // Page par défaut
    navigate('accueil');
});
