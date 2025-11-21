export type CareerType = 'ADMINISTRATIVA' | 'POLICIAL' | 'FISCAL' | 'TRIBUNAIS';

export interface Option {
  id: string;
  text: string;
  type: CareerType;
}

export interface Question {
  id: number;
  text: string;
  options: Option[];
}

export interface ResultData {
  title: string;
  description: string;
  careers: string[];
}