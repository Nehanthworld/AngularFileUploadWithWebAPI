import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  templateUrl: './fileupload.component.html'
})
export class FileuploadComponent {
  public pageTitle = 'Welcome to fileupload component';
  fileForm = new FormGroup({
    altText: new FormControl(''),
    description: new FormControl('')
  });
  fileToUpload: any;
  constructor(private http:  HttpClient) {
  }
  handleFileInput(e: any) {
    this.fileToUpload = e?.target?.files[0];
  }
  saveFileInfo()
  {
    debugger
    const formData: FormData = new FormData();
    formData.append('myFile', this.fileToUpload);
    formData.append('altText', this.fileForm.value.altText);
    formData.append('description', this.fileForm.value.description);
    return this.http.post('http://localhost:48608/FileManager', formData,
    {
      headers : new HttpHeaders()})
    .subscribe(() => alert("File uploaded"));
  }
}
