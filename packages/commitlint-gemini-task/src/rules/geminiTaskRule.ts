import type { BaseRule } from '@commitlint/types';

export const gemiTask: BaseRule<string, 'sync'> = (parsed, when, value) => {
  // const taskIdRegex = /\b(GEM:[A-Z]{2,3}-[0-9]+)\b/;
  const taskIdRegex = /\b(GEM:=[0-9]+)\b/;
  if (!taskIdRegex.test(parsed.body ?? '')) {
    return [
      when === 'always' ? !!value : false,
      `Subject must include a task ID from Countersoft Gemini, prefixed with "GEM:", followed by 2-3 characters, a hyphen, and then numbers, such as GEM:35707 or GEM:35698`,
    ];
  }

  return [true];
};
