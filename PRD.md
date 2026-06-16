# PRD.md — Neon Starwave

## 1. Ringkasan Produk

**Neon Starwave** adalah game arcade retro wave bertema pesawat luar angkasa yang menembak musuh dalam formasi. Pemain mengendalikan pesawat di bagian bawah layar, menembakkan laser ke arah musuh, menghindari peluru musuh, mengumpulkan skor, dan bertahan selama mungkin melewati beberapa wave.

Game ini terinspirasi dari game arcade klasik seperti Space Invaders, tetapi menggunakan visual modern bergaya **retro wave / synthwave** dengan warna neon, background grid, efek glow, HUD futuristik, dan gameplay cepat namun sederhana.

---

## 2. Tujuan Produk

Tujuan utama game ini adalah membuat game ringan, fun, dan mudah dimainkan yang bisa berjalan di browser.

### Tujuan utama:

* Membuat game arcade shooter sederhana.
* Memberikan pengalaman bermain cepat dan adiktif.
* Menggunakan tema visual retro wave yang kuat.
* Cocok sebagai project portofolio game web.
* Mudah dikembangkan menjadi versi yang lebih kompleks di masa depan.

---

## 3. Target Pengguna

Game ini ditujukan untuk:

* Pemain casual yang suka game arcade ringan.
* Pengguna yang ingin bermain game singkat di browser.
* Penggemar visual neon, retro wave, dan game klasik.
* Developer pemula yang ingin belajar membuat game 2D.

---

## 4. Konsep Game

Pemain mengendalikan sebuah pesawat neon di bagian bawah layar. Musuh muncul dalam beberapa baris di bagian atas layar. Pemain harus menembak semua musuh sebelum mereka menyerang atau mencapai area bawah.

Setiap musuh yang hancur akan memberikan skor. Setelah semua musuh dalam satu wave hancur, pemain masuk ke wave berikutnya dengan tingkat kesulitan lebih tinggi.

---

## 5. Nama Game

Nama sementara:

**Neon Starwave**

Alternatif nama:

* Neon Invaders
* Starwave Blaster
* Retro Galaxy
* Synthwave Shooter
* Cosmic Neon War

---

## 6. Core Gameplay Loop

Gameplay utama berjalan seperti ini:

1. Pemain memulai game.
2. Musuh muncul dalam formasi di bagian atas layar.
3. Pemain bergerak ke kiri dan kanan.
4. Pemain menembak laser ke arah musuh.
5. Musuh bergerak dan sesekali menembak ke arah pemain.
6. Pemain menghindari peluru musuh.
7. Pemain menghancurkan semua musuh.
8. Wave berikutnya dimulai.
9. Game berakhir ketika nyawa pemain habis.

---

## 7. Fitur MVP

Versi pertama game harus memiliki fitur berikut:

### 7.1 Start Screen

Game memiliki halaman awal dengan:

* Judul game.
* Tombol Start Game.
* Tombol How to Play.
* Tampilan visual retro wave.
* Musik atau efek ambient opsional.

### 7.2 Gameplay Screen

Gameplay utama menampilkan:

* Pesawat pemain.
* Formasi musuh.
* Peluru pemain.
* Peluru musuh.
* Skor.
* High score.
* Jumlah nyawa.
* Nomor wave.
* Efek ledakan ketika musuh hancur.

### 7.3 Player Movement

Pemain dapat bergerak:

* Ke kiri.
* Ke kanan.
* Tidak bisa keluar dari batas area permainan.

Kontrol utama:

* `A` atau `Arrow Left` untuk bergerak ke kiri.
* `D` atau `Arrow Right` untuk bergerak ke kanan.
* `Space` untuk menembak.
* `P` untuk pause game.

### 7.4 Shooting System

Pemain dapat menembak laser ke arah atas.

Aturan shooting:

* Satu tombol untuk menembak.
* Peluru bergerak lurus ke atas.
* Peluru hilang saat keluar layar.
* Peluru hilang saat mengenai musuh.
* Ada cooldown singkat agar pemain tidak bisa spam terlalu cepat.

