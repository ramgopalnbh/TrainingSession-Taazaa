using System;
using System.Collections.Generic;
using System.Text;

namespace Day9Delegate
{
    public class VideoPlayer
    {
        int videoPlayerStatus;
        public int PlayVideo(string extension)
        {
            if(extension != "mp4")
            {
                videoPlayerStatus= -1;
            }
            else
            {
                videoPlayerStatus= 0;
            }
            return videoPlayerStatus;
        }
    }
}
