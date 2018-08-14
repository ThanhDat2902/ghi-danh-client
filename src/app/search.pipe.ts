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
                return item.participant_id == query;
            });

            case "class":
            return value.filter(function(item){
                return item.class == query;
            });

            case "name":
            return value.filter(function(item){
                if(item.name){
                    return item.name.startsWith(query);
                }
            });

            case "noName":
            return value.filter(function(item){
                return item.name == null || item.name == "";
            }); 

            case "noBirthDate":
            return value.filter(function(item){
                return item.birth_date == null || item.birth_date == "";
            }); 

            case "noClass":
            return value.filter(function(item){
                return item.class == null || item.class == "";
            });
            case "noBedroom":
            return value.filter(function(item){
                return item.bedroom == null || item.bedroom == "";
            });
            case "noWorkgroup":
            return value.filter(function(item){
                return item.workgroup == null || item.workgroup == "";
            });

            case "unfinished":
            return value.filter(function(item){
                return item.name == null || item.name == "" || item.class == null || item.class == "" || item.bedroom == null || item.bedroom == "" item.workgroup == null || item.workgroup == "";
            });

            default:
            if(query.includes("unfinished")){
                return value.filter(function(item){
                    return item.name == null;
                }); 
            }else{
                return value.filter(function(item){
                    return JSON.stringify(item).toLowerCase().includes(query);
                });
            }
        }
    }
}
