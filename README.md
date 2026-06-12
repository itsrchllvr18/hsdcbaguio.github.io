# Healthy Smiles Dental Center (Static Website)

## Files
- `index.html` – main page
- `style.css` – styling
- `script.js` – small interactions (mobile nav, smooth scrolling, FAQ accordion, contact form success message)

## Deploy
This project is **static** (no backend). It can be deployed anywhere that serves plain HTML/CSS/JS.

### Option A: GitHub Pages
1. Go to the GitHub repository for this project.
2. Upload/push these files: `index.html`, `style.css`, `script.js`.
3. In GitHub: **Settings → Pages**.
4. Under **Build and deployment**:
   - Source: **Deploy from a branch**
   - Branch: `main` (or your default branch)
   - Folder: `/ (root)`
5. Save.
6. Wait for the site URL to appear (e.g. `https://<user>.github.io/<repo>/`).

### Option B: Netlify
1. Create a Netlify account.
2. Click **Add new site → Deploy manually**.
3. Drag and drop the project folder (or upload the files).
   - If it asks for build settings:
     - Framework preset: **None**
     - Build command: **blank**
     - Publish directory: **./** (project root)
4. Netlify will publish and give you a URL.

## Notes about the contact form
Your form currently uses JavaScript to show a success message, but it **does not** send the data anywhere.

To make the form actually submit, you need either:
- a backend (server), or
- a form service (examples: **Netlify Forms**, **Formspree**, **Google Forms**).


