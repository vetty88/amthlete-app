import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const BreadcrumbExample = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem active>Home</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem active>Library</BreadcrumbItem>
      </Breadcrumb>
      <Breadcrumb>
        <BreadcrumbItem>Home</BreadcrumbItem>
        <BreadcrumbItem>Library</BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default BreadcrumbExample;
