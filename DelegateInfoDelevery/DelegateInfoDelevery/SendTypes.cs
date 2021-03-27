using System;
using System.Collections.Generic;
using System.Text;

namespace DelegateInfoDelevery
{
    public static class SendTypes
    {
        public static bool SendByEmail(Message m)
        {
            Console.WriteLine($"{m.Content} is delevered by Email to {m.Address}");
            return true;
        }

        public static bool SendByCar(Message m)
        {
            Console.WriteLine($"{m.Content} is delevered by Car to {m.Address}");
            return true;
        }

        public static bool SendByShip(Message m)
        {
            Console.WriteLine($"{m.Content} could not delevered by Ship to {m.Address}");
            return false;
        }
    }
}
