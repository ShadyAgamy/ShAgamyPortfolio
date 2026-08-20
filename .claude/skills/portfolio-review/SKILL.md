---
name: portfolio-review
description: Review this portfolio site for job-search impact, leaked secrets, and dead weight. Use before pushing updates or applying to jobs.
---

Review this repository as a hiring manager and a security auditor would, in this order:

1. **Secrets, in history not just the working tree.** Grep tracked files AND `git log -p --all` for credential-like strings (`password`, `pass:`, `api_key`, `secret`, `token`). A file being deleted from HEAD does not mean it's gone — check history. Report any hit immediately, before anything else, with concrete remediation (rotate the credential, purge history with `git filter-repo` if the repo is public).
2. **Client-exposed keys.** Anything imported into the built bundle is public once deployed (`npm run build` then grep `/build`). Flag which ones are meant to be public (e.g. EmailJS public keys — see CLAUDE.md) vs which ones shouldn't be there.
3. **Dependency and bundle bloat.** Check for unused dependencies (`npx depcheck` if available) and note the gzip vendor bundle size from a production build.
4. **Broken or dead links.** Check demo links referenced in `portfolio.data.js` actually resolve (curl/HEAD request) — a dead demo link is worse than not listing the project.
5. **Content leaks in case studies.** Scan `caseStudies` copy in `portfolio.data.js` for anything that shouldn't be public: former colleague names, internal commit counts, client-confidential details.
6. **Accessibility basics.** Alt text on images, heading order, color contrast on the pages in `src/pages/`.
7. **Dead code / console noise.** `console.log`s left in, unused components.

End with a prioritized punch list, split into what you can fix directly (open a diff) vs. what requires the user's judgment (e.g. "drop this project?", "rotate this credential").
