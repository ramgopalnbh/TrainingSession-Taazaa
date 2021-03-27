using System;
using System.Collections.Generic;
using System.Text;

namespace DelegateInfoDelevery
{
    public class NotificationEventArgs : EventArgs
    {
        public bool status;

        public NotificationEventArgs(bool a)
        {
            status = a;
        }
    }
}
