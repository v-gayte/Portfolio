document.addEventListener('DOMContentLoaded', () => {
    const main = document.getElementById('main-content');
    const navLinks = document.querySelectorAll('.navbar a');
    const themeToggle = document.getElementById('theme-toggle');

    const pages = {
        accueil: `
            <section>
                <h2>About Me</h2>
                <p>Computer science student interested in software development and networking.</p>
                <p>I study and practice various languages such as PHP for web, Python for tools and automation, and C# for professional applications.</p>
                <p>I am also developing my skills in networks and infrastructures, with a particular focus on security and performance.
                Curious and motivated, I seek to progress by exploring new projects and applying what I learn.</p>
                <p>My goal is to continue expanding my skills and contribute to useful and efficient solutions.</p>
            </section>
        `,
        projets: `
            <section>
                <h2>Projects</h2>
                <div class="projects-grid">
                    <div class="project-card">
                        <h3>File Shuffler</h3>
                        <p>Python application that shuffles files in a folder through a graphical interface.</p>
                        <div class="project-tags">
                            <span>Python</span><span>Tkinter</span><span>OS</span>
                        </div>
                        <a class="project-btn" href="https://github.com/v-gayte/file_randomizer" target="_blank">View on GitHub</a>
                    </div>
                    <div class="project-card">
                        <h3>Sports Tracking App</h3>
                        <p>Python tool to track workouts with a playful interface.</p>
                        <div class="project-tags">
                            <span>Python</span><span>JSON</span><span>Customtkinter</span>
                        </div>
                        <a class="project-btn" href="https://github.com/v-gayte/Calisthenics_app" target="_blank">View on GitHub</a>
                    </div>
                    <div class="project-card">
                        <h3>Internship Search Website</h3>
                        <p>Website connecting companies and students for internship opportunities, developed with the Laravel framework.</p>
                        <div class="project-tags">
                            <span>PHP</span><span>Laravel</span><span>JavaScript</span><span>HTML</span><span>CSS</span>
                        </div>
                        <a class="project-btn" href="https://github.com/viacomeb/ProjetWeb" target="_blank">View on GitHub</a>
                    </div>
                    <div class="project-card">
                        <h3>Game of Life</h3>
                        <p>Implementation of Conway's Game of Life in C++ using object-oriented programming.</p>
                        <div class="project-tags">
                            <span>C++</span><span>Object-Oriented</span>
                        </div>
                        <a class="project-btn" href="https://github.com/v-gayte/Le_jeu_de_la_vie" target="_blank">View on GitHub</a>
                    </div>
                </div>
            </section>
        `,
        experience: `
            <section>
                <h2>Experience</h2>
                <div class="exp-sections">
                    <div>
                        <h3>Professional Experience</h3>
                        <ul class="timeline">
                            <li>
                                <div class="timeline-point"></div>
                                <div class="timeline-content">
                                    <strong>2024</strong> - 12 weeks internship at TDI (Transfert Développement Informatique)<br>
                                    Migration and optimization of C# software libraries.
                                    <ul>
                                        <li>Redesign of existing modules to improve performance</li>
                                        <li>Added unit tests and technical documentation</li>
                                        <li>Participation in migration to .NET 6</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3>Education</h3>
                        <ul class="timeline">
                            <li>
                                <div class="timeline-point"></div>
                                <div class="timeline-content">
                                    <strong>2023 - Present</strong> - CESI Lyon, Computer Engineering Cycle
                                    <p><strong>Projects:</strong></p>
                                    <ul>
                                        <li><u>Signal Processing (Python)</u>: Modulation, transmission, and reception of an encrypted sound signal.</li>
                                        <li><u>Embedded Systems (C/C++)</u>: Creation of a weather station via sensor reading.</li>
                                        <li><u>Object-Oriented Programming (C++)</u>: Implementation of the Game of Life.</li>
                                        <li><u>Systems and Networks</u>: Design and deployment of a network at various scales.</li>
                                        <li><u>Web Development (HTML, CSS, JS, Laravel, SQL)</u>: Creation of an internship search site with user profile management.</li>
                                        <li><u>Electronics (C Arduino)</u>: Design of simple circuits with sensors.</li>
                                    </ul>
                                </div>
                            </li>
                            <li>
                                <div class="timeline-point"></div>
                                <div class="timeline-content">
                                    <p><strong>2020 - 2023</strong> - General Baccalaureate, Lycée Notre Dame de Bellegarde</p>
                                    <ul>
                                        <li>Specialties: Mathematics, Computer Science (NSI)</li>
                                        <li>Option: Advanced Mathematics</li>
                                        <li>Honors: Bien</li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div style="text-align:center; margin-top:2.5rem;">
                    <a href="image/cv.pdf" class="project-btn" download>Download my CV (PDF)</a>
                </div>
            </section>
        `,
        connect: `
            <section>
                <h2>Contact Me</h2>
                <p>Currently a student and always looking for internships or new opportunities, I am eager to discover exciting projects and connect with professionals in the field.</p>
                <p>If you would like to collaborate, share advice, or simply discuss your projects, feel free to contact me by email at <a href="mailto:virgil.gayte@gmail.com">virgil.gayte@gmail.com</a> or via the form below.</p>
                <p>I look forward to hearing from you!</p>
                <form id="contact-form" class="contact-form">
                    <div class="form-row">
                        <div class="form-group">
                            <label for="user_name">Name:</label>
                            <input type="text" id="user_name" name="user_name" required>
                        </div>
                        <div class="form-group">
                            <label for="user_email">Email address:</label>
                            <input type="email" id="user_email" name="user_email" required>
                        </div>
                    </div>
                    <label for="subject">Subject:</label>
                    <input type="text" id="subject" name="subject" required>

                    <label for="message">Message:</label>
                    <textarea id="message" name="message" rows="5" style="resize: none;" required></textarea>

                    <button type="submit" class="btn-submit">Send</button>
                </form>
            </section>
        `
    };

    function navigate(page) {
        main.innerHTML = pages[page] || pages.accueil;
        navLinks.forEach(link => link.classList.toggle('active', link.dataset.page === page));
        main.focus();
        window.scrollTo(0, 0);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', e => {
            e.preventDefault();
            navigate(link.dataset.page);
        });
    });

    // Dark mode
    themeToggle.addEventListener('change', () => {
        const isDark = themeToggle.checked;
        document.body.classList.toggle('dark', isDark);
        themeToggle.setAttribute('aria-checked', isDark);
    });

    // Default page
    navigate('accueil');
});
