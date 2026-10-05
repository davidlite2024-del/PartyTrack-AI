# 🎯 PoseRoulette

> Интерактивная пати-игра в браузере с рулеткой заданий и проверкой движений через веб-камеру с помощью нейросетей. 100% бесплатно, без платных API и без серверной части — все вычисления работают прямо на устройстве игрока.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![MediaPipe](https://img.shields.io/badge/MediaPipe-Pose-0097A7?logo=google&logoColor=white)](https://developers.google.com/mediapipe)

---

## ⚡ О проекте

**PoseRoulette** — это динамичная игра для компании друзей. Игрок крутит цифровую рулетку, получает физический или забавный челлендж (приседания, планка, стойка на одной ноге, T-поза) и должен выполнить его перед веб-камерой за ограниченное время.

Нейросеть в реальном времени трекает ключевые суставы тела, анализирует геометрию поз и автоматически засчитывает повторения или удержание позиции.

### 🔥 Ключевые фичи:
- **Client-Side AI:** Обработка видеопотока идет локально в браузере через MediaPipe (WebAssembly / WebGL) — нулевой пинг и полная приватность (видео не улетает в сеть).
- **Честный судья:** Математический расчет углов в суставах человека для верификации упражнений.
- **Игровой баланс:** До 3 пропусков (скипов) сложных или неловких заданий за сессию.
- **Нулевые затраты:** Никаких подписок, токенов и платных серверов.

---

## 🛠️ Стек технологий

* **Сборка & Среда:** [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Компьютерное зрение:** [@mediapipe/tasks-vision](https://developers.google.com/mediapipe/solutions/vision/pose_landmarker) (PoseLandmarker)
* **Интерфейс:** HTML5 Canvas, Tailwind CSS, Lucide Icons
* **Аудиоэффекты:** Howler.js / Web Audio API

---

## 🚀 Быстрый старт

### Требования
- Node.js 18+
- Устройство с веб-камерой

### Установка и запуск

1. Клонируйте репозиторий:
```bash
git clone [https://github.com/ВАШ_НИКНЕЙМ/PoseRoulette.git](https://github.com/ВАШ_НИКНЕЙМ/PoseRoulette.git)
cd PoseRoulette
