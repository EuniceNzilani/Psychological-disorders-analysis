export default function initAccessibilityFeatures() {
    document.addEventListener('DOMContentLoaded', function () {
        // Add skip to content link
        const skipLink = document.createElement('a');
        skipLink.href = '#main-content';
        skipLink.className = 'skip-to-content';
        skipLink.textContent = 'Skip to content';
        document.body.insertBefore(skipLink, document.body.firstChild);

        // Add ID to main content for skip link
        const mainContent = document.querySelector('.hero') || document.querySelector('main');
        if (mainContent) {
            mainContent.id = 'main-content';
            mainContent.tabIndex = -1;
        }

        // Create accessibility controls
        createAccessibilityControls();
        createReadingGuide();
        createBreathingAid();
        document.addEventListener('scroll', highlightVisibleSection);
    });

    function createAccessibilityControls() {
        const controls = document.createElement('div');
        controls.className = 'accessibility-controls';
        controls.style.display = 'none';

        const toggle = document.createElement('div');
        toggle.className = 'accessibility-toggle';
        toggle.innerHTML = '♿';
        toggle.setAttribute('aria-label', 'Toggle accessibility options');
        toggle.setAttribute('role', 'button');
        toggle.setAttribute('tabindex', '0');

        const features = [
            { id: 'focus-mode', label: 'Focus Mode', description: 'Reduces distractions by dimming non-essential elements' },
            { id: 'dyslexia-friendly', label: 'Dyslexia Friendly', description: 'Adjusts text spacing and font for easier reading' },
            { id: 'calm-theme', label: 'Calm Theme', description: 'Uses soothing colors to reduce anxiety' },
            { id: 'high-contrast-theme', label: 'High Contrast', description: 'Maximum contrast for better visibility' },
            { id: 'reduce-animation', label: 'Reduce Animations', description: 'Stops animations and movements' },
        ];

        const heading = document.createElement('h3');
        heading.textContent = 'Accessibility Options';
        controls.appendChild(heading);

        // Add toggle switches
        features.forEach(feature => {
            const featureControl = document.createElement('div');
            featureControl.innerHTML = `
                <label for="${feature.id}-toggle">
                    <input type="checkbox" id="${feature.id}-toggle">
                    ${feature.label}
                </label>
                <small>${feature.description}</small>
            `;
            controls.appendChild(featureControl);
        });

        toggle.addEventListener('click', function () {
            controls.style.display = controls.style.display === 'none' ? 'block' : 'none';
        });

        document.body.appendChild(controls);
        document.body.appendChild(toggle);
    }

    function createReadingGuide() {
        const readingGuide = document.createElement('div');
        readingGuide.className = 'reading-guide';
        document.body.appendChild(readingGuide);

        document.addEventListener('mousemove', function (e) {
            if (document.body.classList.contains('reading-guide-active')) {
                readingGuide.style.top = `${e.clientY}px`;
            }
        });
    }

    function createBreathingAid() {
        const breathingAid = document.createElement('div');
        breathingAid.className = 'breathing-aid';
        document.body.appendChild(breathingAid);
    }

    function highlightVisibleSection() {
        const sections = document.querySelectorAll('section');

        if (!sections.length || !document.body.classList.contains('guided-focus')) return;

        let maxVisibleSection = null;
        let maxVisibleArea = 0;

        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const visibleTop = Math.max(0, rect.top);
            const visibleBottom = Math.min(window.innerHeight, rect.bottom);
            const visibleArea = Math.max(0, visibleBottom - visibleTop);

            if (visibleArea > maxVisibleArea) {
                maxVisibleArea = visibleArea;
                maxVisibleSection = section;
            }

            section.classList.remove('active-section');
        });

        if (maxVisibleSection) {
            maxVisibleSection.classList.add('active-section');
        }
    }
}
