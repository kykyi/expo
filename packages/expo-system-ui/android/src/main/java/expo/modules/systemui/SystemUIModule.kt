package expo.modules.systemui

import android.content.Context

import org.unimodules.core.ExportedModule
import org.unimodules.core.ModuleRegistry
import org.unimodules.core.Promise
import org.unimodules.core.interfaces.ExpoMethod

class SystemUIModule(context: Context) : ExportedModule(context) {

  private var mModuleRegistry: ModuleRegistry? = null

  override fun getName(): String {
    return NAME
  }

  override fun onCreate(moduleRegistry: ModuleRegistry) {
    mModuleRegistry = moduleRegistry
  }

  @ExpoMethod
  fun setNavigationBarColor(color: String) {
    if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      getWindow().setNavigationBarColor(/* TODO: Color */);
    }
  }

  @ExpoMethod
  fun setSystemUiVisibility(visibility: String) {
    if (android.os.Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
      // TODO: Implement visibility with WindowInsets
    }
  }

  companion object {
    private val NAME = "ExpoSystemUI"
    private val TAG = SystemUIModule::class.qualifiedName
  }
}
