import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export class GenericService<T, K>{
    constructor(protected http: HttpClient, protected url: string) { }

    save(t: T): Observable<T> {
        return this.http.post<T>(this.url, t);
    }
    findAll(): Observable<T[]> {
        return this.http.get<T[]>(this.url);
    }
    findById(id: K): Observable<T> {
        return this.http.get<T>(this.url + "/" + id);
    }
    update(id: K, t: T): Observable<T> {
        return this.http.put<T>(this.url + "/" + id, t, {});
    }
    deleteById(id: K): Observable<T> {
        return this.http.delete<T>(this.url + "/" + id);
    }
    deleteByEmail(email: string): Observable<T> {
        return this.http.delete<T>(this.url + "/" + email);
    }

}