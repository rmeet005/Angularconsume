import { CommonModule, DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-document-type',
  standalone: true, // since you are using imports array
  imports: [DatePipe, CommonModule, FormsModule],
  templateUrl: './documentType.html',
  styleUrls: ['./documentType.scss']
})
export class DocumentTypeComponent {
  http = inject(HttpClient);
  userdata: any;

  newDocumentType: any = {
    documentCode: "",
    documentName: "",
    description: "",
    isActive: true,
    createdAt: ""
  };

  ngOnInit(): void {
    this.getDocumentType();
  }

  getDocumentType() {
    this.http.get("http://localhost:5054/api/DocumentType/FetchAllDocumentTypes")
      .subscribe((result: any) => {
        console.log(result);
        this.userdata = result;
      });
  }

  addDocumentType() {
    this.newDocumentType.createdAt = new Date();
    this.http.post("http://localhost:5054/api/DocumentType/AddDocumentType", this.newDocumentType)
      .subscribe((result: any) => {
        console.log("Document type added:", result);
        this.getDocumentType();
        this.newDocumentType = {
          documentCode: "",
          documentName: "",
          description: "",
          isActive: true,
          createdAt: ""
        };
      });
  }
}
