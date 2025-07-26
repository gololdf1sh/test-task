# 🧪 Test Task — Automation Framework

Це TypeScript-проєкт з використанням [Playwright](https://playwright.dev), ESLint та Prettier. Структура підходить для розробки end-to-end та компонентних UI-тестів.

---

## 📦 Стек технологій

- [x] TypeScript
- [x] Playwright
- [x] ESLint
- [x] Prettier
- [x] Node.js

---

## 🚀 Як запустити

### 1. Клонування репозиторію

```bash
git clone https://github.com/gololdf1sh/test-task.git
cd test-task
```

### 2. Встановлення залежностей

```bash
npm install
```

### 3. Запуск тестів

```bash
npx playwright test
```

Або з параметрами:

```bash
npx playwright test --project=Chromium
npx playwright test --headed --debug
```

---

## ✅ Команди

| Команда            | Опис                          |
|--------------------|-------------------------------|
| `npm run lint`     | Запуск ESLint                 |
| `npm run format`   | Форматування через Prettier   |
| `npx playwright test` | Запуск тестів Playwright |

---