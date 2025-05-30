"use client";

import { useState, useEffect } from "react";
import { Textarea } from "@/components/ui/textarea";
import { countCharacters } from "@/lib/utils";

export function TextInput({ value, onChange, maxChars }) {
  const [charCount, setCharCount] = useState(0);
  
  useEffect(() => {
    setCharCount(countCharacters(value));
  }, [value]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const isOverLimit = maxChars && charCount > maxChars;

  return (
    <div className="space-y-2">
      <Textarea
        placeholder="请在此输入或粘贴文本内容..."
        className="h-[192px] font-mono text-sm overflow-y-auto resize-none"
        value={value}
        onChange={handleChange}
      />
      <div className="flex justify-end text-sm">
        <span className={`${isOverLimit ? "text-destructive font-medium" : "text-muted-foreground"}`}>
          {charCount} {maxChars ? `/ ${maxChars} 字符` : "字符"}
        </span>
      </div>
    </div>
  );
} 