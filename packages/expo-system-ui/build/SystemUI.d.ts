import { ColorValue } from 'react-native';
/**
 * * "light": Light Mode
 * * "dark": Dark/Night Mode
 * * "auto": Follow System mode, automatically switch to dark mode.
 * * "unspecified": Default
 */
export declare type Appearance = 'light' | 'dark' | 'auto' | 'unspecified';
/**
 * Configures the device's System UI.
 *
 * On Android, the System UI contains the Navigation Bar and Status Bar, on iOS this contains the Home Indicator and Status Bar.
 */
export declare const SystemUI: {
    /**
     * Changes the Android Status Bar color.
     * @example
     * ```typescript
     * SystemUI.setNavigationBarColor("white");
     * ```
     */
    setStatusBarColor: (color: ColorValue) => Promise<void>;
    /**
     * Gets the Android Status Bar color.
     * @example
     * ```typescript
     * const color = await SystemUI.getStatusBarColor();
     * ```
     */
    getStatusBarColor: () => Promise<ColorValue>;
    /**
     * Changes the Android Navigation Bar color.
     * @example
     * ```typescript
     * SystemUI.setNavigationBarColor("white");
     * ```
     */
    setNavigationBarColor: (color: ColorValue) => Promise<void>;
    /**
     * Gets the Android Navigation Bar color.
     * @example
     * ```typescript
     * const color = await SystemUI.getNavigationBarColor();
     * ```
     */
    getNavigationBarColor: () => Promise<ColorValue>;
    /**
     * Changes the Android Navigation Bar's Divider color.
     * @example
     * ```typescript
     * SystemUI.setNavigationBarDividerColor("red");
     * ```
     */
    setNavigationBarDividerColor: (color: ColorValue) => Promise<void>;
    /**
     * Gets the Android Navigation Bar's Divider color.
     * @example
     * ```typescript
     * const color = await SystemUI.getNavigationBarDividerColor();
     * ```
     */
    getNavigationBarDividerColor: () => Promise<ColorValue>;
    /**
     * Changes the Android Navigation Bar visibility.
     *
     * @example
     * ```typescript
     * SystemUI.setVisibility("hidden");
     * ```
     */
    setNavigationBarVisibility: (visibility: 'visible' | 'hidden') => Promise<void>;
    /**
     * Sets the App's appearance.
     *
     * @example
     * ```typescript
     * SystemUI.setAppearance("dark");
     * ```
     */
    setAppearance: (appearance: Appearance) => Promise<void>;
    /**
     * Gets the App's appearance.
     * @example
     * ```typescript
     * const appearance = await SystemUI.getAppearance();
     * ```
     */
    getAppearance: () => Promise<Appearance>;
};
