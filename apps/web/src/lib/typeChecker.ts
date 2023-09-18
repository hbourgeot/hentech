export const typeChecker=(tipo:string,data:any, func:Function)=>{
    if(data && typeof data == tipo ){
        return func(data)
    }
    
}