### 7.5 Enemy Formation

Musuh muncul dalam formasi grid.

Contoh formasi awal:

* 5 baris musuh.
* 8 kolom musuh.
* Setiap baris memiliki warna atau jenis musuh berbeda.

Musuh bergerak perlahan ke kiri dan kanan. Saat mencapai batas layar, formasi turun sedikit ke bawah dan berbalik arah.

### 7.6 Enemy Attack

Musuh dapat menembak ke arah pemain.

Aturan serangan musuh:

* Tidak semua musuh menembak sekaligus.
* Musuh menembak secara acak.
* Kecepatan peluru musuh meningkat setiap wave.
* Frekuensi tembakan meningkat setiap wave.

### 7.7 Collision System

Game harus mendeteksi tabrakan antara:

* Peluru pemain dengan musuh.
* Peluru musuh dengan pemain.
* Musuh dengan batas bawah arena.
* Pemain dengan power-up jika tersedia di versi lanjut.

### 7.8 Score System

Pemain mendapatkan skor saat menghancurkan musuh.

Contoh skor:

* Musuh pink: 10 poin.
* Musuh cyan: 20 poin.
* Musuh kuning: 30 poin.
* Musuh ungu: 40 poin.
* Musuh spesial: 100 poin.

High score disimpan secara lokal menggunakan `localStorage`.

### 7.9 Lives System

Pemain memiliki jumlah nyawa.

Default:

* 3 nyawa.

Saat terkena peluru musuh:

* Nyawa berkurang 1.
* Pemain mendapat efek blink/invincible sebentar.
* Jika nyawa habis, game masuk ke Game Over Screen.

### 7.10 Wave System

Setelah semua musuh hancur, pemain masuk ke wave berikutnya.

Setiap wave meningkatkan:

* Kecepatan musuh.
* Frekuensi tembakan musuh.
* Jumlah musuh.
* Skor reward.
* Kemungkinan muncul musuh spesial.

### 7.11 Game Over Screen

Saat game berakhir, tampilkan:

* Tulisan Game Over.
* Final score.
* High score.
* Tombol Play Again.
* Tombol Back to Menu.

---

## 8. Fitur Tambahan Setelah MVP

Fitur ini tidak wajib untuk versi pertama, tetapi bisa ditambahkan setelah MVP selesai.

### 8.1 Power-Up

Power-up dapat muncul setelah musuh tertentu hancur.

Jenis power-up:

* Double Shot.
* Shield.
* Rapid Fire.
* Extra Life.
* Laser Beam.
* Slow Motion.

### 8.2 Boss Fight

Setiap beberapa wave, pemain menghadapi boss besar.

Contoh:

* Boss muncul setiap 5 wave.
* Boss memiliki HP.
* Boss punya pola tembakan khusus.
* Setelah boss kalah, pemain mendapat bonus skor.

### 8.3 Upgrade System

Pemain bisa meningkatkan kemampuan pesawat.

Upgrade:

* Fire rate.
* Damage.
* Shield.
* Movement speed.
* Bullet spread.

### 8.4 Sound Settings

Menu pengaturan audio:

* Music on/off.
* SFX on/off.
* Volume control.

### 8.5 Mobile Support

Kontrol mobile menggunakan:

* Tombol kiri.
* Tombol kanan.
* Tombol shoot.
* Auto-fire opsional.

---

## 9. Visual Direction

Tema visual utama adalah **retro wave / synthwave arcade**.

### Warna utama:

* Dark purple.
* Neon pink.
* Electric cyan.
* Neon yellow.
* Violet.
* Magenta.

### Elemen visual:

* Background gelap.
* Grid neon.
* Bintang kecil.
* Matahari synthwave di horizon.
* Pegunungan wireframe.
* HUD dengan glow.
* Sprite pixel-art modern.
* Efek ledakan neon.
* Laser glow.

### Gaya UI:

