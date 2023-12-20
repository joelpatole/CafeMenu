import { FilterQuery } from "mongoose";
import { IMenu } from "./menu.types";
import menuRepo from "./menu.repo";
import { MENU_RESPONSES } from "./menu.response";

const find = (filter : FilterQuery<IMenu>) => menuRepo.find({...filter});

const findOne = (filter : FilterQuery<IMenu>)=> menuRepo.findOne({...filter});

const create = async(menu : IMenu) => {
    try{
      const existingItem = await menuRepo.findOne({
        name : menu.name,
        category : menu.category
      });
      if(existingItem){
        throw MENU_RESPONSES.MENU_ALREADY_EXIST
      }

      const result = await menuRepo.create(menu);
      return result;
    }catch(err){
      throw err
    }
}

const insertMany = async(menus : IMenu[]) => {
    try{
      const result = await menuRepo.createMany(menus);
      return result;
    }catch(err){
      throw err
    }
}

const updatePrice = async(category : any, percentage : number)=>{
    try{
      const data = await menuRepo.find(category);
      let updatedData = [];
      for(let i=0;i<data.length;i++){
        console.log(`original price ${data[i].price}`);
        data[i].price = data[i].price + ((percentage/100) * data[i].price);
        console.log(`new price ${data[i].price}`);
      }
      updatedData = data;
      const result = await menuRepo.update(category, updatedData);
      console.log(`result ${result}`);
      return result;
    }catch(err){
      throw err
    }
}

const getCategory = async (filterString : any)=>{
   try{
     const data = await menuRepo.distinct(filterString)
     return data;
   }catch(err){

   }
}

export default {
  create,
  find,
  findOne,
  insertMany,
  updatePrice,
  getCategory
}