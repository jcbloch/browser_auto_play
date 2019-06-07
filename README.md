# browser_auto_play


## Make silence.mp3

```ffmpeg -ar 48000 -t 0.010 -f s16le -acodec pcm_s16le  -i /dev/zero -acodec libmp3lame -aq 4 silence.mp3```
