import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from '../environments/environment';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  myerrorhandler: any;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    const apiurl =environment.apibaseurl;
    const headers ={'content-type': 'application/json'};

    return this.http.get<Product[]>(apiurl,{'headers':headers}).pipe(
      tap(data=>{console.log(data)}),
      catchError((error: any)=>{return throwError(error)})
    );
  }

  getProduct(id : number): Observable<any>{
    const apiurl = environment.apibaseurl + 'Products/' +id;
    const headers = {'content-type':'application/json'};
    return this.http.get<Product>(apiurl,{'headers':headers}).pipe(
      catchError( error => this.myerrorhandler(error) )
    );
  }

  addProduct(product:Product): Observable<any>{
    const apiurl =environment.apibaseurl;
    const headers ={'accept':'application/json','content-type':'application/json'};
    Object.defineProperty(product,'id',{'enumerable':false});
    const taskToDo =JSON.stringify(product);
    return this.http.post<Product>(apiurl, taskToDo, {'headers':headers}).pipe(
    catchError(error=> this.myerrorhandler(error))
    );
  }

  putProduct(product: Product): Observable<any> {
    const apiurl = environment.apibaseurl + 'Products/'+ product.id;
    const headers = {'accept':'application/json','content-type':'application/json'};
    return this.http.put<Product>(apiurl, product,{'headers':headers}).pipe(
      catchError( error => this.myerrorhandler(error) )
    );
  }

  // deleteProduct(id: number): Observable<any>{
  //   const apiurl = environment.apibaseurl + 'Products/'+ id;
  //   const headers = {'accept':'application/json','content-type':'application/json'};
  //   return this.http.delete<Product>(apiurl,{'headers':headers}).pipe(
  //     catchError( error => this.myerrorhandler(error) )
  //   ); 
  // }

}
