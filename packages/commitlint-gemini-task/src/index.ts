import type {
  BaseRule,
  UserConfig,
  Commit,
  RuleConfigCondition,
  Value
} from '@commitlint/types';


export const GemiTask: BaseRule<string, 'sync'> = (parsed: Commit, when?: RuleConfigCondition | undefined, value?: Value | undefined) => {
  const taskIdRegex = /\b(GEM:[A-Z]{2,3}-[0-9]+)\b/;

  if (!parsed.references.some(val => val.raw.match(taskIdRegex))) {
    return [
      when === 'always' ? value : false,
      `Subject must include a task ID from Countersoft Gemini, prefixed with "GEM-", followed by 2-3 characters, a hyphen, and then numbers, such as GEM-INT-35707 or GEM-PL-35698`,
    ];
  }

  return [true];
};




const config: UserConfig = {
  rules: {
    'gem-task': [2, 'always', GemiTask]
  }
}

export default config;
