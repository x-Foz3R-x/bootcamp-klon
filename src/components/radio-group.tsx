"use client";

import { useState } from "react";

export default function RadioGroup(props: {
  options: { id: string; label: string }[];
  groupName: string;
  className?: string;
}) {
  const [selectedId, setSelectedId] = useState<string | null>(props.options[0]?.id ?? null);

  return (
    <div className={props.className}>
      {props.options.map((option) => (
        <Input
          key={option.id}
          id={option.id}
          groupName={props.groupName}
          label={option.label}
          isChecked={selectedId === option.id}
          onCheck={() => setSelectedId(option.id)}
        />
      ))}
    </div>
  );
}

function Input(props: {
  id: string;
  groupName: string;
  label: string;
  isChecked: boolean;
  onCheck: () => void;
}) {
  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    props.onCheck();
  };

  return (
    <button className="relative flex gap-4" onClick={onClick}>
      <span className="flex size-7 items-center justify-center rounded-full border border-black bg-white">
        {props.isChecked && <span className="size-4 rounded-full bg-[#B9FF66]"></span>}
      </span>

      <label htmlFor={props.id}>{props.label}</label>

      <input
        type="radio"
        name={props.groupName}
        id={props.id}
        className="pointer-events-none invisible absolute left-0 top-0"
        checked={props.isChecked}
        onChange={props.onCheck}
      />
    </button>
  );
}
