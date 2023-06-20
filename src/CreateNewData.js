// @flow strict

import { Button, Col, Input, Row } from 'antd';
import * as React from 'react';

function CreateNewData({
  inputCount,
  handleChangeInputData,
  changeInputCount,
  handleSubmit
}) {


  return (
    <div className="">
      {
        inputCount.map((input, i) => (
          <Row key={i} justify="space-between" style={{ marginTop: '16px' }}>
            <Col span={4}>
              <Input
                name='product'
                onChange={(e) => handleChangeInputData(e, i)}
                placeholder="Porduct"
              />
            </Col>
            <Col span={4}>
              <Input
                name='customer'
                onChange={(e) => handleChangeInputData(e, i)}
                placeholder="customer"
              />
            </Col>
            <Col span={4}>
              <Input
                name='selling_date'
                onChange={(e) => handleChangeInputData(e, i)}
                placeholder="Selling Date"
              />
            </Col>
            <Col span={4}>
              <Input
                name='return_date'
                onChange={(e) => handleChangeInputData(e, i)}
                placeholder="Return Date"
              />
            </Col>
            <Col span={4}>
              <Input
                name='comment'
                onChange={(e) => handleChangeInputData(e, i)}
                placeholder="Comment"
              />
            </Col>
          </Row>
        ))
      }

      <div className="create-new-buttons">
        <Button onClick={changeInputCount}>
          +
        </Button>
        <Button onClick={handleSubmit} type="primary">
          Create New
        </Button>
      </div>
    </div>
  );
};

export default CreateNewData;