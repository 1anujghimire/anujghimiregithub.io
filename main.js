/* ===================================
   MAIN JAVASCRIPT - PORTFOLIO WEBSITE
   =================================== */

(function() {
    'use strict';
    
    /* ===================================
       CONTENT DATA & DYNAMIC LOADING
       =================================== */
    
    const portfolioData = {
        personal: {
            name: "Anuj Ghimire",
            title: "Student Developer",
            education: "Class 11, British Grammar School",
            location: "Rupandehi, Nepal",
            photo: "profile.jpg"
        },
        skills: [
            { 
                name: "Python", 
                level: "intermediate", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            },
            { 
                name: "HTML", 
                level: "intermediate", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
            },
            { 
                name: "CSS", 
                level: "intermediate", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
            },
            { 
                name: "JavaScript", 
                level: "intermediate", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            },
            { 
                name: "SQL", 
                level: "beginner", 
                logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
            }
        ],
        projects: [
            {
                title: "Discord Bot Development",
                description: "Created feature-rich Discord bots including 24/7 online bot with rich presence and multi-feature moderation system",
                tags: ["Python", "Discord API", "Bot Development"]
            },
            {
                title: "Community Management",
                description: "Owner role contributor to a thriving Discord community with 40,000+ members",
                tags: ["Leadership", "Community Building"]
            },
            {
                title: "Affiliate Marketing",
                description: "Successfully generated $1,000+ revenue through strategic affiliate marketing campaigns",
                tags: ["Marketing", "Business Development"]
            }
        ],
        social: {
            discord: { username: "ninjahuz", url: "https://discord.com/users/ninjahuz" },
            instagram: { username: "ninjahuz", url: "https://instagram.com/ninjahuz" },
            linkedin: { username: "1anujghimire", url: "https://linkedin.com/in/1anujghimire" }
        }
    };
    
    /* ===================================
       POPULATE CONTENT
       =================================== */
    
    const populateHeroSection = () => {
        const { personal } = portfolioData;
        
        document.getElementById('hero-name').textContent = personal.name;
        document.getElementById('hero-title').textContent = personal.title;
        document.getElementById('hero-education').textContent = personal.education;
        document.getElementById('hero-location').textContent = personal.location;
        
        // Handle profile photo with error fallback
        const profilePhoto = document.getElementById('profile-photo');
        profilePhoto.onerror = function() {
            // Use a placeholder if image fails to load
            this.style.background = 'linear-gradient(135deg, var(--primary), var(--secondary))';
            this.alt = 'Profile photo placeholder';
        };
    };
    
    const populateSkills = () => {
        const skillsGrid = document.getElementById('skills-grid');
        const { skills } = portfolioData;
        
        skills.forEach((skill, index) => {
            const skillCard = document.createElement('div');
            skillCard.className = 'skill-card animate-on-scroll stagger-' + (index + 1);
            
            // Use logo for all skills
            skillCard.innerHTML = `
                <img src="${skill.logo}" alt="${skill.name} logo" class="skill-logo" />
                <h3 class="skill-name">${skill.name}</h3>
                <p class="skill-level">${skill.level === 'beginner' ? 'Learning' : 'Proficient'}</p>
            `;
            
            skillsGrid.appendChild(skillCard);
        });
    };
    
    const populateProjects = () => {
        const projectsGrid = document.getElementById('projects-grid');
        const { projects } = portfolioData;
        
        projects.forEach((project, index) => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card animate-on-scroll stagger-' + (index + 1);
            
            const tagsHTML = project.tags.map(tag => 
                `<span class="project-tag">${tag}</span>`
            ).join('');
            
            projectCard.innerHTML = `
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">${tagsHTML}</div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    };
    
    const populateSocialLinks = () => {
        const socialLinksContainer = document.getElementById('social-links');
        const { social } = portfolioData;
        
        // Discord
        const discordLink = createSocialLink(
            'Discord',
            social.discord.username,
            social.discord.url,
            getDiscordIcon()
        );
        
        // Instagram
        const instagramLink = createSocialLink(
            'Instagram',
            '@' + social.instagram.username,
            social.instagram.url,
            getInstagramIcon()
        );
        
        // LinkedIn
        const linkedinLink = createSocialLink(
            'LinkedIn',
            social.linkedin.username,
            social.linkedin.url,
            getLinkedInIcon()
        );
        
        socialLinksContainer.appendChild(discordLink);
        socialLinksContainer.appendChild(instagramLink);
        socialLinksContainer.appendChild(linkedinLink);
    };
    
    const createSocialLink = (platform, username, url, iconSVG) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.className = 'social-link animate-on-scroll';
        link.setAttribute('aria-label', `Visit ${platform} profile`);
        
        link.innerHTML = `
            ${iconSVG}
            <span class="social-username">${username}</span>
        `;
        
        return link;
    };
    
    /* ===================================
       SOCIAL MEDIA ICONS (SVG)
       =================================== */
    
    const getDiscordIcon = () => `
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
        </svg>
    `;
    
    const getInstagramIcon = () => `
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
    `;
    
    const getLinkedInIcon = () => `
        <svg class="social-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
    `;
    
    /* ===================================
       INTERSECTION OBSERVER - SCROLL ANIMATIONS
       =================================== */
    
    const setupScrollAnimations = () => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animated');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);
        
        // Observe all elements with animate-on-scroll class
        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    };
    
    /* ===================================
       SMOOTH SCROLLING
       =================================== */
    
    const setupSmoothScrolling = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href === '#') return;
                
                e.preventDefault();
                const target = document.querySelector(href);
                
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };
    
    /* ===================================
       FOOTER YEAR
       =================================== */
    
    const updateFooterYear = () => {
        const yearElement = document.getElementById('current-year');
        if (yearElement) {
            yearElement.textContent = new Date().getFullYear();
        }
    };
    
    /* ===================================
       LANDING PAGE FUNCTIONALITY
       =================================== */
    
    const setupLandingPage = () => {
        const landingPage = document.getElementById('landing-page');
        const mainContent = document.getElementById('main-content');
        const enterBtn = document.getElementById('enter-btn');
        
        if (enterBtn) {
            enterBtn.addEventListener('click', () => {
                // Fade out landing page
                landingPage.classList.add('fade-out');
                
                // Show main content after animation
                setTimeout(() => {
                    landingPage.style.display = 'none';
                    mainContent.classList.remove('hidden');
                    
                    // Trigger scroll animations
                    setupScrollAnimations();
                }, 500);
            });
        }
    };
    
    /* ===================================
       INITIALIZATION
       =================================== */
    
    const init = () => {
        // Set up landing page
        setupLandingPage();
        
        // Populate all content
        populateHeroSection();
        populateSkills();
        populateProjects();
        populateSocialLinks();
        
        // Set up interactions
        setupSmoothScrolling();
        updateFooterYear();
        
        console.log('Portfolio initialized successfully! 🚀');
    };
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
