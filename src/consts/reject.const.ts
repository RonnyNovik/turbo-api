export type Reject = {
  name: string;
  position: number;
  priority: string | null;
};

export type RejectSetting = {
  name: string;
  position: number;
  hasPriorities: boolean;
  rejects: Reject[];
};

export type RejectOption = {
  name: string;
  position: number;
  hasPriorities: boolean;
  results: Reject[];
};

export type RejectPDFResult = Pick<
  RejectOption,
  'name' | 'position' | 'hasPriorities'
> & {
  results?: string;
  lowPriorityRejects?: string;
  midPriorityRejects?: string;
  highPriorityRejects?: string;
};
