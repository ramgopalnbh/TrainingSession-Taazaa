using System;
using System.Linq;

namespace WordNumberOfTimesInString
{
    public class Program
    {
        static void Main(string[] args)
        {
            //Console.WriteLine("Hello World!");
            string para = "Essay on India. ,India is a great country where people speak different " +
                "languages but the national language is Hindi. India is full of different castes," +
                " creeds, religion, and cultures but they live together. That's the reasons India " +
                "is famous for the common saying of “unity in diversity";
            char[] delimiters = {' ',',','(',')','-','!','?','/','&'};
            //char[] delimiters = {' '};
            string word = "India";
            var stArray = para.Split(delimiters, StringSplitOptions.RemoveEmptyEntries);

            //Using Lambda Expression
            //var p = stArray.Where((x) => x.Equals(word)).Select(x => x);
            //Console.WriteLine(word+", Count in Paragraph using lambda expression: "+p.ToList().Count());

            //Using LINQ
            var m = from w in stArray where w.Equals(word) select w;
            Console.WriteLine(word + " count in paragraph using LINQ: " +m.ToList().Count());
        }
    }
}
