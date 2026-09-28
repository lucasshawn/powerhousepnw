/**
 * Powerhouse PNW - Main Client-Side Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLink();
  initCurrentYear();
  initEmailCopyHandlers();
  initContactForm();
});

/**
 * Initializes mobile hamburger menu toggle and drawer behavior
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-toggle');
  const drawer = document.querySelector('.mobile-drawer');

  if (!toggleBtn || !drawer) return;

  const toggleMenu = (open) => {
    const isExpanded = open !== undefined ? open : !drawer.classList.contains('is-open');
    drawer.classList.toggle('is-open', isExpanded);
    toggleBtn.setAttribute('aria-expanded', isExpanded);
    document.body.style.overflow = isExpanded ? 'hidden' : '';
  };

  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  // Close when clicking outside drawer
  document.addEventListener('click', (e) => {
    if (drawer.classList.contains('is-open') && !drawer.contains(e.target) && !toggleBtn.contains(e.target)) {
      toggleMenu(false);
    }
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
      toggleMenu(false);
    }
  });
}

/**
 * Highlights the active nav link matching current page URL
 */
function initActiveNavLink() {
  const currentPath = window.location.pathname.toLowerCase();
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const cleanHref = href.toLowerCase().replace('./', '');

    if (
      (currentPath.endsWith(cleanHref) && cleanHref !== 'index.html' && cleanHref !== '/') ||
      ((currentPath.endsWith('/') || currentPath.endsWith('index.html') || currentPath === '') && (cleanHref === 'index.html' || cleanHref === '/'))
    ) {
      link.classList.add('active');
    }
  });
}

/**
 * Updates dynamic copyright year in footer
 */
function initCurrentYear() {
  const yearElements = document.querySelectorAll('.current-year');
  const year = new Date().getFullYear();
  yearElements.forEach(el => {
    el.textContent = year;
  });
}

/**
 * Binds clipboard copy behavior for powerhousepnw@gmail.com
 */
function initEmailCopyHandlers() {
  const copyButtons = document.querySelectorAll('[data-copy-email]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      copyEmail(e);
    });
  });
}

/**
 * Copies the primary company email to user clipboard and shows toast feedback
 */
function copyEmail(event) {
  const email = 'powerhousepnw@gmail.com';
  
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(email)
      .then(() => showToast('Email copied to clipboard: ' + email))
      .catch(() => fallbackCopy(email));
  } else {
    fallbackCopy(email);
  }
}

/**
 * Fallback clipboard copy for non-HTTPS or legacy environments
 */
function fallbackCopy(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  try {
    document.execCommand('copy');
    showToast('Email copied to clipboard: ' + text);
  } catch (err) {
    console.error('Failed to copy', err);
  }
  document.body.removeChild(textArea);
}

/**
 * Displays a non-intrusive floating toast notification
 */
function showToast(message) {
  let toast = document.querySelector('.copy-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'copy-toast';
    document.body.appendChild(toast);
  }

  toast.textContent = message;
  toast.classList.add('is-visible');

  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => {
    toast.classList.remove('is-visible');
  }, 2500);
}

// Global exposure for inline onclick handlers if needed
window.copyEmail = copyEmail;

/**
 * Handles Netlify contact form submission via AJAX with fallback
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');
  const submitBtn = document.getElementById('submit-btn');

  if (!form || !statusDiv) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
    }

    const formData = new FormData(form);

    fetch('/contact.html', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString()
    })
    .then((response) => {
      if (response.ok || response.status === 200 || response.status === 303 || response.type === 'opaqueredirect') {
        statusDiv.style.display = 'block';
        statusDiv.style.backgroundColor = 'rgba(245, 186, 19, 0.12)';
        statusDiv.style.border = '1px solid var(--accent-gold)';
        statusDiv.style.color = 'var(--text-primary)';
        statusDiv.innerHTML = `
          <strong style="color: var(--accent-gold); font-size: 1.1rem; display: block; margin-bottom: 0.35rem;">✓ Message Successfully Sent!</strong>
          Thank you for reaching out. We have received your inquiry and will respond within 1 business day.
        `;
        form.reset();
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.textContent = 'Send Another Message';
        }
      } else {
        window.location.href = '/success';
      }
    })
    .catch(() => {
      window.location.href = '/success';
    });
  });
}

