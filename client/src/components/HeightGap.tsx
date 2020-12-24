import React, { FC } from 'react';

type Props = {
  gap: string;
};

const HeightGap: FC<Props> = ({ gap }) => {
  return <div style={{ height: `${gap}` }} />;
};

export default HeightGap;
