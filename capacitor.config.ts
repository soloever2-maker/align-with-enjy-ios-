import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.alignwithenjy.app',
  appName: 'Align with Enjy',
  webDir: 'www',

  // The native shell loads the live app straight from Vercel,
  // so every web deploy updates both iOS and Android instantly — no resubmission.
  server: {
    url: 'https://wellness-hub-ten.vercel.app',
    allowNavigation: ['wellness-hub-ten.vercel.app', '*.supabase.co'],
    androidScheme: 'https',  // required for Android cleartext policy
  },

  ios: {
    contentInset: 'automatic',
    backgroundColor: '#F5F1E6',
  },

  android: {
    backgroundColor: '#F5F1E6',
    allowMixedContent: false, // enforce HTTPS only
  },

  plugins: {
    SplashScreen: {
      launchShowDuration: 1200,
      launchAutoHide: true,
      backgroundColor: '#F5F1E6',
      showSpinner: false,
    },
    PushNotifications: {
      presentationOptions: ['badge', 'sound', 'alert'],
    },
  },
}

export default config
