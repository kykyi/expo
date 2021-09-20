package expo.modules.systemui

import android.app.Activity
import android.content.Context
import android.graphics.Color
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
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
  fun setSystemUiVisibility(visibility: String) {
    WindowInsetsControllerCompat(activity.window, activity.window.decorView).let { controller ->
      when (visibility) {
        "visible" -> {
          controller.show(SYSTEM_BARS)
        }
        "hidden" -> {
          controller.hide(SYSTEM_BARS)
          controller.systemBarsBehavior = WindowInsetsControllerCompat.BEHAVIOR_SHOW_TRANSIENT_BARS_BY_SWIPE
        }
      }
    }
  }

  companion object {
    private const val NAME = "ExpoSystemUI"
    private val TAG = SystemUIModule::class.qualifiedName
    private val SYSTEM_BARS = WindowInsetsCompat.Type.systemBars()
  }
}
