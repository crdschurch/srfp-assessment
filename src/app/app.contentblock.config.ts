import { environment } from '../environments/environment';

export class AppContentBlockConfig {
  public endpoint: string = environment.crdsEndpoint;
  public categories: Array<string> = ['common', 'main'];
  constructor() {}
}
