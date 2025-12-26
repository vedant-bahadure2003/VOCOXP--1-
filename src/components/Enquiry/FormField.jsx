import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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
    errorMessage,
}) => {
    const [isFocused, setIsFocused] = useState(false);
    const isTextarea = type === 'textarea';
    const hasValue = value && value.length > 0;

    const InputComponent = isTextarea ? 'textarea' : 'input';

    return (
        <motion.div
            className="relative"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Label - Positioned Above Input */}
            <motion.label
                className="flex items-center gap-2 text-sm font-semibold mb-2.5 text-slate-500 transition-colors duration-200"
                animate={{
                    color: isFocused ? '#3b82f6' : '#64748b',
                }}
                transition={{ duration: 0.2 }}
            >
                {Icon && (
                    <motion.span
                        className="flex items-center"
                        animate={{
                            color: isFocused ? '#3b82f6' : '#94a3b8',
                        }}
                    >
                        <Icon className="w-4 h-4" />
                    </motion.span>
                )}
                <span>{label}</span>
                {required && <span className="text-red-500 ml-0.5">*</span>}
            </motion.label>

            {/* Input Wrapper */}
            <motion.div
                className="relative bg-white/98 rounded-xl overflow-hidden transition-all duration-300"
                animate={{
                    borderColor: isFocused ? '#3b82f6' : 'rgba(30, 64, 175, 0.15)',
                    boxShadow: isFocused
                        ? '0 0 0 4px rgba(59, 130, 246, 0.1), 0 4px 20px rgba(59, 130, 246, 0.08)'
                        : '0 2px 8px rgba(0, 0, 0, 0.04)',
                }}
                style={{ border: '2px solid rgba(30, 64, 175, 0.15)' }}
                transition={{ duration: 0.25 }}
            >
                {/* Input Field */}
                <InputComponent
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    rows={isTextarea ? rows : undefined}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    className={`w-full px-4 py-4 bg-transparent border-none text-slate-800 font-sans text-base outline-none placeholder:text-slate-400 ${isTextarea ? 'min-h-[140px] resize-none leading-relaxed' : ''}`}
                />

                {/* Right Side Icon for Non-textarea */}
                {Icon && !isTextarea && (
                    <motion.div
                        className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 transition-all duration-200"
                        animate={{
                            color: isFocused ? '#3b82f6' : '#94a3b8',
                            scale: isFocused ? 1.1 : 1,
                        }}
                        transition={{ duration: 0.2 }}
                    >
                        <Icon className="w-5 h-5" />
                    </motion.div>
                )}

                {/* Animated Bottom Border */}
                <motion.div
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-blue-700 origin-left"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: isFocused ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                />
            </motion.div>

            {/* Character Counter for Textarea */}
            {isTextarea && (
                <motion.div
                    className="text-right text-xs mt-1.5 text-slate-500"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isFocused || hasValue ? 1 : 0 }}
                >
                    <span className={value.length > 500 ? 'text-red-500' : ''}>
                        {value.length}
                    </span>
                    <span className="text-slate-400"> / 500</span>
                </motion.div>
            )}

            {/* Error Message */}
            <AnimatePresence>
                {errorMessage && (
                    <motion.p
                        className="text-sm text-red-500 mt-1.5"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                    >
                        {errorMessage}
                    </motion.p>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default FormField;
