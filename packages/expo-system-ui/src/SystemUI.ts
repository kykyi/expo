import ExpoSystemUI from './ExpoSystemUI';
import { SampleOptions } from './SystemUI.types';


export * from './SystemUI.types';

/**
 * Great method that does a lot great stuff.
 * @param options specifies what great stuff you really want.
 *
 * @example
 * ```typescript
 * const result = await someGreatMethodAsync({ someOption: 'awesome' });
 * ```
 */
export async function someGreatMethodAsync(options: SampleOptions) {
  return await ExpoSystemUI.someGreatMethodAsync(options);
}
