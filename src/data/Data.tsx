type Page = 'Home' | 'Schemes' | 'Services' | 'Certificates' | 'Help Desk'

export const NAV_LINKS: Page[] = ['Home', 'Schemes', 'Services', 'Certificates', 'Help Desk']

export const STATS = [
  { value: '5.5L+', label: 'CSC Centres', icon: '🏢' },
  { value: '800+', label: 'Government Services', icon: '⚡' },
  { value: '38Cr+', label: 'Citizens Served', icon: '👥' },
  { value: '36', label: 'States & UTs Covered', icon: '🗺️' },
]

export const CATEGORIES = [
  { id: 'agriculture', label: 'Agriculture', icon: '🌾', count: 48, color: '#157a3c', bg: '#e8f5ee' },
  { id: 'health', label: 'Health', icon: '🏥', count: 62, color: '#0d6efd', bg: '#e8f0ff' },
  { id: 'education', label: 'Education', icon: '📚', count: 35, color: '#7c3aed', bg: '#f3eeff' },
  { id: 'banking', label: 'Banking & Finance', icon: '🏦', count: 29, color: '#0f2d5e', bg: '#e8eef8' },
  { id: 'social', label: 'Social Welfare', icon: '🤝', count: 74, color: '#e8860a', bg: '#fef3e2' },
  { id: 'housing', label: 'Housing', icon: '🏠', count: 18, color: '#dc2626', bg: '#fff0f0' },
  { id: 'employment', label: 'Employment', icon: '💼', count: 41, color: '#0891b2', bg: '#e0f7fa' },
  { id: 'women', label: 'Women & Child', icon: '👩‍👧', count: 33, color: '#be185d', bg: '#fce7f3' },
]

export const SCHEMES = [
  {
    id: 1, title: 'PM Kisan Samman Nidhi', ministry: 'Ministry of Agriculture',
    tag: 'Agriculture', tagColor: '#157a3c', tagBg: '#e8f5ee',
    benefit: '₹6,000/year', beneficiaries: '12.5 Cr farmers',
    description: 'Direct income support to small and marginal farmer families holding cultivable land up to 2 hectares.',
    status: 'Active',
  },
  {
    id: 2, title: 'Ayushman Bharat PM-JAY', ministry: 'Ministry of Health',
    tag: 'Health', tagColor: '#0d6efd', tagBg: '#e8f0ff',
    benefit: '₹5L cover/year', beneficiaries: '50 Cr beneficiaries',
    description: "World's largest health assurance scheme providing ₹5 lakh per family per year for secondary and tertiary hospitalisation.",
    status: 'Active',
  },
  {
    id: 3, title: 'PM Awas Yojana (Urban)', ministry: 'MoHUA',
    tag: 'Housing', tagColor: '#dc2626', tagBg: '#fff0f0',
    benefit: 'Subsidy up to ₹2.67L', beneficiaries: '1.18 Cr houses',
    description: 'Provides affordable housing to the urban poor with a focus on slum rehabilitation and credit-linked subsidy.',
    status: 'Active',
  },
  {
    id: 4, title: 'Pradhan Mantri Mudra Yojana', ministry: 'Ministry of Finance',
    tag: 'Banking & Finance', tagColor: '#0f2d5e', tagBg: '#e8eef8',
    benefit: 'Loans up to ₹10L', beneficiaries: '43 Cr accounts',
    description: 'Collateral-free loans to non-corporate, non-farm small/micro enterprises under Shishu, Kishore, and Tarun categories.',
    status: 'Active',
  },
  {
    id: 5, title: 'Sukanya Samriddhi Yojana', ministry: 'Ministry of Finance',
    tag: 'Women & Child', tagColor: '#be185d', tagBg: '#fce7f3',
    benefit: '8.2% interest p.a.', beneficiaries: '3.2 Cr accounts',
    description: "Small savings scheme for the girl child providing a high interest rate and tax benefits under Section 80C.",
    status: 'Active',
  },
  {
    id: 6, title: 'National Scholarship Portal', ministry: 'MoE & Minority Affairs',
    tag: 'Education', tagColor: '#7c3aed', tagBg: '#f3eeff',
    benefit: '₹500–₹20,000/month', beneficiaries: '1.5 Cr students',
    description: 'One-stop solution for students to apply for pre-matric, post-matric, and merit-cum-means scholarships.',
    status: 'Active',
  },
  {
    id: 7, title: 'PM Fasal Bima Yojana', ministry: 'Ministry of Agriculture',
    tag: 'Agriculture', tagColor: '#157a3c', tagBg: '#e8f5ee',
    benefit: 'Crop loss coverage', beneficiaries: '5.6 Cr farmers',
    description: 'Comprehensive crop insurance scheme covering pre-sowing to post-harvest losses due to natural calamities.',
    status: 'Active',
  },
  {
    id: 8, title: 'Atal Pension Yojana', ministry: 'Ministry of Finance',
    tag: 'Banking & Finance', tagColor: '#0f2d5e', tagBg: '#e8eef8',
    benefit: '₹1,000–5,000/month', beneficiaries: '6.2 Cr subscribers',
    description: 'Pension scheme for unorganised sector workers guaranteeing a fixed monthly pension after age 60.',
    status: 'Active',
  },
  {
    id: 9, title: 'PM Ujjwala Yojana', ministry: 'Ministry of Petroleum',
    tag: 'Social Welfare', tagColor: '#e8860a', tagBg: '#fef3e2',
    benefit: 'Free LPG connection', beneficiaries: '9.6 Cr households',
    description: 'Provides LPG connections to women from BPL households to replace harmful cooking fuels.',
    status: 'Active',
  },
]

