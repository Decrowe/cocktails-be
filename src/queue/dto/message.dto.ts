export const Messages = {
  getCurrent: 'getCurrent',
  queueUpdated: 'queueUpdated',
  completeOrder: 'completeOrder',
} as const;

export type Message = (typeof Messages)[keyof typeof Messages];
