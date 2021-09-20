package expo.modules.systemui

import android.app.Activity
import android.content.Context
import android.graphics.Color
import androidx.core.view.WindowInsetsCompat
import androidx.core.view.WindowInsetsControllerCompat
import expo.modules.core.ExportedModule
import expo.modules.core.ModuleRegistry
import expo.modules.core.Promise
import expo.modules.core.interfaces.ActivityProvider
import expo.modules.core.interfaces.ExpoMethod

class SystemUIModule(context: Context) : ExportedModule(context) {

  private lateinit var mActivityProvider: ActivityProvider
  private val activity: Activity
    get() {
      return mActivityProvider.currentActivity ?: throw Error("Cannot get Main Activity!")
    }

  override fun getName(): String {
    return NAME
  }

  override fun onCreate(moduleRegistry: ModuleRegistry) {
    mActivityProvider = moduleRegistry.getModule(ActivityProvider::class.java)
  }

  @ExpoMethod
  fun setNavigationBarColor(color: String, promise: Promise) {
    activity.window.navigationBarColor = Color.parseColor(color)
    promise.resolve(null)
  }

  @ExpoMethod
  fun setSystemUiVisibility(visibility: String, promise: Promise) {
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
    promise.resolve(null)
  }

  companion object {
    private const val NAME = "ExpoSystemUI"
    private val SYSTEM_BARS = WindowInsetsCompat.Type.systemBars()
  }
}
