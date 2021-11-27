export type tLevel = 'ALERTA' | 'REACCIONA' | 'URGENTE';
export type tViolences = {
  id: number;
  type: string;
  level: tLevel;
  name: string;
  video: string;
  image: string;
  description: string;
}