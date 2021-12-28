import { Button, Tooltip } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';
import React, { memo } from 'react';

const I18n = () => {
  const [ _, i18n ] = useTranslation();

  // 语言切换
  const toggleLanguages = () => {
    const _locale = i18n.language === 'zh-CN' ? 'en-US' : 'zh-CN';
    i18n.changeLanguage(_locale);
  };

  return (
    <Tooltip title={`${i18n.language === 'zh-CN' ? 'Switch to English' : '切换成中文'}`}>
      <Button
        type="text"
        icon={<TranslationOutlined
          style={{ fontSize: 20,color: 'white'}}
          onClick={toggleLanguages} />
        } />
    </Tooltip>
  );
};

export default memo(I18n);