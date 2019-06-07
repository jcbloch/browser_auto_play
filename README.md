# browser_auto_play


## Make silence.mp3

```ffmpeg -ar 48000 -t 0.010 -f s16le -acodec pcm_s16le  -i /dev/zero -acodec libmp3lame -aq 4 silence.mp3```


## Usage

```autoPlay = new AutoPlay('silence.mp3')
autoPlay.test()
autoPlay.allowed()
autoPlay.withSound
autoPlay.withOutSound```

## Caveat Emptor

Modern browsers have their own autoplay rules that may change over time.
Generally, video and audio auto play follow the same rules.
Browsers that block autoplay generally unlock it after  audio or video media consumption. crosses some threshold.
This threshold appears to be around 7 secs.
