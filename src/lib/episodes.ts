export interface Episode {
  path: string;
  title: string;
  sub: string;
  cta: string;
  finale?: boolean;
}

export const EPISODES: Episode[] = [
  { path: '/casting-call',  title: 'Casting Call',    sub: 'Audition for your own season',           cta: 'Start the audition' },
  { path: '/home',          title: 'Now Showing',     sub: 'Tonight\u2019s episode drops',           cta: 'Roll the tape' },
  { path: '/act-map',       title: 'The Act Map',     sub: 'Chart the whole season',                 cta: 'Open the map' },
  { path: '/play',          title: 'The Player',      sub: 'Tonight\u2019s scene in session',        cta: 'Play the scene' },
  { path: '/mazel',         title: 'Mazel',           sub: 'Andy drops the good bomb',               cta: 'Take a bow' },
  { path: '/jackhole',      title: 'Jackhole',        sub: 'Andy drops the bad bomb',                cta: 'Face it' },
  { path: '/recap',         title: 'That\u2019s a Wrap', sub: 'The episode recap',                   cta: 'Read the recap' },
  { path: '/reunion',       title: 'The Reunion',     sub: 'Domain-wide scorecard',                  cta: 'Take your seat' },
  { path: '/rawt-in-hail',  title: 'Rawt in Hail',    sub: 'Streak-3 thunderclap',                   cta: 'Feel the lightning' },
  { path: '/streak-break',  title: 'Streak Break',    sub: 'And\u2026 cut. Lisa\u2019s got a save.',cta: 'Face the break' },
  { path: '/after-show',    title: 'After Show',      sub: 'Lisa in your DMs',                       cta: 'Text Lisa' },
  { path: '/spoiler',       title: 'Spoiler Alert',   sub: 'The 21-day runway',                      cta: 'Peek at the plan' },
  { path: '/finale',        title: 'Series Finale',   sub: 'You passed. Go sell a house.',           cta: 'Take the crown', finale: true },
];

export function indexForPath(pathname: string): number {
  const i = EPISODES.findIndex(e => e.path === pathname);
  return i === -1 ? 0 : i;
}
