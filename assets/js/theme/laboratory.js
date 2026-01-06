/**
 * Hidden Laboratory Theme - Interactive Effects
 * Sci-Fi/Post-Apocalyptic CTF Theme
 */

// Laboratory System initialization
(function() {
  'use strict';

  const Laboratory = {
    init: function() {
      this.initAudioSystem();
      this.initVisualEffects();
      this.initInteractionEffects();
      this.initSystemMonitor();
    },

    // Audio system for laboratory ambience
    initAudioSystem: function() {
      // Add subtle electronic hum (optional, can be disabled)
      const audioContext = window.AudioContext || window.webkitAudioContext;
      if (audioContext) {
        try {
          const context = new audioContext();
          const oscillator = context.createOscillator();
          const gainNode = context.createGain();

          oscillator.type = 'sine';
          oscillator.frequency.setValueAtTime(60, context.currentTime);
          gainNode.gain.setValueAtTime(0.005, context.currentTime); // Very subtle

          oscillator.connect(gainNode);
          gainNode.connect(context.destination);

          // Uncomment to enable ambient sound
          // oscillator.start();

          // Store for later cleanup if needed
          Laboratory.audioContext = context;
        } catch (e) {
          console.log('Audio context not available');
        }
      }
    },

    // Visual effects for laboratory interface
    initVisualEffects: function() {
      // Add random screen flicker effect (very subtle)
      setInterval(() => {
        if (Math.random() > 0.98) {
          document.body.style.opacity = '0.95';
          setTimeout(() => {
            document.body.style.opacity = '1';
          }, 50);
        }
      }, 3000);

      // Create data stream effect in console
      if (console.log) {
        const dataStream = [
          '%c[LABORATORY SYSTEM] %cInitializing secure connection...',
          '%c[LABORATORY SYSTEM] %cAuthentication verified',
          '%c[LABORATORY SYSTEM] %cAccessing experiment database...',
          '%c[LABORATORY SYSTEM] %cSYSTEM READY'
        ];

        const style1 = 'color: #7549db; font-weight: bold;';
        const style2 = 'color: #b8e6e0;';

        dataStream.forEach((msg, idx) => {
          setTimeout(() => {
            console.log(msg, style1, style2);
          }, idx * 500);
        });
      }
    },

    // Interactive effects for user actions
    initInteractionEffects: function() {
      // Add ripple effect to buttons
      document.addEventListener('click', function(e) {
        if (e.target.matches('button, .btn, a.btn')) {
          const ripple = document.createElement('span');
          const rect = e.target.getBoundingClientRect();
          const size = Math.max(rect.width, rect.height);
          const x = e.clientX - rect.left - size / 2;
          const y = e.clientY - rect.top - size / 2;

          ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(117,73,219, 0.4);
            left: ${x}px;
            top: ${y}px;
            pointer-events: none;
            animation: ripple-effect 0.6s ease-out;
            z-index: 1000;
          `;

          if (e.target.style.position !== 'absolute' && e.target.style.position !== 'relative') {
            e.target.style.position = 'relative';
          }
          e.target.style.overflow = 'hidden';

          e.target.appendChild(ripple);

          setTimeout(() => {
            ripple.remove();
          }, 600);
        }
      });

      // Add ripple animation keyframes
      if (!document.getElementById('lab-ripple-animation')) {
        const style = document.createElement('style');
        style.id = 'lab-ripple-animation';
        style.textContent = `
          @keyframes ripple-effect {
            0% {
              transform: scale(0);
              opacity: 1;
            }
            100% {
              transform: scale(2);
              opacity: 0;
            }
          }
        `;
        document.head.appendChild(style);
      }

      // Add glow effect to focused inputs
      document.addEventListener('focus', function(e) {
        if (e.target.matches('input, textarea, select')) {
          e.target.style.transition = 'all 0.3s ease';
          e.target.style.boxShadow = '0 0 20px rgba(117,73,219, 0.5)';
        }
      }, true);

      document.addEventListener('blur', function(e) {
        if (e.target.matches('input, textarea, select')) {
          e.target.style.boxShadow = '';
        }
      }, true);
    },

    // System monitor - displays laboratory status
    initSystemMonitor: function() {
      // Update system time
      const updateSystemTime = () => {
        const indicators = document.querySelectorAll('.lab-indicator.active');
        indicators.forEach(indicator => {
          // Pulse animation is handled by CSS
          indicator.setAttribute('data-status', 'active');
        });
      };

      setInterval(updateSystemTime, 1000);

      // Add laboratory status messages
      window.addEventListener('load', () => {
        setTimeout(() => {
          const notifications = document.querySelectorAll('.alert, .notification');
          notifications.forEach(notif => {
            if (!notif.classList.contains('lab-styled')) {
              notif.classList.add('lab-styled');
              notif.style.borderLeft = '4px solid #7549db';
              notif.style.background = 'rgba(84, 36, 117, 0.7)';
            }
          });
        }, 500);
      });
    },

    // Challenge modal enhancements
    enhanceModals: function() {
      // Watch for modal openings
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.classList && node.classList.contains('modal')) {
              // Add laboratory styling to modal
              const modalContent = node.querySelector('.modal-content');
              if (modalContent && !modalContent.classList.contains('lab-enhanced')) {
                modalContent.classList.add('lab-enhanced');
                modalContent.style.animation = 'lab-modal-appear 0.3s ease-out';
              }
            }
          });
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      // Add modal animation
      if (!document.getElementById('lab-modal-animation')) {
        const style = document.createElement('style');
        style.id = 'lab-modal-animation';
        style.textContent = `
          @keyframes lab-modal-appear {
            0% {
              opacity: 0;
              transform: scale(0.9) translateY(-20px);
            }
            100% {
              opacity: 1;
              transform: scale(1) translateY(0);
            }
          }
        `;
        document.head.appendChild(style);
      }
    },

    // Add typing effect to specific elements
    typeWriter: function(element, text, speed = 50) {
      let i = 0;
      element.textContent = '';

      const type = () => {
        if (i < text.length) {
          element.textContent += text.charAt(i);
          i++;
          setTimeout(type, speed);
        }
      };

      type();
    },

    // Easter egg: Konami code detector
    initEasterEggs: function() {
      const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
      let konamiIndex = 0;

      document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiIndex]) {
          konamiIndex++;
          if (konamiIndex === konamiCode.length) {
            this.activateEasterEgg();
            konamiIndex = 0;
          }
        } else {
          konamiIndex = 0;
        }
      });
    },

    activateEasterEgg: function() {
      console.log('%cLABORATORY OVERRIDE ACTIVATED', 'color: #916DE2; font-size: 20px; font-weight: bold;');
      console.log('%cWelcome, Administrator. Full system access granted.', 'color: #7549db; font-size: 14px;');

      // Add special visual effect
      document.body.style.animation = 'lab-override 2s ease-in-out';

      const style = document.createElement('style');
      style.textContent = `
        @keyframes lab-override {
          0%, 100% { filter: none; }
          25% { filter: hue-rotate(90deg) brightness(1.2); }
          50% { filter: hue-rotate(180deg) brightness(1.3); }
          75% { filter: hue-rotate(270deg) brightness(1.2); }
        }
      `;
      document.head.appendChild(style);

      setTimeout(() => {
        document.body.style.animation = '';
      }, 2000);
    }
  };

  // Initialize when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => Laboratory.init());
  } else {
    Laboratory.init();
  }

  // Initialize modal enhancements
  Laboratory.enhanceModals();
  Laboratory.initEasterEggs();

  // Expose Laboratory object for external use
  window.Laboratory = Laboratory;

})();

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = Laboratory;
}
