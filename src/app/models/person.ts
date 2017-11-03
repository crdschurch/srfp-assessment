import { Srfp } from './srfp';
export class Person {
  public contactId: number;
  public firstName: string;
  public lastName: string;
  public srfp: Srfp;

  constructor(contact_id: number, first_name: string, last_name: string, srfp_score: Srfp) {
    this.contactId = contact_id;
    this.firstName = first_name;
    this.lastName = last_name;
    this.srfp = srfp_score;
  }
}
