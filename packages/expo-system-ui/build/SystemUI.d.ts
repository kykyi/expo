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
     * Changes the Android Status Bar's background color.
     * @example
     * ```typescript
     * SystemUI.setStatusBarBackgroundColor("white");
     * ```
     */
    setStatusBarBackgroundColor: (color: ColorValue) => Promise<void>;
    /**
     * Gets the Android Status Bar's background color.
     * @example
     * ```typescript
     * const color = await SystemUI.getStatusBarBackgroundColor();
     * ```
     */
    getStatusBarBackgroundColor: () => Promise<ColorValue>;
    /**
     * Changes the Android Navigation Bar's background color.
     * @example
     * ```typescript
     * SystemUI.setNavigationBarBackgroundColor("white");
     * ```
     */
    setNavigationBarBackgroundColor: (color: ColorValue) => Promise<void>;
    /**
     * Gets the Android Navigation Bar's background color.
     * @example
     * ```typescript
     * const color = await SystemUI.getNavigationBarBackgroundColor();
     * ```
     */
    getNavigationBarBackgroundColor: () => Promise<ColorValue>;
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
     * Changes the Android Navigation Bar's foreground style.
     *
     * @example
     * ```typescript
     * SystemUI.setNavigationBarForegroundStyle("light");
     * ```
     */
    setNavigationBarForegroundStyle: (style: 'light' | 'dark') => Promise<void>;
    /**
     * Gets the Android Navigation Bar's foreground style.
     *
     * @example
     * ```typescript
     * const style = await SystemUI.getNavigationBarForegroundStyle();
     * ```
     */
    getNavigationBarForegroundStyle: () => Promise<'light' | 'dark'>;
    /**
     * Changes the Android Status Bar's foreground style.
     *
     * @example
     * ```typescript
     * SystemUI.setStatusBarForegroundStyle("light");
     * ```
     */
    setStatusBarForegroundStyle: (style: 'light' | 'dark') => Promise<void>;
    /**
     * Gets the Android Status Bar's foreground style.
     *
     * @example
     * ```typescript
     * const style = await SystemUI.getStatusBarForegroundStyle();
     * ```
     */
    getStatusBarForegroundStyle: () => Promise<'light' | 'dark'>;
};
