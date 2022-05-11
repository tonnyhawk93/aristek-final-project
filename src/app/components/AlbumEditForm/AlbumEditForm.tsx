import React from "react";
import { useQuery } from "@apollo/client";
import type { ApolloError } from "@apollo/client";
import { Form, Input, Button, Select } from "antd";
import { useNavigate } from "react-router-dom";
import { Spinner, ErrorMessage } from "..";
import { operations, Types } from "./duck";

const { Option } = Select;

interface HandleSubmitArgs {
  title: string;
  userId: string;
}

interface AlbumEditFormProps {
  initialValues?: {
    title: string;
    userId: string;
  };
  handleSubmit: (args: HandleSubmitArgs) => void;
  handleCancel: () => void;
  loading: boolean;
  called: boolean;
  error?: ApolloError;
}

const AlbumEditForm: React.FC<AlbumEditFormProps> = ({
  initialValues,
  handleSubmit,
  handleCancel,
  called,
  loading,
  error,
}) => {
  const navigate = useNavigate();
  const { data: usersData, loading: getUsersLoading } = useQuery<
    Types.GetUsersQuery,
    Types.GetUsersQueryVariables
  >(operations.getUsers);

  if (getUsersLoading || !usersData) {
    return <Spinner />;
  }

  if (called && !loading && !error) {
    navigate("/albums");
  }

  if (called && !loading && error) {
    return <ErrorMessage />;
  }

  if (usersData?.users?.data) {
    const options = usersData.users.data.map((user) => (
      <Option value={user?.id} key={user?.id}>
        {user?.username}
      </Option>
    ));

    return (
      <Form
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={handleSubmit}
        autoComplete="off"
        initialValues={initialValues}
        style={{ minWidth: "370px" }}
      >
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
              message: "Please input title!",
              validateTrigger: "onSubmit",
            },
            {
              min: 3,
              max: 64,
              message: "Length must be between 3 and 64",
              validateTrigger: "onSubmit",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="User"
          name="userId"
          rules={[
            {
              required: true,
              message: "Please select user!",
              validateTrigger: "onSubmit",
            },
          ]}
        >
          <Select placeholder="Select a option and change input text above">
            {options}
          </Select>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            disabled={loading}
            style={{ marginRight: "8px" }}
          >
            Submit
          </Button>
          <Button htmlType="button" disabled={loading} onClick={handleCancel}>
            Cancel
          </Button>
        </Form.Item>
      </Form>
    );
  }

  return <ErrorMessage />;
};

export default AlbumEditForm;
