import React from 'react';
import get from 'lodash.get';
import * as styled from './index.styled';

function Shelf({ match }) {
  const shelfType = get(match, 'params.shelf');
  console.log(shelfType);

  return (
    <styled.Shelf>
      <styled.Row>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
      </styled.Row>
      <styled.Row>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
      </styled.Row>
      <styled.Row>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
      </styled.Row>
      <styled.Row>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card>
          <styled.Image />
          <styled.Text>粉色连衣裙</styled.Text>
        </styled.Card>
        <styled.Card />
        <styled.Card />
      </styled.Row>
      <styled.Row>
        <styled.Card />
        <styled.Card />
        <styled.Card>欢迎</styled.Card>
        <styled.Card>礼品卡</styled.Card>
        <styled.Card>折扣</styled.Card>
      </styled.Row>
    </styled.Shelf>
  );
}

export default Shelf;
