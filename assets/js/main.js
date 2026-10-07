/* JMAGRI Interactive Features & Script */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Product Category Filter Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const productCards = document.querySelectorAll('.product-card');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Remove active class from all buttons
      tabButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      productCards.forEach(card => {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });

  // 3. Product Quick Spec Modal
  const modal = document.getElementById('product-modal');
  const modalClose = document.getElementById('modal-close');
  const modalTitle = document.getElementById('modal-title');
  const modalCategory = document.getElementById('modal-category');
  const modalDesc = document.getElementById('modal-desc');
  const modalImg = document.getElementById('modal-img');
  const modalSpecMoisture = document.getElementById('modal-spec-moisture');
  const modalSpecBroken = document.getElementById('modal-spec-broken');
  const modalSpecPurity = document.getElementById('modal-spec-purity');
  const modalSpecCert = document.getElementById('modal-spec-cert');

  const modalTriggers = document.querySelectorAll('.view-spec-btn');

  modalTriggers.forEach(trigger => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.product-card');
      if (!card) return;

      const title = card.querySelector('.product-title')?.innerText || '';
      const category = card.querySelector('.product-cat')?.innerText || '';
      const desc = card.querySelector('.product-desc')?.innerText || '';
      const imgSrc = card.querySelector('.product-img')?.getAttribute('src') || '';
      const moisture = card.getAttribute('data-moisture') || '< 14%';
      const broken = card.getAttribute('data-broken') || 'Max 5%';
      const purity = card.getAttribute('data-purity') || '99.5%';
      const cert = card.getAttribute('data-cert') || 'ISO 22000, HACCP, VietGAP';

      if (modalTitle) modalTitle.innerText = title;
      if (modalCategory) modalCategory.innerText = category;
      if (modalDesc) modalDesc.innerText = desc;
      if (modalImg) modalImg.src = imgSrc;
      if (modalSpecMoisture) modalSpecMoisture.innerText = moisture;
      if (modalSpecBroken) modalSpecBroken.innerText = broken;
      if (modalSpecPurity) modalSpecPurity.innerText = purity;
      if (modalSpecCert) modalSpecCert.innerText = cert;

      if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  });

  if (modalClose && modal) {
    modalClose.addEventListener('click', closeModal);
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal();
    });
  }

  function closeModal() {
    if (modal) {
      modal.classList.remove('active');
      document.body.style.overflow = 'auto';
    }
  }

  // 4. FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');
    const icon = item.querySelector('.faq-icon');

    if (questionBtn && answer) {
      questionBtn.addEventListener('click', () => {
        const isOpen = !answer.classList.contains('hidden');

        // Close all other FAQs
        faqItems.forEach(otherItem => {
          const otherAnswer = otherItem.querySelector('.faq-answer');
          const otherIcon = otherItem.querySelector('.faq-icon');
          if (otherAnswer) otherAnswer.classList.add('hidden');
          if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
        });

        // Toggle current FAQ
        if (!isOpen) {
          answer.classList.remove('hidden');
          if (icon) icon.style.transform = 'rotate(180deg)';
        }
      });
    }
  });

  // 5. Contact / Quote Form Submit Handling
  const quoteForm = document.getElementById('quote-form');
  const formNotification = document.getElementById('form-notification');

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name')?.value || '';
      const phone = document.getElementById('form-phone')?.value || '';

      if (!name || !phone) {
        alert('Vui lòng điền đầy đủ Họ tên và Số điện thoại liên hệ!');
        return;
      }

      // Show success notification
      if (formNotification) {
        formNotification.classList.remove('hidden');
        formNotification.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }

      quoteForm.reset();

      setTimeout(() => {
        if (formNotification) formNotification.classList.add('hidden');
      }, 7000);
    });
  }

  // 6. Header Scroll Effect
  const header = document.getElementById('main-header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header?.classList.add('shadow-md');
    } else {
      header?.classList.remove('shadow-md');
    }
  });
});
