using Microsoft.EntityFrameworkCore;
using backend.Models;

namespace backend.Data;

public class AerosightDbContext : DbContext
{
    public AerosightDbContext(DbContextOptions<AerosightDbContext> options) : base(options) {}
    public DbSet<HistoryRecord> HistoryRecords => Set<HistoryRecord>();
    public DbSet<Article> Articles => Set<Article>();
}
