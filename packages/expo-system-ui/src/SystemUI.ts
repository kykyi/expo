import { ColorValue } from 'react-native';

import ExpoSystemUI from './ExpoSystemUI';

/**
 * Changes the Android Navigation Bar Color.
 *
 * @example
 * ```typescript
 * setNavigationBarColor("white");
 * ```
 */
export function setNavigationBarColor(color: ColorValue): void {
  // TODO: Do we need to call processColor?
  // const colorString = processColor(color)
  return ExpoSystemUI.setNavigationBarColor(color);
}
