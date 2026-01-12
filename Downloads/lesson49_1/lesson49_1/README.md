# ДЗ 49.1 — Тестування асинхронної логіки React-компонентів

React-компонент `UserProfile` робить асинхронний GET-запит до API та показує стани **loading / success / error**.
Тести написані на **Vitest + Testing Library** і **мокають `fetch`**, тому не залежать від зовнішнього сервісу.

## Запуск локально
```bash
npm install
npm run dev
```

## Тести
```bash
npm test
```
або один раз:
```bash
npm run test:run
```

## Структура
```
src/
  components/
    UserProfile.jsx
    UserProfile.test.jsx
  test/
    setup.js
```
