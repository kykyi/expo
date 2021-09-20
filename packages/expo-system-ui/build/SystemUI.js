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
     * Changes the Android Status Bar color.
     * @example
     * ```typescript
     * SystemUI.setNavigationBarColor("white");
     * ```
     */
    setStatusBarColor: (color) => {
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
    getStatusBarColor: () => {
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
    setNavigationBarColor: (color) => {
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
    getNavigationBarColor: () => {
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
};
//# sourceMappingURL=SystemUI.js.map