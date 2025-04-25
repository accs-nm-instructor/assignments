# Discord Arduino Bot

This is a fork of the [Discord example app](https://github.com/discord/discord-example-app) that includes use of the serial port to communicate with our Arduino.

## What to do

You'll need to do a few things to get this working:

1. Copy the .env file from your original Discord bot into this directory.
1. Ensure your Arduino is connected to your VM (in VMWare Workstation, go to VM -> Removable Devices -> Arduino ... -> Connect).
1. Your Arduino must be able to turn the light on and off based on the correct serial port signals. If you are unsure whether this is the case, open the Arduino IDE and upload serial-led-trigger.ino to the board.
1. Start the bot with `npm start` from the terminal in this directory.
1. Start ngrok with `ngrok http 3000` so that the Discord server can communicate with your bot.
1. Copy the new ngrok URL into the [app's settings](https://discord.com/developers/applications). The app's "Interactions Endpoint URL" should be something like "https://lots-of-letters-digits.ngrok-free.app/interactions".

Now, go to your Discord server where the bot is installed, and run the `/test` command. You should see a response, but the light on the Arduino will not turn on. **It's your task to edit the code to turn on the light!** You should only have to make a small change. You'll have to stop the bot with Ctrl+C and restart it with `npm start` any time that you change the code.