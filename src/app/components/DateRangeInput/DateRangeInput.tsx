import React, { useState } from "react";
import { Form } from "antd";
import DatePicker from "react-datepicker";

const nextDay = (date: Date) => {
  const result = new Date(date);
  result.setDate(result.getDate() + 1);
  return result;
};

const prevDay = (date: Date) => {
  const result = new Date(date);
  result.setDate(result.getDate() - 1);
  return result;
};

const DateRangeInput = ({
  label = "Date range",
  name = "dateRange",
  maxDate = "",
  minDate = "",
}) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(
    new Date(Date.now() + 24 * 60 * 60 * 1000)
  );

  return (
    <Form.Item
      label={label}
      name={name}
      initialValue={`${startDate} - ${endDate}`}
    >
      <DatePicker
        key="startDate"
        selected={startDate}
        onChange={(date) => date && setStartDate(date)}
        startDate={startDate}
        endDate={endDate}
        selectsStart
        minDate={new Date(minDate)}
        maxDate={prevDay(endDate)}
      />
      <DatePicker
        key="endDate"
        selected={endDate}
        onChange={(date) => date && setEndDate(date)}
        startDate={startDate}
        selectsEnd
        endDate={endDate}
        minDate={nextDay(startDate)}
        maxDate={new Date(maxDate)}
      />
    </Form.Item>
  );
};

export default DateRangeInput;
