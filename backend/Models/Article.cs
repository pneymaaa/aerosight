using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace backend.Models
{
   [Table("articles")]
   public class Article
   {
    [Key]
    [Column("id")]
    public int Id { get; set; }
    [Column("title")]
    public string Title { get; set; } = "";
    [Column("excerpt")]
    public string Excerpt { get; set; } = "";
    [Column("content")]
    public string Content { get; set; } = "";
   }
}