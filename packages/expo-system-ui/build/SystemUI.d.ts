import { ColorValue } from 'react-native';
/**
 * Configures the device's System UI.
 *
 * On Android, the System UI contains the Navigation Bar and Status Bar, on iOS this contains the Home Indicator and Status Bar.
 */
export declare const SystemUI: {
    /**
     * Changes the Android Navigation Bar color.
     * @example
     * ```typescript
     * SystemUI.setNavigationBarColor("white");
     * ```
     */
    setNavigationBarColor: (color: ColorValue) => any;
    /**
     * Changes the Android Navigation Bar visibility.
     *
     * @example
     * ```typescript
     * SystemUI.setVisibility("hidden");
     * ```
     */
    setNavigationBarVisibility: (visibility: 'visible' | 'hidden') => any;
};
