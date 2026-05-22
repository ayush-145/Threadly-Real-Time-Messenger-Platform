# 🤝 Contributing to Threadly

First off, **thank you** for considering contributing to Threadly! Every contribution — whether it's a bug fix, a new feature, improved docs, or a typo correction — makes a difference. 🎉

---

## 📋 Table of Contents

- [Code of Conduct](#-code-of-conduct)
- [Getting Started](#-getting-started)
- [Development Setup](#-development-setup)
- [Project Structure](#-project-structure)
- [Making Changes](#-making-changes)
- [Commit Convention](#-commit-convention)
- [Pull Request Process](#-pull-request-process)
- [Coding Standards](#-coding-standards)
- [Reporting Bugs](#-reporting-bugs)
- [Suggesting Features](#-suggesting-features)
- [Need Help?](#-need-help)

---

## 📜 Code of Conduct

By participating in this project, you agree to maintain a welcoming and respectful environment. Please:

- **Be respectful** — Treat everyone with kindness and empathy.
- **Be constructive** — Offer helpful feedback, not criticism.
- **Be inclusive** — Welcome newcomers and help them get started.
- **Be patient** — Remember that everyone is learning.

---

## 🚀 Getting Started

1. **Star** the repo ⭐ — it helps the project grow!
2. **Fork** the repository to your GitHub account.
3. **Clone** your fork locally:
   ```bash
   git clone https://github.com/<your-username>/Threadly-Real-Time-Messenger-Platform.git
   cd Threadly-Real-Time-Messenger-Platform
   ```
4. **Add upstream** remote:
   ```bash
   git remote add upstream https://github.com/ayush-145/Threadly-Real-Time-Messenger-Platform.git
   ```

---

## 🛠️ Development Setup

Follow the **[Quick Start](README.md#-quick-start)** section in the README to install dependencies, configure environment variables, and start the dev servers.

> **TL;DR:** You need Node.js ≥ 20, a MongoDB instance, and free-tier accounts for Cloudinary, Resend, and Arcjet. See the [Prerequisites](README.md#prerequisites) and [Environment Variables Reference](README.md#-environment-variables-reference) for full details.

---

## 📂 Project Structure

See the full annotated directory tree in the **[Architecture](README.md#%EF%B8%8F-architecture)** section of the README.

---

## ✏️ Making Changes

### 1. Sync with upstream

Always sync before creating a new branch:

```bash
git checkout main
git pull upstream main
```

### 2. Create a feature branch

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names:

| Type | Format | Example |
|---|---|---|
| Feature | `feature/description` | `feature/group-chat` |
| Bug fix | `fix/description` | `fix/socket-disconnect` |
| Docs | `docs/description` | `docs/update-readme` |
| Refactor | `refactor/description` | `refactor/auth-flow` |

### 3. Make your changes

- Keep changes focused — one feature or fix per branch.
- Test your changes locally before committing.
- Ensure no existing functionality is broken.

### 4. Commit your changes

```bash
git add .
git commit -m "feat: add group chat functionality"
```

See the [Commit Convention](#-commit-convention) section below for formatting rules.

### 5. Push and open a PR

```bash
git push origin feature/your-feature-name
```

Then open a Pull Request on GitHub against the `main` branch.

---

## 📝 Commit Convention

This project follows the [Conventional Commits](https://www.conventionalcommits.org/) specification.

### Format

```
<type>: <short description>
```

### Types

| Type | When to Use | Example |
|---|---|---|
| `feat` | New feature | `feat: add image preview in chat` |
| `fix` | Bug fix | `fix: resolve socket reconnection issue` |
| `docs` | Documentation only | `docs: update API reference in README` |
| `style` | Formatting, no logic change | `style: fix indentation in ChatContainer` |
| `refactor` | Code restructuring | `refactor: extract socket logic into hook` |
| `perf` | Performance improvement | `perf: lazy load contact list images` |
| `test` | Adding or updating tests | `test: add auth controller unit tests` |
| `chore` | Build, tooling, maintenance | `chore: update dependencies` |

### Rules

- Use **lowercase** for the description.
- Use **imperative mood** — "add feature" not "added feature".
- Keep the subject line under **72 characters**.
- Do **not** end with a period.

---

## 🔀 Pull Request Process

### Before Submitting

- [ ] Your code builds without errors (`npm run build` from root).
- [ ] You've tested your changes locally.
- [ ] You've synced with the latest `main` branch.
- [ ] Your commits follow the [commit convention](#-commit-convention).
- [ ] You haven't committed any `.env` files or secrets.

### PR Template

When opening a PR, include:

```markdown
## What does this PR do?
Brief description of the change.

## Type of Change
- [ ] 🐛 Bug fix
- [ ] ✨ New feature
- [ ] 📝 Documentation update
- [ ] ♻️ Refactor
- [ ] 🎨 Style/UI change

## Screenshots (if UI changes)
Add before/after screenshots.

## Checklist
- [ ] Tested locally
- [ ] No breaking changes
- [ ] Commits follow convention
```

### Review Process

1. A maintainer will review your PR.
2. You may be asked to make changes — this is normal!
3. Once approved, your PR will be merged. 🎉

---

## 🎨 Coding Standards

### General

- Use **ES Modules** (`import`/`export`) throughout.
- Keep functions small and focused.
- Use meaningful variable and function names.
- Add comments only where the **"why"** isn't obvious.

### Frontend (React)

- Use **functional components** with hooks.
- State management via **Zustand** stores — avoid prop drilling.
- Use **Lucide React** for icons (not inline SVGs).
- Follow the existing **Tailwind CSS** utility class patterns.
- Use the project's custom CSS classes (`.auth-btn`, `.auth-input-label`, etc.) on auth pages.
- Keep components in `frontend/src/components/` — one component per file.

### Backend (Express)

- Keep controllers thin — business logic in controllers, config in `lib/`.
- Use the centralized `ENV` object from `lib/env.js` for environment variables.
- Always handle errors with `try/catch` and return appropriate HTTP status codes.
- Protect routes with `protectRoute` and `arcjetProtection` middleware.

### Styling Guide

| Do ✅ | Don't ❌ |
|---|---|
| Use existing color palette (`slate-900`, `cyan-500`, etc.) | Introduce new arbitrary colors |
| Use Tailwind utility classes | Write custom CSS unless necessary |
| Use DaisyUI components for chat bubbles, avatars, tabs | Add new UI libraries without discussion |
| Keep the dark theme consistent | Mix light/dark styles |

---

## 🐛 Reporting Bugs

Found a bug? [Open an issue](https://github.com/ayush-145/Threadly-Real-Time-Messenger-Platform/issues/new) and include:

1. **Title** — Short, descriptive summary.
2. **Description** — What happened vs. what you expected.
3. **Steps to Reproduce** — Numbered steps to trigger the bug.
4. **Environment** — Browser, OS, Node.js version.
5. **Screenshots** — If applicable.

### Example

```
Title: Messages not delivered when recipient reconnects

1. User A sends a message to User B while B is offline.
2. User B comes back online.
3. Expected: User B sees the message.
4. Actual: Message doesn't appear until page refresh.

Environment: Chrome 126, Windows 11, Node 20.11
```

---

## 💡 Suggesting Features

Have an idea? [Open a feature request](https://github.com/ayush-145/Threadly-Real-Time-Messenger-Platform/issues/new) with:

1. **Problem** — What problem does this solve?
2. **Proposed Solution** — How would it work?
3. **Alternatives** — Other approaches you've considered.
4. **Priority** — Nice-to-have or critical?

### Feature Ideas Welcome

Some areas where contributions are especially welcome:

- 🔍 Message search
- 👥 Group chats
- 📎 File attachments (PDFs, docs)
- 🔔 Push notifications
- 🌐 Internationalization (i18n)
- ♿ Accessibility improvements
- 🧪 Unit & integration tests
- 📱 Mobile responsiveness improvements

---

## ❓ Need Help?

- **Check existing issues** — Your question might already be answered.
- **Open a discussion** — Ask questions in [GitHub Issues](https://github.com/ayush-145/Threadly-Real-Time-Messenger-Platform/issues).
- **Read the README** — The [README](README.md) has detailed setup and architecture docs.

---

<p align="center">
  <strong>Thank you for helping make Threadly better! 🧵✨</strong>
</p>

<p align="center">
  Made with ❤️ by the <a href="https://github.com/ayush-145/Threadly-Real-Time-Messenger-Platform">Threadly</a> community
</p>
