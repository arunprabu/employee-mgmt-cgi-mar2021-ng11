import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee';

// Decorator
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  createEmployee(formData: any): any { // 1. get the data from the comp.ts
    console.log(formData);
    // 2. send the data to the REST API
    // 2.1 What's the REST API? http://jsonplaceholder.typicode.com/users
    // 2.2 What's the HTTP Method? POST
    // 2.3 What's the REST API Client? HttpClient
    return this.http.post('http://jsonplaceholder.typicode.com/users', formData)
      .pipe(map((res: any) => { // 3. get the res from the REST API
        console.log(res);
        // 4. send the res to the comp
        return res;
      }));
  }

  getEmployees(): Observable<Employee[]> {
    console.log('Req received');
    // What is the API URL? http://jsonplaceholder.typicode.com/users
    // What's the Http Method? GET
    return this.http.get('http://jsonplaceholder.typicode.com/users')
      .pipe(map((res: any) => {
        console.log(res);
        // sort, filter, remove, manipulate, convert
        return res;
      }));
  }

  getEmployeeById( employeeId: any ): any{
    console.log('Req Received for Id: ' + employeeId );

    // What's the URL? http://jsonplaceholder.typicode.com/users/1
    // What's the HTTP Method? GET
    return this.http.get( `http://jsonplaceholder.typicode.com/users/${employeeId}`)
      .pipe(map((res: any) => {
        console.log(res);
        return res;
      }));
  }

  // Using Promise
  updateEmployee(formData: any): any{
    console.log(formData);
    // What's the URL? http://jsonplaceholder.typicode.com/users/1
    // What's the HTTP Method? PUT

    return this.http.put('http://jsonplaceholder.typicode.com/users/' + formData.id, formData)
      .toPromise()
      .then( (res: any) => {
        console.log(res);
        return res;
      })
      .catch( (err: any) => {
        console.log(err);
        return err;
      })
      .finally( () => {
        console.log('It is over!');
      });

  }
}
