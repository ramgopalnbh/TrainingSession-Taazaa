using System;

namespace Day9Delegate
{
    class Program
    {
        static void Main(string[] args)
        {
            MediaStorage m = new MediaStorage();
            VideoPlayer vp = new VideoPlayer();
            AudioPlayer ap = new AudioPlayer();

            MediaStorage.PlayerMedia playerDelegate = ap.PlayAudio;

            m.ReportResult(playerDelegate, "mp4");
            playerDelegate += vp.PlayVideo;
            //AudioPlayer = ap.PlayAudio();
        }
    }
}
