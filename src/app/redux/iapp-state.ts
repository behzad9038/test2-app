export interface IAppState {
    Counter: number;
    Message:{
        NewMessages:number;
    }
}
export const INIT_STATE:IAppState = {
    Counter:0, Message:{ NewMessages:5}
}