# Battle Creek Bathworks LLC — Website

A simple, fast, static website for Battle Creek Bathworks LLC (bathroom & shower
remodeling, Battle Creek, MI). Plain HTML/CSS/JS — no build step, no framework,
no server required.

## Project structure

```
battle-creek-bathworks/
├── index.html        # the whole site (single page)
├── css/style.css      # all styling
├── js/main.js         # mobile nav + contact form handling
├── images/            # put real photos here
├── robots.txt
└── sitemap.xml
```

## 1. Preview it locally

Just open `index.html` in a browser — or, for a closer-to-production preview,
serve it so relative paths behave the same as on a real host:

```bash
# Python 3 (already installed on this machine)
python -m http.server 8000
# then visit http://localhost:8000
```

## 2. ⚠️ Placeholder content to replace before launch

Search `index.html` for these and swap in your real details:

| Placeholder | Where | Replace with |
|---|---|---|
| `(269) 555-0142` | header, hero, contact section | your real phone number (keep the `tel:+1...` format in `href`) |
| `info@battlecreekbathworks.com` | contact section, footer `mailto:` | your real email |
| "Battle Creek, MI & Calhoun County" | contact section | your actual service area |
| Business hours | contact section | your real hours |
| `YOUR_FORM_ID` in the `<form action="https://formspree.io/f/YOUR_FORM_ID">` | contact form | your real Formspree endpoint (see step 3) |

Also: the hero and "Why Us" sections currently use simple inline SVG line-art
instead of photos. Once you have real project photos, drop them in `images/`
and swap the `<svg class="hero-svg">` / `<svg class="why-svg">` blocks for
`<img>` tags.

## 3. Make the contact form actually send email

The form currently posts to a **placeholder** Formspree endpoint and won't
work until you connect it. Formspree's free tier is the easiest no-backend
option:

1. Go to [formspree.io](https://formspree.io) and sign up free.
2. Create a new form, point it at the email address you want quote requests
   sent to.
3. Copy the form endpoint it gives you (looks like
   `https://formspree.io/f/abcd1234`).
4. In `index.html`, replace `YOUR_FORM_ID` in the `<form action="...">`
   attribute with your real ID.

No code changes needed beyond that — `js/main.js` already submits the form
via fetch and shows a success/error message.

## 4. Deploy it

Any static host works. Two easy free options:

**Netlify (drag & drop)**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the whole `battle-creek-bathworks` folder onto the page.
3. You get a live URL immediately; add a custom domain under
   Site settings → Domain management.

**GitHub Pages**
1. Push this folder to a GitHub repo (see below).
2. In the repo: Settings → Pages → Deploy from branch → `main` / root.
3. Your site goes live at `https://<username>.github.io/<repo>/`.

```bash
git init
git add .
git commit -m "Initial site"
git branch -M main
git remote add origin git@github.com:<your-username>/battle-creek-bathworks.git
git push -u origin main
```

## 5. Before you launch — quick checklist

- [ ] Replace phone, email, service area, hours
- [ ] Connect the contact form (Formspree ID)
- [ ] Add real photos of finished work
- [ ] Update `sitemap.xml` / `robots.txt` with your real domain
- [ ] Add a real favicon (currently a blank placeholder)
- [ ] Double-check the business is actually licensed/insured as stated, and
      that any claims in the copy (warranty, response time, etc.) are accurate
