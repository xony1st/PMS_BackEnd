import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';

@Injectable()
export class MstbedtypeService {

  constructor(private http: Http) { }

  getData(): Observable<any> {
    return this.http.get(`${environment.apiUrl}/api/mstbedtypes/getMstBedType`)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error));
  }

  getBedTypeByID(id): Observable<any> {
    return this.http.get(
      `${environment.apiUrl}/api/mstbedtypes/getMstBedTypeByID/${id}`)
      .map((res: Response) => {
        return res.json();
      })
      .catch((error: any) => Observable.throw(error));
  }

  insertData(body): Observable<any> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(`${environment.apiUrl}/api/mstbedtypes/postMstBedType`, bodyString, options) // ...using post request
      .map((res: Response) => {
        return res.json();
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }

  updateData(id, body): Observable<any> {
    const bodyString = JSON.stringify(body); // Stringify payload
    const headers = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
    const options = new RequestOptions({ headers: headers }); // Create a request option
    return this.http.post(`${environment.apiUrl}/api/mstbedtypes/postMstBedTypeByID/${id}`, bodyString, options) // ...using post request
      .map((res: Response) => {
        return res.json();
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }

  deleteData(id): Observable<any> {
    return this.http.delete(`${environment.apiUrl}/api/mstbedtypes/deleteMstBedTypeByID/${id}`) // ...using post request
      .map((res: Response) => {
        return res.json();
      }) // ...and calling .json() on the response to return data
      .catch((error: any) => Observable.throw(error.json().error || 'Server error')); //...errors if any 
  }
}
