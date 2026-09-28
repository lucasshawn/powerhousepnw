/**
 * Powerhouse PNW - Main Client-Side Scripts
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initActiveNavLink();
  initCurrentYear();
  initEmailCopyHandlers();
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
