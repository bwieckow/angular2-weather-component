import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'speedUnit'
})

export class SpeedUnitPipe implements PipeTransform{
    transform(speed: number, unitType: string){
        switch(unitType) {
            case "mph":
                const miles = Number(speed * 1.6).toFixed(1);
                return miles + "mph";
            default:
                return Number(speed).toFixed(1) + "kph";
        }
    }
}