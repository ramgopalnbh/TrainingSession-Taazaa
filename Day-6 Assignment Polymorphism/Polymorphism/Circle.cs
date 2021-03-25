using System;
using System.Collections.Generic;
using System.Text;

namespace Polymorphism
{
    class Circle: Shape
    {
        public override void drawShap()
        {
            Console.WriteLine("Drawing circle of child..");
        }
    }
}
