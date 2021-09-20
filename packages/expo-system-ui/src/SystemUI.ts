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
 * * "light": Light Mode
 * * "dark": Dark/Night Mode
 * * "auto": Follow System mode, automatically switch to dark mode.
 * * "unspecified": Default
 */
export type Appearance = 'light' | 'dark' | 'auto' | 'unspecified';

/**
 * Configures the device's System UI.
 *
 * On Android, the System UI contains the Navigation Bar and Status Bar, on iOS this contains the Home Indicator and Status Bar.
 */
export const SystemUI = {
  /**
   * Changes the Android Status Bar's background color.
   * @example
   * ```typescript
   * SystemUI.setStatusBarBackgroundColor("white");
   * ```
   */
  setStatusBarBackgroundColor: (color: ColorValue): Promise<void> => {
    assertIsOnPlatform('setStatusBarBackgroundColor', ['android']);
    return ExpoSystemUI.setStatusBarBackgroundColor(color);
  },
  /**
   * Gets the Android Status Bar's background color.
   * @example
   * ```typescript
   * const color = await SystemUI.getStatusBarBackgroundColor();
   * ```
   */
  getStatusBarBackgroundColor: (): Promise<ColorValue> => {
    assertIsOnPlatform('getStatusBarBackgroundColor', ['android']);
    return ExpoSystemUI.getStatusBarBackgroundColor();
  },

  /**
   * Changes the Android Navigation Bar's background color.
   * @example
   * ```typescript
   * SystemUI.setNavigationBarBackgroundColor("white");
   * ```
   */
  setNavigationBarBackgroundColor: (color: ColorValue): Promise<void> => {
    assertIsOnPlatform('setNavigationBarBackgroundColor', ['android']);
    return ExpoSystemUI.setNavigationBarBackgroundColor(color);
  },
  /**
   * Gets the Android Navigation Bar's background color.
   * @example
   * ```typescript
   * const color = await SystemUI.getNavigationBarBackgroundColor();
   * ```
   */
  getNavigationBarBackgroundColor: (): Promise<ColorValue> => {
    assertIsOnPlatform('getNavigationBarBackgroundColor', ['android']);
    return ExpoSystemUI.getNavigationBarBackgroundColor();
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
   * Changes the Android Navigation Bar's visibility.
   *
   * @example
   * ```typescript
   * SystemUI.setNavigationBarVisibility("hidden");
   * ```
   */
  setNavigationBarVisibility: (visibility: 'visible' | 'hidden'): Promise<void> => {
    assertIsOnPlatform('setNavigationBarVisibility', ['android']);
    return ExpoSystemUI.setNavigationBarVisibility(visibility);
  },

  /**
   * Changes the Android Status Bar's visibility.
   *
   * @example
   * ```typescript
   * SystemUI.setStatusBarVisibility("hidden");
   * ```
   */
  setStatusBarVisibility: (visibility: 'visible' | 'hidden'): Promise<void> => {
    assertIsOnPlatform('setStatusBarVisibility', ['android']);
    return ExpoSystemUI.setStatusBarVisibility(visibility);
  },

  /**
   * Changes the Android Navigation Bar's foreground style.
   *
   * @example
   * ```typescript
   * SystemUI.setNavigationBarForegroundStyle("light");
   * ```
   */
  setNavigationBarForegroundStyle: (style: 'light' | 'dark'): Promise<void> => {
    assertIsOnPlatform('setNavigationBarForegroundStyle', ['android']);
    return ExpoSystemUI.setNavigationBarForegroundStyle(style);
  },
  /**
   * Gets the Android Navigation Bar's foreground style.
   *
   * @example
   * ```typescript
   * const style = await SystemUI.getNavigationBarForegroundStyle();
   * ```
   */
  getNavigationBarForegroundStyle: (): Promise<'light' | 'dark'> => {
    assertIsOnPlatform('getNavigationBarForegroundStyle', ['android']);
    return ExpoSystemUI.getNavigationBarForegroundStyle();
  },

  /**
   * Changes the Android Status Bar's foreground style.
   *
   * @example
   * ```typescript
   * SystemUI.setStatusBarForegroundStyle("light");
   * ```
   */
  setStatusBarForegroundStyle: (style: 'light' | 'dark'): Promise<void> => {
    assertIsOnPlatform('setStatusBarForegroundStyle', ['android']);
    return ExpoSystemUI.setStatusBarForegroundStyle(style);
  },
  /**
   * Gets the Android Status Bar's foreground style.
   *
   * @example
   * ```typescript
   * const style = await SystemUI.getStatusBarForegroundStyle();
   * ```
   */
  getStatusBarForegroundStyle: (): Promise<'light' | 'dark'> => {
    assertIsOnPlatform('getStatusBarForegroundStyle', ['android']);
    return ExpoSystemUI.getStatusBarForegroundStyle();
  },

  // FIXME(Marc): Setting appearance crashes on Android because of RNScreens.
  //  See `SystemUIModule.kt`'s `setAppearance` function for details.
  // /**
  //  * Sets the App's appearance.
  //  *
  //  * @example
  //  * ```typescript
  //  * SystemUI.setAppearance("dark");
  //  * ```
  //  */
  // setAppearance: (appearance: Appearance): Promise<void> => {
  //   assertIsOnPlatform('setAppearance', ['android']);
  //   return ExpoSystemUI.setAppearance(appearance);
  // },
  // /**
  //  * Gets the App's appearance.
  //  * @example
  //  * ```typescript
  //  * const appearance = await SystemUI.getAppearance();
  //  * ```
  //  */
  // getAppearance: (): Promise<Appearance> => {
  //   assertIsOnPlatform('getAppearance', ['android']);
  //   return ExpoSystemUI.getAppearance();
  // },
};
