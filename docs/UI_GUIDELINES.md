# Sidhi Vinayaka Sweets — Phase 2 UI Guidelines

## Context and goals
Token-driven static e-commerce storefront for **Sidhi Vinayaka Sweets & Snacks**, built on the Anandhaas layout system and rebranded in Phase 2.

**Design intent:** Keep proven storefront structure and density while applying Sidhi Vinayaka brand color, wordmark, and Telangana/Andhra product catalog.

## Design tokens
All values live in [`styles/tokens.css`](../styles/tokens.css). Components **must** use semantic CSS variables.

| Domain | Sidhi Vinayaka mapping |
|---|---|
| Brand | `--color-brand` saffron `#c45c1a`, `--color-brand-soft` `#a64a12` |
| Trust bar | `--color-trust` deep maroon `#7a2e12` |
| Promo | `--color-promo` warm gold wash |
| Surfaces | cream page / white base / muted raised |
| Focus | `--color-focus-ring` brand saffron |

## Content and tone
Concise, confident, festival-ready. Prefer product-forward CTAs.

Examples:
- Pass: “Add to cart”, “Explore Gifting by Sidhi Vinayaka”
- Fail: Competitor brand names, “Click here”

## Anti-patterns
- Raw hex in component CSS
- Anandhaas / Mahalakshmi leftover branding
- Removing focus-visible rings
- Real payment checkout wiring

## QA checklist
- [ ] Logo reads Sidhi Vinayaka
- [ ] Trust bar / buttons use saffron–maroon tokens
- [ ] Footer contact uses sidhivinayaka.com
- [ ] New catalog (sakinalu, pickles, laddus) visible
- [ ] Cart drawer still works with new storage key
