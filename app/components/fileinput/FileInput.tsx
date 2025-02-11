"use client";

import React, { forwardRef, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { UploadCloud } from "lucide-react";

interface FileInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    multiple?: boolean;
}

const FileInput = forwardRef<HTMLInputElement, FileInputProps>(
    ({ label, multiple = false, ...props }, ref) => {
        const inputRef = useRef<HTMLInputElement>(null);
        const [files, setFiles] = useState<FileList | null>(null);

        const handleButtonClick = () => {
            inputRef.current?.click();
        };

        const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setFiles(e.target.files);
            props.onChange?.(e);
        };

        return (
            <div className="flex flex-col w-full max-w-sm gap-2">
                {label && <Label htmlFor={props.id}>{label}</Label>}

                <div
                    className="border border-white rounded-xl p-4 flex flex-col items-center gap-3 cursor-pointer hover:border-gray-500 transition"
                    onClick={handleButtonClick}
                >
                    <UploadCloud className="h-10 w-10 text-gray-500" />
                    <p className="text-sm text-gray-500">Select your images</p>
                    <Button type="button" variant="outline">
                        Analyze
                    </Button>
                </div>

                <input
                    {...props}
                    ref={(e) => {
                        if (typeof ref === "function") ref(e);
                        else if (ref) ref.current = e;
                        inputRef.current = e;
                    }}
                    type="file"
                    multiple={multiple}
                    className="hidden"
                    onChange={handleFileChange}
                />

                {files && (
                    <div className="text-sm text-gray-600 mt-2">
                        {Array.from(files).map((file, index) => (
                            <p key={index} className="truncate">
                                {file.name}
                            </p>
                        ))}
                    </div>
                )}
            </div>
        );
    }
);

FileInput.displayName = "FileInput";

export { FileInput };
