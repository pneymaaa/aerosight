using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HistoryController : ControllerBase
{
    private readonly AerosightDbContext _context;

    public HistoryController(AerosightDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    public IActionResult GetHistory()
    {
        var data = _context.HistoryRecords.OrderByDescending(h => h.Timestamp).ToList();
        return Ok(data);
    }

    [HttpPost]
    public IActionResult AddHistory([FromBody] HistoryRecord record)
    {
        _context.HistoryRecords.Add(record);
        _context.SaveChanges();
        return CreatedAtAction(nameof(GetHistory), new { id = record.Id }, record);
    }
}
