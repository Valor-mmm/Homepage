import Ajv, { JSONSchemaType } from 'ajv';
const ajv = new Ajv();
import skillFile from './skills.json';

export interface Skill {
  name: string;
  isKey?: boolean;
  level: number;
}

interface SkillCategory {
  key: string;
  skills: Skill[];
}

type Skills = SkillCategory[];

const skillSchema: JSONSchemaType<Skills> = {
  type: 'array',
  items: {
    type: 'object',
    required: ['key', 'skills'],
    properties: {
      key: { type: 'string' },
      skills: {
        type: 'array',
        items: {
          type: 'object',
          properties: {
            name: { type: 'string' },
            isKey: { type: 'boolean', nullable: true },
            level: { type: 'number', minimum: 0, maximum: 10 },
          },
          required: ['name', 'level'],
        },
      },
    },
  },
};

export const getSkills = (): Skills | null => {
  const validateSkillSchema = ajv.compile(skillSchema);

  if (validateSkillSchema(skillFile)) {
    return skillFile;
  } else {
    console.error(
      'Funny that you cannot uphold your own schema :D',
      validateSkillSchema.errors,
    );
    return null;
  }
};
