# Kiper Tangkap-Tangkis

Game kiper di browser yang memakai webcam dan mikrofon. Hadang bola dengan sarung kiper virtual yang mengikuti tangan: buka telapak lalu genggam untuk **menangkap**, atau ayunkan tangan untuk **menepis**. Peluit dari kiri atau kanan memberi petunjuk arah tendangan.

> Tugas Besar Sistem Teknologi Multimedia — Aplikasi Filter Interaktif (IF25-40305)

**Demo:** _TODO: link GitHub Pages_

## Fitur & Efek

| No | Pemicu | Efek |
|----|--------|------|
| 1 | Posisi telapak tangan | Sarung kiper menempel dan berputar mengikuti tangan |
| 2 | Buka lalu genggam ≤ 300 ms | Bola tertangkap + bunyi "dug" + skor +3 |
| 3 | Ayunan cepat atau kepalan | Bola terpental + partikel rumput + bunyi "plak" + skor +1 |
| 4 | Teriakan (maks. 3× per ronde) | Sarung membesar 2 detik + gema stadion |
| 5 | Arah tendangan | Peluit dari kiri/kanan (stereo panning) |
| 6 | Bola lolos | Jaring bergetar + layar bergoyang + sorak penonton |

Fitur pendukung: kalibrasi tangan, overlay FPS & latensi, panel debug, serta rekam dan unduh video bersuara (`.webm`).

## Teknologi

- [MediaPipe Tasks Vision](https://ai.google.dev/edge/mediapipe/solutions/vision/hand_landmarker) — Hand Landmarker
- Web Audio API — analisis volume, efek gema, stereo panning, SFX
- Canvas 2D — rendering efek visual
- MediaRecorder — rekaman video bersuara

## Menjalankan Secara Lokal

Webcam dan mikrofon hanya bisa diakses lewat `localhost` atau HTTPS, jadi jalankan lewat server lokal:

```bash
# pilih salah satu
npx serve .
python -m http.server 8000
```

Lalu buka `http://localhost:8000` (atau port yang ditampilkan) dan izinkan akses kamera serta mikrofon.

## Struktur Project

```
.
├── index.html
├── css/
│   └── style.css
├── assets/
│   ├── sprites/        # sprite sarung, bola, gawang
│   └── audio/          # sampel suara (sorak penonton, dll.)
└── src/
    ├── main.js         # game loop, FPS & latensi
    ├── capture.js      # akses webcam + mikrofon
    ├── landmark.js     # Hand Landmarker + helper tangan
    ├── audio_fx.js     # analisis volume + efek audio
    ├── video_fx.js     # rendering sprite, partikel, overlay
    ├── recorder.js     # rekam & unduh .webm
    └── game.js         # aturan permainan & skor
```

## Rancangan Pipeline

_TODO: tulis dengan kata-kata kelompok sendiri, beserta diagram alur._

## Anggota Kelompok

| Nama | NIM |
|------|-----|
| _TODO_ | _TODO_ |
