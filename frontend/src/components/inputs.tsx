import React from "react";
import type { PasswordInputProps, TextInputProps } from "../types/input";

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  className = "",
  style,
  required = false,
  disabled = false,
  error,
}) => {
  return (
    <div className="block">
      {label && (
        <label className="font-medium block">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        style={style}
        className={`rounded-md border mt-2 mb-3 border-gray-300 p-4 w-full block ${
          error ? "border-red-500" : ""
        } ${className}`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  name,
  value,
  onChange,
  placeholder,
  className = "",
  style,
  required = false,
  disabled = false,
  error,
  showPassword = false,
  onTogglePassword,
}) => {
  return (
    <div>
      {label && (
        <label className="font-medium">
          {label}
          {required && <span className="text-red-500 ml-1">*</span>}
        </label>
      )}
      <div className="relative">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          style={style}
          className={`rounded-md border mt-2 border-gray-300 p-4 w-full pr-12 ${
            error ? "border-red-500" : ""
          } ${className}`}
        />
        {onTogglePassword && (
          <button
            type="button"
            onClick={onTogglePassword}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};
