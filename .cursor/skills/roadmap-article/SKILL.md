---
name: roadmap-article
description: >-
  Writes interview roadmap articles under content/**/*.md and wires item refs in
  public/roadmaps/*.json. Use when creating or updating roadmap articles,
  ответы к вопросам, content/*.md, or when the user asks to generate materials
  for roadmap topics.
---

# Roadmap articles

## Workflow

1. Prefer CORE/KILLER items without `ref` (run `npm run content:status`).
2. Choose a stable `ref` path: `area/slug` (e.g. `js/closures`, `auth/jwt`).
3. Create `content/{ref}.md` using the template below — or bulk-fill stubs with `npm run content:fill` (skips existing files; assigns refs in roadmap JSON).
4. In roadmap JSON, replace the string item with `{ "label": "<same label>", "ref": "<ref>" }`. Reuse the same `ref` on frontend and backend when the topic overlaps.
5. Re-run `npm run content:status` — missing/orphans should stay clean.
6. Hand-polish generated stubs for important topics: denser summary, specific «Как работает», real interview Q&A.

## File template

```markdown
---
title: Short topic name
summary: 1–2 sentences — what it is and why it matters in interviews/production.
video: optional YouTube id or URL
image: optional image URL (Wikimedia Special:FilePath preferred)
image_credit: "Source note; mention video/image authors when present."
---

## Зачем нужно

1 short paragraph: interview/production motivation.

## Как работает

Mechanism in plain language. Optional short code block. Optional links to MDN / Handbook / canonical talks.

(Topic-specific H2 allowed: ## Виды, ## Защита, ## Базовые классы — keep 1–3 such sections max.)

## Что спрашивают

- 2–4 typical interview questions (bullet list)

## Ответы

### Exact question text from the list above

Concise answer (interview-ready). Markdown ok: bold terms, short code, lists.

### Next question…

…
```

## Rules of thumb

- **Language**: Russian, technical terms in English where natural (`Promise`, `macrotask`).
- **Length**: tight — not a textbook. Enough to answer the bullets in «Ответы».
- **Answers**: every bullet under «Что спрашивают» must have a matching `###` under «Ответы» (same wording). Answers start collapsed in the UI via that section.
- **Frontmatter**: `title` + `summary` required. `video` / `image` / `image_credit` optional; credit when media exists.
- **Media**: prefer well-known talks (JSConf, Computerphile) or Wikimedia; don’t invent video IDs.
- **No** long tutorials, emoji, or fluff intros.

## Example refs already in use

`js/async-await`, `js/event-loop-microtasks`, `js/event-loop-macrotasks`, `ts/generics-constraints`, `http/status-codes`, `security/xss`, `security/csrf`, `microservices/idempotency-key`
