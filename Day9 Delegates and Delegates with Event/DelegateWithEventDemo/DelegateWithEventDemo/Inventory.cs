using System;
using System.Collections.Generic;
using System.Text;

namespace DelegateWithEventDemo
{
    public class Inventory
    {
        public void Subscribe(Clock theClock)
        {
            theClock.SecondChanged += new Clock.SecondChangeHandler(InventoryTimeHasChange);
        }
        public void InventoryTimeHasChange(object theClock, TimeInfoEventArgs ti)
        {
            Console.WriteLine("Inventory Time Has: {0}:{1}:{2}",
                ti.hour.ToString(),ti.minute.ToString(),ti.second.ToString());
        }
    }
}
