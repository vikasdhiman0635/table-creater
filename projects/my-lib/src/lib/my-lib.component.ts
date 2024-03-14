import { Component } from '@angular/core';

@Component({
  selector: 'lib-my-lib',
  standalone: true,
  imports: [],
  templateUrl: './my-lib.component.html',
  styleUrl: './my-lib.component.scss'
})
export class MyLibComponent {


  newtableData= [
    {
      headers : [
        {
          diplplayName: "Name",
          sort: '',
          id: 'name',
          editable: 'false',
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
        },
        {
          diplplayName: "email",
          sort: '',
          id: 'email',
          editable: 'false',
        }
      ]
    },
    {
      data: []
    }
  ]



  tableData= {
    headerName: [
      {
        diplplayName: "Name",
        sort: '',
        id: 'name',
        editable: 'false'
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
}
