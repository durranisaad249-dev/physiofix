import {
  Bone,
  HeartPulse,
  PersonStanding,
  Activity,
  Zap,
  Footprints,
  Brain,
  Baby,
  ShieldCheck,
  Dumbbell,
  Stethoscope,
  Sparkles,
} from 'lucide-react'

export const services = [
  {
    id: 'joint-pain',
    icon: Bone,
    title: 'Joint Pain',
    description:
      'Targeted therapy to relieve stiffness and pain in joints, restoring smooth and comfortable movement.',
  },
  {
    id: 'back-pain',
    icon: PersonStanding,
    title: 'Back Pain',
    description:
      'Comprehensive spinal care and corrective exercises to relieve chronic and acute back pain.',
  },
  {
    id: 'neck-pain',
    icon: Activity,
    title: 'Neck Pain',
    description:
      'Gentle mobilization and posture correction techniques to ease neck tension and stiffness.',
  },
  {
    id: 'knee-pain',
    icon: Footprints,
    title: 'Knee Pain',
    description:
      'Strengthening and rehabilitation programs to reduce knee pain and improve joint stability.',
  },
  {
    id: 'paralysis',
    icon: Brain,
    title: 'Paralysis (Falij)',
    description:
      'Specialized neuro-rehabilitation therapy to help regain strength and movement after paralysis.',
  },
  {
    id: 'muscle-pain',
    icon: Dumbbell,
    title: 'Muscle Pain & Weakness',
    description:
      'Customized strengthening plans to rebuild muscle tone and relieve persistent muscular pain.',
  },
  {
    id: 'sciatica',
    icon: Zap,
    title: 'Sciatica (Irq-un-Nisa)',
    description:
      'Effective relief techniques for sciatic nerve pain radiating through the lower back and legs.',
  },
  {
    id: 'facial-paralysis',
    icon: Sparkles,
    title: 'Facial Paralysis (Laqwa)',
    description:
      'Focused facial muscle rehabilitation to restore symmetry, expression and function.',
  },
  {
    id: 'bedwetting',
    icon: Baby,
    title: "Children's Bedwetting",
    description:
      'Gentle pelvic floor and bladder training therapy designed specifically for children.',
  },
  {
    id: 'ankle-pain',
    icon: ShieldCheck,
    title: 'Ankle Pain',
    description:
      'Rehabilitation and support techniques to relieve ankle pain and restore stability.',
  },
  {
    id: 'shoulder-stiffness',
    icon: HeartPulse,
    title: 'Shoulder Stiffness',
    description:
      'Mobility-focused treatment to release shoulder stiffness and restore full range of motion.',
  },
  {
    id: 'sports-injuries',
    icon: Stethoscope,
    title: 'Sports Injuries',
    description:
      'Fast, effective recovery programs to get athletes back to peak performance safely.',
  },
]

export const stats = [
  { id: 'experience', value: '3', label: 'Years Experience' },
  { id: 'patients', value: '500+', label: 'Happy Patients' },
  { id: 'recovery', value: '98%', label: 'Recovery Rate' },
  { id: 'support', value: '24/7', label: 'Support' },
]

export const whyChooseUs = [
  {
    id: 'experienced',
    title: 'Experienced Therapist',
    description:
      'Over a decade of hands-on clinical experience treating a wide range of conditions.',
  },
  {
    id: 'modern',
    title: 'Modern Techniques',
    description:
      'We use the latest evidence-based physiotherapy methods and equipment for faster recovery.',
  },
  {
    id: 'personalized',
    title: 'Personalized Treatment',
    description:
      'Every treatment plan is tailored to your specific condition, body and recovery goals.',
  },
  {
    id: 'patient-focused',
    title: 'Patient Focused Care',
    description:
      'Your comfort and progress come first — we listen, adapt and support you at every step.',
  },
]

export const reviews = [
  {
    id: 'review-1',
    name: 'Ayesha Khan',
    role: 'Back Pain Patient',
    rating: 5,
    text: 'PhysioFix completely changed my life. After months of chronic back pain, their personalized treatment plan helped me recover faster than I expected.',
  },
  {
    id: 'review-2',
    name: 'Bilal Ahmed',
    role: 'Sports Injury Patient',
    rating: 5,
    text: 'As an athlete, getting back on the field quickly mattered most. The team at PhysioFix designed a recovery plan that had me playing again in weeks.',
  },
  {
    id: 'review-3',
    name: 'Fatima Raza',
    role: 'Knee Pain Patient',
    rating: 5,
    text: 'The therapists are incredibly caring and knowledgeable. My knee pain that bothered me for years has improved dramatically. Highly recommend!',
  },
  {
    id: 'review-4',
    name: 'Usman Tariq',
    role: 'Shoulder Stiffness Patient',
    rating: 4,
    text: 'Professional, friendly and effective. The clinic environment is calming and the staff genuinely care about your recovery journey.',
  },
]

export const faqs = [
  {
    id: 'faq-1',
    question: 'How long does physiotherapy take?',
    answer:
      'Treatment duration varies depending on your condition and severity. Most patients notice improvement within 4-6 sessions, while complete recovery programs typically range from a few weeks to a few months. Your therapist will give you a personalized timeline after your first assessment.',
  },
  {
    id: 'faq-2',
    question: 'Is treatment painful?',
    answer:
      'Physiotherapy is designed to relieve pain, not cause it. You may feel mild discomfort during certain stretches or strengthening exercises, especially in the early stages, but our therapists always work within your comfort level and adjust techniques accordingly.',
  },
  {
    id: 'faq-3',
    question: 'Do I need an appointment?',
    answer:
      'Yes, we recommend booking an appointment in advance so we can allocate enough time for a thorough assessment and treatment session. You can easily book online through our Appointment page or call our clinic directly.',
  },
  {
    id: 'faq-4',
    question: 'What should I wear to my session?',
    answer:
      'Please wear loose, comfortable clothing that allows easy movement of the area being treated. Athletic wear or gym clothes generally work best.',
  },
  {
    id: 'faq-5',
    question: 'Will my insurance cover physiotherapy?',
    answer:
      'Coverage varies by provider and plan. We recommend checking with your insurance company beforehand. Our front desk team can also help you understand the documentation needed for claims.',
  },
]

export const blogPosts = [
  {
    id: 'benefits-of-physiotherapy',
    title: 'Benefits of Physiotherapy',
    excerpt:
      'Discover how physiotherapy can improve mobility, reduce pain, and enhance your overall quality of life through targeted, evidence-based treatment.',
    date: 'June 2, 2026',
    category: 'Wellness',
  },
  {
    id: 'back-pain-prevention',
    title: 'Back Pain Prevention',
    excerpt:
      'Simple daily habits and posture corrections that can help you prevent chronic back pain before it starts, recommended by our expert therapists.',
    date: 'May 18, 2026',
    category: 'Prevention',
  },
  {
    id: 'sports-injury-recovery',
    title: 'Sports Injury Recovery',
    excerpt:
      'A complete guide to safely recovering from sports injuries, including timelines, rehabilitation exercises and tips to prevent re-injury.',
    date: 'April 30, 2026',
    category: 'Recovery',
  },
]

export const treatmentOptions = [
  'Joint Pain',
  'Back Pain',
  'Neck Pain',
  'Knee Pain',
  'Paralysis (Falij)',
  'Muscle Pain and Weakness',
  'Sciatica (Irq-un-Nisa)',
  'Facial Paralysis (Laqwa)',
  "Children's Bedwetting",
  'Ankle Pain',
  'Shoulder Stiffness',
  'Sports Injuries',
  'Other',
]
