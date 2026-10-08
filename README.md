# Labs Mobile

The labs and presentations in this repository are linked from the [project page](https://salmouneaymane.github.io/labs-mobile/). Open that page to browse the available labs.

## Direct lab links

- [2TUP presentation](https://salmouneaymane.github.io/labs-mobile/2TUP/)
- [Open the Marp presentation](https://salmouneaymane.github.io/labs-mobile/Marp/)
- [Open the Projet fil rouge presentation](https://salmouneaymane.github.io/labs-mobile/Projet-Fil-Rouge/)
- [Scrum lab](https://docs.google.com/presentation/d/1MbHh-CiDlV9sU_ccPLvOzxk8zY_nR9zDnNXsWo8oV1U/edit?slide=id.p#slide=id.p)
- [Design Thinking presentation](https://canva.link/xvsaxvs1haumths)

### Publishing the Marp presentation

- `Marp/index.html` is the browser-ready slide deck served by GitHub Pages.
- `Marp/marp.md` is the editable source.
- Regenerate the HTML after editing the source:
  - `npx --yes @marp-team/marp-cli@4.5.1 Marp/marp.md --html --output Marp/index.html`
- Push both files to GitHub.
- In **Settings → Pages**, publish from the `main` branch and `/ (root)`.
- Open `https://salmouneaymane.github.io/labs-mobile/Marp/`.

### Publishing the Projet fil rouge presentation

- `Projet-Fil-Rouge/index.html` is the browser-ready slide deck served by GitHub Pages.
- `Projet-Fil-Rouge/marp.md` is the editable source.
- Regenerate the HTML after editing the source:
  - `npx --yes @marp-team/marp-cli@4.5.1 Projet-Fil-Rouge/marp.md --html --output Projet-Fil-Rouge/index.html`
- Push both files to GitHub.
- Open `https://salmouneaymane.github.io/labs-mobile/Projet-Fil-Rouge/`.
