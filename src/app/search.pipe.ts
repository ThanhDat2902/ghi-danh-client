import { Pipe, PipeTransform } from '@angular/core';
import { Participant } from './classes/participant';


@Pipe({
  name: 'Search'
})
export class SearchPipe implements PipeTransform {
    transform(value: Participant[], query: any, type: any): any {

        if(!value)return null;
        if(!query){
            return value;
        }else{
            query = query.toLowerCase();
        }

        switch (type) {
        	case "id":
        		return value.filter(function(item){
	        		return item.participant_id.toString().includes(query);
	        	});
        	
        	default:
				return value.filter(function(item){
            		return JSON.stringify(item).toLowerCase().includes(query);
	        	});
        }
    }
}
