import React from 'react';
import Icon from '../common/components/Icon';
import { createBrowserHistory } from 'history';

import * as styled from './index.styled';

const history = createBrowserHistory();

function Configure() {
  return (
    <styled.Configure>
      <styled.Aside>
        {/* head */}
        <styled.Head>
          <Icon
            name="icon_left_black"
            width="0.22"
            height="0.22"
            onClick={() => {
              history.goBack();
            }}
          />
          <styled.Title>设置</styled.Title>
          <Icon name="icon_more_black" width="0.22" height="0.22" />
        </styled.Head>
        <styled.Body>
          <styled.MenuList>
            <styled.MenuItem
              style={{
                backgroundColor: '#f2f2f2'
              }}
            >
              <Icon name="icon_setting_gray" width="0.22" height="0.22" />
              <styled.Text>通用配置</styled.Text>
            </styled.MenuItem>
            <styled.MenuItem>
              <Icon name="icon_setting_gray" width="0.22" height="0.22" />
              <styled.Text>设备连接</styled.Text>
            </styled.MenuItem>
          </styled.MenuList>
        </styled.Body>
      </styled.Aside>
      <styled.Main>
        {/* head */}
        <styled.Head>
          <styled.Title>配置项</styled.Title>
        </styled.Head>
        <styled.MainBody>
          <styled.Legend>小票打印机</styled.Legend>
          <styled.RowItem>
            <styled.LabelText>添加打印机</styled.LabelText>
            <Icon name="icon_add_c_gray" width="0.22" height="0.22" />
          </styled.RowItem>
          <styled.Legend>条码扫描器</styled.Legend>
          <styled.RowItem>
            <styled.LabelText>连接状态</styled.LabelText>
            <styled.LabelValue>正常</styled.LabelValue>
          </styled.RowItem>
        </styled.MainBody>
      </styled.Main>
    </styled.Configure>
  );
}

export default Configure;
