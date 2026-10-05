# Presentation index rule

`index.html` in the repository root is the directory of presentations. Whenever a new presentation is created:

1. Put it in its own root-level folder.
2. Use that folder's name as the presentation title and provide an `index.html` entry point inside the folder.
3. Add a link to the presentation in the root `index.html`. The link text must match the folder name, and its relative URL must be `./<folder-name>/index.html`.
4. Keep the presentation directory in sync with the folders that contain presentations. Update or remove its link when a presentation is renamed or deleted.

For example, a presentation in `NewTopic/index.html` should be listed in the root page as:

```html
<a class="presentation-link" href="./NewTopic/index.html">
    <div>
        <strong>NewTopic</strong>
        <span>Open the NewTopic presentation</span>
    </div>
    <span class="arrow" aria-hidden="true">→</span>
</a>
```

This file documents the maintenance rule; it does not automatically modify `index.html`. Each new presentation must be added to the root index as part of creating it.
