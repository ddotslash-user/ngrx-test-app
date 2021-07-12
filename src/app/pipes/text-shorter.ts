import { Pipe, PipeTransform } from "@angular/core";


@Pipe({
    name: 'textShorter'
})
export class TextShorter implements PipeTransform {
    transform(text: string) {
        const maxTextSize = 100;
        
        if(text.length > maxTextSize) {
            return text.slice(0, 100) + '...';
        }

        return text;
    }
}