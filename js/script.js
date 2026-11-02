document.addEventListener('DOMContentLoaded', function() {

  // The faq question on the home page
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', function() {
      const ans = this.nextElementSibling;
      if (!ans) return;
      const hidden = ans.hasAttribute('hidden');
      document.querySelectorAll('.faq-answer').forEach(a=>a.setAttribute('hidden',''));
      document.querySelectorAll('.faq-question').forEach(b=>b.setAttribute('aria-expanded','false'));
      if (hidden) { ans.removeAttribute('hidden'); this.setAttribute('aria-expanded','true'); }
    });
  });

  //The enquiry form page - FINAL FIX - Matches your HTML exactly
function validateEnquiry() {
  // Use YOUR IDs: fullName, phone, email, enquiryType, message
  const nameEl = document.getElementById('fullName');
  const phoneEl = document.getElementById('phone');
  const emailEl = document.getElementById('email');
  const typeEl = document.getElementById('enquiryType');
  const msgEl = document.getElementById('message');
  
  const errDiv = document.getElementById('enquiryErrors');
  const successDiv = document.getElementById('enquirySuccess');
  const thanksDiv = document.getElementById('volunteerThanks');

  let errors = [];
  
  if(!nameEl || nameEl.value.trim() === '') errors.push('Name is required');
  else if(nameEl.value.trim().length < 3) errors.push('Name too short');

  if(!typeEl || typeEl.value === '') errors.push('Please select a service');

  if(!emailEl || emailEl.value.trim() === '') errors.push('Email is required');
  else if(emailEl.value.indexOf('@') === -1) errors.push('Valid email is required');

  if(!phoneEl || phoneEl.value.trim() === '') errors.push('Phone is required');

  if(!msgEl || msgEl.value.trim() === '') errors.push('Message is required');
  else if(msgEl.value.trim().length < 10) errors.push('Message at least 10 chars');

  if(errors.length > 0) {
    errDiv.innerHTML = errors.join('<br>');
    errDiv.style.display = 'block';
    errDiv.style.background = '#ffebee';
    errDiv.style.color = '#c62828';
    errDiv.style.border = '1px solid #ef9a9a';
    errDiv.style.padding = '12px';
    successDiv.style.display = 'none';
    if(thanksDiv) thanksDiv.style.display = 'none';
    return false;
  }

  // SUCCESS - No errors
  errDiv.style.display = 'none';
  successDiv.innerHTML = '✅ Thank you ' + nameEl.value + '! Sent via AJAX - we will respond within 24 hours!';
  successDiv.style.display = 'block';
  successDiv.style.background = '#e8f5e9';
  successDiv.style.color = '#2e7d32';
  successDiv.style.border = '2px solid #a5d6a7';
  successDiv.style.padding = '12px';
  successDiv.style.borderRadius = '8px';

  if(thanksDiv) {
    document.getElementById('volName').textContent = nameEl.value;
    thanksDiv.style.display = 'block';
    thanksDiv.scrollIntoView({behavior:'smooth'});
  }

  // AJAX
  const formData = new FormData(document.getElementById('enquiryForm'));
  fetch('https://formspree.io/f/xqakpovj', { method:'POST', body:formData, headers:{'Accept':'application/json'} });

  document.getElementById('enquiryForm').reset();
  return false;
}

  // The contact form page
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      let errors = [];
      const name = document.getElementById('contactName');
      const email = document.getElementById('contactEmail');
      const message = document.getElementById('contactMessage');

      if (!name || name.value.trim() === '') errors.push('Name is required');
      if (!email || email.value.trim() === '') errors.push('Email is required');
      else if (email.value.indexOf('@') === -1) errors.push('Valid email is required');
      if (!message || message.value.trim() === '') errors.push('Message is required');

      let errorDiv = document.getElementById('contactErrors');
      let successDiv = document.getElementById('contactSuccess');
      if (!errorDiv) { errorDiv = document.createElement('div'); errorDiv.id='contactErrors'; contactForm.prepend(errorDiv); }
      if (!successDiv) { successDiv = document.createElement('div'); successDiv.id='contactSuccess'; contactForm.prepend(successDiv); }
      errorDiv.style.cssText = 'background:#ffebee; color:#c62828; border:1px solid #ef9a9a; padding:12px; border-radius:8px; margin-bottom:15px; display:none; font-weight:bold;';
      successDiv.style.cssText = 'background:#e8f5e9; color:#2e7d32; border:1px solid #a5d6a7; padding:12px; border-radius:8px; margin-bottom:15px; display:none; font-weight:bold;';

      if (errors.length > 0) {
        errorDiv.innerHTML = errors.join('<br>'); errorDiv.style.display='block'; successDiv.style.display='none';
      } else {
        errorDiv.style.display='none'; successDiv.textContent='Thank you! Your message has been sent.'; successDiv.style.display='block'; contactForm.reset();
      }
    });
  }

  // The about us page
  if (document.body.textContent.includes('Our Vision')) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.style.opacity='1'; en.target.style.transform='translateY(0) scale(1)'; } });
    }, {threshold:0.3});
    document.querySelectorAll('div').forEach(div => {
      const t=div.textContent||'';
      if ((t.includes('Our Vision')||t.includes('Our Mission')||t.includes('Our Values')) && t.length<250) {
        div.style.opacity='0'; div.style.transform='translateY(40px) scale(0.85)'; div.style.transition='all 0.8s ease'; obs.observe(div);
      }
    });
  }

  // The services page
  const cards = document.querySelectorAll('.service-card');
  if (cards.length>0) {
    cards.forEach(card => {
      card.style.transition='all 0.3s ease'; card.style.cursor='pointer';
      card.addEventListener('mouseenter', function(){ this.style.transform='translateY(-8px)'; this.style.boxShadow='0 15px 30px rgba(0,0,0,0.15)'; });
      card.addEventListener('mouseleave', function(){ this.style.transform='translateY(0)'; this.style.boxShadow='none'; });
    });
    const filters = document.getElementById('serviceFilters');
    if (filters) {
      filters.addEventListener('click', function(e) {
        if (!e.target.classList.contains('filter-btn')) return;
        document.querySelectorAll('.filter-btn').forEach(b=>{b.style.background='white'; b.style.color='#EA6D1A';});
        e.target.style.background='#EA6D1A'; e.target.style.color='white';
        const f = e.target.getAttribute('data-filter');
        document.querySelectorAll('.service-card').forEach(card => {
          const title = card.querySelector('h3') ? card.querySelector('h3').textContent.toLowerCase() : '';
          if (f==='all') card.style.display='block';
          else if (f==='daily') card.style.display=title.includes('community')?'block':'none';
          else if (f==='monthly') card.style.display=title.includes('food')?'block':'none';
          else if (f==='volunteer') card.style.display=title.includes('volunteer')?'block':'none';
        });
      });
    }
  }
    // ===== 6. COOL ANIMATIONS - NEW =====
  
  // A. Hero / Heading slides in when page loads
  const mainHeading = document.querySelector('h1, h2');
  if (mainHeading) {
    mainHeading.style.opacity = '0';
    setTimeout(() => {
      mainHeading.style.transition = 'all 1s ease';
      mainHeading.style.opacity = '1';
      mainHeading.style.transform = 'translateX(0)';
      mainHeading.classList.add('hero-animate');
    }, 100);
  }

  // B. Service cards fade up 
  const allCards = document.querySelectorAll('.service-card');
  allCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(40px)';
    setTimeout(() => {
      card.style.transition = 'all 0.8s ease';
      card.style.opacity = '1';
      card.style.transform = 'translateY(0)';
    }, 200 + (index * 200)); // stagger
  });

  // C. Join Us button pulses
  const joinBtns = document.querySelectorAll('button, .btn, a');
  joinBtns.forEach(btn => {
    if (btn.textContent.toLowerCase().includes('join')) {
      btn.style.animation = 'pulse 2s infinite';
      btn.style.transition = 'all 0.3s ease';
    }
  });

  // D. About Us - Vision/Mission/Values bounce on hover
  if (document.body.textContent.includes('Our Vision')) {
    document.querySelectorAll('div').forEach(div => {
      const t = div.textContent || '';
      if ((t.includes('Our Vision') || t.includes('Our Mission') || t.includes('Our Values')) && t.length < 300) {
        div.style.transition = 'all 0.4s ease';
        div.style.cursor = 'pointer';
        div.addEventListener('mouseenter', function() {
          this.style.transform = 'scale(1.05) rotate(1deg)';
          this.style.boxShadow = '0 10px 25px rgba(234,109,26,0.3)';
        });
        div.addEventListener('mouseleave', function() {
          this.style.transform = 'scale(1) rotate(0deg)';
          this.style.boxShadow = 'none';
        });
      }
    });
  }

  // E. Navbar becomes smaller when you scroll 
  window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav, header');
    if (nav) {
      if (window.scrollY > 50) {
        nav.style.transition = 'all 0.3s ease';
        nav.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
        nav.style.background = 'rgba(255,255,255,0.95)';
      } else {
        nav.style.boxShadow = 'none';
      }
    }
  });
});