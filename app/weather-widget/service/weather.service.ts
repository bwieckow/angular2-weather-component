import {Injectable} from '@angular/core';
import {Jsonp, Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {FORECAST_KEY, FORECAST_ROOT, GOOGLE_KEY, GOOGLE_ROOT} from '../constants/constants';

@Injectable()   //Always write this even you don't gonna use this
export class WeatherService {

    constructor(private jsonp: Jsonp, private http: Http) {

    }

    getCurrentLocation(): Observable<any> {
        if (navigator.geolocation) {
            return Observable.create(observer => {
                navigator.geolocation.getCurrentPosition(pos => {
                    observer.next(pos); // next piece of data I wanna make observable whatever we put in brackets
                }),
                    err => {
                        return Observable.throw(err);
                    }
            });
        } else {
            return Observable.throw("Geolocation is not available.");
        }
    }

    // Observables are useful when we want to stream data (many queries) -- (enables to)provides data, subscriber watch/observe if there is new data
    // Promises are useful when we have one query

    getCurrentWeather(lat: number, long: number): Observable<any> {
        const url = FORECAST_ROOT + FORECAST_KEY + "/" + lat + "," + long;
        const queryParams = "?callback=JSONP_CALLBACK";

        return this.jsonp.get(url + queryParams)
            .map(data => data.json())   // map() takes the response data from the call and then transform in some way and provide it via Observable -- this how we get the response type of Observable
            .catch(err => {
                console.error("Unable to get weather data - ", err);
                return Observable.throw(err.json());
            });
    }

    getLocationName(lat: number, long: number): Observable<any> {
        const url = GOOGLE_ROOT;
        const queryParams = "?latlng=" + lat + "," + long + "&key=" + GOOGLE_KEY;

        return this.http.get(url + queryParams)  // We can use http.get because cross origin resource sharing (CORS) - depends on API if it has enabled possibility to get data via http
            .map(loc => loc.json())
            .catch(err => {
                console.error("Unable to get location", err);
                return Observable.throw(err);
            });
    }
}