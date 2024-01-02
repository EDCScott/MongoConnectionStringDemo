using System.ComponentModel.DataAnnotations.Schema;
using MongoDB.Bson;

namespace MongoConnectionStringDemo.Data
{
    [Table("testrecords")]
    public class TestDataRecord
    {
        public ObjectId Id { get; set; }
        [Column("creation_date")]
        public DateTime CreationDate { get; set; } = DateTime.Now;
    }
}
