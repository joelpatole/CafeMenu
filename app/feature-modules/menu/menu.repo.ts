import { FilterQuery, UpdateQuery } from "mongoose";
import { IMenu } from "./menu.types";
import { menuModel } from "./menu.schema";

const find = (filter: FilterQuery<IMenu>) => menuModel.find({ isDeleted: false, ...filter });

const findOne = (filter: FilterQuery<IMenu>) => menuModel.findOne({ isDeleted: false, ...filter });

const create = (menu: IMenu) => menuModel.create(menu);

const update = (filter: FilterQuery<IMenu>, data: UpdateQuery<IMenu>) =>
  menuModel.updateMany({ isDeleted: false, ...filter }, data);

const createMany = (menus: IMenu[])=>{
    return menuModel.insertMany(menus);
}

const distinct = async (filterString : string)=>{
  return await menuModel.distinct(filterString);
}

export default {
  find,
  findOne,
  create,
  update,
  createMany,
  distinct
};