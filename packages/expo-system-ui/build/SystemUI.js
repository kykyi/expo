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