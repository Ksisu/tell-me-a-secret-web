export interface CreateSecret {
  secret: string;
  forgetAfter: number;
  readOnlyOnce: boolean;
}
