using System;
using System.Collections.Generic;
using System.Text;

namespace Polymorphism
{
    class Person
    {
        string name;
        int age;
        public Person(string name, int age)
        {
            this.name = name;
            this.age = age;
        }
    

        public override string ToString()
        {
            return name + " " + "is " + age + " years old.";
        } 
            
    }
}
