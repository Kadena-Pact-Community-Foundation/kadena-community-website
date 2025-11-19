# Kadena → Pact Changes Summary

Date: 2025-11-19

Purpose: Consolidate the migration work replacing visible uses of the registered brand "Kadena" with Pact-focused or neutral wording and point canonical Pact documentation to `https://github.com/kda-community/pact-5`.

Overview of work completed so far
- Scanned the workspace for `Kadena`, `kadena.io`, and `docs.kadena.io` references and produced `migration_search_results.txt`.
- Replaced or updated visible copy in website and docs to remove or neutralize the registered brand where appropriate; updated DocsHub links to point at the canonical `pact-5` repository.
- Created/pushed topic branches in multiple repositories for review:
  - `kadena-community-website` — branch `chore/remove-kadena-brand` (PR: https://github.com/Pact-Community-Organization/website/pull/53)
  - `website_clean` — branch `chore/point-docs-to-pact-5` (pushed; create PR: https://github.com/Pact-Community-Organization/website/pull/new/chore/point-docs-to-pact-5)
  - `tmp_website_repo` — branch `chore/point-docs-to-pact-5` (pushed; remote reports repo moved to https://github.com/Pact-Community-Organization/website)
  - `foundation` — branch `chore/point-docs-to-pact-5` (pushed)
  - `foundation.wiki` — branch `chore/point-docs-to-pact-5` (pushed)

Representative files changed
- `kadena-community-website/src/components/*` — UI copy: `Hero.tsx`, `DocsHub.tsx`, `ContractPreview.tsx`, `Community.tsx`, `Navbar.tsx`, `Footer.tsx` (replaced visible brand copy with Pact/neutral wording).
- `website_clean/src/components/docs/DocsHub.tsx` and `home/DocsHub.tsx` — updated docs links to `https://github.com/kda-community/pact-5` and removed Kadena display label.
- `tmp_website_repo/README.md` and `tmp_website_repo/docs/homepage-requirements.md` — replaced Kadena mentions with Pact-focused wording and neutralized references.
- `foundation/docs/*` and `foundation.wiki/*` — many pages updated or pointed to the Pact-5 canonical repo; some files still contain historical references and are flagged below.

Validation performed
- Ran `npm ci && npm run build` locally for the website repo to ensure TypeScript/build succeeded after source edits (static pages prerendered).

Files/dev artifacts intentionally NOT edited
- Generated build output (`.next/`, `out/`) and source maps were not modified — edits were limited to source files to keep history and rebuilds clean.

Outstanding items / flags (need reviewer/legal attention)
- `design/brand-guidelines.md` and other brand artifacts still reference Kadena-inspired color naming and must be reviewed by legal/brand owners before merging or renaming assets.
- Several archived files and issue bodies reference Kadena; these are safe to keep for historical context but may be flagged if you want a full sweep.
- `docs.kadena.io` and other Kadena-owned external URLs were not globally redirected — replacing these may break references to Kadena-owned content; please confirm if you want to substitute or point to Pact-5 mirrors.

Next recommended steps (I can perform):
1. Sweep remaining repositories and backups (`backups/`, `wiki_tmp/`) and apply the same doc-pointer edits; create per-repo branches and open PRs.
2. Collapse duplicate snapshot/docs files into pointer files that link to the Pact-5 repo; commit with clear messages to preserve history.
3. Create PRs for the pushed branches (if not already created), add reviewers, and include this summary in the PR description.
4. After PR review/approval, merge, rebuild the site(s), and publish updated artifacts.
5. If you want repo renames or domain renames, prepare a coordinated migration plan (rename repos, update CI, update Pages settings and DNS, and add redirects).

If you want me to continue, I will next: (A) sweep `website_clean`, `wiki_tmp`, and `backups` for remaining occurrences and apply consistent replacements; (B) collapse snapshots into pointers; (C) open PRs and add this summary to them.

---

Generated automatically by the migration agent. Reviewers: please verify legal/trademark-sensitive items before merging.
