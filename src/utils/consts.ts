export const TOTAL_ITEM = 25;
export interface ItemType {
  idx: number,
  isGem: boolean,
  status: STATUS
}

export enum STATUS {
  DEFAULT = 'DEFAULT',
  CLICKED = 'CLICKED',
  NON_CLICKED = 'NON_CLICKED'
}