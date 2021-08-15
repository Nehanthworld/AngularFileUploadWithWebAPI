using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace fileManager.Models
{
    public class FileRecord
    {
        public int Id { get; set; }
        public string FileName { get; set; }
        public string FileFormat { get; set; }
        public string FilePath { get; set; }
        public string ContentType { get; set; }
        public string AltText { get; set; }
        public string Description { get; set; }
    }
}
