export class Def {
  name: string;
  defnum: number;
  percentage: string;
  critical: number;
  error: number;
  warning: number;


  constructor(name: string, defnum: number, percentage: string, critical: number, error: number, warning: number)  {
       this.critical = critical;
       this.defnum = defnum;
       this.percentage = percentage;
       this.error = error;
       this.warning = warning;
       this.name = name;





 }
 }
