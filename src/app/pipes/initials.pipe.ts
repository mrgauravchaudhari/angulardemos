import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    
    console.log(value);
    let values = value.split(' ');
    console.log(values);
    console.log(values[0][0],values[1][0]);
    
    return values[0][0] + values[1][0];
  }

}
