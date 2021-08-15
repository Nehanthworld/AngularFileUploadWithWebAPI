import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './viewfiles.component.html'
})
export class ViewFilesComponent {
  public pageTitle = 'Welcome to View Files component';
  constructor(private http:  HttpClient) {
    this.getAllFiles();
  }
  files: any = [];
  getAllFiles()
  {
    debugger
    return this.http.get('http://localhost:48608/FileManager')
    .subscribe((result) => {
      this.files = result;
      console.log(result);
  });
  }
  downloadFile(id: number, contentType: string)
  {
    return this.http.get(`http://localhost:48608/FileManager/${id}`, {responseType: 'blob'})
    .subscribe((result: Blob) => {
      const blob = new Blob([result], { type: contentType }); // you can change the type
      const url= window.URL.createObjectURL(blob);
      window.open(url);
      console.log("Success");
  });
  }
}
