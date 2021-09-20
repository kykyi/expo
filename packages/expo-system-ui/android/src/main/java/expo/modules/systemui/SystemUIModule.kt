package expo.modules.systemui

import android.app.Activity
import android.content.Context
import android.graphics.Color
import android.os.Build
import androidx.appcompat.app.AppCompatDelegate
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
  fun getNavigationBarColor(promise: Promise) {
    activity.runOnUiThread {
      val color = colorToHex(activity.window.navigationBarColor)
      promise.resolve(color)
    }
  }

  @ExpoMethod
  fun setNavigationBarColor(color: String, promise: Promise) {
    activity.runOnUiThread {
      activity.window.navigationBarColor = Color.parseColor(color)
      promise.resolve(null)
    }
  }

  @ExpoMethod
  fun getNavigationBarDividerColor(promise: Promise) {
    activity.runOnUiThread {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
        val color = colorToHex(activity.window.navigationBarDividerColor)
        promise.resolve(color)
      } else {
        promise.reject("unavailable", "'getNavigationBarDividerColor' is only available on Android API 28 or higher!")
      }
    }
  }

  @ExpoMethod
  fun setNavigationBarDividerColor(color: String, promise: Promise) {
    activity.runOnUiThread {
      if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.P) {
        activity.window.navigationBarDividerColor = Color.parseColor(color)
        promise.resolve(null)
      } else {
        promise.reject("unavailable", "'setNavigationBarDividerColor' is only available on Android API 28 or higher!")
      }
    }
  }

  @ExpoMethod
  fun getStatusBarColor(promise: Promise) {
    activity.runOnUiThread {
      val color = colorToHex(activity.window.statusBarColor)
      promise.resolve(color)
    }
  }

  @ExpoMethod
  fun setStatusBarColor(color: String, promise: Promise) {
    activity.runOnUiThread {
      activity.window.statusBarColor = Color.parseColor(color)
      promise.resolve(null)
    }
  }

  @ExpoMethod
  fun setSystemUiVisibility(visibility: String, promise: Promise) {
    activity.runOnUiThread {
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
  }


  @ExpoMethod
  fun getAppearance(promise: Promise) {
    activity.runOnUiThread {
      val appearance = when (AppCompatDelegate.getDefaultNightMode()) {
        AppCompatDelegate.MODE_NIGHT_NO -> "light"
        AppCompatDelegate.MODE_NIGHT_YES -> "dark"
        AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM -> "auto"
        else -> "unspecified"
      }
      promise.resolve(appearance)
    }
  }

  @ExpoMethod
  fun setAppearance(appearance: String, promise: Promise) {
    activity.runOnUiThread {
      when (appearance) {
        "light" -> AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_NO)
        "dark" -> AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_YES)
        "auto" -> AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_FOLLOW_SYSTEM)
        "unspecified" -> AppCompatDelegate.setDefaultNightMode(AppCompatDelegate.MODE_NIGHT_UNSPECIFIED)
      }
      promise.resolve(null)
    }
  }

  companion object {
    private const val NAME = "ExpoSystemUI"
    private val SYSTEM_BARS = WindowInsetsCompat.Type.systemBars()

    fun colorToHex(color: Int): String {
      return String.format("#%02x%02x%02x", Color.red(color), Color.green(color), Color.blue(color))
    }
  }
}
