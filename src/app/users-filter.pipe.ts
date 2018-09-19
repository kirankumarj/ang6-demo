import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usersFilter',
  pure: false
})
export class UsersFilterPipe implements PipeTransform {

  transform(value: any, cityName: string, propName: string): any {
    if (value.length === 0 || cityName === '') {
        return value;
    }
    const filterUsers = [];
    for ( const item of value) {
        if (item[propName] === cityName) {
          filterUsers.push(item);
        }
    }
    return filterUsers;
  }

}
