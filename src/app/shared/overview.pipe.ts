import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'overview'
})
export class OverviewPipe implements PipeTransform {

  transform(overview: any , limit: number): string {
    return overview.split(' ').splice(0,limit).join(' ');
  }

}
