import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FormField = ({
    label,
    type = 'text',
    name,
    value,
    onChange,
    placeholder,
    required = false,
    rows = 4,
    icon: Icon,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const isTextarea = type === 'textarea';

    const InputComponent = isTextarea ? 'textarea' : 'input';

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Floating Label */}
            <label
                className={`absolute left-4 transition-all duration-300 pointer-events-none z-10
          ${(isFocused || value)
                        ? 'top-2 text-xs text-blue-600'
                        : 'top-4 text-slate-500'
                    }`}
            >
                {label} {required && <span className="text-red-500">*</span>}
            </label>

            {/* Input Field */}
            <InputComponent
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={isFocused ? placeholder : ''}
                required={required}
                rows={isTextarea ? rows : undefined}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`input-dark w-full pt-6 pb-3 ${isTextarea ? 'min-h-[120px] resize-none' : ''}
          ${Icon ? 'pr-12' : ''}`}
            />

            {/* Icon */}
            {Icon && (
                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400">
                    <Icon className="w-5 h-5" />
                </div>
            )}

            {/* Focus Border Effect */}
            <motion.div
                className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-blue-600 to-blue-400"
                initial={{ width: 0 }}
                animate={{ width: isFocused ? '100%' : 0 }}
                transition={{ duration: 0.3 }}
            />
        </motion.div>
    );
};

export default FormField;
