# Prompt Codex — Fitur Lanjutan Game Retro Wave Shooter

Saya sudah memiliki game web retro wave space shooter yang MVP-nya sudah selesai. Game ini seperti arcade shooter klasik: player mengendalikan pesawat di bawah layar, menembak musuh di atas, ada score, high score, lives, wave, enemy formation, shooting, collision, dan game over.

Sekarang saya ingin kamu melanjutkan development tanpa merusak fitur yang sudah ada.

## Tujuan

Tambahkan fitur lanjutan agar game terasa lebih seru, lebih polished, dan lebih layak sebagai portfolio game web.

Prioritas fitur yang harus ditambahkan:

1. Power-Up System
2. Enemy Type berbeda
3. Boss Fight setiap beberapa wave
4. Combo & Multiplier Score
5. Game Feel Polish
6. HUD tambahan untuk power-up, combo, dan boss HP

---

## Instruksi Penting

Sebelum coding:

- Pelajari dulu struktur project yang sudah ada.
- Jangan rewrite total project kalau tidak diperlukan.
- Gunakan style dan arsitektur kode yang sudah ada.
- Jangan menghapus fitur lama.
- Jangan mengubah behavior utama game yang sudah berjalan kecuali memang diperlukan.
- Kalau ada file/entity/manager yang sudah ada, extend saja.
- Kalau belum ada, buat file baru yang rapi.
- Pastikan game tetap bisa dijalankan dengan command project yang sudah ada.
- Jangan menambahkan dependency baru kecuali benar-benar dibutuhkan.
- Prioritaskan gameplay yang stabil daripada fitur terlalu kompleks.

---

# 1. Power-Up System

Tambahkan sistem power-up yang muncul secara random ketika enemy dihancurkan.

## Requirement

Power-up jatuh dari posisi enemy yang hancur ke arah bawah.

Player bisa mengambil power-up dengan menyentuhnya.

Power-up harus memiliki visual neon yang berbeda-beda, misalnya ikon kecil atau bentuk glowing.

Tambahkan minimal 5 jenis power-up:

## A. Double Shot

Efek:

- Player menembak 2 peluru sekaligus.
- Durasi: 8 detik.

## B. Rapid Fire

Efek:

- Cooldown tembakan player menjadi lebih cepat.
- Durasi: 8 detik.

## C. Shield

Efek:

- Player mendapatkan 1 shield.
- Shield menahan 1 hit dari enemy bullet.
- Jika player sudah punya shield, boleh ditambah maksimal 3 shield.

## D. Extra Life

Efek:

- Menambah 1 nyawa.
- Maksimal lives: 5.

## E. Laser Beam

Efek:

- Player mendapatkan laser besar lurus ke atas.
- Aktif selama 3 detik atau beberapa kali tembakan.
- Laser memberikan damage besar ke enemy dan boss.

## Drop Rate

Gunakan drop chance sekitar 12%–18% dari enemy yang hancur.

Power-up yang lebih kuat seperti Extra Life dan Laser Beam harus lebih jarang muncul.

---

# 2. Enemy Type Berbeda

Saat ini enemy boleh jadi masih sama behavior-nya. Tambahkan beberapa jenis enemy agar gameplay lebih variatif.

Minimal buat 4 enemy type:

## A. Basic Enemy

Behavior:

- Bergerak normal.
- HP rendah.
- Score rendah.

## B. Shooter Enemy

Behavior:

- Lebih sering menembak.
- Warna bisa cyan atau kuning.
- Score sedang.

## C. Tank Enemy

Behavior:

- HP lebih besar.
- Bergerak lebih lambat.
- Score lebih tinggi.

## D. Dasher Enemy

Behavior:

- Sesekali bergerak turun lebih cepat atau melakukan dash pendek.
- Berbahaya jika terlalu dekat dengan player.
- Score tinggi.

## Requirement

- Enemy type harus bisa diatur dari wave manager.
- Semakin tinggi wave, kombinasi enemy harus makin sulit.
- Jangan membuat semua enemy langsung terlalu sulit di wave awal.
- Pastikan visual enemy berbeda berdasarkan type atau warna.

---

# 3. Boss Fight

Tambahkan boss fight setiap 5 wave.

Contoh:

- Wave 5: Boss pertama
- Wave 10: Boss lebih kuat
- Wave 15: Boss lebih sulit

## Boss Requirement

Boss harus memiliki:

- HP besar.
- HP bar di bagian atas atau bawah HUD.
- Ukuran lebih besar dari enemy biasa.
- Pola gerakan kiri-kanan.
- Pola tembakan khusus.
- Ledakan besar saat kalah.
- Bonus score besar.

## Boss Attack Pattern

Minimal buat 2 pola serangan:

## Pattern 1 — Spread Shot

