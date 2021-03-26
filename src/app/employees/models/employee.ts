import { Injectable } from '@angular/core';

export interface IEmployee {
  id: number;
  name: string;
  email: string;
  phone: string;
}

@Injectable({
  providedIn: 'root'
})
export class Employee implements IEmployee{
  id!: number;
  name!: string;
  email!: string;
  phone!: string;

  // util methods can come here

}
