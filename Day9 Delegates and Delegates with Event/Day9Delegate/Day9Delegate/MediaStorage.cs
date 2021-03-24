using System;
using System.Collections.Generic;
using System.Text;

namespace Day9Delegate
{
    
    public class MediaStorage
    {
        public delegate int PlayerMedia(string a);

        public void ReportResult(PlayerMedia p, string type)
        {
            var status = p(type);
            if (status == 0)
            {
                Console.WriteLine("Media played successfully!");
            }
            else
            {
                Console.WriteLine("Media not played successfully!!");
            }      
        }
    }
}
