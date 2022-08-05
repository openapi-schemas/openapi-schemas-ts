import { ParamOptions } from '../decorator-options/ParamOptions';
import { getMetadataArgsStorage } from '../getMetadataArgsStorage';

/**
 * Injects a request's cookie value to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
export function CookieParam(name: string, options?: ParamOptions) {
  return function (object: Object, methodName: string, index: number) {
    getMetadataArgsStorage().params.push({
      type: 'cookie',
      object: object,
      method: methodName,
      index: index,
      name: name,
      parse: options?.parse || false,
      required: options?.required || false,
      explicitType: options ? options.type : undefined,
      classTransform: options ? options.transform : undefined,
      validate: options ? options.validate : undefined,
    });
  };
}