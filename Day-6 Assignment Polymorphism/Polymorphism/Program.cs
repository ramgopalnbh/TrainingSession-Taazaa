using System;

namespace Polymorphism
{
    class Program
    {
        static void Main(string[] args)
        {

            //Override ToString() method
            //Person person = new Person("Abc", 20);
            //string s =person.ToString();
            //Console.WriteLine(s);

            //Person person1 = new Person("Pqr", 30);
            //string s1 = person1.ToString();
            //Console.WriteLine(s1);


            //Polymorphism.....
            Shape sp = new Circle(); //chile class method
            Shape sp1 = new Shape(); //base class method
            Circle c = new Circle(); //child class method
            c.drawShap();
        }
    }
}