export const ALL_SERVICES = [
  { label: 'Aadhaar Update', icon: '🪪', color: '#0f2d5e', category: 'Identity', time: '3–5 days', fee: 'Free' },
  { label: 'PAN Card Apply', icon: '🟧', color: '#e8860a', category: 'Identity', time: '7–15 days', fee: '₹107' },
  { label: 'Passport Services', icon: '📗', color: '#157a3c', category: 'Travel', time: '30–45 days', fee: '₹1,500' },
  { label: 'Driving Licence', icon: '🚗', color: '#0d6efd', category: 'Transport', time: '10–14 days', fee: '₹200' },
  { label: 'Ration Card', icon: '🌾', color: '#157a3c', category: 'Welfare', time: '15–30 days', fee: 'Free' },
  { label: 'Birth Certificate', icon: '👶', color: '#7c3aed', category: 'Civil', time: '3–7 days', fee: '₹50' },
  { label: 'Income Certificate', icon: '📋', color: '#0891b2', category: 'Civil', time: '7–10 days', fee: '₹20' },
  { label: 'Land Records', icon: '🗺️', color: '#dc2626', category: 'Revenue', time: 'Instant', fee: '₹30' },
  { label: 'Utility Bill Pay', icon: '💡', color: '#e8860a', category: 'Finance', time: 'Instant', fee: 'Free' },
  { label: 'Insurance (PMJJBY)', icon: '🛡️', color: '#0f2d5e', category: 'Finance', time: '1–2 days', fee: '₹436/yr' },
  { label: 'Pension (NPS)', icon: '👴', color: '#7c3aed', category: 'Finance', time: '7 days', fee: '₹500 min' },
  { label: 'GST Registration', icon: '🏪', color: '#157a3c', category: 'Business', time: '3–7 days', fee: 'Free' },
  { label: 'Voter ID Card', icon: '🗳️', color: '#0d6efd', category: 'Identity', time: '30 days', fee: 'Free' },
  { label: 'Caste Certificate', icon: '📜', color: '#be185d', category: 'Civil', time: '7–15 days', fee: '₹20' },
  { label: 'Death Certificate', icon: '📄', color: '#6b7a8d', category: 'Civil', time: '3–7 days', fee: '₹50' },
  { label: 'Trade Licence', icon: '🏬', color: '#0891b2', category: 'Business', time: '15–30 days', fee: '₹500' },
]

