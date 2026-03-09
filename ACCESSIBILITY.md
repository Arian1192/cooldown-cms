# Accessibility baseline (CMS)

Use this checklist for Strapi admin/editor changes.

## Required checks

- Keyboard navigation:
  - New controls are reachable with Tab/Shift+Tab.
  - Focus is always visible.
- Forms:
  - Inputs have clear labels.
  - Validation and error messages are understandable without relying on color.
- Semantics:
  - Use meaningful headings/sections in custom admin screens.
  - Keep button/link semantics correct.
- Media and icons:
  - Provide text alternatives where needed.
- Contrast:
  - Ensure readable foreground/background contrast for editor-facing text and controls.

## Quick verification flow

1. Validate changed admin flows with keyboard only.
2. Confirm success/error states are explicit text.
3. Spot-check one desktop and one narrow viewport.
