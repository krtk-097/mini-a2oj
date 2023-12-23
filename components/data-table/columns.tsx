"use client";

import { ColumnDef } from "@tanstack/react-table";

import { Badge } from "../ui/badge";

import { Question } from "../data/schema";
import { DataTableColumnHeader } from "./data-table-column-header";
import { getProblemLink } from "@/lib/utils";

export const columns: ColumnDef<Question>[] = [
  {
    accessorKey: "index",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Index" />
    ),
    cell: ({ row }) => <div className="w-[20px]">{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Question" />
    ),
    cell: ({ row }) => {
      const link = getProblemLink(row.original);
      return (
        <a href={link} target="_blank" className="hover:underline underline-offset-8">
          <span className="max-w-[500px] truncate font-medium">
            {row.getValue("name")}
          </span>
        </a>
      );
    },
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "frequency",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Frequency" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[20px] truncate font-medium text-center">
          {row.getValue("frequency")}
        </span>
      );
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rating" />
    ),
    cell: ({ row }) => {
      return (
        <span className="max-w-[20px] truncate font-medium">
          {row.getValue("rating")}
        </span>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "tags",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tags" />
    ),
    cell: ({ row }) => {
      const tags: string[] = row.getValue("tags");
      return (
        <span className="max-w-[20px] truncate font-medium">
          {tags.map((tag) => (
            <Badge key={tag} variant="outline" className="mr-1">
              {tag}
            </Badge>
          ))}
        </span>
      );
    },
    enableSorting: false,
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return (
        <div className="flex w-[20px] items-center">
          <span>{row.getValue("status")}</span>
        </div>
      );
    },
    enableSorting: false,
  },
];
