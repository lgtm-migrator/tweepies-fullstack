import { NextPage } from 'next';

import { User } from '../../interfaces';
// import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import ListDetail from '../../components/ListDetail';
import React from 'react';

type Props = {
  item?: User;
  errors?: string;
};

const StaticPropsDetail: NextPage<Props> = ({ item, errors }) => {
  if (errors) {
    return (
      <Layout title="Error | Next.js + TypeScript Example">
        <p>
          <span style={{ color: 'red' }}>Error:</span> {errors}
        </p>
      </Layout>
    );
  }

  return (
    <Layout
      title={`${
        item ? item.name : 'User Detail'
      } | Next.js + TypeScript Example`}
    >
      {item && <ListDetail item={item} />}
    </Layout>
  );
};

export default StaticPropsDetail;
