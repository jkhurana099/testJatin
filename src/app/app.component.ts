import { Component,OnInit } from '@angular/core';


import { FormGroup, FormControl,NgForm ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'heapMap';
 dataSource: any;
 deleteUser:boolean=false;
 editUser:boolean=false;
 modelName:any;
 model:any;
 modelValue:any;
 profileForm: FormGroup;
 edit:any;

 ngOnInit() {
 this.profileForm = this.fb.group({
  modelName: [''],
  processor: [''],
  screen: [''],
    price: [''],
    battery: [''],
    camera: ['']

});
 }
 constructor(private fb: FormBuilder){


  this.dataSource= {
    "chart": {
      "caption": "Top Smartphone Ratings",
      "subcaption": "By Features",
      "xAxisName": "Features",
      "yAxisName": "Model",
      "showValues": "1",
      "showplotborder": "1",
      "xAxisLabelsOnTop": "1",
      "plottooltext": "<div id='nameDiv' style='font-size: 12px; border-bottom: 1px dashed #666666; font-weight:bold; padding-bottom: 3px; margin-bottom: 5px; display: inline-block; color: #888888;' >$rowLabel :</div>{br}Rating : <b>$dataValue</b>{br}$columnLabel : <b>$tlLabel</b>{br}<b>$trLabel</b>",

      "toolTipColor": "#ffffff",
      "toolTipBorderThickness": "0",
      "toolTipBgColor": "#000000",
      "toolTipBgAlpha": "80",
      "toolTipBorderRadius": "2",
      "toolTipPadding": "5",
      "theme": "fusion"
    },
    "dataset": [{
      "data": [{
        "rowid": "Samsung",
        "columnid": "Processor",
        "value": "8.7"
      }, {
        "rowid": "Samsung",
        "columnid": "Screen Size",
        "value": "8.5"
      }, {
        "rowid": "Samsung",
        "columnid": "Price",
        "value": "9.3"
      }, {
        "rowid": "Samsung",
        "columnid": "Battery Backup",
        "value": "9.7"
      }, {
        "rowid": "Samsung",
        "columnid": "Camera",
        "value": "8"
      }, {
        "rowid": "HTC",
        "columnid": "Processor",
        "value": "9.2"
      }, {
        "rowid": "HTC",
        "columnid": "Screen Size",
        "value": "8.3"
      }, {
        "rowid": "HTC",
        "columnid": "Price",
        "value": "7.3"
      }, {
        "rowid": "HTC",
        "columnid": "Battery Backup",
        "value": "8.8"
      }, {
        "rowid": "HTC",
        "columnid": "Camera",
        "value": "8.7"
      }, {
        "rowid": "iPhone",
        "columnid": "Processor",
        "value": "9.1"
      }, {
        "rowid": "iPhone",
        "columnid": "Screen Size",
        "value": "8.6"
      }, {
        "rowid": "iPhone",
        "columnid": "Price",
        "value": "7.2"
      }, {
        "rowid": "iPhone",
        "columnid": "Battery Backup",
        "value": "8.4"
      }, {
        "rowid": "iPhone",
        "columnid": "Camera",
        "value": "9.5"
      }, {
        "rowid": "Nokia",
        "columnid": "Processor",
        "value": "8.8"
      }, {
        "rowid": "Nokia",
        "columnid": "Screen Size",
        "value": "9.1"
      }, {
        "rowid": "Nokia",
        "columnid": "Price",
        "value": "9.7"
      }, {
        "rowid": "Nokia",
        "columnid": "Battery Backup",
        "value": "9.2"
      }, {
        "rowid": "Nokia",
        "columnid": "Camera",
        "value": "8.1"
      }]
    }],
    "colorrange": {
      "gradient": "0",
      "minvalue": "0",
      "code": "E24B1A",
      "startlabel": "Poor",
      "endlabel": "Good",
      "color": [{
        "code": "E24B1A",
        "minvalue": "0",
        "maxvalue": "5",
        "label": "Bad"
      }, {
        "code": "F6BC33",
        "minvalue": "5",
        "maxvalue": "8.5",
        "label": "Average"
      }, {
        "code": "6DA81E",
        "minvalue": "8.5",
        "maxvalue": "10",
        "label": "Good"
      }]
    }
  }

} 

addData(){
  this.editUser=true;
  this.deleteUser=false;
  this.edit=false;
  console.log(this.dataSource.dataset[0].data)
 
}

onSubmit(){
  console.log(this.profileForm.value);
  console.log(this.profileForm.value.processor);
  var text=this.profileForm.value.modelName;
  this.modelValue= text;

  this.dataSource.dataset[0].data.push({"rowid":this.modelValue,"columnId":"Processor","value":this.profileForm.value.processor})
  this.dataSource.dataset[0].data.push({"rowid":this.modelValue,"columnId":"Screen Size","value":this.profileForm.value.screen})
   this.dataSource.dataset[0].data.push({"rowid":this.modelValue,"columnId":"Price","value":this.profileForm.value.price})
 this.dataSource.dataset[0].data.push({"rowid":this.modelValue,"columnId":"Battery Backup","value":this.profileForm.value.battery})
   this.dataSource.dataset[0].data.push({"rowid":this.modelValue,"columnId":"Camera","value":this.profileForm.value.camera})
}

deleteData(){
  this.deleteUser=true;
  this.editUser=false;
  this.edit=false;
}

submitForDeletion(){
  this.deleteUser=false;
  console.log(this.modelName)
  //for(var i=0;i<this.dataSource.dataset[0].data.length;i++){
    this.dataSource.dataset[0].data=this.dataSource.dataset[0].data.filter(x=>x.rowid!=this.modelName);
    console.log(this.dataSource.dataset[0].data);
 
}

editData(){
this.edit=true;
this.editUser=false;
this.deleteUser=false;

}

onEditSubmit(){
  console.log(this.profileForm.value);
  this.dataSource.dataset[0].data=this.dataSource.dataset[0].data.filter(x=>x.rowid!=this.profileForm.value.modelName);
  console.log(this.dataSource.dataset[0].data);
   this.dataSource.dataset[0].data.push({"rowid":this.profileForm.value.modelName,"columnId":"Processor","value":this.profileForm.value.processor})
    this.dataSource.dataset[0].data.push({"rowid":this.profileForm.value.modelName,"columnId":"Screen Size","value":this.profileForm.value.screen})
    this.dataSource.dataset[0].data.push({"rowid":this.profileForm.value.modelName,"columnId":"Price","value":this.profileForm.value.price})
  this.dataSource.dataset[0].data.push({"rowid":this.profileForm.value.modelName,"columnId":"Battery Backup","value":this.profileForm.value.battery})
     this.dataSource.dataset[0].data.push({"rowid":this.profileForm.value.modelName,"columnId":"Camera","value":this.profileForm.value.camera})
}



}


