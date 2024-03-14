import { Component, Input, OnInit, input } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-field-editor',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './field-editor.component.html',
  styleUrl: './field-editor.component.scss'
})
export class FieldEditorComponent implements OnInit  {

  textValue: any;

  headerfield: any;

  @Input({required: true}) headers:any []= [];
  @Input({required: true}) fieldValue: any= "";
  @Input({required: true}) fieldName: any= "";

  constructor( ) { }

  ngOnInit(){
    this.headers.forEach((element: any) => {
      if(element.id===this.fieldName){
        this.headerfield = element;
      }
    });

    console.log(this.headerfield);
  }


  submit(form: any){
    console.log(form.value);
  }

  hideInput(event: any){
    if(event.key === 'Enter'){
      console.log('value: '+this.fieldValue);
    }
  }


}
