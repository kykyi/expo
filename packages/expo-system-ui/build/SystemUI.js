import ExpoSystemUI from './ExpoSystemUI';
/**
 * Changes the Android Navigation Bar Color.
 *
 * @example
 * ```typescript
 * setNavigationBarColor("white");
 * ```
 */
export function setNavigationBarColor(color) {
    // TODO: Do we need to call processColor?
    // const colorString = processColor(color)
    return ExpoSystemUI.setNavigationBarColor(color);
}
//# sourceMappingURL=SystemUI.js.map