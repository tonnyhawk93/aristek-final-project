/* eslint-disable no-alert */

import React from "react";
import { Form, Button } from "antd";
import { DateInput, DateRangeInput } from "..";

const DateForm = () => {
  return (
    <Form
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      onFinish={(data) => alert(JSON.stringify(data))}
      autoComplete="off"
    >
      <DateInput />
      <DateRangeInput />
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default DateForm;
