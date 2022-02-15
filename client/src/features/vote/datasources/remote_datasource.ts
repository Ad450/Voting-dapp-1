import { ApiFailure } from "../../../core/failures";
import { voteForParty } from "../../../core/web3/web3";



export const vote = async(party:string)=>{
    try{
        await voteForParty(party);
    } catch(error){
        throw new ApiFailure(error)
    }
}