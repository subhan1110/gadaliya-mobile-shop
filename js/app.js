/**
 * Gadaliya Mobile Repairing and Lamination Hub Visnagar
 * Run by Prakash Gadaliya | Phone / WhatsApp: +91 91733 09034 | IG: @gadaliya_mobile_skin
 * Application logic matching reference UI functionality.
 */

document.addEventListener('DOMContentLoaded', () => {
  const CONFIG = {
    name: 'Gadaliya Mobile Repairing and Lamination Hub Visnagar',
    owner: 'Prakash Gadaliya',
    phoneDisplay: '+91 91733 09034',
    phoneClean: '+919173309034',
    whatsappNumber: '919173309034',
    instagram: 'gadaliya_mobile_skin',
    address: 'Shop No. 12, Main Market, Visnagar, Gujarat - 384315'
  };

  /* --------------------------------------------------------------------------
     1. Mobile Navigation Drawer Toggle
     -------------------------------------------------------------------------- */
  const mobileToggle = document.getElementById('mobileNavToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const mobileBackdrop = document.getElementById('mobileDrawerBackdrop');
  const mobileClose = document.getElementById('mobileDrawerClose');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.add('active');
      mobileBackdrop.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeDrawer() {
    if (mobileDrawer && mobileBackdrop) {
      mobileDrawer.classList.remove('active');
      mobileBackdrop.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (mobileToggle) mobileToggle.addEventListener('click', openDrawer);
  if (mobileClose) mobileClose.addEventListener('click', closeDrawer);
  if (mobileBackdrop) mobileBackdrop.addEventListener('click', closeDrawer);

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  /* --------------------------------------------------------------------------
     2. Active Navigation ScrollSpy
     -------------------------------------------------------------------------- */
  const sections = document.querySelectorAll('section[id]');
  const desktopLinks = document.querySelectorAll('.nav-menu .nav-link');

  function updateActiveNavLink() {
    const scrollPosition = window.pageYOffset + 140;

    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        desktopLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  }

  window.addEventListener('scroll', updateActiveNavLink, { passive: true });

  /* --------------------------------------------------------------------------
     3. Service Modals (Lamination & Repairing Deep Dives)
     -------------------------------------------------------------------------- */
  const modalLamination = document.getElementById('modalLamination');
  const modalRepairing = document.getElementById('modalRepairing');

  const triggerLamination = document.getElementById('triggerLaminationModal');
  const triggerRepairing = document.getElementById('triggerRepairingModal');
  const navLaminationLink = document.getElementById('navLaminationLink');
  const navRepairingLink = document.getElementById('navRepairingLink');
  const mobileLaminationLink = document.getElementById('mobileLaminationLink');
  const mobileRepairingLink = document.getElementById('mobileRepairingLink');
  const footerLaminationLinks = document.querySelectorAll('.modal-link-lamination');
  const footerRepairingLinks = document.querySelectorAll('.modal-link-repairing');

  function openModal(modal) {
    if (modal) {
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal(modal) {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  // Open Lamination Modal
  [triggerLamination, navLaminationLink, mobileLaminationLink, ...footerLaminationLinks].forEach(el => {
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modalLamination);
      });
    }
  });

  // Open Repairing Modal
  [triggerRepairing, navRepairingLink, mobileRepairingLink, ...footerRepairingLinks].forEach(el => {
    if (el) {
      el.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(modalRepairing);
      });
    }
  });

  // Close Modals via Close Button
  document.querySelectorAll('[data-close-modal]').forEach(btn => {
    btn.addEventListener('click', () => {
      closeModal(modalLamination);
      closeModal(modalRepairing);
    });
  });

  // Close Modals via Backdrop Click
  [modalLamination, modalRepairing].forEach(modal => {
    if (modal) {
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          closeModal(modal);
        }
      });
    }
  });



  /* --------------------------------------------------------------------------
     5. Gallery Lightbox Modal
     -------------------------------------------------------------------------- */
  const galleryThumbs = document.querySelectorAll('.gallery-thumb');
  const lightboxModal = document.getElementById('galleryLightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const btnViewMorePhotos = document.getElementById('btnViewMorePhotos');

  galleryThumbs.forEach(thumb => {
    thumb.addEventListener('click', () => {
      const img = thumb.querySelector('img');
      const caption = thumb.getAttribute('data-caption');

      if (img && lightboxImg) {
        lightboxImg.src = img.src;
        lightboxImg.alt = caption || 'Gadaliya Mobile Work';
      }
      if (lightboxCaption) {
        lightboxCaption.textContent = caption || 'Gadaliya Mobile Workshop';
      }

      if (lightboxModal) {
        lightboxModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (btnViewMorePhotos && galleryThumbs.length > 0) {
    btnViewMorePhotos.addEventListener('click', (e) => {
      e.preventDefault();
      galleryThumbs[0].click();
    });
  }

  // Global helper for opening skins in lightbox
  window.openSkinLightbox = function(src, caption) {
    if (lightboxImg) {
      lightboxImg.src = src;
      lightboxImg.alt = caption || 'Custom Lamination Skin';
    }
    if (lightboxCaption) {
      lightboxCaption.textContent = caption || 'Custom Skin Lamination';
    }
    if (lightboxModal) {
      lightboxModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  };

  function closeLightbox() {
    if (lightboxModal) {
      lightboxModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

  if (lightboxModal) {
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal) closeLightbox();
    });
  }

  // Escape Key to Close All Overlays
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeDrawer();
      closeModal(modalLamination);
      closeModal(modalRepairing);
      closeLightbox();
    }
  });

  // "View All Services" scroll
  const btnViewAllServices = document.getElementById('btnViewAllServices');
  if (btnViewAllServices) {
    btnViewAllServices.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(modalLamination);
    });
  }
});
