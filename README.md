# CMO Project Page

Static GitHub Pages site for **Correlation-Weighted Multi-Reward Optimization for Compositional Generation**.

## Files

```text
.
├── index.html
├── assets/
│   ├── css/style.css
│   ├── js/main.js
│   └── images/
│       ├── overview.png
│       ├── geneval2_eval.png
│       ├── t2i_compbench_eval.png
│       ├── conceptmix_qualitative.png
│       ├── t2i_qualitative.png
│       ├── conceptmix_eval_raw.png
│       └── cmo-mark.svg
└── README.md
```

## GitHub Pages deployment

1. Create a repository, for example `CMO`.
2. Copy all files in this folder to the repository root.
3. Commit and push:

```bash
git add .
git commit -m "Add CMO project page"
git push origin main
```

4. In GitHub, go to **Settings → Pages**.
5. Select **Deploy from a branch**, choose `main` and `/root`, then save.

For a project repository named `CMO`, the URL will usually be:

```text
https://<username>.github.io/CMO/
```

## Notes

- The page uses only static HTML/CSS/JS.
- Figure images are responsive and can be clicked to enlarge.
- `conceptmix_eval_raw.png` is preserved in the assets folder but is not displayed on the page because it includes an unrelated project-page header in the screenshot.
