using System;
using System.Collections.Generic;
using System.Text;

namespace Day9Delegate
{
    public class AudioPlayer
    {
        int audioPlayerStatus;
        public int PlayAudio(string extension)
        {
            if (extension != "mp3")
            {
                audioPlayerStatus= -1;
            }
            else
            {
                audioPlayerStatus= 0;
            }
            return audioPlayerStatus;
        }
    }
}
