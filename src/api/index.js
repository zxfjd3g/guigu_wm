/*
ajax请求模块
 */
import fetch from './fetch'
import {getStore} from '../common/utils/storageUtil'

/**
 * 获取用户信息(根据用户ID)
 */
export const getUser = () => fetch('/v1/user', {user_id: getStore('user_id')})

/**
 * 获取msite商铺列表(根据经纬度)
 */
export const getShopList = (latitude, longitude) => {
  const data = {latitude, longitude}
  return fetch('/shopping/restaurants', data)
}

/**
 * 获取msite页面地址信息(根据经纬度串)
 */
export const msiteAdress = geohash => fetch('/v2/pois/' + geohash)

/**
 * 获取msite页面食品分类列表
 */
export const msiteFoodTypes = geohash => fetch('/v2/index_entry', {
  geohash,
  group_type: '1',
  'flags[]': 'F'
})


