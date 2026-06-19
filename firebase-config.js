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
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};
