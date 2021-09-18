import { SampleOptions } from './ModuleTemplate.types';
export { default as ExpoModuleTemplateView, ExpoModuleTemplateViewProps } from './ExpoModuleTemplateView';
import { ColorValue } from 'react-native'
export * from './ModuleTemplate.types';

/**
 * Changes the Android Navigation Bar Color.
 *
 * @example
 * ```typescript
 * setNavigationBarColor("white");
 * ```
 */
export declare function setNavigationBarColor(color: ColorValue): void;
