const no = 1;
const se = 1.6;
const nv = 0.625;
const ne = 0.390625;

export const Types = {
  0: {
    Name: 'Bug',
    Eff: [no, se, no, no, nv, nv, nv, nv, nv, se, no, no, no, nv, se, no, nv, no]
  },
  1: {
    Name: 'Dark',
    Eff: [no, nv, no, no, nv, nv, no, no, se, no, no, no, no, no, se, no, no, no]
  },
  2: {
    Name: 'Dragon',
    Eff: [no, no, se, no, ne, no, no, no, no, no, no, no, no, no, no, no, nv, no]
  },
  3: {
    Name: 'Electric',
    Eff: [no, no, nv, nv, no, no, no, se, no, nv, ne, no, no, no, no, no, no, se]
  },
  4: {
    Name: 'Fairy',
    Eff: [no, se, se, no, no, se, nv, no, no, no, no, no, no, nv, no, no, nv, no]
  },
  5: {
    Name: 'Fighting',
    Eff: [nv, se, no, no, nv, no, no, nv, ne, no, no, se, se, nv, nv, se, se, no]
  },
  6: {
    Name: 'Fire',
    Eff: [se, no, nv, no, no, no, nv, no, no, se, no, se, no, no, no, nv, se, nv]
  },
  7: {
    Name: 'Flying',
    Eff: [se, no, no, nv, no, se, no, no, no, se, no, no, no, no, no, nv, nv, no]
  },
  8: {
    Name: 'Ghost',
    Eff: [no, nv, no, no, no, no, no, no, se, no, no, no, ne, no, se, no, no, no]
  },
  9: {
    Name: 'Grass',
    Eff: [nv, no, nv, no, no, no, nv, nv, no, nv, se, no, no, nv, no, se, nv, se]
  },
  10: {
    Name: 'Ground',
    Eff: [nv, no, no, se, no, no, se, ne, no, nv, no, no, no, se, no, se, se, no]
  },
  11: {
    Name: 'Ice',
    Eff: [no, no, se, no, no, no, nv, se, no, se, se, nv, no, no, no, no, nv, nv]
  },
  12: {
    Name: 'Normal',
    Eff: [no, no, no, no, no, no, no, no, ne, no, no, no, no, no, no, nv, nv, no]
  },
  13: {
    Name: 'Poison',
    Eff: [no, no, no, no, se, no, no, no, nv, se, nv, no, no, nv, no, nv, ne, no]
  },
  14: {
    Name: 'Psychic',
    Eff: [no, ne, no, no, no, se, no, no, no, no, no, no, no, se, nv, no, nv, no]
  },
  15: {
    Name: 'Rock',
    Eff: [se, no, no, no, no, nv, se, se, no, no, nv, se, no, no, no, no, nv, no]
  },
  16: {
    Name: 'Steel',
    Eff: [no, no, no, nv, se, no, nv, no, no, no, no, se, no, no, no, se, nv, nv]
  },
  17: {
    Name: 'Water',
    Eff: [no, no, nv, no, no, no, se, no, no, nv, se, no, no, no, no, se, no, nv]
  },
};