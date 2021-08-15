using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fileManager.Models
{
    public class FileModel
    {
        public IFormFile MyFile { get; set; }
        public string AltText { get; set; }
        public string Description { get; set; }

    }
}