* Futuristic.
* Clean.
* Arcade.
* Neon border.
* Font bergaya pixel atau digital.
* Kontras tinggi agar mudah dibaca.

---

## 10. Audio Direction

Audio mendukung nuansa arcade retro.

### Musik:

* Synthwave loop.
* Beat cepat.
* Nuansa futuristik.
* Tidak terlalu mengganggu gameplay.

### Sound effects:

* Laser shot.
* Enemy destroyed.
* Player hit.
* Wave clear.
* Game over.
* Button hover.
* Button click.
* Power-up pickup.

---

## 11. Struktur Layar

### 11.1 Main Menu

Isi layar:

* Logo / judul game.
* Start Game.
* How to Play.
* Settings.
* High Score.

### 11.2 How to Play

Isi layar:

* Cara bergerak.
* Cara menembak.
* Penjelasan skor.
* Penjelasan wave.
* Penjelasan nyawa.

### 11.3 Gameplay

Isi layar:

* Area permainan utama.
* Score di kiri atas.
* Wave di tengah atas.
* High score di kanan atas.
* Lives di kanan bawah.
* Shield atau power-up status di kiri bawah.

### 11.4 Pause Screen

Isi layar:

* Resume.
* Restart.
* Back to Menu.

### 11.5 Game Over

Isi layar:

* Game Over.
* Final Score.
* High Score.
* Play Again.
* Main Menu.

---

## 12. Mekanik Detail

### 12.1 Player

Properti player:

* Position X.
* Position Y.
* Width.
* Height.
* Speed.
* Lives.
* Shoot cooldown.
* Invincible state.

Behavior:

* Bergerak horizontal.
* Menembak ke atas.
* Tidak bisa keluar arena.
* Berkedip saat terkena damage.

### 12.2 Enemy

Properti enemy:

* Position X.
* Position Y.
* Width.
* Height.
* Type.
* Score value.
* Health.
* Shoot chance.

Behavior:

* Bergerak bersama formasi.
* Turun saat mencapai sisi arena.
* Bisa menembak secara acak.
* Hancur saat HP habis.

### 12.3 Bullet

Jenis bullet:

* Player bullet.
* Enemy bullet.

Properti bullet:

* Position X.
* Position Y.
* Speed.
* Direction.
* Damage.
* Owner.

Behavior:

* Bergerak sesuai arah.
* Hilang saat keluar layar.
* Hilang saat mengenai target.

---

## 13. Difficulty Scaling

Kesulitan meningkat setiap wave.

Contoh scaling:

| Wave | Enemy Speed | Enemy Fire Rate | Enemy Rows | Catatan               |
| ---- | ----------: | --------------: | ---------: | --------------------- |
| 1    |         Low |             Low |          4 | Tutorial feel         |
| 2    |        Low+ |            Low+ |          4 | Mulai lebih cepat     |
| 3    |      Medium |          Medium |          5 | Lebih banyak musuh    |
| 4    |     Medium+ |         Medium+ |          5 | Serangan lebih intens |
| 5    |        Boss |    Boss Pattern |     1 Boss | Boss pertama          |

---

## 14. Data yang Disimpan

Game menyimpan data lokal:

* High score.
* Settings audio.
* Last selected difficulty.
* Total play count opsional.

Penyimpanan menggunakan browser `localStorage`.

---

## 15. Tech Recommendation

Untuk versi web, teknologi yang disarankan:

* HTML5 Canvas untuk rendering game.
* JavaScript atau TypeScript untuk logic game.
* React boleh digunakan untuk UI menu, tetapi gameplay tetap lebih baik di Canvas.
* Vite untuk development server.
* LocalStorage untuk menyimpan high score.
* CSS custom untuk tampilan neon retro wave.

Struktur sederhana:

```txt
src/
  assets/
    images/
    sounds/
    fonts/
  components/
    MainMenu.tsx
    GameOver.tsx
    HUD.tsx
  game/
    GameEngine.ts
    Player.ts
    Enemy.ts
    Bullet.ts
    Collision.ts
    WaveManager.ts
    InputManager.ts
  styles/
    globals.css
```

