import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html'
})
export class TemplateFormComponent {

	model: any = {};

	onSubmit(){
		alert('SUCCESS!! :-) \n\n ' + JSON.stringify(this.model))
	};


}
