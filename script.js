// Data Rules Diagnosa (Embedded untuk menghindari masalah CORS akses file lokal)
const rulesData = [
  {
    "id": 1,
    "if": ["hp tidak menyala", "layar gelap"],
    "then": "Kemungkinan: IC Power atau baterai bermasalah",
    "solution": "Coba ganti baterai lain atau cek konsumsi arus dengan power supply. Jika arus gantung, kemungkinan IC Power."
  },
  {
    "id": 2,
    "if": ["hp cepat panas", "baterai cepat habis"],
    "then": "Kemungkinan: Baterai bocor atau ada korsleting (short) halus",
    "solution": "Cek apakah ada aplikasi berjalan di background. Jika HP panas walau tidak dipakai, kemungkinan short pada kapasitor atau IC."
  },
  {
    "id": 3,
    "if": ["hp hang", "layar tidak responsif"],
    "then": "Kemungkinan: Crash sistem atau memori internal penuh",
    "solution": "Lakukan restart paksa. Jika sering terjadi, coba factory reset atau flash ulang firmware."
  },
  {
    "id": 4,
    "if": ["speaker tidak berbunyi"],
    "then": "Kemungkinan: Kerusakan speaker (buzzer) atau jalur audio putus",
    "solution": "Cek nilai hambatan speaker dengan multitester. Jika normal, cek jalur atau IC Audio."
  },
  {
    "id": 5,
    "if": ["kamera tidak bisa dibuka", "muncul pesan error kamera"],
    "then": "Kemungkinan: Modul kamera rusak atau jalur konektor kotor",
    "solution": "Bersihkan konektor kamera. Jika masih error, coba ganti modul kamera."
  },
  {
    "id": 6,
    "if": ["hp tidak bisa charger", "tidak ada respon saat colok charger"],
    "then": "Kemungkinan: Port charger kotor, fleksibel putus, atau IC Charger rusak",
    "solution": "Bersihkan lubang charger. Cek tegangan VBUS 5V masuk atau tidak. Ganti papan cas jika perlu."
  },
  {
    "id": 7,
    "if": ["sinyal hilang", "tidak ada layanan"],
    "then": "Kemungkinan: Masalah pada Antena, IC PA (Power Amplifier), atau IC WTR (Transceiver)",
    "solution": "Cek kabel antena koaksial. Jika IMEI ada tapi sinyal silang, kemungkinan IC PA atau WTR rusak."
  },
  {
    "id": 8,
    "if": ["mikrofon mati", "lawan bicara tidak mendengar"],
    "then": "Kemungkinan: Mikrofon rusak atau lubang mic tertutup debu",
    "solution": "Bersihkan lubang mic. Jika tidak berhasil, ganti part mikrofon atau papan bawah."
  },
  {
    "id": 9,
    "if": ["bootloop", "stuck di logo"],
    "then": "Kemungkinan: Software corrupt atau IC eMMC lemah",
    "solution": "Coba flash ulang software. Jika gagal flash, kemungkinan IC eMMC (penyimpanan) bermasalah."
  },
  {
    "id": 10,
    "if": ["layar sentuh bergerak sendiri", "ghost touch"],
    "then": "Kemungkinan: LCD/Touchscreen rusak atau charger tidak original",
    "solution": "Coba lepas charger. Jika masih error, ganti satu set LCD."
  },
  {
    "id": 11,
    "if": ["wifi tidak bisa on", "bluetooth tidak berfungsi"],
    "then": "Kemungkinan: IC Wifi/Bluetooth bermasalah",
    "solution": "Cek tegangan kerja IC Wifi. Seringkali perlu reball atau ganti IC Wifi."
  },
  {
    "id": 12,
    "if": ["sim card tidak terbaca"],
    "then": "Kemungkinan: Konektor SIM rusak atau jalur SIM putus",
    "solution": "Cek fisik kaki-kaki konektor SIM. Cek tegangan V-SIM."
  },
  {
    "id": 13,
    "if": ["gps tidak akurat", "lokasi tidak terkunci"],
    "then": "Kemungkinan: Antena GPS kendor atau masalah software",
    "solution": "Kencangkan baut area antena GPS. Cek pengaturan akurasi lokasi. Jika hardware, cek jalur antena GPS."
  },
  {
    "id": 14,
    "if": ["getar mati", "vibrator tidak berfungsi"],
    "then": "Kemungkinan: Motor vibrator rusak atau konektor kotor",
    "solution": "Cek nilai hambatan motor getar. Bersihkan konektor yang menghubungkan ke motherboard."
  },
  {
    "id": 15,
    "if": ["fingerprint tidak respon", "sidik jari gagal"],
    "then": "Kemungkinan: Fleksibel fingerprint putus atau sensor kotor/rusak",
    "solution": "Bersihkan permukaan sensor. Cek kondisi fisik kabel fleksibel. Ganti tombol/sensor fingerprint."
  },
  {
    "id": 16,
    "if": ["tombol power keras", "tombol volume tidak fungsi"],
    "then": "Kemungkinan: Switch tombol on/off sudah aus atau fleksibel putus",
    "solution": "Ganti fleksibel on/off volume satu set. Untuk darurat, bersihkan plat logam di dalam tombol."
  },
  {
    "id": 17,
    "if": ["layar tidak mati saat telepon", "sensor proximity error"],
    "then": "Kemungkinan: Karet sensor proximity hilang atau tertutup debu/tempered glass",
    "solution": "Pastikan area sensor di atas layar bersih. Cek apakah karet sensor terpasang dengan benar di dalam."
  },
  {
    "id": 18,
    "if": ["lampu flash mati", "senter tidak menyala"],
    "then": "Kemungkinan: Lampu LED putus atau IC Driver Lampu rusak",
    "solution": "Cek kontinuitas LED Flash. Jika modul kamera menyatu dengan flash, mungkin perlu ganti sekitarnya/IC Light."
  },
  {
    "id": 19,
    "if": ["hp kena air", "korosi"],
    "then": "Kemungkinan: Konslet pada jalur Vbat atau komponen pasif berkarat",
    "solution": "Segera lepas baterai (jika bisa). Bongkar dan bersihkan mesin dengan thinner/alkohol menggunakan sikat atau ultrasonic cleaner."
  },
  {
    "id": 20,
    "if": ["headset tidak terdeteksi", "suara headset sebelah"],
    "then": "Kemungkinan: Lubang jack audio kotor atau rusak",
    "solution": "Bersihkan lubang jack dengan cotton bud kecil. Cek kaki-kaki konektor jack di board."
  }
];

