package expo.modules.systemui

import android.app.Activity
import android.content.Context
import android.graphics.Color
import android.view.WindowManager
import expo.modules.core.ExportedModule
import expo.modules.core.ModuleRegistry
import expo.modules.core.interfaces.ExpoMethod

class SystemUIModule(context: Context) : ExportedModule(context) {

  private var mModuleRegistry: ModuleRegistry? = null
  private val activity: Activity
    get() {
      return context as? Activity ?: throw Error("Cannot get Main Activity!")
    }

  override fun getName(): String {
    return NAME
  }

  override fun onCreate(moduleRegistry: ModuleRegistry) {
    mModuleRegistry = moduleRegistry
  }

  @ExpoMethod
  fun setNavigationBarColor(color: String) {
    activity.window.navigationBarColor = Color.parseColor(color)
  }

  @ExpoMethod
  fun setSystemUiVisibility(isVisible: Boolean) {
    if (isVisible) {
      activity.window.addFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN)
      activity.window.clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN)
    } else {
      activity.window.addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN)
      activity.window.clearFlags(WindowManager.LayoutParams.FLAG_FORCE_NOT_FULLSCREEN)
    }
  }

  companion object {
    private const val NAME = "ExpoSystemUI"
    private val TAG = SystemUIModule::class.qualifiedName
  }
}
