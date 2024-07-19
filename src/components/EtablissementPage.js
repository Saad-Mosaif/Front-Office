import React from 'react';
import FormList from './FormList';
import FormDetail from './FormDetail';

const EtablissementPage = () => {
  return (
    <div className="etablissement-container">
      <h2>Directeur d'Etablissement Page</h2>
      <FormDetail />
      <FormList />
    </div>
  );
};

export default EtablissementPage;
