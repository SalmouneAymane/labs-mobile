# Labs Mobile

The labs and presentations in this repository are linked from the [project page](https://salmouneaymane.github.io/labs-mobile/). Open that page to browse the available labs.

## Direct lab links

- [2TUP presentation](https://salmouneaymane.github.io/labs-mobile/2TUP/)
- [Open the Marp presentation](https://salmouneaymane.github.io/labs-mobile/Marp/)
- [Marp Markdown source](./Marp/marp.md)

### Publishing the Marp presentation

- `Marp/index.html` is the browser-ready slide deck served by GitHub Pages.
- `Marp/marp.md` is the editable source.
- Regenerate the HTML after editing the source:
  - `npx --yes @marp-team/marp-cli@4.5.1 Marp/marp.md --html --output Marp/index.html`
- Push both files to GitHub.
- In **Settings → Pages**, publish from the `main` branch and `/ (root)`.
- Open `https://salmouneaymane.github.io/labs-mobile/Marp/`.
