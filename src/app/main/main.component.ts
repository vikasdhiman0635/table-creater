import { Component, OnInit } from '@angular/core';
import { FieldEditorComponent } from '../field-editor/field-editor.component';
import { StateService } from '../service/state.service';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    FieldEditorComponent
  ],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {

  tableData= {
    headerName: [
      {
        diplplayName: "Name",
        sort: '',
        id: 'name',
        editable: 'false',
        type: 'text'
      },
      {
        diplplayName: "Age",
        sort: '',
        id: 'age',
        editable: 'false',
      },
      {
        diplplayName: "gender",
        sort: '',
        id: 'gender',
        editable: 'false',
        type: 'select'
      },
      {
        diplplayName: "email",
        sort: '',
        id: 'email',
        editable: 'false',
      }
    ],

    data: [
      {
        name: 'Vikas Dhiman',
        age: '23',
        gender: 'male',
        email: 'vikas@gmail.com'
      },
      {
        name: 'Vivek',
        age: '23',
        gender: 'male',
        email: 'vivek@gmail.com'
      },
      {
        name: 'Yogantar',
        age: '23',
        gender: 'male',
        email: 'yogantar@gmail.com'
      }
    ]

  }

  constructor(
    public stateService: StateService
  ) {}

  ngOnInit(){

    this.stateService.tableHeaders = this.tableData.headerName;
    
  }

  activeInputField(fieldValue: string, field: String, index: number){
    this.stateService.displayIndex[index]= 1;
  }


}
