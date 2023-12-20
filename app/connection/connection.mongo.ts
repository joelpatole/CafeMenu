import {connect} from 'mongoose';

export const connectToMongo = async()=>{
    try{
      const {MONGO_CONNECTION_STRING} = process.env;
      await connect(MONGO_CONNECTION_STRING || '');
      console.log("connection to Mongo : true");
      return true
    }catch(err){
       process.exit(1);
    }
}