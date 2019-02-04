export class Pie {
  name: string;
  defnum: number;
  percentage: string;
  critical: number;
  error: number;
  warning: number;
  constructor(name: string, defnum: number, percentage: string, critical: number, error: number, warning: number)  {
    this.name = name;
   this.defnum = defnum;
   this.percentage = percentage;
   this.critical = critical;
   this.error = error;
   this.warning = warning;
 }
 }
