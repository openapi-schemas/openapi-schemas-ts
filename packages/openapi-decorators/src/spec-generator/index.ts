import _merge from 'lodash/merge';
import * as oa from 'openapi3-ts';
import { MetadataStorage } from '../metadata-builder/MetadataStorage';
import { Options } from '../Options';
import { getSpec } from './generateSpec';
import { parseRoutes } from './parseMetadata';

export * from './generateSpec';
export * from './parseMetadata';
export * from './optimzeSchema';
/**
 * Convert metadata into an OpenAPI specification.
 *
 * @param storage metadata storage
 * @param options options
 * @param additionalProperties Additional OpenAPI Spec properties
 */
export function generateSpec(
  storage: MetadataStorage,
  options: Options = {},
  additionalProperties: Partial<oa.OpenAPIObject> = {}
): oa.OpenAPIObject {
  const routes = parseRoutes(storage, options);
  const spec = getSpec(routes, options, additionalProperties.components?.schemas || {});

  return _merge(spec, additionalProperties);
}