let rules = [];

async function loadRules() {
  // Menggunakan data embedded langsung
  // Simulasi delay agar terasa "memuat"
  setTimeout(() => {
    rules = rulesData;
    renderSymptoms();
  }, 300);
}

function renderSymptoms() {
  const container = document.getElementById('symptoms-container');
  const uniqueSymptoms = new Set();

  // collect all unique symptoms
  rules.forEach(rule => {
    rule.if.forEach(symptom => uniqueSymptoms.add(symptom));
  });

  if (uniqueSymptoms.size === 0) {
    container.innerHTML = '<p>Tidak ada data gejala.</p>';
    return;
  }

  let html = '';
  // Sort symptoms alphabetically for easier finding
  const sortedSymptoms = Array.from(uniqueSymptoms).sort();

  sortedSymptoms.forEach(symptom => {
    // Create a safe ID for the checkbox
    const id = 'sym_' + symptom.replace(/\s+/g, '_').replace(/[^a-zA-Z0-9_]/g, '');
    html += `
            <label class="symptom-item" for="${id}">
                <input type="checkbox" id="${id}" value="${symptom}" class="symptom-checkbox">
                <span>${capitalize(symptom)}</span>
            </label>
        `;
  });
  container.innerHTML = html;
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function getSelectedSymptoms() {
  const checkboxes = document.querySelectorAll('.symptom-checkbox:checked');
  return Array.from(checkboxes).map(cb => cb.value);
}

function diagnoseSymptoms(selectedSymptoms) {
  if (selectedSymptoms.length === 0) return null;

  const results = [];
  rules.forEach(rule => {
    // Check if ALL conditions in the rule are met
    // Improved logic: Match if the rule's conditions are a SUBSET of selected symptoms
    // (e.g. if user selects "dead pixel" AND "no signal", and there is a rule for "no signal", show it)

    // Strict match (old way): rule.if.every(cond => selectedSymptoms.includes(cond))

    // Fuzzy match logic for better UX:
    // Show result if ALL of the rule's criteria are present in the user's selection.
    // This allows selecting multiple unrelated symptoms and getting multiple diagnoses.
    const match = rule.if.every(cond => selectedSymptoms.includes(cond));

    if (match) results.push(rule);
  });
  return results;
}

function showResults(matched) {
  const resultBox = document.getElementById('result-box');
  const target = document.getElementById('result-content');

  resultBox.classList.remove('hidden');

  if (!matched) {
    target.innerHTML = '<p class="info">Silakan pilih setidaknya satu gejala.</p>';
    return;
  }

  if (matched.length === 0) {
    target.innerHTML = '<div class="alert warning"><p><strong>Tidak ditemukan diagnosa pasti untuk kombinasi ini.</strong><br>Coba kurangi gejala atau pilih gejala utama saja.</p></div>';
    return;
  }

  const html = matched.map(r => `
    <div class="result-card">
      <div class="diagnosis-header">
        <h4>Kemungkinan Kerusakan (ID: ${r.id})</h4>
      </div>
      <div class="diagnosis-body">
        <p class="diagnosis-text">${r.then}</p>
        ${r.solution ? `<div class="solution-box"><strong>Saran Perbaikan:</strong><br>${r.solution}</div>` : ''}
      </div>
    </div>
  `).join('');

  target.innerHTML = html;
  // Scroll to result
  resultBox.scrollIntoView({ behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', async () => {
  await loadRules();

  document.getElementById('btn-diagnose').addEventListener('click', () => {
    const symptoms = getSelectedSymptoms();
    const matched = diagnoseSymptoms(symptoms);
    showResults(matched);
  });

  document.getElementById('btn-reset').addEventListener('click', () => {
    // Uncheck all boxes
    document.querySelectorAll('.symptom-checkbox').forEach(cb => cb.checked = false);
    // Hide result box
    document.getElementById('result-box').classList.add('hidden');
    document.getElementById('result-content').innerHTML = '';
  });
});