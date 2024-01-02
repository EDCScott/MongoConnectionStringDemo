using Microsoft.EntityFrameworkCore;

namespace MongoConnectionStringDemo.Data
{
    public class Database() : DbContext
    {
        private const string WORKING_CONNECTION_STRING = "mongodb://localhost:27117";
        private const string NON_WORKING_CONNECTION_STRING = "mongodb://localhost:27117,localhost:27217,localhost:27317";

        public DbSet<TestDataRecord> DataRecords { get; init; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseMongoDB(
                NON_WORKING_CONNECTION_STRING,
                "mydb");
        }
    }
}
