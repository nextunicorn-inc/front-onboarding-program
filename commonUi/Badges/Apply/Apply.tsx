import React from 'react';
import * as Styled from './Apply.styled';
import { Thunder } from '../../Icons';

function ApplyTag({ applyText }: { applyText: string }) {
  let applyResultText;

  if (applyText === 'SL') applyResultText = '외부 신청';
  if (applyText === 'SNL') applyResultText = '간편 신청';
  if (applyText === 'SNLP') applyResultText = '일반 신청';

  if (applyResultText === '간편 신청') {
    return (
      <Styled.TagWrapper>
        <Styled.SimpleApplyTag>
          {applyResultText}

          <Thunder />
        </Styled.SimpleApplyTag>
      </Styled.TagWrapper>
    );
  }

  return (
    <Styled.TagWrapper>
      <Styled.TagText color="#595959">{applyResultText}</Styled.TagText>
    </Styled.TagWrapper>
  );
}

export default ApplyTag;
