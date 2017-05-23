/* This is weather object model - to simplify work with data and so on */
"use strict";
var Weather = (function () {
    function Weather(temp, summary, wind, humidity, icon) {
        this.temp = temp;
        this.summary = summary;
        this.wind = wind;
        this.humidity = humidity;
        this.icon = icon;
    }
    return Weather;
}());
exports.Weather = Weather;
//# sourceMappingURL=weather.js.map