import type { Plugin } from '@commitlint/types';
import { gemiTask } from './rules/geminiTaskRule';

const config: Plugin = {
  rules: {
    'gemini-task-rule': gemiTask,
  },
};

export default config;
