export class Srfp {
  public financialScore: number;
  public physicalScore: number;
  public spiritualScore: number;
  public relationalScore: number;
  public intellectualScore: number;

  constructor(
    financial_score: number,
    physical_score: number,
    spiritual_score: number,
    relational_score: number,
    intellectual_score
  ) {
    this.financialScore = financial_score;
    this.physicalScore = physical_score;
    this.spiritualScore = spiritual_score;
    this.relationalScore = relational_score;
    this.intellectualScore = intellectual_score;
  }
}
