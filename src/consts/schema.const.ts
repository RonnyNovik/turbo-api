export const SchemaName = {
  INSPECTION: 'Inspection',
  SETTINGS: 'Settings',
  USERS: 'Users',
  SYSTEMS: 'Systems',
} as const;

export type SchemaNameType = (typeof SchemaName)[keyof typeof SchemaName];
