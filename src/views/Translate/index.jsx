import React ,{memo,useState,useEffect}from 'react';
import { useTranslation } from 'react-i18next';

function Translate() {   
    const [ t ] = useTranslation();

 

    return (
      <div>
         <h3>中文与英文互相转化,请点击右上角切换按钮切换</h3>
      <div>
        英文与中文：
        {t('hello')},
        {t('name')}
        join
      </div>
      </div>
    );
  }
  
  export default React.memo(Translate)