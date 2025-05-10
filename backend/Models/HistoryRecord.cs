using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
   [Table("history_records")]
   public class HistoryRecord
   {
    [Key]
    [Column("id")]
    public int Id { get; set; }
    [Column("location")]
    public string? Location { get; set; }
    [Column("timestamp")]
    public DateTime? Timestamp { get; set; }
    [Column("pm25")]
    public int PM25 { get; set; }
   }
}