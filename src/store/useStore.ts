import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import type { Archetype, AnswerRecord, MistakeRecord, ChoiceId, Question } from '../types';

interface State {
  // onboarding
  name: string;
  examDate: string | null; // ISO date
  archetype: Archetype | null;
  onboarded: boolean;

  // progress
  currentAct: number;
  streak: number;
  bestStreak: number;
  bravoPoints: number;
  answers: AnswerRecord[];
  mistakes: MistakeRecord[];
  seenScreens: string[];

  // last result (for Mazel/Jackhole/Recap screens)
  lastQuestionId: string | null;
  lastWasCorrect: boolean | null;
  lastPickedId: ChoiceId | null;

  // session
  sessionAnswered: number; // questions in current session
  sessionTarget: number;   // questions before triggering recap
}

interface Actions {
  setOnboarding: (p: { name?: string; examDate?: string; archetype?: Archetype }) => void;
  finishOnboarding: () => void;
  resetAll: () => void;

  recordAnswer: (q: Question, picked: ChoiceId) => { correct: boolean; tripleStreak: boolean; brokeStreak: boolean };
  startSession: (target?: number) => void;
  endSession: () => void;
  markScreenSeen: (path: string) => void;
  unlockNextAct: () => void;
}

const INITIAL: State = {
  name: '',
  examDate: null,
  archetype: null,
  onboarded: false,
  currentAct: 1,
  streak: 0,
  bestStreak: 0,
  bravoPoints: 0,
  answers: [],
  mistakes: [],
  seenScreens: [],
  lastQuestionId: null,
  lastWasCorrect: null,
  lastPickedId: null,
  sessionAnswered: 0,
  sessionTarget: 5,
};

export const useStore = create<State & Actions>()(
  persist(
    (set, get) => ({
      ...INITIAL,

      setOnboarding: (p) => set((s) => ({
        name: p.name ?? s.name,
        examDate: p.examDate ?? s.examDate,
        archetype: p.archetype ?? s.archetype,
      })),

      finishOnboarding: () => set({ onboarded: true }),

      resetAll: () => set({ ...INITIAL }),

      recordAnswer: (q, picked) => {
        const correct = picked === q.correctId;
        const prevStreak = get().streak;
        const newStreak = correct ? prevStreak + 1 : 0;
        const tripleStreak = correct && newStreak > 0 && newStreak % 3 === 0;
        const brokeStreak = !correct && prevStreak >= 2;

        set((s) => ({
          streak: newStreak,
          bestStreak: Math.max(s.bestStreak, newStreak),
          bravoPoints: s.bravoPoints + (correct ? 10 + prevStreak * 5 : 0),
          answers: [...s.answers, { questionId: q.id, correct, pickedId: picked, ts: Date.now() }],
          mistakes: correct ? s.mistakes : [...s.mistakes, { questionId: q.id, domain: q.domain, pickedId: picked, correctId: q.correctId, ts: Date.now() }],
          lastQuestionId: q.id,
          lastWasCorrect: correct,
          lastPickedId: picked,
          sessionAnswered: s.sessionAnswered + 1,
        }));

        return { correct, tripleStreak, brokeStreak };
      },

      startSession: (target = 5) => set({ sessionAnswered: 0, sessionTarget: target }),
      endSession: () => set({ sessionAnswered: 0 }),

      markScreenSeen: (path) => set((s) => s.seenScreens.includes(path) ? s : { seenScreens: [...s.seenScreens, path] }),

      unlockNextAct: () => set((s) => ({ currentAct: s.currentAct + 1 })),
    }),
    {
      name: 'pump-rules-state',
      storage: createJSONStorage(() => localStorage),
    }
  )
);
