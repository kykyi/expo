import { ColorValue } from 'react-native';

import ExpoSystemUI from './ExpoSystemUI';

/**
 * Changes the Android Navigation Bar color.
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

/**
 * Changes the Android Navigation Bar visibility.
 *
 * @example
 * ```typescript
 * setSystemUiVisibility("hidden");
 * ```
 */
export function setSystemUiVisibility(visibility: 'visible' | 'hidden'): void {
  return ExpoSystemUI.setSystemUiVisibility(visibility);
}
