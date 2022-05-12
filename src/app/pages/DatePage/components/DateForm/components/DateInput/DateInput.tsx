import React, { useState } from "react";
import { Form } from "antd";
import DatePicker from "react-datepicker";

const DateInput = ({ name = "startDate", label = "Start Date" }) => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <Form.Item label={label} name={name} initialValue={startDate}>
      <DatePicker
        selected={startDate}
        onChange={(date: Date) => setStartDate(date)}
      />
    </Form.Item>
  );
};

export default DateInput;
