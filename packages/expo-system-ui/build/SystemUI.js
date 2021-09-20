import { Platform } from 'expo-modules-core';
import ExpoSystemUI from './ExpoSystemUI';
const assertIsOnPlatform = (functionName, onlyAvailableOn) => {
    if (!onlyAvailableOn.includes(Platform.OS)) {
        throw new Error(`"${functionName}" is only available on ${onlyAvailableOn.join(' or ')}! OS: ${Platform.OS}`);
    }
};
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
    setStatusBarBackgroundColor: (color) => {
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
    getStatusBarBackgroundColor: () => {
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
    setNavigationBarBackgroundColor: (color) => {
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
    getNavigationBarBackgroundColor: () => {
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
    setNavigationBarDividerColor: (color) => {
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
    getNavigationBarDividerColor: () => {
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
    setNavigationBarVisibility: (visibility) => {
        assertIsOnPlatform('setSystemUiVisibility', ['android']);
        return ExpoSystemUI.setSystemUiVisibility(visibility);
    },
    /**
     * Changes the Android Navigation Bar's foreground style.
     *
     * @example
     * ```typescript
     * SystemUI.setNavigationBarForegroundStyle("light");
     * ```
     */
    setNavigationBarForegroundStyle: (style) => {
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
    getNavigationBarForegroundStyle: () => {
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
    setStatusBarForegroundStyle: (style) => {
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
    getStatusBarForegroundStyle: () => {
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
//# sourceMappingURL=SystemUI.js.map