Boss menembakkan beberapa peluru menyebar ke bawah.

## Pattern 2 — Burst Shot

Boss menembakkan beberapa peluru cepat secara berurutan.

## Boss Scaling

Setiap boss berikutnya harus lebih sulit:

- HP bertambah.
- Fire rate meningkat.
- Movement speed sedikit meningkat.
- Score reward bertambah.

## Wave Flow

Jika wave adalah kelipatan 5, jangan spawn enemy formation biasa. Spawn boss saja.

Setelah boss kalah, lanjut ke wave berikutnya.

---

# 4. Combo & Multiplier Score

Tambahkan sistem combo agar pemain mendapatkan reward saat menghancurkan enemy berturut-turut.

## Requirement

- Combo bertambah setiap kali player menghancurkan enemy.
- Combo reset jika player terkena damage.
- Combo juga reset jika terlalu lama tidak menghancurkan enemy, misalnya 3 detik.
- Score multiplier naik berdasarkan combo.

Contoh multiplier:

- Combo 0–4: x1
- Combo 5–9: x1.5
- Combo 10–19: x2
- Combo 20+: x3

## HUD

Tampilkan combo di HUD:

- COMBO x12
- MULTIPLIER x2

Buat tampilannya neon dan tidak mengganggu gameplay.

---

# 5. Game Feel Polish

Tambahkan polish agar game terasa lebih satisfying.

Minimal tambahkan:

## A. Particle Explosion

Saat enemy hancur:

- Munculkan particle neon kecil.
- Warna particle mengikuti warna enemy.
- Particle hilang perlahan.

## B. Screen Shake

Saat:

- Boss kalah.
- Player terkena hit.
- Explosion besar terjadi.

Screen shake harus ringan, jangan membuat gameplay tidak nyaman.

## C. Hit Flash

Saat player terkena damage:

- Player berkedip sebentar.
- Player mendapatkan invincibility pendek sekitar 1.5 detik.

## D. Bullet Trail

Tambahkan efek trail/glow pada bullet player dan enemy.

## E. Score Pop-up

Saat enemy hancur, tampilkan score kecil yang naik dan fade out.

Contoh:

```txt
+20
+50
+300
```

---

# 6. HUD Tambahan

Update HUD agar menampilkan:

- Score
- High Score
- Wave
- Lives
- Shield count
- Active power-up dan durasinya
- Combo count
- Multiplier
- Boss HP bar saat boss muncul

Pastikan HUD tetap clean dan sesuai tema retro wave neon.

---

# 7. Sound Effect Opsional

Jika project sudah memiliki sound system, tambahkan sound untuk:

- Player shoot
- Enemy destroyed
- Power-up pickup
- Player hit
- Boss explosion
- Wave clear

Jika belum ada sound system, cukup siapkan struktur `SoundManager` sederhana tetapi jangan memaksakan asset suara jika belum tersedia.

---

# 8. Acceptance Criteria

Fitur dianggap selesai jika:

- Game tetap bisa berjalan normal.
- Player masih bisa bergerak dan menembak seperti sebelumnya.
- Enemy masih bisa dihancurkan.
- Power-up bisa muncul, jatuh, diambil, dan efeknya bekerja.
- Enemy memiliki beberapa type dengan behavior berbeda.
- Boss muncul setiap 5 wave.
- Boss memiliki HP bar dan bisa dikalahkan.
- Combo bertambah saat enemy dihancurkan.
- Multiplier mempengaruhi score.
- Combo reset saat player terkena damage atau terlalu lama tidak kill enemy.
- Particle explosion muncul saat enemy hancur.
- Screen shake muncul di momen penting.
- HUD menampilkan informasi baru dengan rapi.
- Tidak ada error di console.
- Build project berhasil.

---

# 9. Development Flow

Kerjakan secara bertahap:

## Phase 1 — Power-Up System

Tambahkan sistem power-up terlebih dahulu sampai stabil.

## Phase 2 — Enemy Type Berbeda

Tambahkan variasi enemy dan behavior masing-masing.

## Phase 3 — Boss Fight

Tambahkan boss setiap 5 wave lengkap dengan HP bar dan attack pattern.

## Phase 4 — Combo & Multiplier

Tambahkan sistem combo dan multiplier score.

## Phase 5 — Visual Polish & HUD

Tambahkan particle, screen shake, hit flash, bullet trail, score pop-up, dan update HUD.

---

# 10. Setelah Selesai

Setelah implementasi selesai, jelaskan:

- File apa saja yang diubah.
- Fitur apa saja yang berhasil ditambahkan.
- Cara mengetes setiap fitur.
- Command untuk menjalankan project.
- Command untuk build project.
- Jika ada limitation, jelaskan secara jujur.
