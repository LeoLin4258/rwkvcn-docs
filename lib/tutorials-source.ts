import { tutorials } from '@/.source';
import { loader } from 'fumadocs-core/source';

export const source = loader({
  baseUrl: '/tutorials',
  source: tutorials.toFumadocsSource(),
}); 