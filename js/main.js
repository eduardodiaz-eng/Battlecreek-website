// Battle Creek Bathworks LLC — site scripts

document.addEventListener('DOMContentLoaded', function () {

  // Footer year
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu after tapping a link (mobile)
    nav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('open');
        toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Contact form submit handling (works with Formspree's AJAX endpoint)
  var form = document.getElementById('contact-form');
  var note = document.getElementById('form-note');

  if (form) {
    form.addEventListener('submit', function (e) {
      // If the form action still points at the placeholder, don't let it
      // submit to a dead endpoint — tell the developer/owner to fix it.
      if (form.action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        if (note) {
          note.textContent = 'Form is not connected yet — set up Formspree and update the form action in index.html.';
          note.style.color = '#b23b3b';
        }
        return;
      }

      e.preventDefault();
      var data = new FormData(form);

      if (note) {
        note.textContent = 'Sending...';
        note.style.color = '';
      }

      fetch(form.action, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' }
      })
        .then(function (response) {
          if (response.ok) {
            form.reset();
            if (note) {
              note.textContent = "Thanks! Your request was sent — we'll be in touch soon.";
              note.style.color = '#1b4b4f';
            }
          } else {
            throw new Error('Request failed');
          }
        })
        .catch(function () {
          if (note) {
            note.textContent = 'Something went wrong. Please call us instead at (385) 269-9261.';
            note.style.color = '#b23b3b';
          }
        });
    });
  }

});
