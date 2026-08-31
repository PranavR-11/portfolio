---
name: awesome-design-md
description: Reference library of 74 real design systems (Linear, Vercel, Stripe, Apple, Claude, Figma, Raycast, Notion, Spotify and more) extracted as concrete tokens — exact hex palettes, type scales with letter-spacing, spacing, radii, shadows and motion. Load a system when the user names a brand as a visual target ("make it feel like Linear", "Stripe-style"), when a project needs a grounded starting palette and type scale instead of invented values, or when auditing whether an existing UI's tokens are internally consistent. Reference material, not a rulebook — it supplies values, not opinions about layout or composition.
---

# awesome-design-md

A vendored library of design systems reverse-engineered from shipping products.
Each entry is real extracted values, not an approximation of a vibe.

## When to use this

Reach for it when you need **concrete numbers**:

- The user names a brand as a target — "like Linear", "Vercel-ish", "Apple clean".
- A new project needs a defensible palette and type scale rather than invented hexes.
- You want to check an existing UI's tokens against a system that demonstrably works.
- You need a plausible dark-mode ramp, or letter-spacing that actually tracks with size.

**Do not** use it to decide layout, composition, copy or page structure. It holds
tokens. For those judgments use `design-taste-frontend`, which is opinionated
about exactly the things this skill is silent on. The two compose well: taste
decides the direction, this supplies the values.

## How to use it

1. Pick the closest system from the index below.
2. Read `references/<name>/DESIGN.md`. Each has YAML frontmatter (`colors`,
   `typography`, plus spacing/radius/shadow/motion) followed by prose on how the
   system is applied in practice.
3. **Adapt, don't transplant.** Lifting Stripe's palette wholesale onto someone's
   portfolio makes it look like a Stripe clone, not like them. Take the
   *relationships* — the ratio between surface steps, how tracking tightens as
   type scales up, how sparingly the accent appears — and re-derive values that
   fit the actual brand.
4. Never ship another company's brand color as a personal or client brand color.
   These are references for calibration, not assets to reuse verbatim.

## Index

**Dark / technical** — `linear.app`, `vercel`, `raycast`, `warp`, `sentry`,
`clickhouse`, `supabase`, `posthog`, `opencode.ai`, `x.ai`, `together.ai`,
`minimax`, `ollama`, `replicate`, `runwayml`, `elevenlabs`, `voltagent`

**Product / SaaS** — `stripe`, `notion`, `figma`, `slack`, `intercom`, `miro`,
`airtable`, `cal`, `resend`, `mintlify`, `sanity`, `webflow`, `framer`,
`hashicorp`, `mongodb`, `expo`, `composio`, `clay`, `zapier`, `lovable`,
`superhuman`

**AI** — `claude`, `cursor`, `cohere`, `mistral.ai`

**Consumer** — `apple`, `spotify`, `airbnb`, `uber`, `pinterest`, `nike`,
`starbucks`, `meta`, `playstation`, `nintendo-2001`

**Fintech** — `coinbase`, `binance`, `kraken`, `revolut`, `wise`, `mastercard`,
`shopify`

**Automotive / industrial** — `tesla`, `bmw`, `bmw-m`, `ferrari`, `lamborghini`,
`bugatti`, `renault`, `spacex`, `nvidia`

**Editorial** — `theverge`, `wired`

**Enterprise / heritage** — `ibm`, `hp`, `dell-1996`, `vodafone`

For this repo specifically, the dark/technical cluster is the relevant
neighbourhood — `linear.app`, `vercel` and `sentry` are the closest reference
points for a dark portfolio with a single chromatic accent.

## Provenance

- **Upstream:** https://github.com/VoltAgent/awesome-design-md @ `8147538`
- **License:** MIT (see `LICENSE`, © 2026 VoltAgent)
- **Vendored:** 2026-08-27

Upstream ships the `design-md/` collection only — it has no `SKILL.md`. This
wrapper file was written locally to make the collection loadable as a skill; the
`references/` content is upstream's, unmodified.

To update:

```bash
git clone --depth 1 https://github.com/VoltAgent/awesome-design-md /tmp/admd
rm -rf .claude/skills/awesome-design-md/references
cp -r /tmp/admd/design-md .claude/skills/awesome-design-md/references
```
