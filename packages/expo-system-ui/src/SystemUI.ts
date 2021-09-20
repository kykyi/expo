import { Platform } from 'expo-modules-core';
import { ColorValue } from 'react-native';

import ExpoSystemUI from './ExpoSystemUI';

const assertIsOnPlatform = (functionName: string, onlyAvailableOn: typeof Platform['OS'][]) => {
  if (!onlyAvailableOn.includes(Platform.OS)) {
    throw new Error(
      `"${functionName}" is only available on ${onlyAvailableOn.join(' or ')}! OS: ${Platform.OS}`
    );
  }
};

/**
 * Configures the device's System UI.
 *
 * On Android, the System UI contains the Navigation Bar and Status Bar, on iOS this contains the Home Indicator and Status Bar.
 */
export const SystemUI = {
  /**
   * Changes the Android Status Bar color.
   * @example
   * ```typescript
   * SystemUI.setNavigationBarColor("white");
   * ```
   */
  setStatusBarColor: (color: ColorValue): Promise<void> => {
    assertIsOnPlatform('setStatusBarColor', ['android']);
    return ExpoSystemUI.setStatusBarColor(color);
  },
  /**
   * Gets the Android Status Bar color.
   * @example
   * ```typescript
   * const color = await SystemUI.getStatusBarColor();
   * ```
   */
  getStatusBarColor: (): Promise<ColorValue> => {
    assertIsOnPlatform('getStatusBarColor', ['android']);
    return ExpoSystemUI.getStatusBarColor();
  },
  /**
   * Changes the Android Navigation Bar color.
   * @example
   * ```typescript
   * SystemUI.setNavigationBarColor("white");
   * ```
   */
  setNavigationBarColor: (color: ColorValue): Promise<void> => {
    assertIsOnPlatform('setNavigationBarColor', ['android']);
    return ExpoSystemUI.setNavigationBarColor(color);
  },
  /**
   * Gets the Android Navigation Bar color.
   * @example
   * ```typescript
   * const color = await SystemUI.getNavigationBarColor();
   * ```
   */
  getNavigationBarColor: (): Promise<ColorValue> => {
    assertIsOnPlatform('getNavigationBarColor', ['android']);
    return ExpoSystemUI.getNavigationBarColor();
  },
  /**
   * Changes the Android Navigation Bar's Divider color.
   * @example
   * ```typescript
   * SystemUI.setNavigationBarDividerColor("red");
   * ```
   */
  setNavigationBarDividerColor: (color: ColorValue): Promise<void> => {
    assertIsOnPlatform('setNavigationBarDividerColor', ['android']);
    return ExpoSystemUI.setNavigationBarDividerColor(color);
  },
  /**
   * Gets the Android Navigation Bar's Divider color.
   * @example
   * ```typescript
   * const color = await SystemUI.getNavigationBarDividerColor();
   * ```
   */
  getNavigationBarDividerColor: (): Promise<ColorValue> => {
    assertIsOnPlatform('getNavigationBarDividerColor', ['android']);
    return ExpoSystemUI.getNavigationBarDividerColor();
  },
  /**
   * Changes the Android Navigation Bar visibility.
   *
   * @example
   * ```typescript
   * SystemUI.setVisibility("hidden");
   * ```
   */
  setNavigationBarVisibility: (visibility: 'visible' | 'hidden'): Promise<void> => {
    assertIsOnPlatform('setSystemUiVisibility', ['android']);
    return ExpoSystemUI.setSystemUiVisibility(visibility);
  },
};
