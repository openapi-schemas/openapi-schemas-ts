import { ParamOptions } from '../decorator-options/ParamOptions';
import { getMetadataArgsStorage } from '../getMetadataArgsStorage';

/**
 * Injects all request's route parameters to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
export function Params(options?: ParamOptions): Function {
  return function (object: Object, methodName: string, index: number) {
    getMetadataArgsStorage().params.push({
      type: 'params',
      object: object,
      method: methodName,
      index: index,
      parse: options?.parse || false,
      required: options?.required || false,
      classTransform: options ? options.transform : undefined,
      explicitType: options ? options.type : undefined,
      validate: options ? options.validate : undefined,
    });
  };
}