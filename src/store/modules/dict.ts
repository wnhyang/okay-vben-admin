import { defineStore } from 'pinia';

import { store } from '@/store';

import { DICT_KEY } from '@/enums/cacheEnum';
import type { DictDataVO } from '@/api/system/dictData';
import { simpleListDictData } from '@/api/system/dictData';
import { createLocalStorage } from '/@/utils/cache';

const ls = createLocalStorage();

interface DictState {
  dictMap: Map<string, any>;
  isSetDict: boolean;
}

export const useDictStore = defineStore({
  id: 'app-dict',
  state: (): DictState => ({
    dictMap: new Map<string, any>(),
    isSetDict: false,
  }),
  getters: {
    getDictMap(state): Recordable {
      const dictMap = ls.get(DICT_KEY);
      if (dictMap) state.dictMap = dictMap;

      return state.dictMap;
    },
    getIsSetDict(state): boolean {
      return state.isSetDict;
    },
  },
  actions: {
    async setDictMap() {
      const dictMap = ls.get(DICT_KEY);
      if (dictMap) {
        this.dictMap = dictMap;
        this.isSetDict = true;
      } else {
        const res = await simpleListDictData();
        // 设置数据
        const dictDataMap = new Map<string, any>();
        res.forEach((dictData: DictDataVO) => {
          // 获得 dictType 层级
          const enumValueObj = dictDataMap[dictData.dictType];
          if (!enumValueObj) dictDataMap[dictData.dictType] = [];

          // 处理 dictValue 层级
          dictDataMap[dictData.dictType].push({
            value: dictData.value,
            label: dictData.label,
            color: dictData.color,
            id: dictData.id,
          });
        });
        this.dictMap = dictDataMap;
        this.isSetDict = true;
        ls.set(DICT_KEY, dictDataMap, 60); // 60 秒 过期
      }
    },
  },
});

// Need to be used outside the setup
export function useDictStoreWithOut() {
  return useDictStore(store);
}
