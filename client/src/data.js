import Select, {yarOptionTypeBase } from 'react-select';

export const horses: OptionTypeBase = [
  { label: 'Tess', value: 'Tess'},
  { label: 'Squirrel', value: 'Squirrel' },
  { label: 'Ardilla', value: 'Ardilla' },
];

export const longFormValues: OptionsType = [
  { label: 'foo@foo@foo@foo@test@test.com', value: 'silly' },
  {
    label: 'foo@foo@test@test@test@test@test@foo@test@foo.com',
    value: 'even sillier',
  },
  {
    label:
      'foo@foo@test@test@test@test@test@foo@test@foo.comfoo@foo@test@test@test@test@test@foo@test@foo.comfoo@foo@test@test@test@test@test@foo@test@foo.comfoo@foo@test@test@test@test@test@foo@test@foo.com',
    value: 'silliest',
  },
];
