# Addy | Personal Portfolio

## Student Details

| Full Name | URN Number | Semester |
|-----------|------------|----------|
| Aditya Sachin Mane | E25B032610 | Third |

| Section | Subject |
|---------|---------|
| B | Git and GitHub|

A simple, responsive portfolio website built with plain HTML, CSS and JavaScript. It introduces me, shows my projects, and links to my short-form content on Instagram and TikTok.

## Features

- Responsive layout that works on phones, tablets and desktops
- Sticky navigation bar with smooth scrolling
- Animated typing effect in the hero section
- Dark and light theme toggle (remembers your choice)
- About, Projects, Content and Contact sections
- Front-end contact form with a confirmation message
- Footer year that updates automatically

## Project Structure

```
portfolio/
├── index.html   # Page structure and content
├── style.css    # Styling, layout and theme colors
├── script.js    # Typing effect, theme toggle, form handling
└── README.md    # Project documentation
```

## How to Run

1. Download or clone the project folder.
2. Make sure `index.html`, `style.css` and `script.js` are in the same folder.
3. Open `index.html` in any modern browser.

No installation or build tools are needed.

## Customization

- **Personal info:** Edit the text in the About, Projects and Content sections of `index.html`.
- **Social links:** Replace `yourhandle` in the Instagram and TikTok links with your real usernames.
- **Colors:** Change the `--accent`, `--bg`, `--text` and `--card` variables at the top of `style.css`.
- **Typing text:** Edit the `phrases` array at the top of `script.js`.
- **Projects:** Duplicate or edit the `.card` blocks in `index.html`.

## Contact Form Note

The contact form is front-end only. It shows a thank-you message but does not send the data anywhere. To receive messages, connect it to a service such as Formspree, EmailJS or Netlify Forms.

## Deployment

You can host this site for free with:

- GitHub Pages
- Netlify
- Vercel

Upload the project folder or connect your repository, and your site will be live.

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, CSS variables)
- JavaScript (DOM manipulation, localStorage)

## License
