// ═══════════════════════════════════════════════════════════════
//  НАСТРОЙКА ОБЛАЧНОГО РЕЙТИНГА (Firebase — бесплатно)
// ═══════════════════════════════════════════════════════════════
//
//  1. Откройте https://console.firebase.google.com → «Создать проект»
//  2. В проекте: Build → Realtime Database → «Создать БД» → регион → «Начать в тестовом режиме»
//  3. Project settings (шестерёнка) → «Ваши приложения» → Web (</>) → зарегистрировать
//  4. Скопируйте firebaseConfig сюда ниже
//  5. В Realtime Database → Rules вставьте:
//
//     {
//       "rules": {
//         "leaderboard": {
//           ".read": true,
//           ".write": true
//         }
//       }
//     }
//
//  6. Сохраните файл и залейте на GitHub (git push)
//
//  После этого очки ВСЕХ игроков сохраняются в облаке автоматически.

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyCuKCcMI-DtMvbVKk6BTVnjoqrfyCRXF7M",
  authDomain: "labyrinth-7aaf8.firebaseapp.com",
  databaseURL: "https://labyrinth-7aaf8-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "labyrinth-7aaf8",
  storageBucket: "labyrinth-7aaf8.firebasestorage.app",
  messagingSenderId: "1033065341306",
  appId: "1:1033065341306:web:83efb253cb5012409f76c3",
  measurementId: "G-RN3N2FC860"
};
