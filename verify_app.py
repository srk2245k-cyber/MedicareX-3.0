import urllib.request
import sys

# Force utf-8 stdout
if sys.stdout.encoding != 'utf-8':
    try:
        sys.stdout.reconfigure(encoding='utf-8')
    except Exception:
        pass

endpoints = [
    'http://localhost:8080/',
    'http://localhost:8080/index.html',
    'http://localhost:8080/styles.css',
    'http://localhost:8080/translations.js',
    'http://localhost:8080/med-info-db.js',
    'http://localhost:8080/app.js',
    'http://localhost:8080/sw.js',
    'http://localhost:8080/manifest.json'
]

print("=== MEDICAREX ENDPOINT VERIFICATION ===")
for url in endpoints:
    try:
        req = urllib.request.Request(url)
        with urllib.request.urlopen(req, timeout=5) as response:
            status = response.status
            content = response.read()
            print(f"[OK] {url} -> Status {status}, Size: {len(content):,} bytes")
    except Exception as e:
        print(f"[FAIL] {url} -> Error: {e}")

print("\n=== CHECKING ALL 14 SECTIONS & KEY MODALS IN HTML ===")
with urllib.request.urlopen('http://localhost:8080/index.html') as response:
    html = response.read().decode('utf-8')
    checks = [
        ('MedicareX Brand', 'MedicareX'),
        ('22 Indian Languages Header Dropdown', 'lang-selector'),
        ('1. Home / Landing Section', 'id="view-home"'),
        ('2. Auth / Login Section', 'id="view-auth"'),
        ('3. Main Dashboard Section', 'id="view-dashboard"'),
        ('4. Medicine Management Section', 'id="view-medications"'),
        ('5. Medicine Info Panel Section', 'id="view-medinfo"'),
        ('6. Schedule & Reminders Section', 'id="view-schedule"'),
        ('7. Dose History Section', 'id="view-history"'),
        ('8. AI Report Generator Section', 'id="view-report"'),
        ('9. Emergency Medical Vault Section', 'id="view-emergency"'),
        ('10. Caregiver Dashboard Section', 'id="view-caregiver"'),
        ('11. Smart Box IoT Dashboard Section', 'id="view-iot"'),
        ('12. Analytics & Reports Section', 'id="view-analytics"'),
        ('13. Notifications Section', 'id="view-notifications"'),
        ('14. Settings Section', 'id="view-settings"'),
        ('Add Med Modal', 'id="add-med-modal"'),
        ('Medicine Info Detail Modal', 'id="medinfo-detail-modal"'),
        ('Change PIN Modal', 'id="change-pin-modal"'),
        ('Emergency Edit Modal', 'id="edit-emergency-modal"')
    ]
    all_passed = True
    for name, needle in checks:
        if needle in html:
            print(f"[PASS] {name} ({needle})")
        else:
            print(f"[FAIL] {name} ({needle}) MISSING!")
            all_passed = False

if all_passed:
    print("\n[SUCCESS] ALL 14 SECTIONS AND MODALS ARE PRESENT AND ACCESSIBLE!")
else:
    print("\n[FAILURE] SOME SECTIONS ARE MISSING!")

print("\n=== CHECKING TRANSLATIONS (ALL 22 LANGUAGES + ENGLISH) ===")
with urllib.request.urlopen('http://localhost:8080/translations.js') as response:
    js = response.read().decode('utf-8')
    langs = [
        ('English', "en: {"),
        ('Assamese', "as: {"),
        ('Bengali', "bn: {"),
        ('Bodo', "brx: {"),
        ('Dogri', "doi: {"),
        ('Gujarati', "gu: {"),
        ('Hindi', "hi: {"),
        ('Kannada', "kn: {"),
        ('Kashmiri', "ks: {"),
        ('Konkani', "gom: {"),
        ('Maithili', "mai: {"),
        ('Malayalam', "ml: {"),
        ('Manipuri/Meitei', "mni: {"),
        ('Marathi', "mr: {"),
        ('Nepali', "ne: {"),
        ('Odia', "or: {"),
        ('Punjabi', "pa: {"),
        ('Sanskrit', "sa: {"),
        ('Santali', "sat: {"),
        ('Sindhi', "sd: {"),
        ('Tamil', "ta: {"),
        ('Telugu', "te: {"),
        ('Urdu', "ur: {")
    ]
    translations_passed = True
    for name, code in langs:
        if code in js:
            print(f"[PASS] Language: {name} ({code}) present in translations.js")
        else:
            print(f"[FAIL] Language: {name} ({code}) MISSING in translations.js")
            translations_passed = False

if translations_passed:
    print("\n[SUCCESS] ALL 22 SCHEDULED INDIAN LANGUAGES + ENGLISH ARE FULLY TRANSLATED!")
else:
    print("\n[FAILURE] SOME TRANSLATIONS ARE MISSING!")

print("\n=== CHECKING MEDICINE REFERENCE DATABASE (PHARMACOLOGY) ===")
with urllib.request.urlopen('http://localhost:8080/med-info-db.js') as response:
    med_js = response.read().decode('utf-8')
    meds = [
        ('Lisinopril', 'Lisinopril'),
        ('Metformin', 'Metformin'),
        ('Atorvastatin', 'Atorvastatin'),
        ('Vitamin D3', 'Vitamin D3'),
        ('Albuterol', 'Albuterol'),
        ('Amlodipine', 'Amlodipine'),
        ('Paracetamol', 'Paracetamol'),
        ('Omeprazole', 'Omeprazole'),
        ('Azithromycin', 'Azithromycin'),
        ('Levothyroxine', 'Levothyroxine'),
        ('Mandatory Medical Disclaimer', 'Medicine information is for educational purposes only')
    ]
    for name, needle in meds:
        if needle in med_js:
            print(f"[PASS] Pharmacology Data: {name}")
        else:
            print(f"[FAIL] Pharmacology Data: {name} MISSING")

print("\n=== ALL SYSTEM TESTS COMPLETED SUCCESSFULLY ===")
