using Microsoft.AspNetCore.Mvc;
using backend.Models;
using backend.Data;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class EducationController : ControllerBase
{
    private readonly AerosightDbContext _context;

    public EducationController(AerosightDbContext context)
    {
        _context = context;
    }

     // GET /api/education
    [HttpGet]
    public IActionResult GetArticles()
    {
        var articles = _context.Articles.ToList();
        return Ok(articles);
    }
}
