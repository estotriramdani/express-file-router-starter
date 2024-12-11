export const GUEST_USER = {
  id: 'cm3y92abd000g0cmk1jb8f7iy',
  role_name: 'GUEST',
  role_level: 99,
  createdAt: '2024-11-26 16:28:59.000',
  updatedAt: '2024-11-26 16:28:59.000',
};

export const roles = Object.freeze({
  GUEST: 'GUEST',
  MANAGER: 'MANAGER',
  VISITOR: 'VISITOR',
  OPERATOR: 'OPERATOR',
  ADMIN: 'ADMIN',
});

export const mappingFactoryLineTableau = {
  CAN: {
    name: 'Line CAN',
    slug: 'line-can',
  },
  SACHET: {
    name: 'Line SACHET',
    slug: 'line-sachet',
  },
  'OC 4': {
    name: 'Line AL4',
    slug: 'line-al4',
  },
  'OC 3': {
    name: 'Line OC3',
    slug: 'line-oc3',
  },
  OHOT: {
    name: 'Line PET 2',
    slug: 'line-pet2',
  },
  'GLASS BOTTLE': {
    name: 'Line Glass Bottle',
    slug: 'line-glass-bottle',
  },
};

export const mappingFactoryLineDF = {
  CAN: {
    name: 'Line CAN',
    slug: 'line-can',
  },
  ENMIX: {
    name: 'Line ENMIX',
    slug: 'line-enmix',
  },
  'OC-3': {
    name: 'Line OC3',
    slug: 'line-oc3',
  },
  'PET-2': {
    name: 'Line PET2',
    slug: 'line-pet2',
  },
  SACHET: {
    name: 'Line SACHET',
    slug: 'line-sachet',
  },
  GBL: {
    name: 'Line Glass Bottle',
    slug: 'line-glass-bottle',
  },
  'AL-4': {
    name: 'Line AL4',
    slug: 'line-al4',
  },
};

export const allLines: { name: string; slug: string }[] = [
  { name: 'Line CAN', slug: 'line-can' },
  { name: 'Line SACHET', slug: 'line-sachet' },
  { name: 'Line AL4', slug: 'line-al4' },
  { name: 'Line OC3', slug: 'line-oc3' },
  { name: 'Line PET 2', slug: 'line-pet2' },
  { name: 'Line Glass Bottle', slug: 'line-glass-bottle' },
];
