import React from 'react';
import StrapiService from '@/components/StrapiService/StrapiService';
import PoliticsExample from '@/components/PoliticsExample/PoliticsExample';
import Header from '@/components/Header/Header';

const regulamin = ({ regulaminData }) => {
  return (
    <>
      <Header />
      <PoliticsExample
        data={regulaminData}
        title='Regulamin | Tattoo One Love'
      />
    </>
  );
};

export const getStaticProps = async () => {
  const strapiService = new StrapiService();
  const regulaminData = await strapiService.getRegulaminData();

  return {
    props: {
      regulaminData: regulaminData.content,
    },

    revalidate: 1,
  };
};

export default regulamin;
