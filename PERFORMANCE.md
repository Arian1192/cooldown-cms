# Performance and operational budget (CMS)

This CMS baseline keeps CI and production operations predictable.

## Targets

- `npm run typecheck` and `npm run build` must pass on every PR.
- Keep CI runtime practical; avoid heavy checks that do not prevent regressions.
- Avoid unnecessary runtime dependencies in Strapi admin/server.

## Backend guardrails

- New collection queries should include explicit limits/pagination when listing content.
- Background jobs/hooks should fail gracefully and avoid unbounded loops.
- External API calls must include timeout/retry strategy when critical.

## Admin/UI guardrails

- Keep custom admin bundles lean; avoid large libraries for simple UI tasks.
- Avoid shipping large media assets in admin customizations.

## Verification

- Run:
  - `npm run check:toolchain`
  - `npm run typecheck`
  - `npm run build`
- Record notable performance/operational impact in PR notes.
