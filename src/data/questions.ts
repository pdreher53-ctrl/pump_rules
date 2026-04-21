import type { Question } from '../types';

// Seed bank — 10 questions across Acts 1 & 2.
// Voice: Lisa Vanderpump teaching Elizabeth — barbed, never gentle.
// Sources: Federal Fair Housing Act §3604, GA O.C.G.A. §43-40, RESPA, standard agency law.
export const QUESTIONS: Question[] = [
  // ── ACT 1 — License Law & Agency basics
  {
    id: 'q-001',
    domain: 'License Law',
    act: 1,
    stem: 'Elizabeth gets her GA salesperson license. Who is she legally allowed to accept commission from?',
    choices: [
      { id: 'A', text: 'The buyer she\u2019s representing, directly' },
      { id: 'B', text: 'Her broker, and only her broker' },
      { id: 'C', text: 'The listing agent\u2019s brokerage, via referral check' },
      { id: 'D', text: 'Whoever wires it first' },
    ],
    correctId: 'B',
    explanation: 'A salesperson can only be paid by their sponsoring broker. Period. Money flows broker → agent. Anything else is a license violation.',
    lisaBurn: 'Darling. You are not a freelancer. You work for your broker. Cash the check from him.',
    difficulty: 1,
    source: 'GA O.C.G.A. §43-40-19',
  },
  {
    id: 'q-002',
    domain: 'License Law',
    act: 1,
    stem: 'A salesperson\u2019s license in Georgia must be renewed every:',
    choices: [
      { id: 'A', text: '1 year' },
      { id: 'B', text: '2 years' },
      { id: 'C', text: '4 years' },
      { id: 'D', text: '5 years' },
    ],
    correctId: 'C',
    explanation: 'Four years in GA. Renewal requires 36 hours of continuing education. Mark your calendar.',
    lisaBurn: 'Four years, sweetheart. Not whenever you feel like it.',
    difficulty: 1,
    source: 'GA O.C.G.A. §43-40-8',
  },
  {
    id: 'q-003',
    domain: 'Agency',
    act: 1,
    stem: 'Elizabeth lists a house. The seller tells her, in confidence, that they\u2019ll accept $40K under asking. A buyer asks Elizabeth flat-out: "Will they take less?" She must:',
    choices: [
      { id: 'A', text: 'Tell the buyer the seller will take $40K under \u2014 it\u2019s a material fact' },
      { id: 'B', text: 'Hint at it without naming the number' },
      { id: 'C', text: 'Refuse to disclose \u2014 her client\u2019s motivation is confidential' },
      { id: 'D', text: 'Disclose only after the buyer signs an offer' },
    ],
    correctId: 'C',
    explanation: 'Seller\u2019s bottom line is confidential information. Owed to the client forever, even after the deal closes. Disclosing it would be a fiduciary breach.',
    lisaBurn: 'You work for the seller. You don\u2019t hand the buyer the keys to the kingdom.',
    difficulty: 2,
    source: 'Standard agency law / GA Brokerage Relationships in Real Estate Transactions Act (BRRETA)',
  },
  {
    id: 'q-004',
    domain: 'Agency',
    act: 1,
    stem: 'Which of the following is NOT a fiduciary duty owed by an agent to their client?',
    choices: [
      { id: 'A', text: 'Loyalty' },
      { id: 'B', text: 'Obedience to lawful instructions' },
      { id: 'C', text: 'Disclosure of material facts to the other party' },
      { id: 'D', text: 'Accounting for funds' },
    ],
    correctId: 'C',
    explanation: 'OLD CAR — Obedience, Loyalty, Disclosure (to client), Confidentiality, Accounting, Reasonable care. Material-fact disclosure to the OTHER party is required by license law, not a fiduciary duty.',
    lisaBurn: 'Fiduciary duties are owed to your client. Honesty to everyone else is just \u2014 honesty.',
    difficulty: 2,
    source: 'Standard agency law',
  },
  {
    id: 'q-005',
    domain: 'License Law',
    act: 1,
    stem: 'Earnest money received from a buyer must be deposited into the broker\u2019s trust account within how many banking days under GA law?',
    choices: [
      { id: 'A', text: '1 banking day' },
      { id: 'B', text: '3 banking days' },
      { id: 'C', text: '5 banking days' },
      { id: 'D', text: '10 banking days' },
    ],
    correctId: 'A',
    explanation: 'In GA, earnest money goes into the trust account within ONE banking day after the binding agreement date. Don\u2019t hold checks. Don\u2019t commingle.',
    lisaBurn: 'One day, darling. That check sitting in your purse is a license complaint.',
    difficulty: 2,
    source: 'GREC Rule 520-1-.08',
  },

  // ── ACT 2 — Fair Housing & Disclosure
  {
    id: 'q-006',
    domain: 'Fair Housing',
    act: 2,
    stem: 'A buyer asks Elizabeth, "What\u2019s the racial makeup of this neighborhood?" Her correct response is:',
    choices: [
      { id: 'A', text: 'Give honest demographic statistics from the Census' },
      { id: 'B', text: 'Decline to discuss \u2014 it would violate Fair Housing law' },
      { id: 'C', text: 'Drive them through to "let them see for themselves"' },
      { id: 'D', text: 'Refer them to a different neighborhood that "might fit better"' },
    ],
    correctId: 'B',
    explanation: 'Steering. Even truthful demographic info, when offered by an agent, can illegally influence where a protected class buys. Decline and redirect to objective resources.',
    lisaBurn: 'You answer that question, darling, and HUD will be in your DMs by morning.',
    difficulty: 2,
    source: 'Federal Fair Housing Act §3604(a),(d) — anti-steering',
  },
  {
    id: 'q-007',
    domain: 'Fair Housing',
    act: 2,
    stem: 'Which of these is NOT a federally protected class under the Fair Housing Act?',
    choices: [
      { id: 'A', text: 'Familial status' },
      { id: 'B', text: 'Religion' },
      { id: 'C', text: 'Sexual orientation' },
      { id: 'D', text: 'National origin' },
    ],
    correctId: 'C',
    explanation: 'Federally protected: race, color, religion, sex, national origin, familial status, disability. Sexual orientation is protected by HUD policy and many states/cities, but not enumerated in the federal statute itself.',
    lisaBurn: 'Read the actual statute, sweetheart. The exam tests federal text, not the headlines.',
    difficulty: 3,
    source: 'Federal Fair Housing Act §3604',
  },
  {
    id: 'q-008',
    domain: 'Disclosure',
    act: 2,
    stem: 'A seller knows the basement floods in heavy rain. They tell Elizabeth not to mention it. The house goes under contract without disclosure. What\u2019s Elizabeth\u2019s exposure?',
    choices: [
      { id: 'A', text: 'None \u2014 she followed her client\u2019s instructions' },
      { id: 'B', text: 'Only ethical, no legal liability' },
      { id: 'C', text: 'Personal liability \u2014 known material defects must be disclosed regardless of seller instruction' },
      { id: 'D', text: 'Only liable if the buyer asked specifically about flooding' },
    ],
    correctId: 'C',
    explanation: 'Known material defects affecting value or safety must be disclosed. A client cannot instruct an agent to commit fraud. Withhold it and you\u2019re personally on the hook \u2014 license, lawsuit, both.',
    lisaBurn: 'Sweetheart. That\u2019s how you get sued. And lose the license you just paid for.',
    difficulty: 2,
    source: 'GA O.C.G.A. §10-6A-5; standard tort/agency law',
  },
  {
    id: 'q-009',
    domain: 'Contracts',
    act: 2,
    stem: 'A buyer signs an offer with a 10-day inspection contingency. On day 8, they back out citing inspection issues. The earnest money is:',
    choices: [
      { id: 'A', text: 'Forfeited to the seller \u2014 they signed a contract' },
      { id: 'B', text: 'Refundable to the buyer \u2014 they\u2019re within the contingency window' },
      { id: 'C', text: 'Split 50/50' },
      { id: 'D', text: 'Held in escrow until a court rules' },
    ],
    correctId: 'B',
    explanation: 'Refundable during the contingency window, darling. The second the window closes, that money is the seller\u2019s if the buyer walks. Write that down.',
    lisaBurn: 'Day 8 is inside the window. Hand the check back and move on.',
    difficulty: 1,
    source: 'Standard contract law / GA contingency provisions',
  },
  {
    id: 'q-010',
    domain: 'Financing',
    act: 2,
    stem: 'A homebuyer asks Elizabeth what RESPA does. She should say it:',
    choices: [
      { id: 'A', text: 'Sets maximum interest rates for federally related mortgages' },
      { id: 'B', text: 'Requires disclosure of settlement costs and prohibits kickbacks for referrals' },
      { id: 'C', text: 'Caps the amount of earnest money required at closing' },
      { id: 'D', text: 'Mandates 30-year fixed loans for first-time buyers' },
    ],
    correctId: 'B',
    explanation: 'RESPA = Real Estate Settlement Procedures Act. Two big things: settlement-cost disclosures (the Loan Estimate + Closing Disclosure) and a flat ban on kickbacks/referral fees between settlement service providers.',
    lisaBurn: 'No kickbacks, no envelope of cash from the title company. Ever.',
    difficulty: 2,
    source: '12 U.S.C. §2601 et seq. (RESPA), §8 anti-kickback',
  },
];

export function questionsForAct(act: number): Question[] {
  return QUESTIONS.filter(q => q.act === act);
}

export function nextUnseenQuestion(act: number, answeredIds: Set<string>): Question | null {
  const inAct = questionsForAct(act);
  return inAct.find(q => !answeredIds.has(q.id)) ?? null;
}

export function getQuestionById(id: string): Question | undefined {
  return QUESTIONS.find(q => q.id === id);
}
