
/**
 * MedicareX - Educational Medicine Information Database
 * Curated reference pharmacology for common medications
 * Includes therapeutic uses, mechanisms, precautions, side effects, storage, and interactions.
 * 
 * DISCLAIMER:
 * "Medicine information is for educational purposes only. Follow your prescription
 * and consult a qualified healthcare professional for medical advice."
 */

const MEDICINE_DISCLAIMER_TEXT = "Medicine information is for educational purposes only. Follow your prescription and consult a qualified healthcare professional for medical advice.";

const MEDICINE_REFERENCE_DB = [
  {
    id: "ref-lisinopril",
    name: "Lisinopril",
    genericName: "Lisinopril",
    brandNames: ["Prinivil", "Zestril", "Lipril", "Listril"],
    category: "Cardiovascular / ACE Inhibitor",
    dosageForms: ["Oral Tablets (2.5mg, 5mg, 10mg, 20mg, 40mg)"],
    commonUses: "Management of hypertension (high blood pressure), adjunctive therapy in heart failure, and improving post-myocardial infarction survival.",
    mechanismOfAction: "Competitively inhibits Angiotensin Converting Enzyme (ACE), preventing conversion of angiotensin I to the potent vasoconstrictor angiotensin II, leading to systemic vasodilation and decreased aldosterone secretion.",
    commonSideEffects: [
      "Persistent dry non-productive cough",
      "Dizziness or lightheadedness upon standing (orthostatic hypotension)",
      "Headache and mild fatigue",
      "Hyperkalemia (elevated serum potassium levels)"
    ],
    precautions: [
      "Contraindicated in pregnancy (fetal toxicity warning).",
      "Monitor serum creatinine, blood urea nitrogen (BUN), and potassium regularly.",
      "Stop use immediately and seek emergency care if swelling of face, lips, tongue, or difficulty breathing (angioedema) occurs.",
      "Avoid potassium supplements or potassium-containing salt substitutes without doctor supervision."
    ],
    storage: "Store at controlled room temperature 20°C to 25°C (68°F to 77°F). Protect from moisture, excessive heat, and direct light.",
    interactions: [
      "Potassium-sparing diuretics (spironolactone, eplerenone) & potassium supplements increase hyperkalemia risk.",
      "NSAIDs (ibuprofen, naproxen) may diminish antihypertensive efficacy and increase renal impairment risk.",
      "Lithium: May increase serum lithium concentrations and toxicity."
    ],
    source: "WHO Model List of Essential Medicines / CDSCO Pharmacopoeial Reference",
    verificationDate: "2026-05-15"
  },
  {
    id: "ref-metformin",
    name: "Metformin",
    genericName: "Metformin Hydrochloride",
    brandNames: ["Glucophage", "Glycomet", "Riomet", "Obimet"],
    category: "Antidiabetic / Biguanide",
    dosageForms: ["Immediate-Release Tablets (500mg, 850mg, 1000mg)", "Extended-Release Tablets (500mg, 750mg, 1000mg)"],
    commonUses: "First-line oral pharmacotherapy for glycemic control in adults and children with Type 2 Diabetes Mellitus.",
    mechanismOfAction: "Decreases hepatic glucose production (gluconeogenesis), reduces intestinal glucose absorption, and enhances peripheral insulin sensitivity by increasing glucose uptake and utilization in muscles.",
    commonSideEffects: [
      "Gastrointestinal upset (diarrhea, nausea, vomiting, flatulence, abdominal discomfort)",
      "Metallic taste in mouth",
      "Decreased vitamin B12 absorption with prolonged usage"
    ],
    precautions: [
      "Black box warning: Lactic acidosis risk in patients with severe renal dysfunction, acute heart failure, or severe hepatic impairment.",
      "Temporarily withhold before iodinated radiocontrast imaging procedures or major surgery.",
      "Take with meals to significantly reduce gastrointestinal side effects.",
      "Avoid excessive alcohol consumption while taking metformin."
    ],
    storage: "Store at 20°C to 25°C (68°F to 77°F) in a tightly closed, light-resistant container.",
    interactions: [
      "Iodinated contrast media: May cause renal failure and subsequent metformin accumulation.",
      "Cimetidine and cationic drugs may compete for renal tubular transport systems.",
      "Alcohol potentiates metformin's effect on lactate metabolism."
    ],
    source: "WHO Essential Medicines / American Diabetes Association (ADA) Guidelines",
    verificationDate: "2026-05-15"
  },
  {
    id: "ref-atorvastatin",
    name: "Atorvastatin",
    genericName: "Atorvastatin Calcium",
    brandNames: ["Lipitor", "Atorva", "Storvas", "Atocor"],
    category: "Lipid-Lowering / HMG-CoA Reductase Inhibitor (Statin)",
    dosageForms: ["Oral Tablets (10mg, 20mg, 40mg, 80mg)"],
    commonUses: "Reduction of elevated low-density lipoprotein (LDL) cholesterol, total cholesterol, and triglycerides; primary and secondary prevention of cardiovascular atherosclerotic disease.",
    mechanismOfAction: "Competitively inhibits 3-hydroxy-3-methylglutaryl-coenzyme A (HMG-CoA) reductase, the rate-limiting enzyme in cholesterol biosynthesis, leading to upregulation of hepatic LDL receptors and clearance of LDL particles.",
    commonSideEffects: [
      "Myalgia (mild muscle aches)",
      "Arthralgia (joint pain)",
      "Diarrhea or dyspepsia",
      "Mild transient liver transaminase elevations"
    ],
    precautions: [
      "Report unexplained muscle pain, tenderness, or weakness immediately to evaluate for rare rhabdomyolysis.",
      "Contraindicated during pregnancy and breastfeeding.",
      "Avoid consuming large quantities (>1 quart daily) of grapefruit juice which elevates plasma drug levels.",
      "Perform baseline liver function enzyme tests prior to initiation."
    ],
    storage: "Store at 20°C to 25°C (68°F to 77°F) away from moisture and direct sunlight.",
    interactions: [
      "CYP3A4 inhibitors (clarithromycin, itraconazole, protease inhibitors) significantly increase atorvastatin plasma levels.",
      "Gemfibrozil and fibrates increase risk of severe myopathy and rhabdomyolysis.",
      "Cyclosporine increases exposure to atorvastatin."
    ],
    source: "ACC/AHA Cholesterol Guidelines / WHO Essential Medicines",
    verificationDate: "2026-05-15"
  },
  {
    id: "ref-vitamin-d3",
    name: "Vitamin D3",
    genericName: "Cholecalciferol",
    brandNames: ["D-Rise", "Calcirol", "Bio-D3", "Uprise-D3"],
    category: "Nutritional Supplement / Secosteroid Hormone",
    dosageForms: ["Softgels (1000 IU, 2000 IU, 5000 IU)", "Sachets / Oral Drops (60,000 IU)"],
    commonUses: "Prevention and treatment of vitamin D deficiency, rickets, osteomalacia, osteoporosis co-therapy, and support for bone mineralization and immune health.",
    mechanismOfAction: "Undergoes hepatic hydroxylation to 25-hydroxyvitamin D [25(OH)D], followed by renal conversion to active 1,25-dihydroxyvitamin D [1,25(OH)2D3], which stimulates active intestinal calcium and phosphate absorption.",
    commonSideEffects: [
      "Well-tolerated at physiological doses",
      "Excessive mega-doses may cause hypercalcemia, nausea, thirst, or polyuria"
    ],
    precautions: [
      "Do not exceed recommended prescription dosages without monitoring serum 25(OH)D and calcium levels.",
      "Use with caution in patients with hypercalcemia, nephrolithiasis (kidney stones), or sarcoidosis.",
      "Take with dietary fat or a substantial meal to optimize intestinal absorption."
    ],
    storage: "Store below 25°C (77°F) in a cool, dry place protected from light.",
    interactions: [
      "Thiazide diuretics may decrease urinary calcium excretion, increasing hypercalcemia risk.",
      "Mineral oil, orlistat, and cholestyramine reduce intestinal absorption of fat-soluble vitamins.",
      "Phenytoin and carbamazepine induce hepatic enzymes and accelerate vitamin D metabolism."
    ],
    source: "Endocrine Society Clinical Practice Guidelines / CDSCO Food & Drug Database",
    verificationDate: "2026-05-15"
  },
  {
    id: "ref-albuterol",
    name: "Albuterol Inhaler",
    genericName: "Salbutamol / Albuterol Sulfate",
    brandNames: ["Ventolin", "ProAir", "Asthalin", "Aerolin"],
    category: "Respiratory / Short-Acting Beta-2 Adrenergic Agonist (SABA)",
    dosageForms: ["Metered-Dose Inhaler (MDI 90mcg / 100mcg per actuation)", "Nebulizer Solution (2.5mg/3mL)"],
    commonUses: "Rapid relief and prevention of acute bronchospasm in bronchial asthma, chronic obstructive pulmonary disease (COPD), and exercise-induced bronchospasm.",
    mechanismOfAction: "Selectively stimulates beta-2 adrenergic receptors in bronchial smooth muscle, activating intracellular adenyl cyclase and increasing cyclic AMP, which results in rapid bronchial smooth muscle relaxation and bronchodilation.",
    commonSideEffects: [
      "Fine skeletal muscle tremor (especially hands)",
      "Tachycardia or palpitations",
      "Transient nervousness or restlessness",
      "Headache"
    ],
    precautions: [
      "Not intended for long-term chronic controller maintenance monotherapy without an inhaled corticosteroid.",
      "Seek emergency medical evaluation if breathing symptoms worsen rapidly despite rescue actuations.",
      "Keep track of dose counter; prime canister if unused for greater than 2 weeks.",
      "Use with caution in severe cardiovascular disease, hypertension, or hyperthyroidism."
    ],
    storage: "Store between 15°C and 25°C (59°F and 77°F). Store with mouthpiece down. Protect from freezing and direct sunlight. Canister under pressure.",
    interactions: [
      "Non-selective beta-blockers (propranolol) directly antagonize bronchodilator action and may trigger severe bronchospasm.",
      "Concomitant use with diuretics may exacerbate transient hypokalemia.",
      "MAO inhibitors and tricyclic antidepressants may potentiate cardiovascular adverse effects."
    ],
    source: "Global Initiative for Asthma (GINA) / WHO Model List of Essential Medicines",
    verificationDate: "2026-05-15"
  },
  {
    id: "ref-amlodipine",
    name: "Amlodipine",
    genericName: "Amlodipine Besylate",
    brandNames: ["Norvasc", "Amlong", "Amdepin", "Stamlo"],
    category: "Cardiovascular / Dihydropyridine Calcium Channel Blocker",
    dosageForms: ["Oral Tablets (2.5mg, 5mg, 10mg)"],
    commonUses: "Management of hypertension, chronic stable angina, and vasospastic (Prinzmetal) angina.",
    mechanismOfAction: "Inhibits transmembrane influx of extracellular calcium ions into vascular smooth muscle and cardiac muscle cells, relaxing peripheral vascular smooth muscle and lowering systemic vascular resistance.",
    commonSideEffects: [
      "Peripheral edema (ankle / lower extremity swelling)",
      "Headache and facial flushing",
      "Dizziness and fatigue",
      "Palpitations"
    ],
    precautions: [
      "Peripheral edema is dose-dependent and typically responds to dosage reduction.",
      "Use with caution in patients with severe aortic stenosis or severe hepatic impairment.",
      "May cause excessive hypotension in patients with acute myocardial infarction with heart failure."
    ],
    storage: "Store at 15°C to 30°C (59°F to 86°F). Protect from moisture and light.",
    interactions: [
      "Simvastatin: Limit simvastatin dosage to 20mg daily when co-administered with amlodipine.",
      "CYP3A4 inhibitors (diltiazem, ketoconazole) increase amlodipine systemic exposure.",
      "Cyclosporine and tacrolimus blood levels may be increased."
    ],
    source: "AHA / ISH Hypertension Clinical Guidelines / CDSCO",
    verificationDate: "2026-05-15"
  },
  {
    id: "ref-paracetamol",
    name: "Paracetamol",
    genericName: "Acetaminophen / Paracetamol",
    brandNames: ["Tylenol", "Panadol", "Calpol", "Crocin", "Dolo 650"],
    category: "Analgesic & Antipyretic",
    dosageForms: ["Oral Tablets (500mg, 650mg)", "Syrup / Suspension (120mg/5mL, 250mg/5mL)", "Intravenous Infusion"],
    commonUses: "Mild-to-moderate pain management (headaches, muscular aches, toothaches, osteoarthritis) and reduction of fever.",
    mechanismOfAction: "Acts centrally to inhibit prostaglandin synthesis via peroxidase site inhibition of cyclooxygenase enzymes (COX-1/COX-2/COX-3 variant) and activates descending serotonergic pain pathways.",
    commonSideEffects: [
      "Generally well tolerated at standard therapeutic dosages",
      "Rare allergic rash, urticaria",
      "Hepatotoxicity with excessive overdose (>4000mg/day in adults)"
    ],
    precautions: [
      "Do not exceed maximum daily limits (4g in healthy adults, lower in elderly or chronic liver disease).",
      "Check ingredients of combination cough/cold medications to prevent unintentional toxic double dosing.",
      "Use with extreme caution in chronic alcoholism or severe pre-existing hepatic impairment."
    ],
    storage: "Store at room temperature 15°C to 25°C (59°F to 77°F). Protect from excessive moisture.",
    interactions: [
      "Chronic alcohol consumption significantly increases hepatic toxicity risk via CYP2E1 induction.",
      "Warfarin: High doses (>2g/day) prolonged for >1 week may slightly prolong INR.",
      "Enzyme inducers (carbamazepine, phenytoin) increase toxic metabolite NAPQI formation."
    ],
    source: "WHO Essential Medicines / British Pharmacopoeia / CDSCO",
    verificationDate: "2026-05-15"
  },
  {
    id: "ref-omeprazole",
    name: "Omeprazole",
    genericName: "Omeprazole",
    brandNames: ["Prilosec", "Omez", "Omee", "Losec"],
    category: "Gastrointestinal / Proton Pump Inhibitor (PPI)",
    dosageForms: ["Delayed-Release Capsules / Tablets (10mg, 20mg, 40mg)"],
    commonUses: "Gastroesophageal reflux disease (GERD), erosive esophagitis, duodenal/gastric ulcers, Zollinger-Ellison syndrome, and H. pylori eradication co-therapy.",
    mechanismOfAction: "Irreversibly binds to and suppresses the hydrogen-potassium adenosine triphosphatase (H+/K+ ATPase) enzyme system at the secretory surface of gastric parietal cells, blocking gastric acid secretion.",
    commonSideEffects: [
      "Headache",
      "Abdominal pain, diarrhea, nausea, constipation",
      "Flatulence"
    ],
    precautions: [
      "Take 30 to 60 minutes prior to the first meal of the day on an empty stomach.",
      "Long-term use may increase risk of hypomagnesemia, vitamin B12 deficiency, bone fractures, and Clostridioides difficile diarrhea.",
      "Do not crush or chew delayed-release capsules or enteric-coated pellets."
    ],
    storage: "Store at 20°C to 25°C (68°F to 77°F) in a moisture-tight container.",
    interactions: [
      "Clopidogrel: Omeprazole inhibits CYP2C19, reducing antiplatelet activation of clopidogrel.",
      "Methotrexate: May elevate and prolong methotrexate serum levels.",
      "Drugs requiring acidic gastric pH for absorption (ketoconazole, iron salts) show reduced efficacy."
    ],
    source: "American Gastroenterological Association (AGA) Guidelines / WHO",
    verificationDate: "2026-05-15"
  },
  {
    id: "ref-azithromycin",
    name: "Azithromycin",
    genericName: "Azithromycin Monohydrate",
    brandNames: ["Zithromax", "Azithral", "Azee", "Zady"],
    category: "Antibacterial / Macrolide (Azalide)",
    dosageForms: ["Oral Tablets (250mg, 500mg)", "Oral Suspension (100mg/5mL, 200mg/5mL)", "Intravenous (500mg)"],
    commonUses: "Bacterial infections of the respiratory tract (pneumonia, bronchitis, acute sinusitis), skin/soft tissue infections, and urogenital infections.",
    mechanismOfAction: "Reversibly binds to the 50S ribosomal subunit of susceptible microorganisms, inhibiting transpeptidation and protein synthesis.",
    commonSideEffects: [
      "Diarrhea / loose stools",
      "Nausea, vomiting, abdominal cramping",
      "Mild headache",
      "Transient alteration in taste"
    ],
    precautions: [
      "Complete the entire prescribed course even if symptoms resolve earlier to prevent antibiotic resistance.",
      "Use with caution in patients with prolonged cardiac QT interval or underlying cardiac arrhythmias.",
      "Observe for signs of Clostridioides difficile-associated colitis (severe watery diarrhea)."
    ],
    storage: "Store dry tablets and unopened powder below 30°C (86°F). Reconstituted suspension should be used within 10 days.",
    interactions: [
      "QT-prolonging drugs (amiodarone, sotalol, quinolones) increase cardiac arrhythmia risk.",
      "Antacids containing aluminum or magnesium reduce the peak serum concentration.",
      "Warfarin: Monitor prothrombin time/INR when initiating macrolides."
    ],
    source: "Infectious Diseases Society of America (IDSA) / WHO Model List",
    verificationDate: "2026-05-15"
  },
  {
    id: "ref-levothyroxine",
    name: "Levothyroxine",
    genericName: "Levothyroxine Sodium",
    brandNames: ["Synthroid", "Thyronorm", "Eltroxin", "Levoxyl"],
    category: "Endocrine / Thyroid Hormone Replacement",
    dosageForms: ["Oral Tablets (25mcg, 50mcg, 75mcg, 88mcg, 100mcg, 112mcg, 125mcg, 150mcg, 200mcg)"],
    commonUses: "Replacement therapy in primary, secondary, and tertiary hypothyroidism, and suppression of pituitary TSH secretion in euthyroid goiters.",
    mechanismOfAction: "Synthetic sodium salt of L-thyroxine (T4). Undergoes peripheral enzymatic deiodination to active triiodothyronine (T3), binding to nuclear thyroid receptors and regulating cellular metabolic rate, protein synthesis, and growth.",
    commonSideEffects: [
      "Adverse effects indicate overtreatment: tachycardia, palpitations, tremor, insomnia, nervousness, weight loss, heat intolerance."
    ],
    precautions: [
      "Take once daily in the morning on an empty stomach with a full glass of water, at least 30 to 60 minutes before breakfast.",
      "Narrow therapeutic index drug; monitor serum TSH and free T4 every 6 to 12 weeks during dose titration.",
      "Separate from calcium, iron, and soy supplements by at least 4 hours."
    ],
    storage: "Store at 20°C to 25°C (68°F to 77°F). Protect from excessive moisture and light.",
    interactions: [
      "Calcium carbonate, ferrous sulfate, and proton pump inhibitors impair levothyroxine intestinal absorption.",
      "Warfarin: Thyroid replacement increases catabolism of clotting factors, potentiating anticoagulant effects.",
      "Insulin / oral antidiabetics: Dose adjustments may be necessary upon thyroid stabilization."
    ],
    source: "American Thyroid Association (ATA) / Endocrine Society Clinical Guidelines",
    verificationDate: "2026-05-15"
  }
];

/**
 * Searches the reference database by exact or fuzzy name match
 * @param {string} medicineName 
 * @returns {object|null}
 */
function findMedicineReferenceInfo(medicineName) {
  if (!medicineName) return null;
  const q = medicineName.trim().toLowerCase();

  // 1. Direct match
  let match = MEDICINE_REFERENCE_DB.find(m => 
    m.name.toLowerCase() === q ||
    m.genericName.toLowerCase() === q ||
    m.brandNames.some(b => b.toLowerCase() === q)
  );
  if (match) return match;

  // 2. Substring match
  match = MEDICINE_REFERENCE_DB.find(m => 
    q.includes(m.name.toLowerCase()) ||
    m.name.toLowerCase().includes(q) ||
    m.genericName.toLowerCase().includes(q) ||
    m.brandNames.some(b => q.includes(b.toLowerCase()) || b.toLowerCase().includes(q))
  );

  return match || null;
}
