import PushNotification from 'react-native-push-notification';
import Sound from 'react-native-sound';

// Configure the notification channel (do this once in your app's entry point, e.g., App.tsx)
PushNotification.createChannel(
    {
      channelId: "wakala-alerts", // (required)
      channelName: "Wakala App Alerts", // (required)
      channelDescription: "Notifications for important app events",
      playSound: true,
      soundName: "alert_sound.mp3", // See Step 2
      importance: 4, // High importance
      vibrate: true,
    },
    (created) => console.log(`Notification channel 'wakala-alerts' created: ${created}`)
);

// Function to show a local notification
export const showWarningNotification = (title: string, message: string) => {
    PushNotification.localNotification({
        channelId: "wakala-alerts",
        title: title,
        message: message,
        playSound: true,
        soundName: "alert_sound.mp3",
    });
};

// Function to play a sound
export const playAlertSound = () => {
    const alert = new Sound('alert_sound.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('Failed to load the sound', error);
            return;
        }
        // Play the sound
        alert.play((success) => {
            if (!success) {
                console.log('Sound playback failed');
            }
            alert.release(); // Release the audio player resource
        });
    });
};