---

## 16. Non-Goals MVP

Hal-hal berikut tidak wajib di versi pertama:

* Multiplayer.
* Login user.
* Online leaderboard.
* Boss fight kompleks.
* Banyak jenis pesawat.
* Sistem shop.
* Story mode.
* Mobile support penuh.
* Backend server.

---

## 17. Acceptance Criteria

Game dianggap MVP selesai jika:

* Pemain bisa membuka game di browser.
* Pemain bisa memulai game dari main menu.
* Pemain bisa menggerakkan pesawat ke kiri dan kanan.
* Pemain bisa menembak musuh.
* Musuh bisa bergerak dalam formasi.
* Musuh bisa menembak balik.
* Collision antara peluru dan target berjalan benar.
* Score bertambah ketika musuh hancur.
* Nyawa berkurang saat pemain terkena peluru.
* Game over muncul saat nyawa habis.
* Wave baru muncul setelah semua musuh hancur.
* High score tersimpan di browser.
* Visual sudah menggunakan tema neon retro wave.

---

## 18. Prioritas Development

### Phase 1 — Core Gameplay

* Setup project.
* Buat canvas.
* Buat player.
* Buat movement.
* Buat shooting.
* Buat enemy formation.
* Buat collision.
* Buat score.

### Phase 2 — Game State

* Main menu.
* Pause.
* Game over.
* Restart.
* Wave system.
* High score.

### Phase 3 — Visual Polish

* Neon HUD.
* Background grid.
* Glow effect.
* Particle explosion.
* Sprite enemy.
* Sprite player.

### Phase 4 — Audio & Feel

* Sound laser.
* Sound explosion.
* Sound hit.
* Background music.
* Screen shake ringan.
* Hit feedback.

### Phase 5 — Extra Features

* Power-up.
* Boss fight.
* Mobile control.
* Difficulty mode.
* Leaderboard lokal.

---

## 19. Risiko & Solusi

### Risiko: Game terasa terlalu sederhana

Solusi:

* Tambahkan wave scaling.
* Tambahkan power-up.
* Tambahkan boss.
* Tambahkan efek visual yang satisfying.

### Risiko: Visual terlalu ramai

Solusi:

* Gunakan background gelap.
* Pastikan bullet dan enemy tetap mudah terlihat.
* Jangan terlalu banyak efek glow di area gameplay utama.

### Risiko: Kontrol kurang responsif

Solusi:

* Gunakan input manager yang membaca tombol secara real-time.
* Pastikan movement halus.
* Jangan membuat animasi mengganggu gameplay.

### Risiko: Performa turun karena particle terlalu banyak

Solusi:

* Batasi jumlah particle.
* Hapus object yang keluar layar.
* Gunakan object pooling bila diperlukan.

---

## 20. Referensi Visual

Visual utama mengikuti gaya:

* Retro wave.
* Synthwave.
* Neon arcade.
* Space shooter klasik.
* Pixel-art modern.
* Dark futuristic UI.

Ciri khas visual:

* Neon pink border.
* Cyan score.
* Yellow high score.
* Purple background.
* Grid horizon.
* Player ship glowing.
* Enemy pixel neon.
* Laser dan explosion glow.

---

## 21. Catatan Untuk Developer

Game harus terasa ringan, cepat, dan langsung bisa dimainkan. Jangan terlalu fokus ke fitur besar di awal. Prioritaskan dulu gameplay utama sampai benar-benar enak dimainkan.

Urutan paling penting:

1. Player bisa bergerak.
2. Player bisa menembak.
3. Musuh bisa dihancurkan.
4. Musuh bisa menyerang.
5. Score dan lives berjalan.
6. Game over berjalan.
7. Baru polish visual.

MVP harus dibuat sederhana tetapi rapi, agar mudah dikembangkan menjadi game yang lebih keren di versi berikutnya.
