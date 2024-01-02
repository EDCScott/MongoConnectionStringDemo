using MongoConnectionStringDemo.Data;

namespace MongoConnectionStringDemo
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var database = new Database();

            var test_record = new TestDataRecord();
            database.Add(test_record);
            database.SaveChanges();
        }
    }
}
