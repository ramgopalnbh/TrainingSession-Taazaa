using System;

namespace DelegateInfoDelevery
{
    public class Program
    {
        static void Main(string[] args)
        {
            Manager m1 = new Manager();
            Message m1Message = new Message
            {
                Address = "Greater Noida, Beta-I",
                Content = "Green City in UP"
            };
            Manager.sendMessageDelegate md = SendTypes.SendByEmail;
            m1.RequestDelevery(m1Message, md);
            Agent a = new Agent();

            a.notificationChanged += new Agent.NotificationHandler(ShowNotification);
        }

        public static void ShowNotification(object ob,NotificationEventArgs e)
        {
            Console.WriteLine(e.status);
        }
    }
}