export const CERTIFICATES = [
  {
    title: 'Income Certificate', icon: '📋', ministry: 'State Revenue Dept.',
    time: '7–10 days', fee: '₹20', docs: ['Aadhaar Card', 'Ration Card', 'Self-declaration form'],
    desc: 'Required for government scheme eligibility, scholarships, and fee waivers. Issued by the Tehsildar/SDM.',
    color: '#0891b2', bg: '#e0f7fa',
  },
  {
    title: 'Caste Certificate', icon: '📜', ministry: 'State Revenue Dept.',
    time: '7–15 days', fee: '₹20', docs: ['Aadhaar Card', 'Father\'s caste proof', 'Ration Card'],
    desc: 'Issued to SC/ST/OBC citizens for availing reservations in education and employment.',
    color: '#be185d', bg: '#fce7f3',
  },
  {
    title: 'Domicile Certificate', icon: '🏠', ministry: 'State Revenue Dept.',
    time: '10–15 days', fee: '₹50', docs: ['Aadhaar Card', 'Proof of residence (3+ years)', 'Birth certificate'],
    desc: 'Proves state residency for state government jobs, education reservations, and local scheme benefits.',
    color: '#dc2626', bg: '#fff0f0',
  },
  {
    title: 'Birth Certificate', icon: '👶', ministry: 'Municipal Corp / Gram Panchayat',
    time: '3–7 days', fee: '₹50', docs: ['Hospital discharge slip or birth record', 'Parents\' Aadhaar', 'Marriage certificate'],
    desc: 'Essential document for school admission, passport, Aadhaar, and all future government registrations.',
    color: '#7c3aed', bg: '#f3eeff',
  },
  {
    title: 'Death Certificate', icon: '📄', ministry: 'Municipal Corp / Gram Panchayat',
    time: '3–7 days', fee: '₹50', docs: ['Hospital death record or cremation receipt', 'Deceased\'s Aadhaar', 'Applicant Aadhaar'],
    desc: 'Required for succession, insurance claims, property transfer, and pension stoppage.',
    color: '#6b7a8d', bg: '#f0f4f9',
  },
  {
    title: 'Disability Certificate', icon: '♿', ministry: 'District Medical Board',
    time: '15–30 days', fee: 'Free', docs: ['Medical reports', 'Aadhaar Card', 'Passport photos'],
    desc: 'Certifies disability percentage for availing RPWD Act 2016 benefits, concessions, and reservations.',
    color: '#157a3c', bg: '#e8f5ee',
  },
  {
    title: 'Marriage Certificate', icon: '💍', ministry: 'Marriage Registrar',
    time: '15–30 days', fee: '₹100–500', docs: ['Both spouses\' Aadhaar', 'Wedding invitation / photo', '2 witnesses\' ID'],
    desc: 'Legal proof of marriage for joint bank accounts, visa applications, insurance, and property rights.',
    color: '#e8860a', bg: '#fef3e2',
  },
  {
    title: 'Character Certificate', icon: '✅', ministry: 'District Police / SDM',
    time: '7–10 days', fee: '₹50', docs: ['Aadhaar Card', 'Application form', 'No-criminal record declaration'],
    desc: 'Required for government jobs, higher education admissions, and international visa applications.',
    color: '#0f2d5e', bg: '#e8eef8',
  },
]

export const NEWS = [
  { date: '15 Jul 2026', title: 'PM Kisan 19th Instalment Released — ₹2,000 credited to 9.4 Cr farmers', type: 'Update' },
  { date: '12 Jul 2026', title: 'New feature: Track application status via Aadhaar in real time', type: 'New Feature' },
  { date: '08 Jul 2026', title: 'Ayushman Bharat extended: 70+ senior citizens now eligible regardless of income', type: 'Policy' },
  { date: '01 Jul 2026', title: 'CSC centres now authorised to process Voter ID corrections and address changes', type: 'Update' },
]

export const FAQS = [
  { q: 'What is a Common Service Centre (CSC)?', a: 'CSCs are government-mandated service outlets that deliver digital and financial services to rural and semi-urban India. Operated by Village Level Entrepreneurs (VLEs), they serve as access points for 800+ government services.' },
  { q: 'How do I find my nearest CSC?', a: 'Use the CSC Locator on this page, call helpline 1800-121-3468, or visit locator.csccloud.in. Enter your pincode or use GPS to find the nearest centre with hours and services offered.' },
  { q: 'What documents are generally required?', a: 'Most services require Aadhaar card, a recent passport-size photograph, and a valid bank account. Specific schemes may additionally need income proof, land records, or ration card. Check the document list on each scheme page.' },
  { q: 'Are CSC services free of charge?', a: 'Many services like PM Kisan registration and Aadhaar updating are free. Others carry a nominal service fee (typically ₹20–₹200). The fee schedule is publicly available at the centre.' },
  { q: 'How can I track my application status?', a: 'Visit the "Application Status" section on this portal, enter your application reference number and registered mobile, and view real-time status updates. You\'ll also receive SMS notifications.' },
  { q: 'Can I apply for schemes online without visiting a CSC?', a: 'Some schemes allow direct online application at their official portals (e.g., pmkisan.gov.in, pmjay.gov.in). CSC centres provide assisted digital access for citizens who need help navigating these portals.' },
]