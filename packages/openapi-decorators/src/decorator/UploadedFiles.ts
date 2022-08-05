import { UploadOptions } from '../decorator-options/UploadOptions';
import { getMetadataArgsStorage } from '../getMetadataArgsStorage';

/**
 * Injects all uploaded files to the controller action parameter.
 * Must be applied on a controller action parameter.
 */
export function UploadedFiles(name: string, options?: UploadOptions): Function {
  return function (object: Object, methodName: string, index: number) {
    getMetadataArgsStorage().params.push({
      type: 'files',
      object: object,
      method: methodName,
      index: index,
      name: name,
      parse: false,
      required: options?.required || false,
      extraOptions: options ? options.options : undefined,
    });
  };
}