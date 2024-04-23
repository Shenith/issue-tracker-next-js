import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";
import React from "react";

interface IssueStatusBadgeProps {
  status: Status;
}

const StatusMap: Record<
  Status,
  { title: string; color: "green" | "yellow" | "red" }
> = {
  OPEN: { title: "Open", color: "green" },
  IN_PROGRESS: { title: "In progress", color: "yellow" },
  CLOSED: { title: "Closed", color: "red" },
};

const IssueStatusBadge = ({ status }: IssueStatusBadgeProps) => {
  return (
    <Badge color={StatusMap[status].color}>{StatusMap[status].title}</Badge>
  );
};

export default IssueStatusBadge;
