using Core;
using Infrastructure;
using System;
using System.Collections.Generic;
using System.Text;

namespace CoreConsoleApp
{
    static class MyExtensionDemo
    {
        public static void displayProduct(this Inventory i, Product p)
        {
            i.AddProduct(p.Title, p.Price, p.Color);
            Console.WriteLine(i.ToString());
        }
    }
}
