import React from "react";
import { Avatar, Text } from "@mantine/core";

export default function KeywordsLists({ data }) {
  return (
    <div
      style={{
        display: "flex",
        overflow: "auto",
      }}
    >
      {data?.map((item, idx) => (
        <div className="avatar-card" key={idx}>
          <Avatar size={70} radius={70} key={idx}
        mx="auto" />
          <Text ta="center" fz="sm" fw={600} mt="md">{item.keyword}</Text>
        </div>
      ))}
      <style jsx>
        {`
        .avatar-card {
            padding: 1rem;
            flex: 0 0 225px;
            align-items: center;
    display: flex;
    flex-direction: column;
        }
        `}
      </style>
    </div>
  );
}
