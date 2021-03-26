using System;

namespace LambdaExpression
{
    class Program
    {
        static void Main(string[] args)
        {
            //Func<int, int> square =(x) =>{return x*x; };

            Func<int, int> square = (x) => x * x;
            System.Linq.Expressions.Expression<Func<int, int>> e = x => x * x;
            var a = e.Compile();
       
            Console.WriteLine(e);
            Console.WriteLine(a(8));
        }
    }
}
