import { environment } from '../environments/environment';
import { IContentBlockConfig, ContentBlockConfig } from 'crds-ng2-content-block';

export function contentBlockFactory() {
  const contentBlockConfig: ContentBlockConfig = new ContentBlockConfig(environment.crdsEndpoint, ['common', 'main']);
  return contentBlockConfig;
}
