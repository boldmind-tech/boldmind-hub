// lib/config/educenter.config.ts
export const EDUCENTER = {
  product: {
    name: "EduCenter",
    url: "https://educenter.com.ng",
    tagline: "Practical learning that turns attention into skills, credentials, and income.",
  },
  flags: {
    jambSeason: false,          // off-season now
    showStudyHub: true,
    showDigitalBusinessSchool: true,
    showAiSkillsLab: true,
  },
  tracks: [
    {
      code: "STUDY-HUB",
      title: "Study Hub (Evergreen)",
      outcome: "Exam mastery, CBT confidence, study discipline",
      ctas: [
        { label: "Start Free Lessons", href: "https://educenter.com.ng/guides?utm_source=hub&utm_medium=organic&utm_campaign=studyhub" },
      ],
    },
    {
      code: "DBS",
      title: "Digital Business School",
      outcome: "Content, funnels, automation that convert",
      ctas: [
        { label: "See Course Tracks", href: "https://educenter.com.ng/dbs?utm_source=hub&utm_medium=organic&utm_campaign=dbs_launch" },
      ],
    },
    {
      code: "AI-LAB",
      title: "AI Skills Lab",
      outcome: "Practical AI for creators & SMEs (Pictory, prompts, WhatsApp)",
      ctas: [
        { label: "Join AI Lab", href: "https://educenter.com.ng/ai-lab?utm_source=hub&utm_medium=organic&utm_campaign=ai_lab" },
      ],
    },
  ],
  pricing: {
    plans: [
      { code: "EDU-MONTH", name: "EduCenter Monthly", priceNGN: 2500, interval: "monthly", paystackProductId: "psk_EDU_MONTH" },
      { code: "DBS-BUNDLE", name: "DBS Bundle", priceNGN: 15000, interval: "one_time", paystackProductId: "psk_DBS_BUNDLE" },
      { code: "AI-LAB-PASS", name: "AI Lab Pass", priceNGN: 10000, interval: "one_time", paystackProductId: "psk_AI_LAB" },
    ],
    currency: "NGN",
  },
  funnels: [
    {
      name: "AG→EDU",
      from: "AmeboGist",
      to: "EduCenter",
      successEvent: "EDU_SIGNUP",
      utm: { source: "amebogist", medium: "organic", campaign: "ag_to_edu" },
    },
    {
      name: "EDU→PAI",
      from: "EduCenter",
      to: "PlanAI",
      successEvent: "PLANAI_TRIAL",
      utm: { source: "educenter", medium: "email", campaign: "edu_to_pai" },
    },
  ],
  analytics: {
    events: [
      "EDU_SIGNUP",
      "EDU_CONVERTED",
      "DBS_PURCHASED",
      "AI_LAB_PURCHASED",
      "EDU_TO_PLANAI_CLICK",
    ],
  },
} as const;
